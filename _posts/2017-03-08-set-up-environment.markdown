---
layout: post
title:  "Tworzymy środowisko pracy."
date:   2017-03-09 0:21:27 +0100
categories: dajsiepoznac2017 javascript
---
Dobrze, czas w końcu zakasać rękawy i zrobić coś w kierunku projektu, oprócz prostego udawania, że ma się o czymś pojęcie. Bo skoro jeszcze tryb Króla Juliana mi nie przeszedł, to musi być znak. (Dla niewtajemniczonych, tryb Króla Juliana objawia się robieniem rzeczy ze słowami: Prędko, zanim dotrze do nas, że to bez sensu). Żeby nie było jednak za kolorowo, dzisiaj jeszcze nie będzie kodu, ale wszystko, co trzeba zrobić, żeby pisało się lepiej i bardziej profesjonalnie.

Nad edytorem nie będę się długo rozwodzić. Dla mnie ważne, żeby miał podświetlanie składni, jakieś proste uzupełnianie, konsolę i prosty wbudowany serwer. Całą resztę gadżetów sobie zrobię z konsoli. Jako miłośnik open-source, staram się znajdować tego typu oprogramowanie do pracy. Po przetestowaniu kilku możliwości postawiłam na Atom z kilkoma wtyczkami usprawniającymi pracę. Przez jakiś czas używałam WebStorma, ale mimo wygody, próbował wpieprzać siœ w zbyt wiele rzeczy.

Przechodząc do rzeczy, edytor to tylko kropla w możu potrzeb. Nie bez powodu miałam na studiach taki przedmiot jak "Narzędnia Programistyczne", gdzie przez cały semestr próbowali nam włożyć do głowy jak między innymi pisać testy jednostkowe, czy korzystać z Dev-Toolsów w przeglądarce. Ale żeby nie uprzedzać faktów - zaczynamy.
## Mam edytor i przeglądarkę, what else?
No właśnie, po co to wszystko, skoro naszym zadaniem jest pisanie kodu. Po prostu, pewne rzeczy robimy, by nasze życie jako programistów, stało się lepsze. Tylko żeby tak było, trzeba odrobiny starań i nauki nowych nawyków. Więc potrzeba trochę nowych narzędzi, by życie było piękniejsze.

