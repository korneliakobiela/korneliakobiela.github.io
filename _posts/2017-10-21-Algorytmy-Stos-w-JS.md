---
layout: post
title: 'Algorytmy – Stos w JS'
categories: algorytmy
date: 2017-10-21 16:00
---

Cześć, sobotni post to już obiecany algorytm lub struktura danych. Z racji tego, że to jest mój blog, a na nim mój autorski cykl, to postanowiłam zacząć od rzeczy teoretycznie prostych, ale niekoniecznie w takiej kolejności, jak się to przerabia w większości podręczników. Jednocześnie nie chcę być Waszym jedynym źródłem wiedzy na ten temat. Gdy czegoś nie wiesz, to poszukaj dodatkowej wiedzy na ten temat, jeśli chcesz uzupełnić coś, komentarze są na dole. 

Postanowiłam dzisiaj opowiedzieć o tym, czym jest stos (ang. *stack*). Dalej nie mówimy o algorytmach, ale struktury danych to już bardzo bliski temat. Bo stos jest strukturą danych, czyli sposobem, w jaki możemy organizować i przechowywać dane do działania programu. Strukturami danych, które z pewnością znasz, są tablica albo obiekt. Są one na stałe w języku, a wiele pozostałych trzeba zaimplementować samodzielnie. Żeby Cię nie martwić, dodam tylko, że te inne też często są już zaimplementowane w bibliotekach, ale warto po prostu wiedzieć, na czym to polega i jak z tego korzystać. 

Stos jest strukturą danych typu LIFO (ang. *last in first out*), co samo w sobie mówi już wiele o jego działaniu. Zanim jednak wytłumaczę Ci formalnie co i jak, to pozwolisz, że przytoczę kilka przykładów. Lubisz czytać książki? Ja uwielbiam. Mam cały regał pełen (a nawet przepełniony) różnych książek i prawie zawsze stosik rzeczy do przeczytania, tuż koło łóżka, ułożonych jedna na drugiej. Żeby dostać się do tomu, który jest na samym dole (a to zawsze jest ten najbardziej potrzebny), to trzeba ściągnąć po kolei wszystkie. Podobnie jest ze stertą ubrań do uprasowania: najpierw ściągniemy to, co ostatnie tam odłożyliśmy. 

Dokładnie tak samo działa stos jako struktura danych w programowaniu. Bezpośrednio możemy się dostać tylko do ostatnio odłożonego na stos elementu. Żeby się dostać do jakiegoś wcześniejszego, to musimy zdjąć ze stosu poprzednie elementy. Oprócz tego przydatne mogą być takie informacje, jak wielkość stosu lub to, czy jest pusty. Jeśli chodzi o działania, to warto, żeby na stos można było wsadzić nowy element, usunąć ostatni, sprawdzić, ile jest elementów, a także czy stos jest pusty. 

Do czego to nam się może przydać? W sumie do głowy przychodzi mi jedno bardzo konkretne zastosowanie. Chodzi o walidację poprawności zapisu rzeczy w nawiasach. Bardziej szczegółowo, chodzi o to, czy jeśli nawias został otwarty, to poprawnie go zamknięto (użyto analogicznego znaku).  Przykładowo:

```js
'(())()' // To są poprawne nawiasy
'()()(' // Te są niepoprawne
'(()))' // Te też są niepoprawne
```

No ok, tylko co ma do tego stos? Pomyśl chwilę. Na stos możemy dodawać różne elementy, więc pojedyncze nawiasy też się nie obrażą, jeśli je tam włożymy. Załóżmy, że mamy te nawiasy zebrane w jeden łańcuch znaków. Za każdym razem, kiedy jakiś nawias jest otwierany, wkładamy go na stos. Nawias zamykający usuwa ostatni element ze stosu. Nawiasy są napisane poprawnie, w wypadku, gdy po przeiterowaniu całego łańcucha znaków stos jest pusty. Ale oczywiście w kodzie (i przyrodzie) może wystąpić więcej przypadków. Po pierwsze, gdy przeiterujemy cały łańcuch, dojdziemy do końca, a jednocześnie na stosie coś jeszcze zostanie. To znaczy, że otwarto za dużo nawiasów, a zapomniano je zamknąć. Druga możliwość to, gdy jeszcze nie przeiterowaliśmy do końca łańcucha, a w pewnym momencie stos jest już pusty i jednocześnie chcemy coś z niego zdjąć. Oczywiście, nie możemy tego zrobić. Dla naszego przypadku oznacza to tyle, że mamy nadmiarowy nawias zamykający i on nie ma pary w żadnym otwierającym. 

Oczywiście powyższy problem można rozwiązać inaczej, ale na tym polega przecież programowanie. To może trochę napiszę, jak taką strukturę danych można sobie zaimplementować. Najbardziej profesjonalnie jest skorzystać z tego, co nam daje programowanie obiektowe. Tworzymy klasę (lub konstruktor a nawet po prostu obiekt) dla naszego stosu. A w niej:

* tablica -> baza naszego stosu, będziemy tam przechowywać wszystkie elementy
* wielkość stosu -> standardowo wielkość naszej tablicy

Do tego przydałyby nam się jakieś metody, dzięki którym skorzystamy z działania naszego stosu:

* isEmpty -> sprawdzanie, czy stos jest pusty
* push -> dodanie elementu na wierzch stosu
* pop -> usunięcie elementu z wierzchu stosu
* clear -> ustawienie wielkości stosu na 0
* length -> pobranie wielkości stosu

A oto moja implementacja:

```js
class Stack {
    
  constructor() {
    this.storage = [];
    this.length = 0;
  }
  
  isEmpty() {
  	return this.length === 0;
  }
  
  push( element ) {
    this.storage.push( element );
  }
  
  pop() {
    this.storage.pop();
  }
  
  clear() {
    this.length = 0;
  }
  
  getLength() {
    this.length = this.storage.length;
    return this.length;
  }
  
}
```

To wszystko na dzisiaj. Mam nadzieję, że się podobało. Trzymaj się ciepło. Miau!
