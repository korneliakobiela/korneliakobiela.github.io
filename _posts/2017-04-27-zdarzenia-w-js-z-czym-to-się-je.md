---
layout: post
title: "Zdarzenia w JS, z czym to się je?"
categories: javascript programowanie
date: 2017-04-26 10:01:27 +0100
---

Cześć!

Trochę nie pisałam, ale nadszedł ten czas żeby zrobić coś produktywnego. Tak, do tego typu rzeczy można zaliczyć pisanie blogpostów. Czy jesteście za tym, żeby od czasu do czasu przeczytać o jakiejś konkretnej części JS-a? Nie konkretna biblioteka, technologia, tylko właśnie kawałek samego języka. Może tym sposobem pojawi się więcej świadomości w młodych developerach i więcej dobrego kontentu w internetach. (Jakby zdjęć z kotami było wam za mało).

## Z czym się je zdarzenia w JS?

Na pewno nie z tuńczykiem, chociaż kot potrafi zjeść wiele rzeczy z tuńczykiem. Ale od początku, żeby nie było niedomówień. Po dokładnym przeczytaniu tego postu powinieneś już nie tworzyć potworków pokroju:

```html
<!-- Za to powinni zabierać licencję do pisania frontendu -->
<button onclick="Kliknij();">
  Kliknij tutaj
</button>
```

Bo wiesz, ani to ładne, ani poprawne, ani tym bardziej zgodne ze standardami. I nieprawda, że tak jest łatwiej. Tak po prostu nie wiesz, co robisz i się cieszysz, póki działa. Ale spokojnie, każdy kiedyś błądził, a kot-zrodlowy uczy, bawi i wykorzenia złe nawyki. Co do samych zdarzeń, być może wiesz o nich niewiele, albo prawie nic, a możesz całkiem sporo - wydaje mi się, że jeśli znajdziesz tutaj chociaż jedną nowinkę, to już odniosłam koci sukces dydaktyczny.

### Co to są zdarzenia ?

Wyobraź sobie, że wchodzisz na jakąś stronę w sieci. Twoja przeglądarka __ładuje__ stronę z zasobów sieci.  Zastanawiasz się, czy pojawił się już nowy artykuł i __przewijasz__ delikatnie poniżej pięknego bannera.  Znajdujesz treść, która cię interesuje i __klikasz__ przycisk ''czytaj więcej". Artykuł przeczytany, postanawiasz napisać komentarz.  Klikaasz na okienku do wpisywania komentarza, a w momencie, gdy __wciskasz klawisze__, widzisz, jak skrypt liczy długość twojego komentarza. Na końcu **zatwierdzasz** komentarz poprzez naciśnięcie przycisku.

Znasz ten scenariusz? Założę się o szklankę mleczka, że na pewno nie są ci obce te czynności. W końcu nie urodziłeś się wczoraj i nawet nie jesteś nowy w Internetach. Ba, ty chcesz te Internety tworzyć i sprawiać, aby stawaly się lepszym miejscem. Innymi słowy, wszystkie czynności, za pomocą których wchodzisz w interakcję ze stroną, to zdarzenia.

### Jak reagować na zdarzenia?

Być może zauważyłeś, że spora część skryptów na stronie www, to właśnie reagowanie na zdarzenia. Na tym polega interaktywność strony www, że twoja strona reaguje na poczynania użytkownika. Tylko jak to zrobić poprawnie?  Musimy nasłuchiwać, czy takie zdarzenie zostało wykonane. Do czego to porównać? Z pewnością każdy z was gotował wodę na herbatę. I to obojętnie, czy w czajniku z gwizdkiem, czy też w elektrycznym. Wiadomo, woda potrzebuje się zagotować. Co robimy? Słuchamy czajnika i kiedy już zagotuje wodę (oznajmiając to np. dźwiękiem gwizdka), możemy zalać naszą ulubioną herbatę. Podobne mechanizmy zostały użyte w naszym języku programowania, zwane inaczej *eventListenerami*. W kodzie wygląda to tak:

``` javascript
eTarget.addEventListener('eventName',callback);
```

To jest takie minimum, które musisz zapewnić, żeby funkcja w ogóle działała. Po kolei ci wyjaśnię, o co w tym chodzi.

