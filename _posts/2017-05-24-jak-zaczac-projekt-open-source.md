---
layout: post
title: "Jak zacząć pisać projekt Open Source"
categories: javascript programowanie
date: 2017-05-24 10:01:27 +0100
---

Cześć! Dłuuugo mnie nie było, ale już chyba wracam z nowymi pomysłami. W sumie to ciężko się bez was żyje, nawet takim aspołecznym kotom, jak ja. Od ostatniego wpisu minął prawie miesiąc, bo najpierw był Pyrkon i Majówka, a potem przez dwa tygodnie prokrastynowałam powrót i pisanie postów. Wiecie - ciepło się zrobiło, trochę wychodzę do słońca, trochę zajmuję uczelnią. Zresztą juwenalia były - prawdopodobnie moje ostatnie, więc myślę, że też jestem z tego powodu usprawiedliwiona.

Dzisiaj napiszę o tym jak zacząć swój własny projekt open source w kilku prostych krokach. No bo skoro ludzie (a nawet koty) dają radę, nie może to być takie trudne. Przed rozpoczęciem pracy, ale jeszcze zanim do nas dojdzie, że to jest bez sensu, warto odpowiedzieć sobie na kilka pytań.  

## FAQ

### Czym jest Open Source?

Mam nadzieję, że to tylko formalność. Nie chcę zagłębiać się w filozoficzne szczegóły, czy oprogramowanie jest wolne (jak wolność lub piwo), czy otwarte. A w skrócie chodzi o to, że jako użytkownicy, mamy udostępniony kod źródłowy, który możemy za darmo zobaczyć, skopiować, ulepszyć i wiele innych rzeczy, zależnie od licencji.

### Czy warto rozwijać taki projekt?

Tak, bez dyskusji warto.

### Dlaczego mam dzielić się swoim wspaniałym kodem źródłowym?

Po pierwsze nigdy nie jest on na tyle wspaniały, żeby nie mógł być lepszy. A poza tym:

* Robisz coś w 100% własnego i wymyślonego przez siebie.
* Dzielisz się ideą, która przyświeca twojemu projektowi.
* Uczysz się nowych rzeczy, bo każdy nowy projekt, to nowe wyzwania
* Integrujesz się ze społecznością zgromadzoną wokół technologii, w której piszesz.
* Być może twój projekt pomoże innym, a pomaganie jest fajne.
* Możesz stać się sławny
* W łatwy sposób znajdziesz kogoś, kto krytycznym okiem spojrzy na twój kod i zrobi code-review.

Czy to mało zalet? Dodam, że nie znam osoby, która w ogóle nie korzystała z wolnego oprogramowania. I to chodzi mi zarówno o technologie do rozwoju oprogramowania, jak i aplikacje codziennego użytku. Warto wzbogacać ten światek swoim wkładem.

Mam nadzieję, że odpowiedziałam wyczerpująco na te pytania. Jeśli coś ci się jeszcze nasuwa - zadaj pytanie w komentarzu pod tym postem. Jeśli znasz odpowiedź na pytanie pod postem - napisz ją. To jest o tyle proste, co również miłe. Może uczyńmy wspólnie ten blog puchatym (miłym) miejscem w internecie.

## Najpierw pomysł

Wiesz, że na GitHubie jest przetrzymywanych niemal 60 milionów projektów? W takim tłoku ciężko wymyślić coś nowego. Ale spokojnie - nie wszystko złoto, co znajdziesz u Octokota! Uważam, że masz naprawdę spore pole do popisu. Bo nawet jeśli nie wymyślisz nic odkrywczego, ani bardzo innowacyjnego, to możesz te klocki poskładać na nowo. Wiem, że wymyślenie projektu nie jest takie proste. Szczególnie takiego, który nam się nie znudzi po dwóch dniach. Myślę, że fajnie robić programy, z których sami będziemy korzystać, bo ich potrzebujemy. Wiesz, nie znam cię, ale z pewnością czasem masz taką myśl, szkoda apka, z której korzystam nie ma takiej funkcjonalności. To ją sobie dopisz. Ale wiesz co warto zrobić? Zapisz pomysł, obojętnie czy to na kartce, telefonie, Evernote, czy na przedramieniu. Zapisz i idź spać. Nie rób na razie nic więcej. Po prostu utnij sobie drzemkę i dopiero wróć do tego pomysłu.  

Tak, jestem kotem i namawiam ludzi do spania. Ale wiesz, co to daje? Świeże spojrzenie, na to, czy rzeczywiście chcesz to robić. Czasami jednak warto się dowiedzieć, że coś jest bez sensu. Ale wierzę w ciebie, że w końcu podejmiesz decyzję o napisaniu TEJ aplikacji.

## Nazwij mnie

