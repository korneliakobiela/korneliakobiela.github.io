---
layout: post
title: "50 twarzy JS: Grafika w JS"
categories: programowanie javascript
date: 2017-07-08 10:01:27 +0100
---

Cześć! Dzisiaj omówimy sobie mega temat. Jak to zwykle bywa w tej fajnej serii, to można się spodziewać kolejnego odjechanego i ciekawego zastosowania JS-a. Z tytułu już wiecie, że zajmiemy się grafiką i to w pojęciu nieco innym niż klasyczny canvas. Na jednych zajęciach w tym semestrze korzystaliśmy z oprogramowania [processing](https://processing.org/). Pozwala na mega uproszczone programowanie grafiki w językach takich jak Java (standardowo), Python, ale też w naszym kochanym JS. Dla niego jest specjalna biblioteka [p5](https://p5js.org/) . Na ich stronie można znaleźć informację:

> [Hello!](http://hello.p5js.org/) p5.js is a JavaScript library that starts with the original goal of Processing, to make coding accessible for artists, designers, educators, and beginners, and reinterprets this for today's web.

Brzmi zachęcająco? To do dzieła. Napiszemy prostą aplikację webową. NAPRAWDĘ PROSTĄ. Pamiętasz, jak jako dziecko dorysowywałeś ludziom z okładek gazet wąsy, uszy lub rogi? To mniej więcej taki będzie cel tej aplikacji. Ale co ona będzie nam robić? W sumie to całkiem sporo:

* Pobierała obraz z kamery internetowej i wyświetlała na stronie
* Po kliknięciu na przycisk "Take a photo" robi zdjęcie
* Pozwala na rysowanie czarnym mazakiem po zdjęciu
* Po kliknięciu na przycisk "Download the photo!" pobiera zdjęcie na dysk

Tylko tyle i aż tyle. Wiesz, co jest najlepsze? Nasza cudowna aplikacja będzie zawierać sie w 32 (MIAU!) linijkach kodu JS. Brzmi miodnie? Zgadzam się. Na dowód pokazuję kod aplikacji w [moim repozytorium na GH](https://github.com/korneliakobiela/pirate-maker). Możesz spokojnie ściągnąć aplikację i uruchomić lokalnie. 

## Startujemy z projektem.

Jedyne, czego potrzebujesz, to edytora kodu i przeglądarki. Pliki biblioteki ściągniesz ze strony i po prostu załączasz je do pliku html za pomocą script. Przypominam, że biblioteka nie została stworzona stricte dla programistów, więc wszystko, co tylko jest możliwe, zostało uproszczone do granic możliwości. Możesz wręcz ze [strony p5](https://p5js.org/download/) pobrać paczkę complete, która zawiera boilerplate i pakiet bibliotek. 

Jak widać biblioteka p5 jest podzielona na trzy moduły:

* p5 - standardowe funkcje pakietu, rysowanie, operacje matematyczne, eventy itp
* p5.dom - pozwala na interakcję z elementami DOM
* p5.sound - rozszerza funkcjonalności webAudio, analiza i synteza dźwięku

W naszym mini projekcie będziemy wykorzystywać pierwsze dwa moduły. Na stronie projektu jest udostępniona naprawdę obszerna dokumentacja, radzę sie z nią zaznajomić, bo zasadniczo niewiele więcej potrzeba, żeby tworzyć cuda.

Struktura naszych plików będzie bardzo prosta: 

* index.html
* main.js - z logiką naszej aplikacji
* folder lib, gdzie wrzucimy pliki biblioteki

## Zaczynamy pisanie

Nasza aplikacja musi mieć odpowiednią strukturę. W p5 po prostu zamykamy nasz kod w jednej z kilku funkcji opisujących strukturę. W tym projekcie użyto dwóch, czyli szkielet aplikacji wygląda tak:

```javascript
function setup(){
  
}
function draw(){
  
}
```

Nietrudno się domyślić, co one oznaczają. Dla porządku jednak wyjaśnię:

*  setup - inicjalizacja środowiska, wywołuje sie ją raz, gdy aplikacja jest uruchamiana. 
* draw - wywoływana bezpośrednio po setup i służy do rysowania elementów.

Biblioteka jest tak bardzo uproszczona, że zmienne po prostu inicjujemy na początku programu. Potem używamy ich w odpowiednich miejscach. 

### Funkcja setup

``` js
function setup() {
  capture = createCapture(VIDEO);
  photoButton = createButton('Take a photo!');
  photoButton.parent('controlPanel');
  photoButton.mouseClicked(getImage);
  canvas = createCanvas(640,480);
  downloadButton = createButton('Download a photo!');
  downloadButton.parent('controlPanel');
  downloadButton.mouseClicked(download);
}
```

Kolejno:

* Przechwytujemy wideo (można też samo audio)
* Tworzymy button z napisem "Take a photo!"
* Definiujemy rodzica dla naszego buttonu
* Podpinamy event kliknięcia myszką - getImage to zdefiniowana przez nas funkcja

Analogicznie postępujemy z canvasem i drugim buttonem.

### Funkcja draw

``` js
function draw() {
  if (mouseIsPressed) {
    fill(0);
    ellipse(mouseX, mouseY, 10, 10);
  }
}
```

Rysować możemy na zdefiniowanym canvasie. Tu się dzieje magia. Jeżeli przycisk jest wciśnięty to rysujemy elipsę w miejscu kursora. Nasza elipsa ma szerokość i wysokość równą 10px. W ten sposób możemy rysować odręczne linie i różne kształty kursorem. 

## Dopisujemy własne funkcje

Teraz czas na własne funkcje, czyli w tym wypadku callbacki do naszych zdarzeń. To tak naprawdę nic trudnego. Oto kod:

``` js
function getImage() {
  img = capture.get(0,0,width,height);
  image(img,0,0);
}

//download image to disk
function download() {
    saveCanvas(canvas, 'portrait-' + random(1000), 'jpg');
}
```

 Pierwsza funkcja pobiera zawartośc video (jedną klatkę) i dodaje ją do canvas.

Druga zapisuje to, co mamy w canvas i nadaje odpowiednią nazwę. I to w zasadzie już koniec filozofii. 

## Podsumowanie

Biblioteka rzeczywiście została dobrze pomyślana jako narzędzie dla początkujących. W sumie bardzo dobrze się bawiłam podczas pisania tego kawałka softu. Genialnie napisana dokumentacja i wręcz trywialna struktura programu sprawia, że tu dzieje się magia. Jeśli chcesz odkryć więcej takich ciekawych projektów, to zachęcam do obserwowania mojego [konta na GitHubie](https://github.com/korneliakobiela), a jeśli chcesz być na bierząco z blogiem, to daj lajka [kociemu fanpejdżowi](https://www.facebook.com/kotzrodlowy/). Ciepło się zrobiło - pij dużo wody. 

Miau!