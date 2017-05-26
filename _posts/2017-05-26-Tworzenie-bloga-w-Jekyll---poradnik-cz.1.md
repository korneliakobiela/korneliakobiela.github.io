---
Gtitle: "Tworzenie bloga w Jekyll - poradnik cz.1"
categories: programowanie
date: 2017-05-26 10:01:27 +0100
---

Cześć! Dzisiaj wam opowiem o narzędziu, dzięki któremu możecie każdego dnia przeglądać kociego bloga. Co to jest Jekyll? Na czym to polega? Co jest w nim fajnego? I przede wszystkim, jak założyć bloga? Dzisiaj postaram się odpowiedzieć na te pytania, a przy okazji zachęcić do trochę innego spojrzenia na internety. W drugiej części (o ile taka kiedykolwiek powstanie) postaram się opisać w miarę szczegółowo, w jaki sposób stworzyć swój własny szablon na stronę tworzoną w tej technologii i ewentualnie doodpowiadam na wasze pytania. 

Zaczynając jednak od początku, opowiem wam bajkę o stronach internetowych. No dobra, bajką ciężko to będzie nazwać, ale mam nadzieję, że przeczytasz dalej. No bo wyobraź sobie typowy blog. I tu nie chodzi o jego wygląd, tylko o jakieś abstrakcyjne ujęcie całej tej sytuacji. Bo blog polega na tym, że jest sobie człowiek (albo kot) i on ma na tyle przerośnięte ego, że musi się podzielić z całym światem, tym co go gryzie pod skórą. Do tego twierdzi, że ludzie będą go słuchać, albo czytać. Idąc tym tokiem rozumowania blog jest rodzajem interfejsu pomiędzy blogerem i jego czytelnikami, tym miejscem, gdzie udostępnia się treść. Bloger pisze, żeby inni mogli przeczytać, albo nawet skomentować (to już jest element blogowego folkloru) . W sumie to, w najprostszym wydaniu tylko tyle, a cała reszta jest tylko opcjonalnym dodatkiem. Gdy ja zaczynałam pisanie bloga, to moją główną motywacją było lenistwo - nie chciało mi się tłumaczyć każdemu z osobna ciągle tego samego, więc zaczęłam pisać posty, żeby je linkować. Tylko, że zanim do tego doszło, to moje myśli wyglądały mniej więcej tak:

> No założyłabym tego bloga, ale to trzeba wymyślić nazwę, wykupić hosting i domenę, wymyślić logo, zainstalować WordPressa, napisać jakiś fajny szablon, albo znaleźć w internecie i go dostosować - przecież to jest szalenie dużo roboty. Nie chce mi się.

Takie były rozterki pewnego kota z chorobą niechcianych misiów. Mi nie zależało na najbardziej dizajnerskim szablonie - ja po prostu chciałam zacząć pisać. Wtedy właśnie dowiedziałam się o Jekyllu. 

## Co to jest Jekyll?

Generator stron statycznych i tu moja odpowiedź powinna się zakończyć. Ale chyba w tym miejscu często dochodzi do nieporozumień. Bo co to właściwie oznacza? Duża część Internetu to różnego rodzaju aplikacje - posiadają skomplikowaną logikę, mają bazę danych i całą masę kodu. Są jeszcze strony statyczne - to te z HTML/CSS/JS i zasadzie niewiele więcej. Jekyll pozwala nam prowadzić bloga lub inną stronę www opartą właśnie o strony statyczne. Jest napisany w języku Ruby i mimo że mam blade pojęcie na temat tego właśnie języka, to byłam w stanie z pomocą dokumentacji stworzyć Kota Źródłowego. Widzicie to poświęcenie? 

## Na czym polega jego fajność?

