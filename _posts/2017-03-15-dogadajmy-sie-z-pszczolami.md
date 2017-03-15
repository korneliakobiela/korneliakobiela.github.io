---
layout: post
title:  "Jak dogadać się z pszczołami?"
date:   2017-03-15 0:21:27 +0100
categories: dajsiepoznac2017 javascript
---
Cześć! Przychodzi taki czas w życiu każdego kota, że musi wziąć odpowiedzialność za swoje decyzje i raz wymyślony projekt zacząć realizować. Do tych co z niecierpliwośćią czekają na commity do mojego repo - zapowiadam, że nawet jakieś są, tylko na razie na drugiej gałęzi. Spokojnie wszystko i tak pięknie spłynie do mastera. W sumie, kto by pomyślał, że praca programisty sprowadza się do siedzenia na odpowiedniej gałęzi? Dobra, koniec suchych żartów i bierzemy się do pracy.

## Co tym razem?
Moja wielka i cudowna gra (wcale nie), jak powszechnie wiadomo, będzie sterowana tekstowo. Tzn. nawet nie tekstowo, tylko za pomocą specjalnych poleceń. Wiesz, językiem programowania tego bym nie nazwała, ale skryptem - już bliżej. Żeby przybliżyć ci, w czym rzecz, to może kojarzysz ideę czegoś tak cudownego, jak Logo Komeniusz? U mnie w gimnazjum tak wyglądała nauka podstaw programowania i wiem, że w wielu innych miejscach podobnie. Tutaj idea będzie podobna, tylko pszczółki są fajniejsze od żółwi, język będzie mniej rozbudowany i zamiast wolnej amerykanki - trochę konkretnych zadań i przeszkód. Brzmi prosto i przyjemnie. W grę będzie można zagrać przez przeglądarkę, a także pobrać wersję na komputer - zarówno Linux jak i Windows ( yay, multiplatformowość ). Ze względu na wygodę sterowania gra mobilna chyba nie powstanie. Może kiedyś. To tyle tytułem wstępu, mam nadzieję, że robi się ciekawie!
## Tajemny język pszczół.
W tym wypadku zakładam plan minimum i jakąś bardziej rozbudowaną wersję. To tak, jakby zadanie miało mnie przerosnąć. Składnia ma być maksymalnie prosta i zwięzła, a pewne konwencje zapożyczę z lubianych przeze mnie języków programowania. W grze dostaniemy okienko do wpisywania komend, a po zatwierdzeniu całości, uruchomi się animacja tego, co chcieliśmy zrobić naszej pszczółce. Korci mnie, żeby okienko maksymalnie upodobnić do terminala, ale to się zobaczy, czy pomysł nie schowa się za tysiącem innych.
### Wersja podstawowa
* __go__ - przemieści pszczółkę jedną jednoskę do przodu
* __left__ - obróci w lewo o 90 stopni
* __right__ - obróci w prawo o 90 stopni
* __*X__ - zwielokrotni nam akcję, gdzie X to jakaś liczba naturalna. Przykładowo: `left*2` obróci nam pszczółkę o 180 stopni (takie nazad), myślę, że jest to w miarę jasne
* __is__ - przypisanie wartości do jakiejś nazwy - zmiennej np.: `n is 2`
* dodawanie i odejmowanie wartości liczbowej

### A co jeśli jakimś cudem się to uda?

Wtedy rozszerzę o jeszcze kilk bardziej skomplikowanych poleceń i akcji. Mam w zamyśle jakąś instrukcję warunkową, możliwość jakiegoś prostego atakowania przeszkód i wrogów, na pewno to kiedyś rozwinę, niemniej jednak, nie wiem, czy ta wiekopomna chwila nastanie podczas trwania konkursu. Tak w ogóle, to kto jest za tym, żeby pszczoła strzelała laserami z oczu ^^? To wszystko czywiście będzie miało wpływ na samą rozgrywkę, ale raczej na wyższych poziomach.
## I to wszystko?
Przecież mówiłam, że będzie prosto. Ale spokojnie, będzie się trzeba przygotować na sporo ograniczeń. Mam już kilka wstępnych założeń, co nie jest tak całkiem bez sensu.
* Liczby będą wskazywały liczbę powtórzeń danego kroku, więc poruszamy się tylko w zbiorze liczb naturalnych. Więc nie zadziała jeśli wpiszemy go*-5 (nie, pszółki nie latają tyłem)
* Trzeba wymyślić, jak punktować dane rozwiązanie. To znaczy, na początku nie będzie ich dużo, ale przecież razem z coraz większą komplikacją zagadek do rozwiązania, liczba możliwych rozwiązań zwiększa się. Tu muszę wymyślić, jakiś tajemny algorytm.
* Zastanawiam się, czy konkretnych poleceń nie dodawać stopniowo po przejściu określonej liczby etapów. Wydaje mi się, że mniejszym problemem będzie wtedy składnia poleceń. Chodzi tu przecież o rozwiązanie problemów.

To chyba na razie tyle. Jak już mówiłam projekt chodził mi po głowie już od jakiegoś czasu. Był próbą odpowiedzenia na pytanie, czym jest programowanie, czym zajmuje się programista, a także może się okazać próbą zachęcenia ludzi, którzy z programowniem nie mieli do czynienia i nie czują tego. Na takich abstrakcyjnych przykładach udawało mi się uczyć ludzi podstaw programowania. Ponoć zrozumieli! A nawet zaliczali przedmioty na studiach. A tobie jak się podoba taki pomysł? Wypowiesz się? Wiosna przyszła, słonko świeci, ale nie przezięb się!

Trzymaj się! Miau!