Tu zatrzymamy się na chwilę. Nazywanie rzeczy, to zawsze dla mnie największy problem. (Pierwsza kocia zasada brzmi: rzeczy łatwiej zrzucić ze stołu, niż nazwać). I to zauważyłam już jakiś czas temu - nazwę bloga wymyślałam chyba z tydzień, nad sprecyzowaniem tematu inżynierki, siedzieliśmy kilka ładnych godzin. Tytuły wystąpień też zostawiam na sam koniec. Dlatego moje projekty też nie posiadają jakiś mega wymyślnych nazw. Po prostu niezwykle rzadko udaje mi się osiągnąć efekt wow przy tym, jak jakaś nazwa przychodzi mi do głowy. Częściej to jest jednak meh. Z pomocą przychodzą takie narzędzia, jak [generator losowych nazw projektów w JS](http://mrsharpoblunto.github.io/foswig.js/). Czasami można znaleźć coś uroczego i naprawdę chwytliwego w ten sposób. Z pomocą przychodzą też dzieła kultury. Słyszeliście o języku Python? A wiecie, że on swoją nazwę zawdzięcza Monty Pythonowi? Tak, chodzi o tych Brytyjskich komików od [Hiszpańskiej Inkwizycji](https://www.youtube.com/watch?v=Nf_Y4MbUCLY). Tak, ja też sie nie spodziewałam ich tutaj, na kocim blogu. Jeśli chodzi o humor, ja uwielbiam "Świat Dysku" Pratchetta. Tylko wiecie, moją ulubioną postacią jest... Śmierć. Nazwanie w ten sposób projektu, myślę, że nie wróżyłoby mu zbyt dobrze.

Jeśli chodzi o konwencje nazewnicze, warto się pochylić nad Linuxami. Różne dystrybucje mają coraz ciekawsze pomysły, na to jak nazywać kolejne wersje. Debian korzysta z imion bohaterów Toy Story, Ubuntu wymyśla nazwy zwierząt na kolejne litery alfabetu, Mint tworzy alfabetyczny spis kobiecych imion, a Android słodyczy. Czasami wystarczy wybrać jakieś fajne zwierzę, a potem rozwinąć jego nazwę, żeby dorobić do tego ideologię - tak mam na myśli GNU. W ten sposób pomysły można mnożyć i mnożyć, ale warto wiedzieć, czy ktoś już nie wpadł na to samo. Z pomocą przychodzi nam [kolejne fajne narzędzie](http://ivantomic.com/projects/ospnc/), które przeszukuje najpopularniejsze repozytoria w poszukiwaniu naszej nazwy. W końcu nie chcemy być posądzeni o kopiowanie nikogo. Warto jednak sprawdzić, na ile ono się nie myli. Bo czasem mu się zdarza odesłać do 404.

Jak już znajdziesz tą nazwę to piszesz ją gdziekolwiek i znowu idziesz spać. Ktoś mógłby pomyśleć, że pisanie projektów polega tylko na spaniu. Ale wiesz, spanie jest przyjemne i warto praktykować małe przyjemności.

## Przystępujemy do developmentu

Zakładamy repozytorium na GitHubie (jeśli chcecie wpis o Git i GitHub, to dajcie znać w komentarzach) i ruszamy do pisania programu. Nie wiem, czy zauważyliście, ale przy zakładaniu nowego repo, GH też nam ostatnio podpowiada nazwy - to zawsze może być jakaś wskazówka. To raczej jest najbliższa tobie część. Aktualnie nie mam wiele do dodania, jeśli chodzi o pisanie samego kodu.

Warto jednak zadbać o dobrą dokumentację kodu [JSDoc](http://usejsdoc.org/), plik README, w którym umieścisz opis i działanie twojego wspaniałego projektu, a także informacje o instalacji. Pamiętaj, że Open Source zakłada jakąś społeczność, która prędzej, czy później się jednak zgromadzi. Warto dodać informacje o tym, jak zgłaszać błędy i chęć wzięcia udziału w projekcie.

Na koniec zostawiłam jedną z najważniejszych rzeczy. Licencja, to jednak sprawa, o której nie wolno ci zapomnieć. Jak to w otwartoźródłowym świecie bywa, masz wiele opcji do wyboru. [No sam zobacz](https://opensource.org/licenses/category). Pewnie i tak najczęściej będziesz korzystać z licencji MIT, ale warto wiedzieć, że mamy inne opcje.

I co, było tak trudno? Wiem, że łatwiej o tym napisać, niż jest w rzeczywistości, ale może ten wpis cię zainspiruje do stworzenia czegoś wielkiego! Ja mam w głowie kilka wielkich pomysłów, na to, co można zrobić z tym światem. Jeden z kolejnych wpisów z pewnością będzie o pomysłach na rozwój kociego bloga, żeby was dalej uczył i bawił, a mnie się nie znudził. Trzymajcie się ciepło i pijcie dużo wody - bo ciepło.

Miau!
