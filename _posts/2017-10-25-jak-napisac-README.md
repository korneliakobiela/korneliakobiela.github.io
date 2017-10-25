---
layout: post
title: Jak napisać README?
categories: programowanie
data: 2017-10-25 17:00 +0100
---

Cześć, jak na razie idzie mi świetnie z pisaniem postów, nie sądzisz? Mam nadzieję, że tobie też się to podoba. Dzisiaj postanowiłam napisać kilka praktycznych wskazówek odnośnie tworzenia dokumentu README w twoim projekcie. Jeśli publikujesz na platformie GitHub, to wiesz, jak bardzo ważny jest ten dokument. Może nawet bardziej odczuwalne to jest, kiedy szukasz rozwiązania pomocniczego  dla twojego projektu i próbujesz rozgryść, czy ten pakiet jest tym, czego właśnie potrzebujesz. Dobrze napisane README może być wspaniałą wizytówką i reklamą twojego projektu, a to kiepskie lub całkowity jego brak odwróci uwagę nawet od najwspanialszego projektu.

## Najpierw forma, czyli jak napisać?

Przede wszystkim: po angielsku.

Dlaczego? 

Bo wrzucasz coś do międzynarodowego internetu i chcesz dotrzeć do jak największej liczby osób. Moja kocia intuicja podpowiada, że nawet jak chcesz po polsku, to warto wysilić się i napisać chociaż jedno zdanie w języku angielskim. Grzeczność nakazuje, żeby się wytłumaczyć, dlaczego pozbawiasz obcojęzycznych developerów możliwości poznania twojego wspaniałego oprogramowania. 

Druga sprawa, to warto opanować składnię Markdown, która jest standardem w dokumentowaniu kodu. Nie wiesz, co to za potwór i jak sobie z nim poradzić? Spokojnie, w twojej szafie czają się gorsze. Pod łóżkiem też. Jest to bardzo prosty sposób formatowania dokumentów tekstowych. Jeśli nie wiesz, gdzie szukać informacji o nim, to odsyłam do odpowiedniego poradnika napisanego przez GitHub ([przewodnik po składni Markdown](https://guides.github.com/features/mastering-markdown/)). Moja opinia jest taka, że warto się wyposażyć w odpowiedni edytor do plików md. Ja sama korzystam z Typory ([strona projektu](https://www.typora.io/)), ale jeśli chcesz, to możesz po prostu zainstalować odpowiednią wtyczkę w swoim repozytorium kodu.

## Treść - o czym pisać?

Skoro już wiesz jak, to pora się dowiedzieć, co powinno się zawrzeć w treści takiego dokumentu. No bo to jest chyba sprawa, która straszy najbardziej. Pomyśl teraz przez chwilę, że wchodzisz do repozytorium jakiegoś projektu. Czego oczekujesz od pliku README? Jakie informacje chciałbyś tam znaleźć? Odpowiedź na te pytania zależy od celu, w jakim tu zajrzałeś, ale pomogę ci trochę poukładać te informacje. 

1. Na samym początku powinieneś napisać co to za projekt i cel jego powstania. Na dobrą sprawę wystarczą dwa lub trzy zdania. 
2. Informacje o tym, jak zainstalować twoje oprogramowanie. Jeśli to jakaś biblioteka programistyczna, to opisz w miarę dokładnie sposób, w jaki można ją zintegrować ze swoim projektem. Jeśli oprogramowanie działa na kilku systemach, to pamiętaj, że jego instalacja może się różnić w zależności od systemu. Tutaj umieść też informacje do oprogramowania niezbędnego w instalacji, zanim się uruchomi twój kawałek softu. Warto poratować przykładowymi zaklęciami z konsoli, które będą pomocne w instalacji.
3. Instrukcja użycia twojego softu. Jeśli to jakaś biblioteka lub narzędzie pomocne w programowaniu to przykłady użycia w kodzie (nie za długie i opatrzone stosownym komentarzem). W sytuacji, gdy piszesz aplikację wyposażoną w GUI, warto umieścić jakiś zrzut ekranu w swojej dokumentacji.
4. Kilka zdań o tym, w jaki sposób ktoś może pomóc w rozwoju oprogramowania. Może tu być też odnośnik do dokumentu CONTRIBUTING, gdzie umieścisz szczególowe informacje dla potencjalnych pomocników.
5. Informacja o licencji lub odnośnik do osobnego pliku z licencją. 
6. Możesz umieścić informacje kontaktowe, może jakieś linki do strony www i mediów społecznościowych. 
7. Co jeszcze uważasz, za przydatną infromację. 

Myślę, że dało ci to ogólny obraz, o czym warto napisać w twoim README.

## Gdzie to napisać?

Plik README dla twojego projektu możesz umeścić w trzech miejscach:

* Najczęściej znajduje się on w katalogu głównym projektu. 
* Jeśli jednak nie chcesz z jakiegoś powodu, go tam umieszczać, to masz jeszcze dwie opcje. Jedną z nich jest katalog `docs`
* Ostatnią i chyba najrzadziej stosowaną, jest stworzenie katalogu `.github`  i umieszczenie tam pliku README. 

W każdym z tych miejsc GitHub znajdzie sobie ten plik i pokaże jego zawartość poniżej listy katalogów twojego projektu.

To już wszystko na dzisiaj. Mam nadzieję, że ci się spodobało. Wiesz, że zawsze możesz przedstawić swój punkt widzenia w komentarzach. Trzymaj się ciepło. Miau!