Znasz może NodeJS? To jest środowisko uruchomieniowe dla JavaScriptu, pozwalające nam na przykład napisanie serwera www właśnie w tym języku. Okazuje się, że ma o wiele większe możliwości. Może być - wspólnie z npm - fajnym środowiskiem developerskim dla projektów w JS. Znajdziemy tam narzędzia do badania zgodności kodu ze standardami, testów jednostkowych, budowania projektu i kilku innych rzeczy. Jak zainstalować Node? Myślę, że odpowiedź znajdziesz na [stronie projektu](https://nodejs.org). Teraz już wiesz, dlaczego konsola w edytorze wydaje mi się rzeczą niezbędną. Poza tym nie wyobrażam sobie projektu bez kontroli wersji, w moim wypadku kochanego Gita i GitHub. Dzięki temu drugiemu w ogóle możesz czytać tego bloga, wszak GitHub Pages to najlepsze miejsce do hostowania stron opartych na Jekyllu. Mam i ja.

## Zaczynamy, czyli init.
Tworzymy sobie katalog na nasz cudowny projekt. Już widzisz oczami wyobraźni, moment w którym zmienisz świat i twoja wspaniała aplikacja, strona, czy gra podbija serca ludzkości, a twoja twarz zagości na okładce jakiegoś magazynu, jako człowieka roku. A teraz schodzimy na ziemię, bo nasz folder jest nadal pusty. Co robisz ty? Być może to samo, co ja. Ale gdy pierwszą czynność, którą wykonujesz, jest stworzenie pliku index.html i pisanie - z pewnością dowiesz się czegoś nowego.

Wiesz co robię ja?
```
git init
git remote add origin adres_do_githuba
```
Zaczynamy od kontroli wersji. Jest niezwykle ważne z programistycznego punktu widzenia. Sam git jest projektem open-source, a jeśli chcesz wiedzieć więcej, to zapraszam do [dokumentacji](https://git-scm.com/book/en/v2).

 Potem robię sobie strukturę katalogów, zazwyczaj dość prostą. Dla mnie ważne, żeby osobno były css, pliki js, testy, konfiguracja. Ogólnie chociaż w projekcie musi być jakiś porządek. Dodaję jeszcze plik o lakonicznej nazwie '.gitignore'. Chcesz wieszieć, po co? Chociażby IDE nam tworzy katalogi, których niekoniecznie chcielibyśmy na serwerze. Otwierasz ten plik i możesz wpisywać nazwy plików, które git ma ignorować. Teraz możemy skorzystać z magii npm. Zainicjujemy sobie projekt, a konsola zada nam kilka pytań. Spokojnie, będą proste i na część będzie już gotowa odpowiedź. Co do reszty, to warto na nie odpowiedzieć.
```
npm init
npm install
```
Pojawił nam się nowy katalog "node_modules". Tutaj są wszystkie zależności naszego projektu. Widać, że można go wygenerować, w takim razie warto go dodać do .gitignore.
## Instalacja zależności
Wiele narzędzi developerskich udostępnianych jest jako paczki npm. Pełne repozytorium można przeszukać na stronie npm. Jeżeli chcesz zainstalować narzędzie do rozwijania oprogramowania, robisz to tak:
```
npm install nazwa-pakietu -save-dev
```
U mnie te pakiety to:
* eslint - do dbania o jakość kodu
* browserify - do buildowania projektu - łączenia modułów w jeden
* chai / mocha  - testy jednostkowe
* jsdoc - dokumentacja kodu

To takie minimum. Zawsze można to rozbudowywać zależnie od potrzeb. I u mnie zależnie od projektu wygląda to różnie, ale wyżej opisane są prawie zawsze. Gdy zajrzysz do katalogu "node_modules", zobaczysz tam mnóstwo podfolderów. Tam są zależności, które mają też swoje zależności, dlatego jest tego taka masa. Możesz też zajrzeć do pliku package.json. Tam jest cała konfiguracja projektu.
## Automatyzacja pracy
Każdy kot, a tym bardziej Kot Programista, jest zwierzęciem z natury leniwym. Przecież dla takich ludzi wymyślono komputery. One część pracy mają wykonywać za nas. Słowo klucz: automatyzacja. Napiszemy teraz kilka skryptów, żeby można było szybciej wykonywać czynności niekoniecznie ciekawe i twórcze. Otwórz plik package.json i na pewno masz tam sekcję scripts. Tam właśnie się je dopisuje. Oto lista najczęściej przeze mnie wypisywanych skryptów.
```
"test": "mocha --reporter=nyan",
"lint": "eslint */**.js",
"build": "browserify js/index.js -o js/bundle.js"
```
Wydają się w miarę zrozumiałe, ale pewnie zastanawia cię ten pierwszy. Cóż to za dziwny parametr? Otóż wszystko ma więcej sensu jeśli są tam koty. Czemu testy miałyby być wyjątkiem od tej reguły. Wynik tych testów wygląda następująco:
```
17  -_-_-_-_-_-_-_-_-__,------,
 0   -_-_-_-_-_-_-_-_-__|  /\_/\
 0   -_-_-_-_-_-_-_-_-_~|_( ^ .^)
     -_-_-_-_-_-_-_-_-_ ""  ""
 
  17 passing (48ms)
```
Czy to nie jest urocze?

Jeśli chodzi o start to tyle. Nie było trudno, ani ciężko. Widzę tylko, że npm init mogłoby mieć w sobie taki jeden feature. Chciałabym móc skonfigurować sobie pattern, gdzie miałabym wpisane już zależności, skrypty, te rzeczy, z których korzystam najczęściej. No bo jeśli korzystam z eslinta, to robię to zawsze.
