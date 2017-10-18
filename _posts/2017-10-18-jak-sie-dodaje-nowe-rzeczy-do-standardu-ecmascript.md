---
layout: post
title: 'Jak się dodaje nowe rzeczy do standardu ECMAScript?'
categories: javascript
date: 2017-10-18 15:30 +0100
---

Cześć, dzisiaj napiszę o czymś mniej technicznym, a bardziej związanym z tym, jak to się dzieje, że JavaScript  wygląda i działa tak, a nie inaczej. Skąd się biorą nowe ficzery i kto właściwie za tym wszystkim stoi. Temat zawsze wydawał mi się ciekawy, a ostatnio dotarłam do tych informacji, podczas szukania informacji do pracy dyplomowej. Nie jest chyba tajemnicą, ani nawet specjalnym zaskoczeniem, że będę ją pisać na temat JS-a. 

Ostatnim dużym i dość rewolucyjnym wydaniem JS-a był ECMAScript 6 wydany w 2015 roku. To dzięki niemu mamy ciekawe nowe funkcje. A przez to, że był taki duży i nawet obecnie przeglądarki nie posiadają pełnej implementacji, musimy męczyć się z Babelem. I wiecie co? Nawet TC39, czyli komisja zajmująca się tym, co ma się znaleźć w standardzie, zauważyła że coś jest nie w porządku i nowe wydania pojawiają się co roku. 

## Kto ustala nowe standardy?

TC39 (Technical Comitee) to komisja w skład której wchodzą przede wszystkim firmy zajmujące się rozwojem przeglądarek internetowych. Delegaci tych firm spotykają się regularnie i głosują za wprowadzeniem kolejnych nowości. Co ciekawe ostateczna decyzja nie jest podejmowana większością głosów, ale za pomocą konsensusu. Tak naprawdę dla wielu członków decyzje są wiążące, gdyż nowe właściwości języka muszą zostać później zaimplementowane w silnikach przeglądarek. 

## W jaki sposób coś staje się standardem?

Ten proces składa się z pięciu etapów, a co za tym idzie, od pomysłu do implementacji jest dość długa droga. Jak to często w świecie programowania bywa, na początku jest etap 0, a nie 1.

### Etap 0

Zwany jest on strache na wróble (strawman). To jest taki zupełny początek wszystkiego. Jeden z członków TC39 lub zarejestrowanych kontrybutorów może poddać ocenie pomysł na nowy ficzer. Na razie skupia się na nieformalnym jego opisaniu, a taki dokument jest przeglądanu podczas meetingu i  w razie zgody rozpoczyna się kolejny etap do udoskonalenia.

### Etap 1

Na tym etapie zgłasza się formalną propozycję dla danej właściwości. To oznacza tyle, że potrzeba bardzo dokładnie wypisać jaki realny problem rozwiązuje dany pomysł, przedstawić rozwiązanie w postaci algorytmów, przykładów i opisu słownego. Tym zajmuje się już jeden z członków TC39. Kiedy na tym etapie, zwanym etapem propozycji (proposal), TC39 zaakceptuje daną zmianę, to tak naprawdę wyraża zainteresowanie dodania tego do nowego standardu. Oczywiście sama forma i niektóre rzeczy się zmienią, ale to już pierwszy większy krok.

### Etap 2

Na tym etapie nowy ficzer powinien być tak kompletny, jak to jest tylko możliwe. Etap szkicu (draft) pozwala już tylko na przyrostowe zmiany i zapełnianie niedoróbek. Właściwość powinna być opisana językiem jak najbardziej formalnym i zgodnym z tym stosowanym specyfikacji. Na ten moment muszą być też już gotowe dwie eksperymentalne implementacje. To jest pierwsza wersja, która pojawia się w specyfikacjach

### Etap 3

W tym momencie już absolutnie wszystko musi być skończone. Na tym etapie właściwość jest już kandydatem (candidate) do stania się standardem. Na tym etapie zbiera się feedback i jest on konieczny, aby coś mogło zostać wpisane w kolejną wersję standardu. 

### Etap 4

Tuż przed tym etapem nowy ficzer poddaje się różnym testom. Jeśli przejdzie wszystkie pozytywnie, to znajdzie się w standardzie przy najbliższym jego wydaniu.

To by było na tyle, jeśli chodzi o proces. Oczywiście został on opisany bardzo ogólnie. Jeśli chcesz poznać więcej szczegółów, to zapraszam do przeczytania fragmentu ksiązki pt. 'Exploring ES2016 and ES2017' ([odpowiedni rozdział na ten temat](http://exploringjs.com/es2016-es2017/ch_tc39-process.html)). Tymczasem żegnam się z wami, bawcie się dobrze i zbierajcie kasztany, póki jeszcze są.

Miau!