Przede wszystkim nie jest przerostem formy nad treścią. Robi to, do czego został stworzony - udostępnia treść. Druga sprawa, że może być hostowany na GitHub Pages. Za darmo bez reklam i nawet własną domenę można podpiąć. To jest przecież cudowne. Idąc dalej tym tokiem rozumowania, fajną sprawą jest pisanie postów. Korzystasz z ulubionego edytora tekstowego na twoim komputerze, tworzysz plik z rozszerzeniem MD i potem tylko piszesz. Tak, dobrze słyszałeś - posty piszemy w Markdown. Jeśli jeszcze nie wiesz z czym to się je, to Github opublikował specjalny [poradnik na temat markdown](https://guides.github.com/features/mastering-markdown/). Tej składni używa się między innymi do pisania pliku README.md w naszych gitowych repozytoriach. Post taki trzeba odpowiednio nazwać, wrzucić do dobrego katalogu i opatrzyć nagłówkiem - a później już tylko:

```shell
git add .
git commit -m "nowy wpis"
git push origin master
```

I nasz post jest na blogu. Przecież to jest proste jak kij od miotły. Jeśli mi nie wierzysz, to zobacz tutaj ([link do mojego repozytorium z blogiem](https://github.com/korneliakobiela/korneliakobiela.github.io)). Poza tym tu się nie ma, co zepsuć. No i masz lokalną kopię bloga, co jest fajne, gdy trzeba na szybko potestować zmiany w szablonie. 

## Czy to rozwiązanie ma jakieś wady?

Ano, jak chyba wszystko. Wprowadza na nas pewne ograniczenia, jeśli chodzi o nazwy plików, trzeba pamiętać o nagłówkach postów i zrobienie np. stron kategorii wymagało odrobiny wysiłku. Jest po prostu ciut więcej ręcznej pracy, ale dla mnie nie jest to aż tak palący problem. Ja może też jestem do tego przyzwyczajona, ale nie twierdzę, że to jest idealne rozwiązanie dla każdego.

## Jak założyć takiego bloga? 

Przede wszystkim potrzebujesz zainstalować Ruby development kit na swoim komputerze. Nie używam Windowsa, więc nie podpowiem Ci, jak to zrobić - po prostu kompletnie się na tym nie znam. W sieci jest jednak wiele poradników na ten temat. Wierzę w Ciebie i na pewno sobie poradzisz. Potem otwierasz konsolę, wchodzisz do wybranego folderu i wpisujesz takie oto zaklęcia:

```sh
gem install jekyll bundler
jekyll new nazwabloga
cd nazwabloga
bundle exec jekyll serve
```

Jeśli brzmi to dla ciebie strasznie to już tłumaczę: 

1. Instalujesz Jekylla i bundler - ten drugi to menadżer gem, zażądza zależnościami
2. Tworzysz folder z blogiem 'nazwabloga' - tu wpisz co chcesz - tak się będzie nazywał folder z twoim blogiem.
3. Wchodzisz do tego folderu
4. Uruchamiasz serwer lokalnie

Teraz, jeśli w przeglądarce wpiszesz 127.0.01:4000 to ukaże ci się twój blog. Widzisz, że jest wypełniony przykładową treścią. Teraz zajrzyj do folderu z blogiem. Najważniejszym plikiem jest _config.yml - to takie centrum dowodzenia twojego bloga. Tam możesz zedytować informacje dotyczące nazwy, opisu itp. Otwórz go w ulubionym edytorze tekstu i  zrób to jak najszybiej.

Jeśli chcesz zahostować swojego nowo-powstałego bloga na GitHubie, to musisz utworzyć repozytorium o nazwie: **nazwaużytoniwka.github.io** i wrzucić to do zdalnego repozytorium. 

### Jak pisać posty?

To też nie jest trudne. W katalogu z blogiem masz folder _posts. Wchodzisz do niego i widzisz już przykładowy plik. Jest kilka ogólnych zasad:

* Każdy post jest w nowym pliku
* Nazwę postu zaczynasz od daty w formacie YYYY-MM-DD 
* Potem piszesz nazwę pliku, która jednocześnie będzie adresem url twojego postu
* Na początku dajesz odpowiedni nagłówek wyglądający w sposób następujący:

```markdown
--- 
layout: post
title:  "Welcome to Jekyll!"
date:   2017-05-26 10:07:51 +0200
categories: jekyll update
--- 
```

Myślę, że tu nie ma żadnej większej filozofii. Wpisujesz rodzaj układu strony, następnie tytuł, potem datę w podanym formacie i razem z godziną, a na końcu kategorie w których jest wpis. Opcji jest więcej, zapraszam do [dokumentacji](https://jekyllrb.com/).

Mam nadzieję, że nieco rozjaśniłam ci tę tematykę. Więcej kontentu i mięska będzie następnym razem. Baw się dobrze i uśmiechaj często!

Miau!