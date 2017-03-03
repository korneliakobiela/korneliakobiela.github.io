---
layout: post
title: '# 50 twarzy JS: 2.Jak napisać grę w JS?'
date: '2017-03-03 05:21:27 +0100'
categories: javascript dajsiepoznac2017
---

Cześć! Pewnie zastanawiacie się, jak napisać grę w JS. Czy to w ogóle jest możliwe? Okazuje się, że tak (w końcu to język od wszystkiego) i nawet ja sobie z tym poradziłam. Jak wszyscy dobrze wiemy branża gier komputerowych ma się dobrze i rozwija się bardzo prężnie. Do mniejszych gier zazwyczaj wykorzystuje się gotowe silniki. Duże studia game developerskie zazwyczaj piszą swoje własne. Ja nie jestem aż taką masochistką, żeby pokazywać jak się pisze silnik od zera. A już na pewno nie w JS. Skoro to już ustaliliśmy, to przyszedł czas na wybranie czegoś. A wybór nie jest prosty, wystarczy spojrzeć [tutaj](https://github.com/bebraw/jswiki/wiki/Game-Engines) lub [tutaj](https://html5gameengine.com/), żeby dowiedzieć się o najpopularniejszych z nich.

Trochę poszperałam w internetach i w oczy rzucił mi się [Phaser](http://phaser.io/). Wyglądał w miarę przyjeźnie i prosto, to pomyślałam "bierę". W sumie z programowaniem gier miałam trochę wspólnego na zajęciach, ale nigdy nie robiłam tego w JS, więc można powiedzieć, że to takie pierwsze starcie. Mam nadzieję, że nie masz nic przeciwko temu, że pouczymy się trochę razem? Bo zdradzę ci taki sekret. Wiem sporo, ale nie wszystko i cały czas się uczę. Ale ale, dosyć gadania, siadajmy do kodowania! (Czy teraz można powiedzieć, że kot wielkim poetą był?)

# Co zrobimy?

To ma być jak zwykle prosty przykład (tylko nieliczni wiedzą, jak dużo czasu zajmuje zakodowanie go od zera, napisanie samego postu, to przy tym pikuś). Takich gierek jest sporo, a że pong mi się już trochę znudził, to postanowiłam napisać kopię Arkanoida. Mamy paletkę, piłkę i musimy zniknąć wszystkie klocki. Podłoga to lawa, więc jak nam piłka spadnie trzy razy, to przegrywamy. Proste jak drut.

- Na początek będziemy potrzebować trochę grafik. Można je pobrać z internetu, ale ja postawiłam na własną radosną twórczość. Żeby gra jako tako wyglądała, to potrzebujemy tła, paletki, klocka, piłeczki. Jakie one będą - niech najdziksze zakamarki twojej wyobraźni ci podpowiedzą.
- W programowaniu gier można się spotkać z terminem 'sprite'. Oznacza on każdy obiekt, który wsadzamy do naszej gry. Przy tym przykładzie to jest oczywiście ograniczone do minimum - to samo, co grafiki i jeszcze kilka napisów, żeby było wiadomo, o co chodzi.
- Podstawą interakcji w grach są kolizje - to jest ten moment, kiedy graficzne reprezentacje naszych obiektów na siebie nachodzą. Wtedy najczęściej w grach coś się dzieje. U nas - w naszym wspaniałym przykładzie - będzie to np. odbicie piłki od paletki.
- Przykład będzie dość toporny, bo nie będzie animacji, ani dźwięku. Jeśli masz ciekawy pomysł na podkład dźwiękowy zawsze możesz dołożyć kawałek kodu do projektu. To w końcu Open Source.
- Zastanawiam się po co mi ta kropka. Będzie na zapas.

# Co ten kod?

Niniejszym zaczynamy. Oczywiście najpierw potrzebujemy źródła naszego silnika. Można je pobrać z [tej strony](https://phaser.io/download/stable) albo zainstalować przez npm i później buildować projekt. O tym, jak to zrobić, napisano [tutaj](https://github.com/photonstorm/phaser#building-phaser). Jeśli już masz z czego korzystać, to możemy zacząć się bawić. Potrzebujesz prosty szablon HTML. Zakładam, że wiesz, jak to zrobić, więc przechodzę od razu do JS-a.

```javascript
const game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', {
    preload: preload,
    create: create,
    update: update
});
```

Te kilka linijek, to właściwie cała konfiguracja okna naszej gry. Ale teraz po kolei, co się dzieje z tymi parametrami:

1. Szerokość okna gry - wyrażona w pikselach
2. Wysokość okna gry - wyrażona w pikselach
3. Sposób renderowania gry. Najkorzystniejszy jest właśnie AUTO - sam dostosowuje się do przeglądarki i wybiera najlepszy sposób renderowania.
4. Id rodzica - wartość atrybutu id elementu HTML, który ma przechowywać naszą grę. Jeśli zostawisz puste, element zostanie dodany pod koniec body.
5. Trzy główne funkcje, na których będzie się opierać nasza gra.

  1. preload - wszystko, co ma się stać przed załadowaniem gry
  2. create - początkowy stan wyrenderowanej aplikacji
  3. reload - wszystkie zmiany jakie zachodzą w aplikacji

Oczywiście dalej podstawowa struktura aplikacji wygląda następująco.

```javascript
function preload() {
}

function create() {
}

function update() {
}
```

Wadą Phasera jest to, że przykładowe apki są napisane dość nieładnie. Pełno zmiennych w globalnym scope, a jak ktoś wydzieli sobie dodatkowe funkcje, zamiast robić spagetti - to już jest gość i magik programowania.

# Aplikacja musi się przygotować

Czyli bierzemy na tapetę funkcję preload. Co się musi stać, zanim te wszystkie wspaniałe przygody zostaną ukazane naszemu graczowi? Podpowiem ci, przydałoby się załadować wszystkie grafiki.

```javascript
game.load.image('player', 'assets/player.png');
```

Tak wygląda przykładowa funkcja do załadowania grafiki. Pierwszy parametr to nazwa assetu, drugi to ścieżka do niego. Nie ma tu żadnej filozofii. W ten sposób trzeba dodać każdą grafikę. To byłoby na tyle, jeśli chodzi o preload.

# Do grania, gotowi, start!

Funkcja create służy nam do stworzenia całej sceny. Tu już będzie trochę więcej pracy. To tutaj określamy co nam się pokaże na ekranie, jak będzie działać, itp.

```javascript
game.physics.startSystem(Phaser.Physics.ARCADE);
game.physics.arcade.checkCollision.down = false;
game.add.sprite(0, 0, 'background');
```

To taka ogólna konfiguracja.

1. Ustalenie rodzaju fizyki, jaki ma działać w grze. Są cztery możliwe i ten najprostszy do ogarnięcia. O reszcie możesz doczytać w dokumentacji.
2. Odblokowanie dolnej ściany okna gry. Gdybyśmy tego nie wpisali, to nasza piłka odijałaby się bez końca. A tak zacznie spadać w dół i można ją złapać.
3. Dodanie tła - dwa pierwsze argumenty to pozycja początku tła. Trzeci to nazwa assetu. Bez tego standardowo tło jest czarne.

Teraz przyszedł czas na pojedynczy asset. Weźmy na przykład taką piłkę.

```javascript
ball = game.add.sprite(game.world.centerX, player.y - 22, 'ball');
ball.anchor.setTo(0.5, 0.5);
game.physics.arcade.enable(ball);
ball.body.collideWorldBounds = true;
ball.checkWorldBounds = true;
ball.body.bounce.set(1);
ball.events.onOutOfBounds.add(death, this);
```

To też nie wygląda zbyt skomplikowanie. Zauważ, że pierwsza linijka jest taka sama jak przy dodawaniu tła. Przypadek? Nie sądzę! Dalej przypisujemy punkt zakotwiczenia (moje własne tłumczenie), czyli to, od którego elementu ma liczyć pozycję. Udostępniamy naszej piłce prawa fizyki, po czym każemy jej mieścić się w ramach naszego świata. To tak, żeby nie wyleciała w kosmos. Przedostania linijka to, siła odbicia - jeśli damy jeden piłka odbija się z tą samą energią, mniej - piłka zwolni, więcej - przyspieszy. Ostatnim poleceniem obsługujemy zdarzenie ucieczki piłki w kosmos.

Paletkę robi się mniej więcej tak samo. Znacznie ciekawsze są cegiełki, które będziemy zbijać. Mianowicie dodaje się je jako całą grupę, a potem obsługuje wspólnie.

```javascript
bricks = game.add.group();
bricks.enableBody = true;
for (var i = 0; i < 11; i++) {
    for (var j = 0; j < 5; j++) {
        var brick = bricks.create(i * 70 + 20, 40 + j * 40, 'brick');
        brick.body.bounce.set(1);
        brick.body.immovable = true;
    }
}
game.physics.arcade.enable(bricks);
```

Tak wygląda dodawanie grupy. Jak widać, fizyka jest dodana wspólnie. Zastanawiać może jednak druga linijka. Czym jest to ciało? To po prostu materialna strona naszych assetów. Jeżeli dodamy je jako grupę, to trzeba tak zrobić. Zostało nam jeszcze dodanie tekstów i obsługa kliknięcia myszką.

```javascript
startText = game.add.text(game.world.centerX, game.world.centerY, 'click To Start', {
    fontSize: '50px',
    fill: '#fff'
});
startText.anchor.setTo(0.5, 0.5);

game.input.onDown.add(release, this);
}
```

## Ale tu się nic nie dzieje.

Jeszcze nie, bo na razie ustaliliśmy, co mamy narysować. Dopiero funkcja update zakłada jakieś działania. Kod aplikacji ma w sumie zaimplementowane dwa sterowania:

- Paletka śledzi ruch myszki
- Poruszanie paletki za pomocą strzałek.

Odkomentowane jest to pierwsze, bo łatwiej wtedy zapanować nad prędkością. Ale jeśli chcesz możesz się pobawić też drugim przykładem. Jeśli weźmiemy na tapetę to pierwsze, to kod mógłby wyglądać tak:

```javascript
player.x = game.input.x;
```

Nie wolno nam jednak zapomnieć o jednym szczególe. Ustawiliśmy zakotwiczenie na środek naszej paletki. Może więc sie tak zdarzyć, że nasza paletka będzie nam trochę znikać za ścianą. Można sobie tak z tym poradzić.

```javascript
if (player.x < 75) {
    player.x = 75;
} else if (player.x > game.width - 75) {
    player.x = game.width - 75;
}
```

I teraz najważniejsze - kolizje. Musimy podać jakie dwa elementy chcemy ze sobą skolidować. Potem podajemy funkcję, która ma coś z takimi obiektami zrobić.

```javascript
game.physics.arcade.collide(ball, player, collidePlatform, null, this);
```
Ważne jest, żeby paramtetry callbacku napisać w tej samej kolejności w jakiej podaliśmy pierwsze dwa do kolizji. Bo może się dziać coś dziwnego. Np. po uderzeniu piłki w klocek, piłka staje, a to klocek odlatuje. Potwierdzone info.

W sumie to tyle z ważnych rzeczy. Pełny kod znajdziecie, jak zawsze, na moim [GitHubie](https://github.com/korneliakobiela/sample-arkanoid/tree/v1.0.0). Można też ściągnąć i po prostu zagrać. Pochwalcie się potem wynikami. Tylko wtedy bez oszustw. Powodzenia.

Miau!
