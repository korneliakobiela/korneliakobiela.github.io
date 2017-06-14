---
Nhttp://kot-zrodlowy.pl/programowanie/2017/05/26/Tworzenie-bloga-w-Jekyll-poradnik-cz.1.html layout: post
title: "Wady i zalety hostowania strony na GitHubie"
date: 2017-06-14 12:35 +0100
categories: programowanie
---

Cześć! Wracam szybko z kolejnym wpisem. Dzisiaj nie przedstawię kolejnego tutorialu z JS-a, ale myślę że temat też może zaciekawić ludzi, którzy piszą do internetu. Koci blog istnieje prawie pół roku i właśnie jest hostowany na GitHubie. Są rzeczy, którymi jestem zachwycona, a inne przyprawiają mnie o ból głowy. Może sam się zastanawiasz, czy warto się zainteresować tego typu prowadzeniem bloga. Przeczytaj, potem wszelkie uwagi mile widziane.

## Słowo wstępu

Tak, GitHub zapewnia możliwość hostingu stron lub nawet całych blogów. Opublikował do tego nawet [dość obszerny tutorial](https://pages.github.com/), w którym znajdziesz informacje co i jak zrobić. W skrócie mamy do wyboru dwa rodzaje stron:

* **Stronę użytkownika lub organizacji** na domenie nazwa-użytkownika.github.io
* **Stronę dla projektu** na domenie nazwa-uzytkownika.github.io/nazwa-projektu

Jest to hosting dla stron statycznych, obsługiwany przez technologię Jekyll. Jeśli czytasz mojego bloga od jakiegoś czasu, to wiesz, że temat Jekylla był ostatnio poruszany. Pojawiły się jak dotąd dwa wpisy:

* [jak stworzyć bloga w Jekyll](http://kot-zrodlowy.pl/programowanie/2017/05/26/Tworzenie-bloga-w-Jekyll-poradnik-cz.1.html)
* [struktura katalogów i plik konfiguracyjny w Jekyll](http://kot-zrodlowy.pl/programowanie/2017/06/11/jekyll-poradnik-2.html)

W ten sposób za darmo i bez większego wysiłku można postawić pełnoprawnego bloga. Idealne rozwiązanie dla leniwych kotów, jak ja? Sprawdźmy to!

## Darmowy hosting

Za hostowanie naszej strony nie zapłacimy ani złotówki. Wiem, pewnie słyszałeś o tych cudownych hostingach pełnych reklam, gdzie zamiast złotówek płacisz swoim zaangażowaniem, nerwami i zdrowiem. Tu jednak jest inaczej. Twoje pliki są twoje, strona też - na stronie nie znajdziesz nawet pół reklamy. Do tego jest szybko, wygodnie i naprawdę profesjonalnie. Myślę, że to stawia nasz hosting w bardzo korzystnym świetle.

## Ograniczenie technologii

Jak już pisałam, WordPressa tutaj nie zainstalujesz. Tylko Jekyll. Jeśli ci to nie odpowiada, musisz poszukać jakiejś alternatywy. Dla mnie to jednak nie było absolutnie żadną przeszkodą. 

## Własna Domena

Możesz do strony na GH-Pages podpiąć własną domenę. Jest jeden mały kruczek. Jeśli przypiszesz domenę do strony użytkownika, to wszystkie woje projekty też będą pod tą domeną. Nie ma możliwości powrotu do standardowej domeny dla pojedynczych projektów, gdyż ta jest przypisywana do konta, a nie konkretnego repozytorium. 

Nie miałam okazji sprawdzić, jak to jest, gdy własną domenę dopiszemy do strony projektu, jeśli wiesz więcej - daj znać w komentarzach.

## HTTPS

Tak jest taka możliwość. Zostaje tylko jeden drobny kruczek. GitHub zezwala na włączenie HTTPS tylko pod warunkiem, że korzystamy ze standardowej domeny. Przy zmianie pozostaje nam zwykłe HTTP. To jak dotąd była największa niedogodność, z jaką się spotkałam. Dlaczego? Jak wiesz, piszę czasem jakieś dema dotyczące różnych js-owych technologi (cudowan seria 50 Twarzy JS) i przeglądarki obsługują część funkcjonalności już tylko po HTTPS. 

Udało mi się jednak obejść ten problem. Założyłam organizację [Kot Źródłowy](https://github.com/kot-zrodlowy) i od teraz wszystkie projekty będzie można obejrzeć pod kot-zrodlowy.github.io/nazwaprojektu

## Ograniczenie pluginów

Jekyll udostępnia sporo pluginów rozszerzających jego działanie. Można też pisać własne, jeśli zajdzie taka potrzeba. Github pozwala na instalowanie tylko niektórych. Oto pełna lista [pluginów wspieranych przez GH](https://pages.github.com/versions/). Można to obejść za pomocą takiego narzędzia jak [kickster](https://github.com/nielsenramon/kickster). Jak kiedyś wyprubuję, to podzielę sie wrażeniami. 

## Wsparcie techniczne

Jeżeli zajrzysz w dokumentację GitHub Pages, to jest duże prawdopodobieństwo, że otrzymasz odpowiedzi na wiele ze swoich pytań. Solidnie i przystępnie napisane tutoriale z pewnością pomogą początkującym adeptom sztuki stawiać pierwsze kroki, jak również bardziej zaawansowanym rzucać fireballe. Jeżeli jednak czegoś nie ma, to zawsze można zadać pytanie. Przycisk 'Contact a human' nie gryzie i nie ma się czego wstydzić. Może akurat masz problem, na który nikt jeszcze nie wpadł.

## Dowolność pisania

No to jest olbrzymia zaleta Jekylla, a nie tylko GH-Pages. Otwierasz swój ulubiony edytor, piszesz post, a potem go commitujesz do odpowiedniego repozytorium. Daje ci to wolność wyboru ulubionego edytora na twoim komputerze. A także, żeby pisać post, nawet nie potrzebujesz dostępu do internetu. Potem tylko taki artykuł czeka na dostęp do internetu, żeby go opublikować.

## Podsumowanie

Z pewnością nie wyczerpałam wszystkich możliwości, jeśli chodzi o cechy GH-pages. Nie jestem, też tobą, więc nie wiem, czego tak naprawdę potrzebujesz. Dlatego nie wiem, na ile to będzie przydatne dla ciebie. Jestem tak rozstrzepanym kotem, że na pewno o czymś zapomniałam. Zapraszam do dyskusji w komentarzach. Może właśnie ty podzielisz się czymś istotnym. 

Miau!
