---
layout: post
title: "Tern - ciekawe narzędzie w codziennej pracy"
categories: javascript programowanie
date: 2017-08-13 18:00 +0100

---

Cześć, dzisiaj kolejny lajtowy post. Osobiście należę do osób, które uwielbiają mieć rzeczy dopasowane do własnych potrzeb i rzadko mnie zadowalają rzeczy w ich standardowej konfiguracji.  Jeśli ktoś był ciekaw, tak dalej korzystam z VIM-a w swojej codziennej pracy i z dnia na dzień dogadujemy się coraz lepiej. Jakby ktoś był ciekawy, z czago korzystam, to plik [.vimrc](https://gist.github.com/korneliakobiela/e0ae5943ef6001724f01d84fe8a36f24) załączam tutaj. Jest na bierząco aktualizowany, bo co jakiś czas zmieniam i dodaję lub odejmuję. To tak for fun.

Jedną z rzeczy, którą skonfigurowałam, było autouzupełnianie. Przydatna funkcja edytora, bez której ciężko się obejść i którą zapewnia większość nowoczesnych środowisk. JavaScript nie byłby takim przyjemnym językiem, gdyby nie miał swojego narzędzia stworzonego specjalnie w tym celu. Takie coś istnieje i ma się całkiem dobrze, zwie się [Tern](http://ternjs.net/).  Na ich stronie można wyczytać:

> Tern is a stand-alone **code-analysis engine** for JavaScript. It is intended to be used with a [code editor plugin](http://ternjs.net/#plugins) to enhance the editor's support for intelligent JavaScript editing. 

Skoro już wiesz o czym mowa, to pewnie w tej chwili przestajesz czytać, bo twój edytor ma takie rzeczy w standardzie i nie widzisz potrzeby wiedzieć nic więcej. To tu Cię zaskoczę, jest jakieś prawdopodobieństwo, że twój edytor właśnie z Terna korzysta.

## Pełna lista edytorów:

* Emacs
* Vim
* Sublime Text
* Brackets (built in to the base editor)
* Light Table
* Eclipse (and general Java API)
* TextMate
* SourceLair (built in to the base editor)
* Chocolat (built in to the base editor)
* Atom
* CodeLight

I jeszcze pewnie jakieś inne, bo informacje na stronie projektu i na githubie się trochę ze sobą rozmijają. W części z nich jest on zainstalowany bazowo, gdzie indziej dostępny jako specjalny plugin. Czemu piszę Ci o czymś, czego na co dzień nie zauważasz, nawet jeśli z tego korzystasz? Bo owszem, nawet jeśli tak, jak w Brackets, posiadasz Tern out-of-the-box, to został on standardowo skonfigurowany w sposób, jaki może ci nie odpowiadać.

## Jak skonfigurować Tern?

Wystarczy mały pliczek json o nazwie '.tern-config' w twoim katalogu domowym.  Pokazuje on z jakiego zakresu ma pobierać informacje i w jaki sposób podpowiadać składnię.

```json
{
  "plugins": {
    "node": {},
    "es_modules": {}
  },
  "libs": [
    "ecma5",
    "ecma6",
	"browser",
	"react"
  ],
  "dontLoad": [
    "node_modules/**"
    ],
  "ecmaVersion": 6
}
```

Powyżej widzisz mój, na razie prosty plik, który dodaje wsparcie dla node, es_modules, załącza biblioteki es5, es6, API przeglądarki i Reacta. Do tego pokazuje standardową wersję używanego JS-a. Tych opcji jest o wiele więcej.  Wśród pluginów możesz dołożyć wsparcie dla:

* CommonJS modules
* Doc comments
* Webpack
* RequireJS
* AngularJS
* Wiele zewnętrznych modułów do zainstalowania

Oprócz tego można zainstalować biblioteki, a także wskazać jakich rzeczy ma nie ładować dynamicznie z naszego projektu. Więcej oczywiście znajdziesz w [dokumentacji](http://ternjs.net/doc/manual.html). 

Oczywiście, możemy go skonfigurować osobno do każdego projektu, gdzie analogiczny plik wstawimy do naszego projektu i nazwiemy go .tern-project.  W ten sposób będziemy mieli dokładnie to, czego potrzebujemy, co czasem pozwala na delikatne przyspieszenie działania. 

Tymczasem to tyle na dzisiaj. Trzymaj się słonecznie. 

Miau!