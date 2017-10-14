---
layout: post
title: Algorytmy - Rekurencja w JS
categories: algorytmy
date: 2017-10-14 13:00 +0100
---

Cześć! Mija już właśnie połowa października, to znaczy, że nawet tacy studenci jak ja już zapomnieli, co to wakacje. Chociaż z drugiej strony rozpoczynając rok akademicki dopiero się poczułam jak na urlopie. Teraz jednak pora na ostre wzięcie się do roboty, żeby w marcu móc dopisać sobie trzy literki przed nazwiskiem. Nie żeby to mnie jakoś bardzo kręciło, ale temat fajny (sama wybrałam), to i napisać warto. Istnieje nawet taka możliwość, że przyda się to konkretnie tobie. Na razie jednak nie chcę zdradzać więcej szczegółów, bo na wszystko przyjdzie czas. Czemu o tym piszę? Bo to wymaga ode mnie nieco większego zorganizowania, a także samodyscypliny. Z tego powodu, chcę wpaść w nawyk pisania dwóch postów tygodniowo (jeden pojawi się w okolicach środy, drugi soboty). Z czego ten sobotni będzie zawsze dotyczył algorytmów lub struktur danych.

Dlaczego akurat taki temat? Po pierwsze, bo serio go lubię. Mój mózg lubi algorytmy, rozumie je, a wiem, że wielu ludzi ma z tym problem. Po drugie, ostatnio potrzebowałam sobie szybko przypomnieć najważniejsze algorytmy i struktury danych, fajnie byłoby widzieć ich implementację w JS, a internet pod tym względem nie rozpieszcza. Poza tym, potrzebowałam wprowadzić coś nowego na bloga, żeby nie wiało tutaj nudą. 

No dobra, już wiecie, co się dzieje, dlaczego, zostaje jeszcze pytanie: jak. To już mnie trochę znacie, na pewno postaram się o zapadające w pamięć opisy, przykłady kodu i zdrową dawkę humoru. I tuńczyka, nie zapomnijcie o tuńczyku, jest bardzo zdrowy i dobrze wpływa na myślenie. Sama trzymam się jak najdalej od encykklopedycznych definicji, więc was też postaram się nimi nie męczyć. A co z tego wszystkiego wyjdzie na końcu? To tak naprawdę się okaże, bo może wyjść jedna wielka klapa. Ale i tak będziemy się razem dobrze bawić prawda?

## Co to jest rekurencja?

Zaskoczę cię! Bo to nie jest ani algorytm, ani struktura danych. Można to nazwać pewną techniką programowania. A dokładniej, jest to możliwość wywoływania funkcji przez samą siebie. Działa to tak, że tworzysz sobie funkcję (koniecznie nazwaną!!!), a potem w jej ciele już ją wywołujesz. Później musisz ją wywołać, żeby uruchomić całą lawinę. Przykłady z kodem trochę później, a na razie, żeby ci to zrobrazować, posłużę się czymś nieco innym. 

Kojarzysz takie rosyjskie laleczki, matrioszki, gdzie jedną możesz schować w środku drugiej? Doskonale! Zapewne wiesz, że w każdym takim zestawie laleczek, jest ta najmniejsza, której już nie da się otworzyć. To teraz wyobraź sobie, że ktoś daje ci taką matrioszkę i prosi, żebyś wyciągnął tę najmniejszą ze środka. Na 100% nie jesteś w stanie jednym ruchem otworzyć wszystkich na raz. Czyli jak to robisz? 

* Otwierasz największą zamkniętą laleczkę
* Wyciągasz z niej wszystkie pozostałe
* Otwierasz kolejną

I tak aż dostaniesz się do najmniejszej laleczki, której się otworzyć nie da. Gdyby na to patrzeć, jak na problem programistyczny, to można to zapisać na dwa sposoby -  iteracyjnie, czyli za pomocą pętli lub właśnie za pomocą rekurencji. 

## Czym charakteryzuje się rekurencja?

Mam nadzieję, że zrozumiałeś ogólne działanie tego rozwiązania. Teraz trochę zagłębimy się w szczegóły. Komputer sam z siebie nie umie rozwiązywać bardzo skomplikowanych problemów (od tego jest programista). Idąc dalej za tym stwierdzeniem, możemy założyć, że zadaniem programisty jest podział dużego problemu na mniejsze podproblemy, z którymi komputer sobie poradzi. W rekurencji występują dwa typy takich problemów do rozwiązania: 

