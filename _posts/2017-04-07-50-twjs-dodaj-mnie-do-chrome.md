---
layout: post
date:   2017-04-08 11:21:27 +0100
title: '# 50 Twarzy JS: 3.Jak napisać dodatek do przeglądarki'
categories: dajsiepoznac2017 javascript
---
Cześć! To znowu ja. I zauważyłam, że dawno nie było waszej ulubionej serii. Skąd wiem, że ulubionej? Statystyki i wasze komentarze nie kłamią, więc wy też nie próbujcie. Dzięki wszystkim, którzy dopytywali i motywowali do pisania, sama bym się chyba teraz w sobie nie zebrała. Jesteście kochani. Za oknem wiosna, to koty szyją sukienki i spódnice, na spacery chodzą, biegają. A doba nie chce być z gumy i czasu na kodowanie i pisanie jakby mniej. Ale więcej grzechów nie pamiętam i proszę o wybaczenie. Obiecuję poprawę, tylko jeszcze nie wiem kiedy. Może od jutra. Ja tu piszę i piszę, a tymczasem mam ciekawy temat do pokazania.

Kolejne brawurowe i cudowne zastosowanie JS-a przed nami. Zetknął się z nimi każdy, no bo kto nigdy nie użył Adblocka, niech pierwszy rzuci kłębkiem wełny (pozbieram i zrobię szalik na zimę). Chodzi oczywiście o dodatki lub inaczej rozszerzenia do przeglądarki. Jak to w świecie Webowym bywa, przeglądarek jest cała masa i nigdy nie jest tak, żeby do wszystkich pisać tak samo. Dlatego musiałam zebrać się w sobie i podjąć ~~męską~~ kocią decyzję, a w związku z tym wybrać jedną przeglądarkę. Padło na Google Chrome, bo to z niej najczęściej korzystam i jakoś tak jest mi najbliższa (nie chodzi o to, że jej logo wygląda jak kłębek wełny). Całkiem dobrze napisana dokumentacja też pomaga wystartować.

## Co to będzie?
Dodatki do przeglądarek są rozmaite. Jedne maleńkie, a inne to całkiem spore i rozbudowane aplikacje. Zazwyczaj jednak mają jakąś prostą i ograniczoną funkcjonalność. Ja na potrzeby tego przykładu wymyśliłam prosty generator haseł. Rejestrujemy się w całej masie serwisów, a wiadomo, że powinno się mieć osobne hasła do wszystkiego. Tak czy inaczej pomysł na prosty generator losowych haseł. Nie jest idealny, ale wiecie, to tylko próba pokazania jak wygląda robienie takiego rozszerzenia. Nasz dodatek będzie działał następująco:
* Po kliknięciu na ikonkę dodatku wyświetli się formularz
* Możliwość wpisania długości hasła
* Możliwość zaznaczenia, czy nasze hasło ma zawierać duże litery, liczby, czy znaki specjalne
* Wygenerowane hasło pokazuje się poniżej

W sumie żadna wielka filozofia, bo też nie o to tu chodzi. Widzę jednak potencjał do rozbudowy tej aplikacji w coś większego. Jak mnie natchnie, to czemu nie.
## Szykujemy środowisko pracy
Żeby w ogóle zacząć się bawić z testowaniem potrzebujemy przeglądarki. To było takie odkrywcze, jak fakt, że skarpetki nie łączą się w pary. Tą naszą przeglądarkę potrzebujemy jednak dostosować na potrzeby testowania dodatku. To nie będzie takie trudne, obiecuję. Otwieramy chrome i w pasku wpisujemy:

```url
chrome://extensions/
```
Po krótkiej chwili powinny nam się wyświetlić wszystkie zainstalowane przez nas rozszerzenia. Zaznaczamy opcje "Tryb programisty" i możemy się zabrać za tworzenie projektu. Warto nie zamykać tej karty. Przyda się jeszcze. Mówiłam, że będzie prosto.

Teraz już czas na otwarcie naszego ulubionego edytora lub IDE i rozpoczęcie przygody z kodowaniem. Tworzymy nowy projekt, a w nim kilka plików. Oto i one:
* manifest.json
* popup.html
* style.css
* main.js
* icon.png

Oczywiście każdy z plików poza pierwszym może się nazywać jak tylko chcesz. Co mi do tego, jak nazywasz własne pliki. Jeśli już przejmę władzę nad światem to może, ale teraz to jest mi obojętne. Ten pierwszy też byłby mi obojętny, ale to Chrome potrzebuje takiego, nie ja.

