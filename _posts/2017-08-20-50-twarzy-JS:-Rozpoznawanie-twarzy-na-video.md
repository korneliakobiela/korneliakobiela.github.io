---
layout: post
title: "50 twarzy JS: Rozpoznawanie twarzy na video"
date: 2017-08-20 15:30 +0100
categories: programowanie javascript
---

Cześć, dzisiaj przychodzę ze specjalnym postem. Obchodzimy 127 rocznicę urodzin Lovecrafta - ojca mitologii Cthulu. To właśnie dzięki niemu od długiego czasu rozbudzają wyobraźnię twórców gier i wiernych fanów tej twórczości. Z tej okazji powstała kolejna już część z przeuroczym demem. Kot przygotował tę aplikację razem z Tomkiem Jakutem znanym w sieci jako Comandeer ([tutaj możecie obczaić jego blog, jeśli go jeszcze jakimś cudem nie znacie](http://comandeer.github.io/blog)). Wiecie, jak dwóch takich nerdów spotka się na weekend, to powstają takie cuda. Tradycyjnie możecie je zobaczyć [tutaj](https://kot-zrodlowy.github.io/tentacles-generator). Co to robi? Przyozdabia wasze piękne buźki mackami. Można ściągnąć takie zdjęcie na swój komputer i ustawić dzisiaj na profilowe. Niech zrobi się zielono. Efekt może nie powala jakoś bardzo, ale wydaje mi się uroczy i wystarczający, żeby się czegoś nowego nauczyć. 

## Co ta aplikacja robi?

Zaczniemy tradycyjnie od powiedzenia sobie, jakie kolejne kroki wykonuje nasza aplikacja. Musi ona po kolei wykonać określone czynności, żeby osiągnąć zakładany efekt. No to do dzieła:

* Pobieramy stream z kamery
* Wyszukujemy na naszym zdjęciu twarz
* Jeżeli znajdziemy twarz, to pobieramy współrzędne pikseli odpowiedzialnych za usta
* Wkładamy grafiki z mackami w miejscach pobranych pikseli 
* W momencie naciśnięcia przycisku pobieramy obecną klatkę jako zdjęcie. 

To jest główna zasada działania programu.  Oprócz tego potrzebujemy przygotować grafiki z pojedynczymi mackami i opracować prosty algorytm, który będzie nam losowo ustawiał macki z zestawu. 

## Co wykorzystamy w naszej pracy? 

Jako, że zakładamy, że to jest demo i w normalnej pracy nigdy nikomu się ono nie przyda, używamy maksymalnie prostych narzędzi do stworzenia tej aplikacji. Wiąże się to z tym, że przy zbyt długim działaniu koci laptop zaczyna mocniej szumieć i udaje, że będzie odlatywał. Na pewno da się to dużo bardziej zoptymalizować, jednak w tym momencie nie o to tutaj chodzi. 

* Ze względu na prostotę i wygodę, do obsługi grafiki i video użyliśmy znanej z jednego z poprzednich wpisów biblioteki p5 ([tutaj przeczytasz wpis o grafice](http://kot-zrodlowy.pl/programowanie/javascript/2017/06/08/50twjs-grafika-w-js.html))
* Do rozpoznawania twarzy użyjemy biblioteki [clmtrackr](https://github.com/auduno/clmtrackr). To ona wie, gdzie na zdjęciu są usta i wyczynia tę całą magię.

To jest tak naprawdę wszytko, czego potrzebujemy. Oczywiście, pierwszy pakiet nie jest ci abolutnie konieczny. Możesz wszystko obsłużyć w czystym JavaScript, jednak my postawiliśmy na szybkość pisania. Dlaczego? Pomysł nas naszedł w jeden moment i szkoda było nam czekać, aż wyda nam się kompletnie wariacki i bez sensu. 

## Słówko o rozpoznawaniu twarzy

Jeśli ciekawią Cię szczegóły, to odsyłam do wszechwiedzącego <del>wielkiego przedwiecznego</del> Internetu. W wielkim i telegraficznym skrócie realizuje się to za pomocą uczenia maszynowego i algorytmów sztucznej inteligencji. Tworzy się specjalne algorytmy, którym pokazuje się x zdjęć ( im więcej tym lepiej ), na których jest twarz i pozwala się jej nauczyć. Szuka się w ten sposób podobieństw i różnic pomiędzy poszczególnymi zdjęciami, tworząc matematyczny, zrozumiały dla komputera opis tego, czym jest twarz na zdjęciu. Potem algorytm analizuje obraz z kamery dokładnie w ten sam sposób. Na razie to tyle, na wykład z działania sieci neuronowych jeszcze przyjedzie czas.

## No to zaczynamy

Cały kod JS napisany przez nas to znowu mniej niż 80 linijek. Jak na tak duże algorytmy i wielkie kocie technologie ( których próba samodzielnej implementacji się kotu czasem śni - w koszmarach, że robi to za karę ), liczba linijek nie powala.  Pamiętajmy jednak, że korzystamy z gotowych narzędzi, które całą czarną robotę odwalają za nas. 

### index.html

W pliku html dodajemy odpowiednie biblioteki i plik z logiką naszej aplikacji:

```html
			<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.12/p5.min.js"></script>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.12/addons/p5.dom.min.js"></script>
			<script src="https://unpkg.com/clmtrackr@1.1.0"></script>
			<script src="js/app.js"></script>

```

Pamiętamy, żeby to dorzucić pod koniec body. Przed tym wstawiamy do dokumentu div, który będzie kontenerem dla naszej aplikacji.

### app.js

Biblioteka p5 ze względu na swoją prostą budowę i specyficzne przeznaczenie nie obsługuje bardziej zaawansowanych modułów i wszystko dopisuje globalnie. To nakłada na nas pewne ograniczenia względem kodu, który piszemy. Dla lepszej organizacji kodu całość aplikacji jest wrzucona w IIFE. Deklarujemy zmienne: 

```javascript
var capture, canvas, img, downloadButton, tracker, tentancles;
```

Będą one odpowiadać za następujące rzeczy:

* capture - pobieranie streamu z kamery
* canvas - jak sama nazwa wskazuje
* img - aktualny obraz z kamery
* downloadButton - Przycisk do ściągnięcia obrazu
* tracker - będzie przetrzymywał obiekt do  rozpoznawania twarzy
* tentancles - tablica z wczytanymi obrazkami macek



*ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn* li 

O przepraszam, nie wiem, co to było.  Powinniśmy teraz napisać, co się stanie, zanim nasza aplikacja się załaduje. Według dokumentacji obrazy powinniśmy załadować wcześniej, a potem tylko wstawiać je na stronę. Do tego służy funkcja preload. My w niej ładujemy obrazy do tablicy tentancles.

Później tak jak poprzednio w funkcji setup uruchamiamy przechwytywanie obrazu, canvas i rysujemy całe potrzebne gui.

```javascript
tracker = new clm.tracker();
tracker.init();
tracker.start( document.querySelector( 'canvas' ) );
```

W powyższych trzech linijkach dzieje się magia. Tutaj właśnie inicjujemy tracker i przypinamy go do naszego canvasa. Później przychodzi pora na napisanie serca naszej aplikacji, czyli sposobu w jaki pobierzemy odpowiednie punkty i wstawimy tam nasze macki, tracąc poczytalność.

``` javascript
		requestAnimationFrame( function frame() {
			getImage();
			var position = tracker.getCurrentPosition();
			if( position ) {
				position = position.slice( 44, 50 );
				position.forEach(function( element ) {
					var index = position.indexOf( element ),
					 x = position[ index ][ 0 ] - 20,
					 y = position[ index ][ 1 ] - 20;
					image(tentancles[ index ], x, y );
				})
		}
			requestAnimationFrame( frame );
		} );
```

Najpierw łapiemy obraz z kamery. Później pobieramy tablicę ze współrzędnymi punktów, w których wg algorytmu znajduje się nasza twarz. Dokumentacja biblioteki pokazuje taki rysunek:

![Twarz utworzona z punktów](https://camo.githubusercontent.com/e967f92904c8ef84228b8950d3a278efb895b9d2/68747470733a2f2f617564756e6f2e6769746875622e696f2f636c6d747261636b722f6578616d706c65732f6d656469612f666163656d6f64656c5f6e756d626572696e675f6e65775f736d616c6c2e706e67)

Mamy tutaj oznaczenie, które punkty określają daną część twarzy. Górna warga jest zaznaczona przez punkty (44 - 50). I to właśnie je potrzebujemy z całej tablicy punktów. Każdy punkt to tablica dwuelementowa, gdzie kolejne elementy to współrzędne X i Y. Wstawiamy obrazek z tablicy tentancles w miejsce. Obrazek jest zaczepiany krawędzią, dlatego wartości odpowiednio przystosowujemy.

Po dodaniu kilku pomocniczych funkcji nasza aplikacja jest gotowa. Nie było tak trudno, prawda? Całość kodu możecie zobaczyć w [kolejnym repozytorium](https://github.com/kot-zrodlowy/tentacles-generator) i oczywiście czujcie się wolni, żeby się tym pobawić. Nie popadnijcie tylko w zbyt duże szaleństwo, bo pewnego dnia naprawdę wyrosną wam macki. Autorzy tej aplikacji dołożyli wszelkich starań, żeby była dobra, jednak nie ponoszą odpowiedzialności za szkody psychiczne powstałe w wyniku używania aplikacji. Miau!