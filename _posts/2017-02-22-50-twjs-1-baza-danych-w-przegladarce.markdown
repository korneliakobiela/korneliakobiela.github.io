---
layout: post
title:  "# 50 twarzy JS: 1. Baza danych w przeglądarce."
date:   2017-02-22 16:21:27 +0100
categories: javascript 
---


Dzisiaj wreszcie będzie "poważny" kontent - to, co tygryski lubią najbardziej. Dzisiaj będziemy się bawić przeglądarką, ale w nieco innym ujęciu. Przybliżę ciekawy sposób na przechowywanie danych w przeglądarce. Oczywiście, każdy choć odrobinę zaznajomiony z webem kojarzy local storage i cookies. Ja dzisiaj nie o tym, z resztą materiałów na ten temat w sieci, że mój jeden nic nowego nie wniósłby. Poza tym, to jest nudne (ziew).

Jednak przeglądarki oferują nam sporo więcej, bo bazę danych. Nie wierzysz? No to odpal Chromium i DevTools. Co ciekawe niejedną, a dwie różne - do wyboru, do koloru. Wielbiciele poleceń "SELECT", "CREATE", czy "DELETE" z pewnością już słyszeli o WebSQL. Alternatywą do niego jest, szczególnie dla fanów NoSQL (łapki w górę), IndexedDB - obiektowa baza danych, również w przeglądarce. Nie będę się na ten temat rozpisywać, znajdziecie sobie to na [MDN](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API). Nie jestem tutaj, żeby przepisywać dokumentację, więc sobie doczytacie.

