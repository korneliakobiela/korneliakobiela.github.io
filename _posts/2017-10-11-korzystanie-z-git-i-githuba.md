---
layout: post
title: 'Korzystanie z Gita i GitHuba - poradnik na start'
date: 2017-10-11 10:00 +0100
categories: programowanie
---

Cześć, Musicie mi wybaczyć moją niekonsekwencję w wypuszczaniu wpisów – ostatnio miałam sporo za dużo na głowie. Do tego stopnia, że wrześniowe przeziębienie przywitałam niemal jak wakacje (wiadomo, żeby się paskuda nie rozrosła, to warto trochę zwolnić i wyleżeć się w łóżku). Ale już wracam. Z racji tego, że aktualnie prowadzę warsztaty z podstaw JS w Bydgoszczy, mogą się w najbliższym czasie pojawić artykuły dla początkujących. Naczelna kocia zasada: jeśli coś przydało się raz, to może się przydać później wielu innym osobom. Dzisiaj będzie właśnie taki wpis z podstaw obsługi Gita i GitHuba. Bez zbędnych ceregieli zaczynamy.

## Co to jest Git?

Jest to system kontroli wersji. Ale cóż to takiego? Jeśli potrzebujesz jakiejś oficjalnej definicji, to odsyłam cię [do wpisu na Wikipedii](https://pl.wikipedia.org/wiki/System_kontroli_wersji). Jeśli jesteś zbyt leniwym kotem, to przytoczę fragment:

> System kontroli wersji (ang. version/revision control system) – oprogramowanie służące do śledzenia zmian głównie w kodzie źródłowym oraz pomocy programistom w łączeniu zmian dokonanych w plikach przez wiele osób w różnym czasie.

Jeśli o mnie chodzi, to posłużę się przykładem, żeby ci to wytłumaczyć. Pracujesz nad jakimś ciekawym projektem, a właściwie nad jakąś jedną funkcją. Od godziny siedzisz, grzebiesz w tym kodzie, żeby wreszcie zaczęło działać tak, jak powinno. W końcu się udaje! Eureka! Twój kod działa, choć gdzieś z tyłu głowy masz świadomość, że stworzyłeś potwora. Czas go trochę usprawnić, ugrzecznić i uładnić. Przepisujesz kilka linijek kodu na nowo, coś dodajesz i w ferworze walki zapominasz sobie potestować po kawałku. W końcu dumny ze swojego dzieła postanawiasz sprawdzić jak to działa i okazuje się, że w ogóle. Panika, blady strach, przecież przed chwilą działało, a teraz nie. Szok! Niedowierzanie! Pozostaje Ci smutno wciskać `Ctrl+Z`, dopóki nie zacznie działać lub nie ujrzysz z powrotem tego Frankensteina.  Czasami w panice potrafią się dziać rzeczy niestworzone i aplikacja przestaje działać ot tak. 

To jest ten moment, kiedy system kontroli wersji się przydaje, bo można w nim zapisać za każdym razem, kiedy coś 'działa'. Później, gdy jednak nie działa, ułatwia cofnięcie się do dowolnego zapisanego miejsca.  Przy okazji ułatwia pracę w grupie programistów, gdzie każdy może pracować na swojej kopii projektu, bez obawy o to, że popsuje pracę komuś innemu. 

## Jak zacząć korzystać z tego dobrodziejstwa?

Po pierwsze, musisz go zainstalować i skonfigurować. Jak? Dowiesz się tego na przykład z [artykułu GitHuba o instalacji Gita](https://help.github.com/articles/set-up-git/) Wiem, że obecnie mamy dostęp do wielu nakładek graficznych, a nawet skonfigurowania kontroli wersji z naszym IDE, ale ja wolę proste metody, takie, jakby to rzec, bardziej uniwersalne. Dlatego jeśli chodzi o Gita, to korzystam przede wszystkim z konsoli. I podstawy poleceń właśnie chcę ci pokazać w taki sposób, żeby praca z kontrolą wersji stała się prosta i przyjemna. 

Zacznijmy od podstaw. Mamy sobie folder z projektem, nad którym dopiero zaczynamy pracować. Albo nawet taki, nad którym pracujesz już jakiś czas, ale chcesz oddać pod kontrolę Gita. Mamy już też zainstalowany Git, więc otwieramy konsolę i wpisujemy

```sh
git init
```

Oczywiście konsola musi być otwarta w głównym katalogu naszego projektu. W ten sposób tworzymy repozytorium i od tej pory git na każde nasze żądanie będzie rejestrował zmiany w plikach. Z tym, że obecnie nasze repozytorium jest puste, a pliki, nawet jeśli jakieś są, to nie są przez niego kontrolowane. Możemy je dodać:

```shell
git add .
```

dla dodania całego katalogu lub

```shell
git add ścieżka_do_pliku
```

żeby dodać konkretny plik lub katalog.

Za każdym razem gdy chcesz zobaczyć, co się dzieje z twoimi plikami, możesz wpisać:

```sh
git status
```

Jeżeli chcesz zatwierdzić swoje zmiany, wpisujesz:

```sh
git commit -m 'Tutaj opis krótki opis, jakie zmiany chcesz zatwierdzić'
```

Właśnie zatwierdziłeś swoje pierwsze zmiany. Powiedz w komentarzu, jak bardzo dumny z siebie jesteś. Jeżeli chcesz podejrzeć historię swoich commitów, to użyj 

```sh
git log
```

Git oczywiście skrywa znacznie więcej dobrodziejstw, o których możesz poczytać na przykład [w oficjalnej książce dotyczącej pracy z Gitem](https://git-scm.com/book/en/v2). Jest ona dostępna za darmo, a jej pierwsza wersja jest nawet po polsku.

### Trochę o ignorowaniu

Wiesz już jak dodawać pliki i zatwierdzać zmiany w nich. Co jeśli masz w swoim projekcie pliki (np. wygenerowane przez edytor), z których zmian nie chcesz rejestrować, a mimo to nie chcesz dodawać plików pojedynczo do projektu? Na pomoc przychodzi plik `.gitignore`. Co on zawiera? Ścieżki do wszystkich plików lub folderów, które chcesz ignorować. Po prostu otwierasz sobie edytor tekstowy, wpisujesz ścieżki do plików w oddzielnych liniach. To jest pewnie oczywiste, że chodzi o ścieżki względne, gdzie punktem startowym jest główny katalog projektu, ale wolę ci przypomnieć.

## Dlaczego warto mieć GitHuba?

GitHub to jest taka strona w sieci, gdzie możesz trzymać swoje repozytoria z kodem. Co w tym takiego fascynującego? Mozesz się pochwalić kodem przed innymi, a także rozwijać projekty w grupie. Korzysta z niego na co dzień kilkadziesiąt milionów osób. Niektórzy stawiają pierwsze kroki w programowaniu, ale jest to też miejsce, gdzie są trzymane ogromne projekty open-source. Dlaczego warto mieć konto w serwisie GitHub? Oto kilka zalet:

* Jest za darmo (chyba że chcesz swoje projekty tylko dla siebie, ale inaczej jest za darmo)
* Gdyby posiadał jakiś komunikator, to byłby fejsbukiem dla programistów.
* Można na nim obserwować inspirujące osoby ze świata programowania (np. mnie – [moje konto na GH](https://github.com/korneliakobiela))
* Można zbierać gwiazdki i rozdawać gwiazdki (trochę jak lajki)
* Można budować swoje portfolio, poprzez wrzucanie całego kodu, jaki wypluje nasza klawiatura
* Można brać udział w budowaniu projektów open sourcowych
* Można się uczyć, poprzez czytanie projektów innych osób
* Można hostować stronę www, a nawet bloga ([pisałam o tym](http://kot-zrodlowy.pl/programowanie/2017/06/14/github-pages-wady-i-zalety.html))
* Można dostać pracę, jeśli nasz profil się spodoba przyszłemu pracodawcy

Można wymieniać jeszcze długo i nawet dłużej. Ale jak właściwie dodać kod do swojego konta i udostępnić go wszystkim?

## Jak opublikować projekt na GitHubie?

Na to też jest wiele sposobów. Ale skoro już tyle mówiłam o Gicie, to pobawimy się za jego pomocą. Bo chyba nikt nie myślał, że nazwy 'Git' i 'GitHub' są podobne całkowicie przypadkowo. Najpierw potrzebujemy nasz projekt lokalnie już pod kontrolą wersji. Teraz logujemy się na GH, klikamy plusik i dajemy `new repository`. Tam wypełniamy wszystkie potrzebne rzeczy, czyli nazwę i ewentualny opis, a później klikamy `create repository`.  Fajnie jest mu nadać tę samą nazwę, co twojemu projektowi lokalnie, żeby ci się nie myliły. Teraz kopiujesz link do swojego repozytorium. Przechodzisz do konsoli z Gitem, a tam wpisujesz:

```sh
git remote add origin linkdonaszegorepozytoriumnagithubie
```

W ten sposób dodajemy repozytorium githubowe do naszego gita. Ale należą ci się tu słowa wyjaśnienia, słówko origin możesz zmienić na każde inne, ale najczęściej jest tak. Ot, taka wesoła konwencja. 

Jeśli dodawałeś do zdalnego repozytorium (tego na GitHubie) jakieś zmiany, których nie ma na twoim komputerze, to musisz je pobrać do siebie lokalnie. 

```sh
git pull origin master
```

Słówko master jest nazwą głównej gałęzi w twoim repozytorium. O gałęziach wspomnę w którymś z kolejnych artykułów, a jeśli jesteś ciekaw już teraz, o co chodzi, to oczywiście, że cię odeślę do źródeł ([fragment książki dot. gałęzi](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)). A teraz najważniejsze, masz świetny działający kod w swoim lokalnym repozytorium i chcesz się nim podzielić ze światem. 

```sh
git push origin master
```

Jeśli wszystko zostanie poprawnie zrobione, to za chwilę powinieneś zobaczyć zmiany w swoim repozytorium na GitHubie. Jeżeli cokolwiek nie zadziała, to czytaj wszystkie informacje, które wyświetla konsola. Git bardzo dokładnie informuje, co nie zadziałało. Jeśli chcesz sobie poćwiczyć polecenia, to GitHub przygotował taki bardzo podsowy kurs ([interaktywny tutorial od GitHuba](https://try.github.io/levels/1/challenges/1)). 

## Jak pokazać nasz projekt?

Skoro czytasz tego bloga, to jest bardzo prawdopodobne, że zajmujesz się frontendem. GitHub pozwala nie tylko pokazać kod naszego wspaniałego pierwszego projektu, ale również, udostępnić ją w sieci. Oczywiście, pod warunkiem, że mamy do czynienia ze stroną statyczną, czyli taką bez serwera i backendu. Jak to zrobić? To bardzo proste! 

* Wchodzimy do repozytorium naszego projektu na GitHubie
* Klikamy `settings `
* Scrollujemy trochę w dół w poszukiwaniu sekcji `GitHub Pages`
* W sekcji `source` wybieramy `branch master`
* Klikamy `save`
* W ciągu kilku chwil nasza strona będzie aktywna. 
* Standardowo jej adres to:

```sh
https://twoja_nazwa_użytkownika.github.io/twoja_nazwa_projektu
```

Jeśli wszystko poszło w porządku, to powinieneś zobaczyć swoją stronę pod tym adresem.

Och, wystarczy na dzisiaj. Ty z pewnością teraz nie masz już czasu, bo idziesz pokazać światu wszystkie swoje projekty. Trzymaj się ciepło i nie poddawaj się, nigdy. Miau!

