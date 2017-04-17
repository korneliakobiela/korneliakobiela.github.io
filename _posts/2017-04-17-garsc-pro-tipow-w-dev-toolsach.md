---
layout: post
date:   2017-04-17 10:20:00 +0100
title: 'Garść pro-tipów dla początkujących- narzędzia dla deweloperów'
categories: dajsiepoznac2017 programowanie
---
Cześć! Dzisiejszy post nie będzie kolejnym tutorialem, ale ma pomóc bardziej w codziennym zmaganiu się z kodem. W końcu piszemy go na codzień i oczywiście jest on cudowny i najpiękniejszy na świecie, chyba że akurat nie działa. Zdarza się najlepszym. Wtedy jest płacz i zgrzytanie zębów, a nawet płaczliwe posty na grupach i forach, jak ten poniżej.
>Ten JS mi nie działa, CSS się rozjechał - ratunku !!!! Jak to naprawić!!!!!

Tego typu treści można spotkać niemal codziennie w różnych miejscach, gdzie koderzy szukają pomocy. A czasami samodzielne znalezienie rozwiązania jest o wiele szybsze, a nawet śmiem twierdzić, że kosztuje nas mniej straconego czasu i nerwów. Tak, udzielając się na codzień i pomagając innym, z przerażeniem stwierdzam, że niektórzy przeglądarkowych dev-toolsów na oczy nie widzieli. Albo boją się samodzielnie z nich korzystać. Albo jeszcze nie wiem co, ale samodzielne rozwiązywanie własnych daje niesamowicie wiele satysfakcji (potwierdzone info, testowane na kotach). Druga część osób zna to magiczne miejsce w przeglądarce, ale chyba nie do końca sobie zdaje sprawę, co można tam zrobić. Dla takich jak wy dzisiejszy post.

Zaczynamy zabawę. Wybierasz dowolną popularną przeglądarkę (u mnie to jak zwykle będzie Google Chrome, ale Firefox prezentuje się bliźniaczo podobnie). Wchodzisz na jakąś stronę www i wciskasz magiczny skrót: `Ctrl + Shift + i` (albo z menu wybierasz otwórz narzędzia dla developerów). Twoim oczom po prawej lub na dole powinna się pojawić sekcja z różnymi zakładkami i wydzielonymi blokami. Jeśli wygląda podobnie do tego poniżej, to dobry znak, właśnie je otworzyłeś.
![dev-tools w przeglądarce Google Chrome](/img/dev-tools.png)

Jak to najłatwiej wytłumaczyć? Spróbuję znaleźć kilka najpowszechniejszych problemów i wytłumaczyć, jak je można rozwiązać. Tak chyba jest najsensowniej, bo to na tyle potężne narzędzie, że mało kto by wytrzymał suchą teorię.

## 1. Co to za element na stronie XYZ.miau.pl?
Masz tak, że czasem coś zobaczysz na stronie w sieci i z czystej ciekawości, chcesz się dowiedzieć, co to właściwie jest i jak to zrobili? Do tego przydadzą się dev-toolsy. Otwierasz je i po lewej stronie masz coś takiego jak inspektor (to ta mała ikonka ze strzałką w lewym górnym rogu lub Ctrl + Shift + C). Z jej pomocą klikniesz na element i pojawi ci się kod HTML i CSS w sekcjach poniżej. Tam już możesz wypatrzyć inspiracje dla twojego super designu.

## 2. Dlaczego te divy mi się przesunęły?
Masz na stronie problem, na 99% z własnym lub nie-własnym arkuszem styli. Używasz już wspomnianego inspektora i klikasz na krnąbrnym elemencie. Zobaczysz co ten element zmajstrował. Tutaj najpewniej cię interesuje, co jest nie w porządku z CSS-em. Zakładka styles pokaże ci dokładnie jak jest ostylowany dany element. Jak dobrze wiesz (albo właśnie się dowiadujesz) przeglądarka sama z siebie nakłada css na elementy i czasami to jest przyczyną naszych niepowodzeń. Jeśli masz kilka dokumentów css, to widzisz w dokładnie którym jest jaka reguła, która działa na nasz div. Co więcej widzisz, która dokładnie linijka jakiego dokumentu za co odpowiada. A to jeszcze nie koniec zabawy. Klikając na poszczególne reguły możesz je włączyć lub wyłączyć i na żywo obserwować zachowanie strony. Co więcej, możesz dopisywać nowe własne - po prostu klikasz w odpowiednie miejsce i dopisujesz regułę. Dobry feature do testowania lub gdy uczysz się nowych funkcjonalności, np. flexa. W normalnym trybie, to wszystko znika po przeładowaniu okna przeglądarki, więc to taka zabawa bez większych konsekwencji.

## 3. JS mi nie działa.
Nie wyświetla, co ma wyświetlać, a ty nawet nie wiesz dlaczego. Spoko, dla mnie to chleb powszedni (no dobra powszednie mleczko). Jeśli w tym momencie włączysz nasze narzędzia, to z pewnością konsola zapłonie na czerwono od błędów. No dobra, czasem wystarczy jeden błąd. Przeczytaj jego treść. To powinno pomóc. Jeśli nie działa, to na pewno z wiedzą, jaki błąd masz w konsoli, szybciej znajdziesz pomoc.

## 4. Jak szybko potestować nowe funkcjonalności?
JavaScript ma ogromne możliwości. Tylu bibliotek nie ma chyba nigdzie indziej (słowo kluczowe chyba wskazuje na subiektywne odczucia pewnego kota), a samo WEB API jest ogromne. Czasem chcesz szybko zobaczyć i przekonać się na własnej skórze, jak działa jakaś nowo-poznana funkcja z WEB API. Albo piszesz własne funkcje i chcesz wylogować (consol.logiem), co tam one ci dają. Do tego też może służyć konsola. Oczywiście przy własnych projektach lepiej korzystać z testów jednostkowych, ale czasami też się przydaje ta opcja.

## 5. Moje obrazki się nie ładują.
Ten problem ma zwykle dwie przyczyny. Albo masz za wolny internet i za duże obrazki, albo podałeś złe ścieżki do obrazków. Ten drugi przypadek jest chyba częstym błędem. Otwierasz dev-toolsy i już konsola ci pokaże, że plik pod taką ścieżką nie istnieje. A ty koniecznie musisz sprawdzić, co poszło nie tak. Zajmie ci to kilka chwil i z pewnością będziesz wiedział. Może to nazwa pliku i literówka, może nie ma rozszerzenia lub jest niepoprawnie wpisane, może gdzieś brakuje ukośnika? Będzie widać, a ty z pewnością sobie z tym poradzisz.

Na dzisiaj to tyle. Nie ma co bombardować informacjami w święta. Odpocznij jeśli możesz, a potem zjedz jeszcze serniczka. Wiem, jestem kochana. Masz może ochotę dowiedzieć się więcej na temat dev-tools? Znasz mnie, po prostu podam ci [link do dokumentacji](https://developer.chrome.com/devtools). Baw się dobrze, nie przejedz za bardzo, a potem wróć ze mną do wspólnego kodowania.
Miau!
