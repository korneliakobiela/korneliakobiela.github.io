---
title: "Tworzenie bloga w Jekyll - poradnik cz.2 struktura katalogów"
categories: programowanie
date: 2017-06-11 10:01:27 +0100
---
Cześć! To znowu ja. Dzisiaj przychodzę do was z drugą częścią poradnika o Jekyllu (nie tylko dla opornych). [Wpis z pierwszą częścią poradnika](http://kot-zrodlowy.pl/programowanie/2017/05/26/Tworzenie-bloga-w-Jekyll-poradnik-cz.1.html) traktował o instalacji i podstawowej konfiguracji bloga, a także możliwości wrzucenia go do internetu z pomocą GitHub Pages. Dzisiaj jednak opowiem wam o nieco ważniejszych i trudniejszych rzeczach. Zabiorę was w magiczny świat struktury katalogów. Nie ma czasu do stracenia, więc zaczynamy (Popatrz jak Kot nagle zaczął dbać o twój czas).

Jak już dobrze wiesz (a jeśli nie to właśnie się dowiesz) Jekyll jest generatorem stron statycznych. Znaczy to tyle, że opiera się na plikach, bez logiki, którą charakteryzują się aplikacje - to takie proste, a po więcej wróć do pierwszej części. Jeżeli mamy standardowy system CMS oparty o bazę danych, to całe zarządzanie zawartością strony załatwiają za nas odpowiednie skrypty. W naszym przypadku Jekyll zajmuje się składaniem gotowej strony www z naszych plików opisujących layout strony, jej wygląd i treść. Wiele rzeczy jednak pozostaje po naszej stronie (jak np. datowanie wpisów ^^) i żeby ten proces przebiegał pomyślnie, musimy zwracać uwagę na nazwy. Odpowiednio trzeba nazywać katalogi, pliki z postami i wszystko umieszczać w przeznaczonych dla nich miejscach. Spokojnie, to nie jest takie trudne na jakie wygląda, więc nie masz o co się martwić. 

Jeżeli stworzyliśmy startowego bloga, to struktura katalogów nie jest zbyt skomplikowana. Mamy trochę wygenerowanych plików i dwa katalogi. Oczywiście możemy stworzyć ich więcej i nawet jest to wskazane, jeśli chcemy, by nasz blog był bardziej popularny od kociego i jedyny w swoim rodzaju. Krótko i zwięźle opiszę Ci najważniejsze katalogi poniżej.

## Katalogi

* _drafts/ - tutaj zapisujemy szkice naszych postów. Nie zostaną one opublikowane na stronie dopóki nie przeniesiemy ich do odpowiedniego katalogu
* _includes/ - tutaj zapisujemy te części naszego layoutu, które często będą się powtarzać np. header, footer itp.
* _layouts/ - tutaj zapisujemy pliki z szablonami określonych podstron na bloga - informacje o tym, w jaki sposób ma być pokazana treść dajemy w nagłówku każdego pliku z treścią
* _posts/ - posty, które mają być opublikowane. Tutaj przenosimy też szkice, gdy są już gotowe do wyświetlenia
* _data/ - pliki z danymi
* _sass/ - tutaj możemy ostylować naszą stronę plikami w formacie sass, co na gotowej stronie zostanie przekompilowane do CSS. Główny plik powinien się nazywać main.scss, a pozostałe być do niego dołączone
* _site/ - To jest miejsce w którym nasza strona zostanie wygenerowna - jeśli chcesz hostować na GH, to warto ten katalog dodać do pliku .gitignore

## Konfiguracja bloga

Jak już dobrze wiesz, twój blog zawiera centrum dowodzenia w postaci pliku _config.yml. [Dokumentacja Jekylla](https://jekyllrb.com/docs/configuration/) pokazuje naprawdę bogatą liczbę opcji konfiguracyjnych. Większość z nich przydaje się niezwykle rzadko, gdy potrzebujemy Jekylla do niecodziennych zastosowań. Myślę, że jednak wymienienie kilku z nich może pomóc zrozumieć, w czym rzecz. Poniżej wypisałam kilka przydatnych opcji koniguracji:

* title - tytuł bloga
* description - opis bloga
* url - adres www wraz z protokołem
* encoding - kodowanie strony
* timezone - strefa czasowa - standardowo będzie to czas serwera

Opcje dotyczące wyświetlania postów:

* future - wyświetlanie postów z przyszłą datą
* limit-posts - liczba postów do pokazania na stronie
* show_drafts - publikacja postów ze szkicami

Pozostałe opcje dotyczą środowiska, konfiguracji serwera, paginacji, plików, folderów i chyba wszystkiego, co sobie możesz wymyślić (no może prawie wszystkiego, bo na pewno wyszukasz coś, żeby mnie teraz zagiąć). Oczywiście nie musisz wszystkiego ustalać sam, bo jest sobie coś takiego jak [standardowy plik konfiguracyjny](https://jekyllrb.com/docs/configuration/#default-configuration) i tylko nadpisujesz to, co ci nie pasuje. 

Oprócz standardowych opcji masz możliwość zdefiniować własne. Mogą się przydać przy szablonie, który napiszemy niebawem. Wiesz, takie rzeczy typu nazwa autora, ile tuńczyków jesz tygodniowo i jaki jest twój ulubiony kolor. Ogranicza cię własna wyobraźnia, a także trochę przydatność, chociaż kto bogatemu zabroni.

Następnym razem pokażę jak stworzyć prosty szablon. Wiem, że miało być już tym razem, jednak stwierdzam, że takie krótkie wprowadzenie też się przyda, żeby lepiej zrozumieć zagadnienie. Jekyll jest stosunkowo prostym narzędziem, jednak potrzebuje nieco innego myślenia o treści strony. Jak dla mnie to jest aktualnie najlepszy sposób na bezstresowe prowadzenie bloga. Wiem, że podobnych narzędzi powstaje ostatnio coraz więcej i być może na tym blogu kiedyś jakiś wypróbuję i podzielę sie relacją. Na razie jednak wystarczy mi to, co mam. 

Trzymaj się i nie wychodź na słońce, bo się przegrzejesz. 

Miau!
