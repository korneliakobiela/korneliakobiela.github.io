---
layout: post
title:  "Odpicuj swój kod - trochę o refaktoryzacji. Cz.1"
date:   2017-02-24 16:21:27 +0100
categories: javascript
---
Cześć! Dzisiaj będzie trochę o porządkach. Tylko bez narzekania, bo nie będę zaglądać za szafkę, czy tam jakieś pająki nie mieszkają. Pokażę w jaki sposób można posprzątać w kodzie. Może nie będzie to jeszcze idealnie i full professional, ale aktualnie nie mogę żyć, jak widzę radosne spaghetti w kodzie (swoim oczywiście). Taki kod trudniej się czyta, ale również pisze. Uwierz mi, że przekopiowywanie trzeci raz tego samego kodu jest męczące i przyprawia o uczucie bezsensu istnienia.

Mój profesor od statystyki zwykł mówić:
> Bo u was to wszystko na raz i algebra, i geometria, i analiza. Bez żadnego ładu i składu, wymieszane. To nie jest matematyka, bo w głowach studentów zostaje barszcz ukraiński. Nic tylko dodać fasoli i ziemniaka.

Myślę, że miał sporo racji, ale barszcz ukraiński widać nie tylko w głowach studentów pierwszego roku, ale również w kodach źródłowych. I w sumie nie ma w tym nic zasługującego na potępienie. Kto nigdy nie napisał kodu, żeby tylko działał, niech pierwszy rzuci kamień. Potem, gdy już osiągamy oczekiwany rezultat, to chcemy trochę poprawić nasze wypociny. Tylko w sumie strach cokolwiek ruszyć, bo wybuchnie, przestanie działać, tyle wysiłku na marne. Komu raz tak coś "wybuchło", ten nauczony doświadczeniem zostawia ten barszcz samemu sobie. Tylko to taka bomba z opóźnionym zapłonem. Jeśli za miesiąc wrócisz do tego samego kodu lub co gorsza za rok, wtedy dopiero poczujesz siłę tego wybuchu. To będzie epicko wielki ogromniasty wybuch. Nie dość, że ciężko będzie coś ruszyć, to jeszcze będziesz się zastanawiał, o co ci chodziło w tym wszystkim.

## Operacja na otwartym kodzie... (nie będzie bolało)
Nie masz co się martwić, damy radę i przy okazji sporo się dzisiaj nauczysz. I spokojnie, nie zaserwuję ci dzisiaj opisu Bitwy pod Grunwaldem, bo ona się dawno skończyła i kotki nie pamiętają. Za to znowu posłużymy się przykładem [TOEAT List](https://github.com/korneliakobiela/sample-pouchdb/releases/tag/v1.0). Jest to projekt do pobrania w takiej wersji, jaką ją zostawiłam ostatnio. W głównym repozytorium będzie zawsze najnowsza wersja. Patrzę na to i widzę, że nie wygląda idealnie. Wnikliwi czytelnicy znaleźli trochę błędów, a ja też nie do końca jestem zadowolona.

Czym właściwie jest refaktoryzacja? Jest to edycja kodu programu, zmiana struktury, bez zmiany działania. Czyli jeśli zakładamy, że program działa w jakiś sposób, tylko brzydko wygląda, to refaktoryzując kod, wpływamy na jego wygląd. U nas jednak, poprawimy przy okazji drobne błędy.

Co dokładnie chcę zrobić?
* Poprawa drobnych błędów
* Zmiana organizacji kodu

### Zaczynamy od analizy
Musimy z powrotem gruntownie przeanalizować, co robi nasz kod. Tylko, że z doświadczenia wiem, że na nic się zdaje puste w niego patrzenie. Zobaczysz jednak zaklęcia, przy których analiza kodu robi się niemal sama. Tylko jak to zrobić. Uwaga, bo to będzie rzecz najbardziej przez programistów nielubiana - dokumentacja. Jest jednak magiczny sposób na dokumentowanie kodu dla leniwców takich jak Kot. A imię jego [JSDoc](http://usejsdoc.org/).

### Ale, jak to dokumentacja?
Pozwolisz, że najpierw ci napiszę, o co w tym wszystkim chodzi. Bierzemy kawałek kodu, np. funkcję, metodę, obiekt, moduł, klasę, konstruktor i dopisujemy do tego komentarz. O taki:
```js
/**
* Treść komentarza
*/
```
Jak widzisz, wygląda prawie jak zwykły komentarz blokowy. Różnią go tylko dwie gwiazdki na początku. W treści piszemy, za co odpowiada nasz kawałek kodu i zasadniczo, co ma robić. Taki opis powinien być krótki i zwięzły, a jednocześnie możliwie dokładny. Jeżeli czujesz, że nie jesteś w stanie opisać w kilku słowach, co ta funkcja robi, to znak, że robi za dużo i przydałoby się ją podzielić. O tym będzie dalej.

Prawdziwa magia zaczyna się dopiero teraz. Poznasz kilka raguł do dokumentowania. Reguły to takie znaczniki poprzedzone znakiem `@`. Służą do bardziej formalnego opisu konkretnych elementów. Zapisujemy je w takiej notacji '@nazwatagu opis słowny' Lista podstawowych tagów.
```JSDoc
/**
 * @author - autor z imienia i nazwiska lub pseudonimu
 * @function - funkcja
 * @param - parametr funkcji w nawiasach klamrowych umieszczamy typ danych np. {string}
 * @return wartość zwracana typ danych w {}
 * @module - opis modułu
 * @class - opis klasy
 * /
```
Tych reguł jest oczywiście wiele więcej. Pełna lista na stronie [projektu](http://usejsdoc.org/). Te kilka na początek ci wystarczy, aby pomóc w analizie własnego kodu. Bo chyba już się domyśliłeś, że to pisanie ma na celu dokładniejszą analizę kodu. A przy okazji, jak się pogubisz, to łatwiej będzie znaleźć. Jeśli chcesz to możesz na tym etapie, na kartce rozrysować sobie lub rozpisać, działanie twojej aplikacji. Czyli to, co powinna na pewno robić. Jeśli nie chcesz, nie musisz.

Pokażę ci dwa przykłady. Jeden z projektu, drugi zupełnie od niego oderwany.
```js
/**
 * Add custom css style to the list item
 * @param li {Element} list item element

 */
 stylingToEatItem: (li) => {
	 li.classList.add("task-item");
 }
```
Piszę kod po angielsku, więc komentarze też takie zostawiam.  Myślę, że całość jest dość jasna.  Zakładamy sobie, że nasza metoda pobiera element li jako parametr i nadaje mu odpowiednią klasę CSS, żeby ładnie wyglądał. Chyba proste. Jeśli nie, to pisz w komentarzach. Drugi przykład będzie dotyczył dzielenia dwóch liczb. Funkcja pobierze dwie liczby i zwróci wynik ich dzielenia.
```js
/**
* @function divide Divide to numbers
* @param a {Number} devidend
* @param b {Number} divisor
* @return {Number}  quotient
*/
 divide = (a,b) => {
    return a/b
}
```
Ten przykład też jest stosunkowo prosty. Dokumentacja w naszym wydaniu jest pewnego rodzaju założeniem, co dany kawałek kodu ma robić.  Więc nawet jeśli masz pewne wątpliwości, po prostu przeczytaj następną część, która ukaże się wkrótce. Postanowiłam podzielić artykuł na dwie części, aby nie zanudzić i nie zmęczyć nadmiarem informacji. W podobny sposób są u mnie dopisane komentarze do każdego modułu. Jak pewnie zauważyłeś, część z nich już była skomentowana, ale teraz będą wszystkie.
