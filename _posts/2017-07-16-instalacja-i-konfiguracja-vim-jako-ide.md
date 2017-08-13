---
layout: post
title: "Instalacja i konfiguracja edytora Vim w roli IDE do JS-a"
date: 2017-07-16 14:00 +0100
categories: javascript programowanie
---

Cześć! Nie, jeszcze nie zwariowałam. No dobra, może odrobinę, ale przez cza pisania tego bloga nic się nie zmieniło w tej kwestii. Ale tak, mam osobisty challenge na lato - nauczyć się VIM. To jest ten magiczny edytor, w którym początkujący generują losowy ciąg znaków, gdy chcą wyjść z programu. Ktoś pewnie spyta: Po co ci to? Przecież masz tyle fajnych nowoczesnych IDE, możesz zmieniać świat, ludzkość od kilkudziesięciu rozwija myszki, a ty się będziesz grzebać w terminalu tekstowym. 

Moja odpowiedź jest prosta. Mam taki kaprys. Jak na razie mi się podoba. Potem zobaczymy. Mogę pisać na FP moje postępy. Na razie jestem otoczona karteczkami z wypisywanymi mniej znanymi skrótami i poleceniami z klawiatury. Tego jest cała masa, a w momencie, gdy instalujesz pluginy, ta liczba rośnie.  Ale spokojnie, wszystko to tylko kwestia przyzwyczajenia.

## Vim jaki jest, każdy widzi.

To jest dość mocno krzywdzące stwierdzenie, bo on ma znacznie więcej pod maską W tym dziesiątki poleceń do nawigacji po plikach, kopiowania, wpisywania i usuwania. Jednak wydaje się, że daleko mu możliwościami do współczesnych edytorów kodu. Nic bardziej mylnego. Po prostu działa on tak, żeby każdy mógł go odpowiednio dostosować do własnych potrzeb i predyspozycji. Mógłby zawierać wszystko w standardzie. Tylko wtedy dostajesz masę funkcjonalności, których tak naprawdę nigdy nie użyjesz. Ja osobiście wolę ideę pluginów, która pozwala zainstalować te funkcjonalności, których naprawdę potrzebuję.  Oprócz tego mam do dyspozycji całkiem sporo ustawień. A jakby tego było mało można samemu pisać skrypty i rozszerzenia. 

## Czego oczekujesz od nowoczesnego edytora

Pomyśl o swoim ulubionym edytorze. Jakie funkcje spełnia, że tak go lubisz:

* Kolorowanie składni
* Uzupełnianie składni
* Automatyczne wcięcia
* Wsparcie dla lintera
* Numerowanie linii

I wiele innych rzeczy, o których się nie pamięta,  dopóki ich nam nie zabraknie. Fajnie też jakby miał ciemny motyw do wyboru, ale na razie wystarczy tej listy życzeń.  Teraz jak tego dokonać, żeby vim był właśnie taki? Odrobina czasu, szczypta kociej magii i szklanka cierpliwości, a wszystko powinno się udać.

## Konfiguracja 

Vim posiada plik konfiguracyjny .vimrc, który standardowo jest w Linuxowym katalogu użytkownika. Jeśli jesteś posiadaczem Windowsa, sprawdź, gdzie on jest. Warto zainstalować [Vundle](https://github.com/VundleVim/Vundle.vim), czyli menadżer pakietów dla Vima. Instrukcja jest w repozytorium.  Jak już to zrobisz i dopiszesz wszystko, co potrzeba do pliku .vimrc, to możemy się brać za resztę. Na samym dole swojego pliku dopisz następujące linijki:

```sh
set number
set autointend
set showmatch
set cursorline
set laststatus=x
set tabstop=x
syntax enable
```

Kolejno oznaczają:

* Numerowanie wierszy
* automatyczne wcięcia
* oznaczanie pasujących do siebie nawiasów, cudzysłowów itp
* pokazywanie linii, w której jest kursor
* dwie kolejne linie odpowiadają za ustawienie szerokości tabulatora
* kolorowanie składni

## Pluginy 

* https://github.com/mattn/emmet-vim - Emmet dla vima, wydaje mi sie, że nie wymaga komentarza
* https://github.com/Valloric/YouCompleteMe - podpowiadanie składni - genialna wtyczka
* https://github.com/Chiel92/vim-autoformat - automatyczne formatowanie, coś jak beautifier
* https://github.com/vim-syntastic/syntastic - Sprawdzanie składni
* https://github.com/mxw/vim-jsx - Wsparcie dla kolorowania składni jsx
* https://github.com/pangloss/vim-javascript - Wspracie dla kolorowania składni js, jsDoc itp.
* https://github.com/itchyny/lightline.vim - Świetny pasek stanu
* https://github.com/tpope/v-im-fugitive - wsparcie dla gita
* https://github.com/Raimondi/delimitMate - parowanie nawiasów, znaczników i cucdzysłowów

Przy każdym instalowanym pluginie czytaj dokumentację. Czasami potrzebne jest odpalenie skryptu instalującego.

## Motywy

W sieci znajdziesz ich mnóstwo. Moim ulubionym jest [Monokai](https://github.com/sickill/vim-monokai). Ale ty pewnie lubisz jakiś inny. Z pewnością go znajdziesz, a potem taki plik z motywem dodajesz do folderu ~/.vim/colors/, a plik .vimrc uzupełniasz o linijkę:

```sh
colorscheme monokai
```

## Podsumowanie

To już wszystko na dzisiaj. Tak, używam tego zestawu i bawię sie pluginami, jednocześnie używając tego świetnego narzędzia.  Pewnie nie podejdziesz do tego z tak wielkim entuzjazmem, jak ja, ale być może miło ci się czytało. Do napisania. Miau!