Moje małe odkrycie to przeglądarkowa implementacja CouchDB (o tej też pewnie kiedyś napiszę) o słodkiej nazwie [PouchDB](https://pouchdb.com/), która opiera się właśnie o wyżej wymienione technologie. Oczywiście link do dokumentacji jest podany, jakbyście chcieli zobaczyć całe API. Ja w sumie tylko krótkko pokażę na czym to polega i jak przyjemnie działa. Skoro najłatwiej tłumaczy się na przykładach, to co powiecie na krótki i prosty przykład z kodem? Myślę, że tak będzie najlepiej. Napiszę dla was prostą aplikację TODO. A nie czekaj, to miało być TOEAT - w końcu planowanie posiłków z wyprzedzeniem to niezwykle ważna sprawa. Oczywiście w artykule pokarzę tylko najciekawsze i najważniejsze kawałki kodu i przede wszystkim API Pouch. Oczywiście pełny i działający projekt można znaleźć na [GitHubie](https://github.com/korneliakobiela/sample-pouchdb).
## Tworzymy szkielet projektu

Skoro nasz projekt jest pisany w technologiach webowych, to zaczniemy od podstaw - czyli szkieletu HTML. Czego potrzebujemy?

* Formularz do dodania nowego obiektu do naszej bazy - w tym wypadku jedzenie + data. Schemat każdego dokumentu jest taki sam w naszej bazie.
* Miejsce, gdzie będziemy wyświetlać zawartość naszej bazy, z możliwością usunięcia każdej pozycji osobno.

Nie przedłużając, oto nasz formularz. Tak naprawdę żadna filozofia.

```html
    <form id="todo-form" class="todo-form">
        <label for="todo-date">Kiedy to zjesz? Data</label>
        <input type="date" name="todo-date" id="todo-date" value="">
        <label for="todo-title">Co zjesz? Nazwa dania</label>
        <input type="text" name="todo-title" id="todo-title" value="">
        <input type="button" name="add-button" value="Dodaj">
    </form>
```
Podobnie sprawa się ma z naszą listą. Postanowiłam zaimplementować pustą listę nieuporządkowaną, a kolejne pozycje z bazy będą dodawane jako elementy tej listy.
```html
    <ul id="task-list" class="task-list">
    </ul>
```
Aplikacja jest w sumie demem, więc nie używam za dużo CSS-ów i fajerwerków. Jedynie tyle, aby była w miarę czytelna w odbiorze i nie raziła za nadto mojego poczucia estetyki. Aktualnie całość wygląda następująco. Oczywiście, twoje może być dużo ładniejsze.

<!--Wstaw screen z aplikacji -->
## Zaczynamy zabawę z JS

Nawet małe kocięta wiedzą, że nie ma dobrego kodowania, bez zaplanowania. Wiecie, zdarza nam się zgubić w tym gąszczu linijek i znaczków. Kiedy to się stanie, to już same nie wiemy, o co nam chodziło. Dlatego zaczniemy od wypisania, co nasza aplikacja ma robić i czym się zajmie w tym wszystkim JS.

* Pobranie danych od z formularza po naciśnięciu przycisku i zapisanie ich w formacie JSON.
* Nadanie ID danemu JSON-owi i zapisanie go w bazie danych jako nowy dokument
* Pobranie wszystkich dokumentów z bazy danych i odpowiednie ich sformatowanie
* Wyświetlenie wyników w odpowiedniej formie
* Dodanie przycisku pozwalającego usunąć z bazy dany rekord tuż obok każdego elementu na stronie.

Uff… Sporo pracy przed nami, więc zakasać rękawy, zaparzyć kubek kawy (lub herbaty) i do roboty. Nawet przy tak małych projektach jak to demo lubię mieć kod podzielony na pliki, moduły i obiekty. Jak masz ochotę na barszcz ukraiński w kodzie. to zapraszam do zbuildowania aplikacji.

### Pobieranie danych z formularza

Na początek funkcja do wyciągania danych z naszego formularza. Tak można zrobić to szybko i sprawnie, a nawet z gracją jak baletnica na występie. Z tym, że to nie u mnie. W stosunku do moich umiejętności, to i tak jestem coraz bardziej zadowolona z własnego kodu.
```javascript
const getFormDataAsJSON = () => {
        const data = {},
            formData = new FormData(formInstance);
        for (let input of formData.entries()) {
            data[input[0]] = input[1];
        }
        return data;
    };
```
Korzystając z [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) API możemy szybko i łatwo  wyciągnąć dane do porządanego przez nas formatu. Zmienna `formInstance` trzyma referencję do naszego formularza w HTML. Na wyjściu dostajemy obiekt JS-owy, który może nam posłużyć do wpisania do bazy danych. To naprawdę już.

## Przechodzimy do bazy danych.

Obsługa bazy danych jest niesamowicie prosta i intuicyjna. Zacząć można niemal natychmiast. Ja z wygody korzystam z NodeJS i npm, więc bazę instaluję jako dependency. Ale spokojnie, na stronie projektu jest plik do pobrania i można go dołączyć do pliku HTML.
``` javascript
const PouchDB = require("pouchdb"),
	CONFIG = {localName: "toeats"},
	toEatBase = new PouchDB(CONFIG.localName);
```
Pierwsza linijka dodaje nam moduł pouchdb, druga to prosty config. Na razie zawiera tylko jedną linijkę, bo tworzymy sobie bazę lokalną w przeglądarce. Ale nasze maleństwo ma sporo większe możliwości, a ja wszystkie stałe informacje wolę mieć w jednym miejscu i to najczęściej w jakimś jednym obiekcie - wiadomo wtedy gdzie tego szukać. Trzecia linijka tworzy nam już bazę danych i odtąd możemy z niej korzystać.
### Generowanie czytelnych ID
Filozofia CouchDB opiera się na dokumentach w formacie JSON. Nie ma ustalonego porządku, ani struktury dokumentów - tak naprawdę każdy może być zupełnie inny i zupełnie różnie się układać. Jednak każdy dokument musi mieć unikalne ID. PouchDB nie pozwoli nam zapisać dwóch dokumentów z takim samym, a także będziemy mieli błąd przy próbie nadpisania w tak nieostrożny sposób naszego rekordu. Silnik za to pozwala nam ustalić własne id. To jest fajne, bo wtedy łatwiej jest się nam odwołać do konkretnego dokumentu, jeśli mamy czytelne id. Mój sposób generowania ID wygląda następująco:
```js
    function generateId(title) {
        title = title.toLowerCase();
        for (let i = 0; i < title.length; i++) {
            title = title.replace(/[\s\W\d]/, "");
        }
        return title;
    }
```
Pozbawiam nazwy produktów znaków białych, polskich diakrytycznych i symboli specjalnych. Tak przygotowany ciąg znaków będzie widniał w naszej bazie. Proste, czytelne i wystarczające na potrzeby tej aplikacji.

### Działanie na pojedynczych dokumentach

No dobra baza jest, id jest, to teraz przydałyby się jakieś operacje na dokumentach. Skoro nasza baza jest pusta, to może warto coś do niej włożyć - służy do tego metoda `put`, jeśli chcemy korzystać z własnego ID lub `post` jeżeli wolimy takie, wygenerowane automatycznie. To drugie znacznie utrudnia nam późniejsze operacje na rekordach. Dlatego ja korzystam z metody `put`.
```js
	toEatBase.put(item).then((res) => {
		console.log("Item added " + res);
	}).catch((err) => {
		console.error("Cannot add item" + err);
	})
```
Oczywiście, jak każda fajna rzecz w JS, te operacje są asynchroniczne. Żeby nie wyglądały tak bardzo przerażająco, to napiasłam je używając Promise ze standardu ECMA6. `item` jest naszym obiektem, który chcemy wrzucić do bazy danych. Prawda, że proste? To teraz pewnie cię zaskoczę, ale ta sama funkcja służy do edytowania rekordów w bazie danych. Tylko jest jeden mały szkopuł. Obiekt, który wsadzamy do bazy nieco się różni od rekordu, który już się tam znajduje. Między innymi jest dodawany numer rewizji, który musi być zawarty, jeśli chcemy zaktualizować wpis. Jak więc z tego wyjść z twarzą (a przynajmniej kocią mordką) ? Musimy najpierw pobrać pojedynczy element, a później go dodać z powrotem. Kod takiego rozwiązania wygląda tak:
```js
	toEatBase.get(item._id).then((res) => {
                toEatBase.put(item).then((es) => {
                    console.log("Item updated " + res + es);
                }).catch((err) => {
                    console.log("Cannot edit item " + err);
                })
            }).catch((err) => {
                console.error("Cannot getting item" + err);
            })
```
Myślę, że tu też Ameryki nie odkrywam i kod jest w miarę jasny. Pobieramy z bazy danych dokument o danym id, żeby go po chwili wyedytować o potrzebne rzeczy i wrzucić z powrotem. Te nasze smakołyki chodzą dokładnie tak samo jak hobbity - tam i z powrotem. To chyba jest urocze.

Analogicznie rzecz biorąc możemy usunąć czekoladę z naszego planu żywieniowego. Tylko po co? No ok, nie wnikam, może po prostu ktoś nam ją zjadł. Ale jeśli chcemy ją usunąć z bazy danych robimy tak:
```js
 toEatBase.get(item.id).then((res) => {
                toEatBase.remove(res).then((res) => {
                    console.log("Item removed "+ JSON.stringify(res));
                }).catch((err) => {
                    console.error("Cannot remove this item " + err);
                });
            }).catch((err) => {
                console.error("Item not found" + err);
            });
```
Oczywiście w projekcie zostało to wszystko tak ładnie popakowane w odpowiednie funkcje, ale to co najważniejsze macie tutaj.
### Działanie na wielu dokumentach

W sumie demo pokazuje nam tylko wylistowanie elementów i osadzenie ich w przyjazny sposób w html-u. To tyle z masowych operacji. Za pobranie wszystkich dokumentów odpowiada `allDocs`.  Trzeba tylko pamiętać o jednym, ta metoda zwraca nam mnóstwo opakowania dla naszych danych. Jeżeli chcemy tylko wyjąć wszystkie wcześniej wsadzone informacje, należy się odwołać do `res.rows` zamiast do samego `res`.
```js
toEatBase.allDocs({
                include_docs: true,
                descending: true
            }).then((res) => {
                callback(res);
            }).catch((err) => {
                console.error("Cannot list items from DB " + err);
            })
```
Argumentem tej funkcji jest obiekt konfiguracji. W tym przykładzie wykorzystałam następujące opcje:

* `include_docs` - pozwala na pobranie ciała dokumentów, a nie tylko metadanych
* `descending` - sortuje nam malejąco wszystkie dokumenty

Oczywiście jest ich wiele więcej. Jednak nie po to tu jestem, żeby przepisywać dokumentację. Prawda? Miej litość nad małym kotkiem.

Uff… Przebrnęliśmy wspólnie przez ten kod, a zasadniczo najważniejsze jego fragmenty. Po więcej zapraszam do repozytorium [GitHub](https://github.com/korneliakobiela/sample-pouchdb)

## Jak z tym pracować?
Wiadomo kod kodem ( a w zasadzie kot kotem), ale nie można zapomnieć o pozostałych narzędziech. Pamiętaj, że centrum narzędzi programisty webowego zawsze będą dev-toolsy. Tam też możesz sobie podejrzeć, czy to, co wpisałeś lub próbowałeś wrzucić, rzeczywiście się tam znalazło. Poza tym jest klient oferowany przez zespół developerów samego silnika. Potrzeba ci czegoś więcej? To może  sam napiszesz.

A do czego to się może przydać tak właściwie, co? Ja lubię pisać aplikacje w Elektronie i wydaje mi się, że gdy czegoś używamy na desktopie, to oczekujemy, że nie będzie chciało non stop łączyć się z internetem. Poza tym można to wykorzystać jako ciekawy framework do łączenia się z bazą serwerową. Zastosowań jest sporo. Mam nadzieję, że chociaż trochę przybliżyłam ciekawe zastosowanie JS-a i jego niecodzienność. Podobało ci się? Możesz zajrzeć do kodu i nawet co nieco poprawić. Tylko grzecznie.
Miau!