* eTarget - referencja do elementu, który ma nasłuchiwać zdarzenia
* eventName - nazwa zdarzenia, które chcesz obsłużyć, przekazana jako string. A jest w czym wybierać [Link do listy eventów](https://developer.mozilla.org/pl/docs/Web/Events)
* callback - funkcja, która ma się wykonać, gdy event zaistnieje.

Pamiętaj, że zdarzenia w JS są obsługiwane asynchronicznie, więc do drugiego parametru musisz przekazać funkcję (np. samą jej nazwę), a nie wynik jej działąnia.

### Ta przerażająca asynchroniczność

Nie taki kod straszny, jak go opisują. Ale jeśli nie do końca rozumiesz, o co  chodzi, to poniższy paragraf powinien ci to przybliżyć.  Aplikacja w JS jest niesamowicie zapracowana. Gdyby miała robić wszystko po kolei, to nie mogłoby działać poprawnie. Wyobraź sobie taką sytuację: jesteś bardzo zajęty, dzwonisz do kolegi, żeby uzyskać jakąś informację. On w tej chwili nie może ci jej udzielić, ale obiecuje zadzwonić, kiedy będzie wiedział. Przecież głupotą byłoby czekać nad telefonem, aż oddzwoni. Wracasz po prostu do innych swoich zajęć, a jak ten ktoś zadzwoni, to i tak będziesz wiedział.  Podobnie robi JS z event listenerami. Uruchamia je, a potem robi tysiąc innych rzeczy. Dlatego jeżeli chcemy wykonać coś asynchronicznie (np. obsłużyć zdarzenie przycisku), to musimy pamiętać o kilku zasadach.

* Wszystko, co chcesz, aby działo się po wyzwoleniu zdarzenia musi być zamknięte w funkcji callback,
* Kod wykonuje się w innej kolejności, niż był napisany

Oczywiście jest to temat, który można drążyć i drążyć, prawdopodobnie napiszę o tym kiedyś wpis, a tymczasem idziemy dalej.

## Zdarzenia na wyższym poziomie wtajemniczenia

Okej. Wspólnie przebrnęliśmy przez podstawy. Brawo! Teraz czas na trochę mięska i ciekawszych rzeczy. Bo tu często pojawiają się problemy, które są często omawiane na forach i grupach dyskusyjnych.  Przejdźmy do rzeczy. Mamy sobie taki przykład:

```javascript
const button = document.querySelector('button');
button.addEventListener('click',(e)=> {
  //Tu robię coś
})
```



### Jak zrobić, żeby formularz się nie przeładowywał przy zatwierdzaniu?

Powyższy kod jest dość prosty. Pobieramy element button z dokumentu HTML.  Dodajemy listener na zdarzenie 'click'. Drugi argument to funkcja anonimowa, która z kolei ma parametr e, co jest skrótem od event. Jest to specjalny obiekt, który pozwala nam manipulować zdarzeniem ([link do dokumentacji Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)).  Aby zapobiegać przeładowaniu strony przy niektórych akcjach warto zapoznać się z metodą `e.preventDefault()`. Co ona robi? Po prostu zapobiega standardowemu działaniu w odpowiedzi na zdarzenie. I tak to rozwiązuje ten konkretny problem

### Jak się odnieść do elementu, który posiada dany event listener?

Masz taką sytuację, że chcesz wiedzieć, jaki element był kliknięty.  Do tego użyjesz dwóch własności obiektu event:

* target - element, na którym kliknąłeś
* currentTarget - element, do którego rzeczywiście został przytwierdzony listener.

Ale dlaczego dwa? Już spieszę z wyjaśnieniem. W JS występuje coś takiego jak bąbelkowanie i przechwytywanie zdarzeń. Prawda, że nazwy są przesłodkie?

Oba te procesy nazywamy propagacją zdarzeń. To jest szalenie proste. Elementy html możemy wyobrazić sobie jako kolejne następujące po sobie warstwy. Kiedy klikasz jakiś element, to w jego zakresie (wyskości i szerokości) klikasz jego kolejnych rodziców aż do body. Trochę jak unoszące się bąbelki w szampanie.

W drugą stronę działa to podobnie. Jeśli klkasz na button, to tak naprawdę klikasz na być może jakiś paragraf w nim, potem tekst. To jest właśnie przechwytywanie.

### Jak przypiąć to samo zdarzenie do wielu elementów jednocześnie?

Kolejne zadanie, Masz trzy przyciski, a ten, który został właśnie kliknięty,ma zmienić kolor na zielony? Jak to zrobić? Po prostu przypinasz event Listener do rodzica tych elementów, o które ci chodzi. Potem sprawdzasz czy:

```javascript
e.target != e.currentTarget
```

i zasadniczo możesz się zająć resztą logiki aplikacji. Polecam zajrzenie do dokumentacji w razie wątpliwości. Tam jest jeszcze kilka ciekawych właściwości.

## Podsumowanie

Mam nadzieję, że chociaż trochę przybliżyłam ci tematykę zdarzeń w JS. Zachęcam do sięgania po inne źródła ([szczególnie MDN](https://developer.mozilla.org/en-US/)) i zgłębiania tajników JS-a. To jest piękny język, tylko nie zawsze da się go tak łatwo poznać. Daj znać w komentarzu tutaj lub na [moim Facebooku](https://www.facebook.com/kotzrodlowy/), co myślisz o takiej formie wpisów.  Zachęcam też do obserwowania mojego [konta na GitHubie](https://github.com/korneliakobiela), bo  być może znajdziesz tam coś ciekawego.  Baw się dobrze, bądż grzeczny!

Miau!