## Deklarujemy nasz dodatek
Wszystkie ważne informacje naszej aplikacji są tam przetrzymywane. Może być bardzo prosty, ale uwierzcie, że bywa tak ogromny, że trudno się połapać. Tutaj masz możliwość poczytać [dokumentację](https://developer.chrome.com/extensions/manifest). Tak naprawdę absolutnie niezbędne są tylko trzy linijki.
```json
"manifest_version": 2,
"name": "Pass Generator",
"version": "1.0.0",
```
Wydaje mi się, że to jest jasne. Wersja manifestu ma być 2, chyba że kiedyś dokumentacja postanowi inaczej i tu nie ma dyskusji. Potem zapisujemy nazwę, dzięki której nasz dodatek podbije świat i jego wersję. U nas jednak to będzie wyglądać odrobinę bardziej rozbudowanie. No bo przecież Chrome musi wiedzieć, co ma zrobić z naszymi plikami. Dlatego wpiszemy tzw. "browser action".
```json
"browser_action": {
        "default_icon": "resources/icon.png",
        "default_popup": "popup.html",
        "default_title": "Generuj hasło"
    }
```
Dzięki temu nasza aplikacja pokaże się z prawej strony i będzie dostępna na kliknięcie ikonki. Deklarujemy kolejno, jaka ma być ikona, zawartość pop-upu dostępna po kliknięciu i jaki tytuł ma się wyświetlać po najechaniu. Pełna zawartość jest dostępna [tutaj](https://github.com/korneliakobiela/pass-generator/blob/master/manifest.json).
## Napiszmy jakiś kod
Przy tak prostej zawartości ten wpis mógłby się skończyć w tym momencie. No bo cała magia się już wykonała i teraz potrzebujemy po prostu zakodować logikę naszej aplikacji. W pliku html kodujemy formularz i element, w którym pokażemy nasze hasło. Css jak zwykle w demach, służy po prostu do poukładania elementów, żeby jako-tako się prezentowały. Możecie je obejrzeć w [repozytorium](https://github.com/korneliakobiela/pass-generator). Odnośnie kodu js, to po kolei działamy:
* Potrzebujemy obiektu, który nam przechowa zestawy znaków.
 ```js
const chars = {
    letters: 'qwertyuiopasdfghjklzxcvbn',
    capitals: 'QWERTYUIOPASDFGHJKLZXCVBNM',
    digits: '1234567890',
    special: '`~!@#$%^&*()-_=+[{]}\\|;:\'\",<.>/?'
}
```
* Losowe wybieranie liczby całkowitej z podanego zakresu.
```js
getRandomInt: function(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
```

* Funkcję, która wygeneruje nam losowe hasło o podanej długości na podstawie zestawu znaków.
```js
generatePassword:(length, charset)=>{
            let password = '';
            for(let i =0;i<length;i++) {
                password += charset[helper.getRandomInt(0, charset.length)]
            }
            return password;
        }
```
* Funkncję, która wygeneruje nam dany zestaw znaków.
```js
generateCharSet:(hasCaps, hasDigits, hasSpecial, chars)=>{
            let set = chars.letters;
            if(hasCaps) set += chars.capitals;
            //for similar propability
            if(hasDigits) set += chars.digits + chars.digits;
            if(hasSpecial) set += chars.special;
            return set;
        }
```

Logika tego jest niezwykle prosta. Pobieramy z formularza informację, czy zestaw z danej grupy występuje. Jeśli nie jest zaznaczona żadna z opcji, to hasło będzie się składać tylko z małych liter. W innym wypadku sklejamy jednego długiego stringa z wszystkich zaznaczonych. Z tak utworzonego zestawu znaków losujemy sobie znaki do naszego hasła. Dla uproszczenia przykładu nie dodawałam funkcji sprawdzającej, czy wynikowe hasło posiada co najmniej jeden znak z każdego wymaganego zestawu.

## Testowanie i uruchamianie dodatku
W normalnej sytuacji dodatki do Chrome są dystrybuowane w pakietach i w takiej postaci możemy je sobie zainstalować. Jak zatem sobie poradzić z testowaniem, czy nasza aplikacja w ogóle się uruchamia. Włączyliśmy tryb programisty dla naszej przeglądarki. Teraz wystarczy wrócić na tą samą kartę i kliknąć "Wczytaj rozszerzenie bez pakietu" i znależć folder z naszym projektem. Jeśli wszystko pójdzie gładko, to nasz dodatek powinien się zainstalować i wyswietlić dumnie po prawej stronie (tam, gdzie wszystkie inne). Jeśli chcemy korzystać z narzędzi developerskich, to klikamy prawym przyciskiem myszy i "Zbadaj". A tam już wiecie, co z tym zrobić.

Oczywiście, jak zwykle zachęcam do przejrzenia [dokumentacji](https://developer.chrome.com/extensions/) i zabawy w utworzenie czegoś fajnego. Mam nadzieję, że pomogłam, a efekt pracy jest jak zwykle na [GitHubie](https://github.com/korneliakobiela/pass-generator). Dzięki za wasze komentarze i zaangażowanie. Nawet nie sądziłam, że tak szybko tylu z was się tym moim pisaniem zainteresuje. Trzymajcie się ciepło i nie dajcie alergii.

Miau!