*  Przypadek podstawowy, na którym zazwyczaj kończymy nasze obliczenia
* Problem wywoływany z innymi parametrami, które prowadzą do przypadku podstawowego.

Jeśli nie zdefiniujemy przypadku podstawowego, to nasz program będzie działał jak pętla nieskończona. Czasami jest to pożądane działanie, ale jednak częściej wolelibyśmy, żeby nasz program zakończył działanie.  Pamiętajcie, że każdy problem, który możemy rozwiązać za pomocą rekurencji, można rozwiązać równie dobrze w sposób iteracyjny, ale rekurencja pozwala często na bardziej eleganckie i zwięzłe rozwiązanie problemu. Jeśli chodzi o wady takiego rozwiązania, to no cóż, przepłacamy często złożonością obliczeniową (takie rozwiązanie zajmie więcej pamieci i czasu procesora).

### Przykłady

Ostatnio znowu słyszy się o twórczości Dana Browna, wydał nową książkę. Dzięki jego twórczości niemałą sławę zdobył ciąg Fibonacciego, takiego gościa, który obserwował rozmnażające się króliki i wymyślił swój ciąg. Zasada tworzenia kolejnych wyrazów tego ciągu jest prosta - każdy kolejny wyraz tego ciągu jest równy sumie dwóch poprzednich. Dwa początkowe wyrazy to: 0 i 1.

Rekurencyjny sposób zapisu:

```js
function fibo( n ) {
  if(n <= 1) {
    return n;  
   } else {
    return fibo(n - 2) + fibo(n - 1);
   }
}
```

Oczywiście tę funkcję można zapisać z powodzeniem w jednej linijce, ale chodziło mi też o jakąś czytelność kodu. Działa to w ten sposób, że bierzemy naszą liczbę, a póżniej schodzimy do liczb poziom niższych. To rozwiązanie nie jest optymalne, bo nasz algorytm za każdym razem schodzi do samego dołu i przelicza te liczby. Tym samym nie możemy sobie pozwolić na liczenie dużych liczb (zasadniczo już przy 40 wyrazie ciągu zauważymy spadek).

Iteracyjny zapis:

```js
function fibo( n ) {
  let first = 0;
  let second = 1;
  let temp;
  for(let i = 0; i <= n; i++) {
    if( i > 1 ) {
      temp = first + second;
      first = second;
      second = temp;
    } else {
      temp = i;
    }
  }
  return temp;
}
```

Tutaj natomiast postępujemy odwrotnie. Wychodzimy od wartości początkowych i później iteracyjnie je dodajemy. Każdą wartość obliczamy tylko raz, ale widać, że rozwiązanie jest znacznie dłuższe niż poprzednie. 

Dobra, porozmawialiśmy o królikach, o matematyce, a co z realnymi przykładami. Przecież będąc JS-devem nie spotykamy się na codzień z jakąś zaawansowaną matmą. Tak, wiem, zależy jeszcze kto i co robi. Jednak są takie problemy, w których można się posiłkować rekurencją i całkiem dobrze na tym wyjść. JavaScript posiada dwie funkcje, które służą do ustalania czegoś w czasie. Pierwsza `setInterval` służy do powtarzania jakiejś funkcji co pewien czas. Natomiast druga, `setTimeout` służy do opóźniania wykonania jakiejś funkcji co pewien czas. A co jeśli Ci powiem, że jeżeli będziesz rekurencyjnie wykonywał `setTimeout` to uzyskasz porównywalną funkcjonalność swojej aplikacji? To co jest lepsze lub gorsze jest materiałem na osobny wpis.

Uff, skoro dotarłeś aż tutaj, to mam nadzieję, że ci się podobało. Jeśli nie lubisz algorytmów, to może je polubisz razem z moimi wpisami. Zawsze możesz po prostu nie czytać sobotnich wpisów. Pamiętaj, że zawsze mile widziane są twoje pomysły na wpisy. Zostaw w komentarzu pod postem, albo na [FB](https://www.facebook.com/kotzrodlowy/). Tymczasem trzymaj się ciepło. Miau!

