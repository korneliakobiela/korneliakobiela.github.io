---
layout: post
title: "Najczęstsze błędy początkujących (i nie tylko) webdeveloperów"
categories: programowanie
date: 2017-09-11 23:08 +0200
---

Hej! Dzisiaj Kot wziął wolne, dlatego nowego posta napisze pierwszy Lew polskiego IT, Comandeer w osobie własnej. Roar!

Ostatnio dość mocno udzielam się na różnych grupach dla początkujących webdeveloperów, oceniając wrzucane strony czy aplikacje. Niektóre z błędów powtarzają się na tyle często, że postanowiłem nieco więcej o nich napisać. Oto zatem zbiór najczęstszych błędów popełnianych przez początkujących (i nie tylko) webdeveloperów.

## Obrazki bez lub ze złym `[alt]`

To chyba najpopularniejszy błąd, a zarazem jeden z mających największe konsekwencje. Tekst alternatywny dla obrazka bowiem nie jest przeznaczony wyłącznie do wyświetlania się wtedy, gdy obrazek się nie wczyta. Jest on też wykorzystywany m.in. przez czytniki ekranowe, by poinformować niewidomych użytkowników Sieci, co dana grafika przedstawia.

Odnośnie tworzenia dobrych opisów obrazków [bardzo wiele mówi sama specyfikacja](http://w3c.github.io/html/semantics-embedded-content.html#alt-text), a także inne, liczne źródła (m.in. [poradnik na WebAIM](http://webaim.org/techniques/alttext/)) – a mimo to najczęściej są one tworzone niepoprawnie. Wypada przypomnieć podstawowe zasady raz jeszcze.

### Obrazki-ozdobniki

Jeśli obrazek jest po prostu ozdobnikiem graficznym i nie wnosi nic do treści, wówczas powinien mieć pusty `[alt]`:

```html
<img src="pozioma-linia.png" alt="">
```

Nie ma powodu, dla którego czytnik ekranowy miałby informować swojego użytkownika, że w tym miejscu jest pozioma linia. Dodałoby to tylko zbędnego szumu informacyjnego.

Jak poznać, czy dany obrazek jest ozdobnikiem? Należy sprawdzić, czy nie jest przypadkiem elementem layoutu. Jeśli jest – jest ozdobnikiem. Dodatkowo warto pomyśleć, czy dany obrazek jest niezbędny do zrozumienia danej treści? Bardzo często do artykułów dodaje się jakiekolwiek ilustracje, by przyciągnąć uwagę czytelnika (np. zdjęcie pięknej kobiety). Jeśli jest to tego typu losowy obrazek, wówczas to też jest ozdobnik. Jednak jeśli dany obrazek coś do treści wnosi (np. jest to wykres), wówczas powinien mieć odpowiedni opis.

### Obrazki duplikujące treść

W przypadku obrazków, które powielają treść znajdującą się tuż obok w formie tekstu, stosuje się ten sam zabieg, co w wypadku ozdobników: zostawia się pusty `[alt]`. Nie ma wszak sensu, by czytniki ekranowe czytały dwa razy to samo.

Tego typu obrazki najczęściej spotyka się jako ikonki przy nagłówkach czy też jako zdjęcia członków zespołu

```html
<h2>Comandeer</h2>
<img src="comandeer.jpg" alt="Comandeer">
<p>Boss i megaprogramista.</p>
```

Jak widać, zdjęcie nie wnosi nic nowego – po prostu w sposób graficzny przekazuje informację zawartą w nagłówku. Stąd można spokojnie zmienić `[alt]` na pusty:

```html
<h2>Comandeer</h2>
<img src="comandeer.jpg" alt="">
<p>Boss i megaprogramista.</p>
```

### Obrazki w elementach interaktywnych

Chyba najpopularniejszym przykładem tego typu obrazków jest podlinkowane logo. Tutaj błędem jest fakt, że w `[alt]` faktycznie pada słowo "logo":

```html
<a href="/">
	<img src="logo.svg" alt="Logo Nazwa Strony">
</a>
```

W przypadku obrazków, które są jedyną zawartością linku czy przycisku, ich `[alt]` staje się opisem całego linku/przycisku. To oznacza, że opis obrazka powinien informować, do czego dany element służy. Informacja typu "Logo Nazwa Strony, link", jaką poda czytnik ekranowy, jest bowiem niepoprawna. Nie jest to link do logo strony, lecz do strony głównej witryny. Stąd odpowiedni `[alt]` brzmiałby po prostu "Nazwa Strony" albo "Powrót do strony głównej":

```html
<a href="/">
	<img src="logo.svg" alt="Nazwa Strony">
</a>
```

### Obrazki ważne dla treści

Są w końcu i obrazki ważne dla treści. Wówczas warto jak najdokładniej opisać, co na danym obrazku/zdjęciu się znajduje. Bardzo krótkie, ogólne opisy nie są pomocne:

```html
<img src="papuga.jpg" alt="Zdjęcie papugi">
```

Wypada nieco się rozpisać:

```html
<img src="papuga.jpg" alt="Papuga o jasnoczerwonym upierzeniu, siedząca na gałęzi palmy kokosowej. Ptak w swoim dziobie trzyma orzech.">
```

Warto przy tym zwrócić uwagę, że używanie słów typu "zdjęcie", "obrazek" jest całkowicie zbędne – czytniki ekranowe same dodają zwrot "picture" bądź podobny.

W przypadku wykresów warto zamieścić opis normalnie w tekście strony, co pozwoli wszystkich użytkownikom lepiej zrozumieć przedstawione dane matematyczne:

```html
<img src="chart.svg" alt="Wykres produkcji bananów w roku 2015">
<p>Jak pokazuje wykres, na przełomie roku 2014 i 2015 doszło do znaczącego wzrostu liczy produkowanych bananów […]</p>
```

## Ikonki

Jeśli wstawiasz ikonki tak:

```html
<i class="fa fa-zoom"></i>
```

lub podobnie, to [robisz to źle](https://comandeer.github.io/blog/a11y/html-css/2017/02/28/o-ikonkach-slow-kilka.html).

W przypadku ikonek zasady są podobne, jak przy obrazkach. Jeśli są tylko ozdobnikiem, nie trzeba dla nich podawać tekstowej alternatywy. Jeśli jednak w jakikolwiek sposób wnoszą coś do treści (np. ikonka telefonu przy numerze telefonu zaznacza, że jest to numer telefonu), wówczas należy podać tekstową alternatywę:

```html
<span class="fa fa-phone" aria-hidden="true"></span><span class="visuallyhidden">Telefon</span> <a href="tel:+48666666666">666-666-666</a>
```

## Pola formularza bez etykiety

**Każde** (i mam na myśli _naprawdę_ **każde**) pole formularza, które nie jest przyciskiem, powinno mieć etykietę w znaczniku `label`. Od tej reguły nie ma wyjątku. [Mówiłem o tym dla Kodu.je kiedyś](https://www.youtube.com/watch?v=hffiWUbbPFs).

Dlaczego `[placeholder]` nie wystarcza? Ponieważ w chwili, gdy cokolwiek do pola wpiszemy, informacja o tym, co w danym polu ma się znajdować, jest tracona bezpowrotnie. Co więcej, użytkownik może nigdy się nie dowiedzieć, co w danym polu miało być, jeśli przeglądarka automatycznie te pola uzupełni (użytkownik po prostu zobaczy wypełniony formularz).

Etykiety są jeszcze ważniejsze w przypadku czytników ekranowych, gdyż te – jeśli z danym polem nie jest powiązana żadna etykieta – nie będą w stanie go zidentyfikować, przedstawiając je użytkownikowi po prostu jako "puste pole tekstowe". Niezbyt pomocne.

Warto także zauważyć, że w przypadku pól tekstowych etykieta powinna być **przed** polem, a w przypadku pól wyboru i radiobuttonów – **za** polem. Jest to ogólnie przyjęta konwencja i [takiej się użytkownicy spodziewają](https://www.w3.org/WAI/tutorials/forms/labels/#visual-position-of-label-text).

Jeszcze warto od razu wspomnieć, że w przypadku radiobuttonów opis dla całej ich grupy najlepiej dodać przy pomocy `fieldset > legend`:

```html
<fieldset>
	<legend>Ulubione żarcie (ale tylko jedno!)</legend>
	<p><input type="radio" name="food" id="food1" value="1"><label for="food1">Pizza</label></p>
	<p><input type="radio" name="food" id="food2" value="2"><label for="food2">Pizza</label></p>
	<p><input type="radio" name="food" id="food3" value="3"><label for="food3">Pizza</label></p>
	<p><input type="radio" name="food" id="food4" value="4"><label for="food4">Pierogi</label></p>
</fieldset>
```

## Milion skryptów i arkuszy stylów

Tak, wiem, [mamy już HTTP/2.0](https://http2.github.io/) i liczba żądań aż tak bardzo nie boli… Niemniej twierdzenie, że nie trzeba tego optymalizować, jest bardzo słaba. Jeśli nie stosuje się [technik preloadingu](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/) czy też nie stosuje się tzw. [server pusha](https://www.igvita.com/2013/06/12/innovating-with-http-2.0-server-push/), wczytywanie wielu plików nawet w HTTP/2.0 wciąż nie jest na tyle wydajne, by się tym totalnie nie przejmować.

Więc jeśli jest okazja, żeby z 5 plików zrobić 1-2, to [_należy_ to zrobić](http://engineering.khanacademy.org/posts/js-packaging-http2.htm). Bo wbrew pozorom poprawna optymalizacja wczytywania tego wszystkiego nie jest tak prosta, jak się wydaje.

## Elementy interaktywne

W HTML-u mamy 2 podstawowe elementy interaktywne: link (`a`) oraz przycisk (`button`). Jeśli na stronie po kliku ma zostać wykonana jakaś akcja, [należy użyć przycisku](https://developer.paciellogroup.com/blog/2011/04/html5-accessibility-chops-just-use-a-button/). Jeśli natomiast user ma zostać odesłany na inną stronę, [należy użyć linku](https://christianheilmann.com/2014/01/05/endangered-species-of-the-web-the-link/).

Konstrukcje typu klikalne `li` czy `span` są **niedostępne**, ponieważ nie dość, że nie są przedstawiane czytnikom ekranowym jako przyciski, to dodatkowo nie zachowują się jak one: nie łapią focusa ani nie są możliwe do aktywowania z poziomu klawiatury (zarówno przez <kbd>Enter</kbd>, jak i <kbd>spację</kbd>). Jeśli zatem ma się coś klikalnego na stronie, warto sprawdzić, czy aby na pewno jest to przycisk lub link.

Oczywiście linków z przyciskami **nie wolno** łączyć, bo służą one zupełnie różnym celom i część przeglądarek takiego połączenia nawet nie obsługuje. Zatem zamiast robić:

```html
<a href="/">
	<button>Przycisk, ale link</button>
</a>
```

wypada po prostu ostylować link.

Warto też wspomnieć o tym, że **każdy element interaktywny musi mieć tekstową etykietę**, zatem przycisk do zamykania nie może wyglądać tak:

```html
<button>&times;</button>
```

ale powinien wyglądać tak:

```html
<button aria-label="Zamknij" title="Zamknij">&times;</button>
```

lub tak:

```html
<button title="Zamknij">
	<span aria-hidden="true">&times;</span>
	<span class="visuallyhidden">Zamknij</span>
</button>
```

## Mieszanie JS-a z HTML-em

[Praktyka uznana za złą w tamtej erze](https://kornel.ski/pl/onclick), niemniej wciąż popularna. Nie dość, że [niszczy podział aplikacji na warstwy](http://webroad.pl/inne/3722-progressive-enhancement-zapomniany-fundament), to dodatkowo tworzy tzw. [<i lang="en">tight coupling</i>](https://stackoverflow.com/a/2832047) pomiędzy HTML-em i JS-em.

Dodatkowo tego typu działanie **zmniejsza bezpieczeństwo strony WWW**, ponieważ pozwala przemycać różnego rodzaju [ataki XSS](https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)), wymuszając [obniżenie poziomu CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) (które są na dzień dzisiejszy standardem ochrony aplikacji internetowych).

Zatem jak się to powinno robić? W pełni przy pomocy JS-a, przy użyciu [`addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener).

## Stylowanie po `[id]`

[Kolejna znana w środowisku zła praktyka](https://forum.pasja-informatyki.pl/109776/html-class-czy-id?show=109816#a109816). Wszystko rozchodzi się o to, że style powinny być jak najbardziej możliwe do ponownego użycia. Dodatkowo należy zachowywać [płaską specyficzność](https://csswizardry.com/2016/11/nesting-your-bem/#specificity). Używanie `[id]` sprawia, że [specyficzność znacząco podskakuje](http://www.standardista.com/css3/css-specificity/). Nie ma bowiem sensownego sposobu (`!important` _nie_ jest sensownym sposobem), aby nadpisać style nadane przy pomocy selektora `#id`. Tym samym style stają się trudniejsze do zarządzania.

Czy zatem nie powinno używać się `[id]` w kodzie HTML? Powinno, ale **nie do stylowania**. `[id]` są świetne jeśli chcemy "wystawić" elementy do użycia w JS czy wraz z ARIA, a także do [tworzenia punktów nawigacyjnych](http://tutorials.comandeer.pl/html5-blog.html#artykul-naglowki-jako-punkty-nawigacyjne). W przypadku stylowania warto jednak posługiwać się klasami i [metodologiami typu BEM](https://comandeer.github.io/blog/html-css/javascript/daj-sie-poznac-2017/2017/05/12/bem-jako-architektura.html).

Od razu warto dodać, że [selektory typu `body footer p a` są złe](https://csswizardry.com/2012/05/keep-your-css-selectors-short/) z takiego samego powodu, co `[id]`: mają niepotrzebnie wysoką specyficzność, którą później trudno nadpisać. `.footer__link` jest nie dość, że czytelniejsze, to dodatkowo banalne w nadpisaniu – wystarczy po prostu inna klasa.

## Brak deklaracji języka

Warto określać język strony przy pomocy atrybutu `[lang]` przy znaczniku `html`. Pozwoli to różnych technologiom asystującym (np. czytnikom ekranowym) dobrać odpowiednie narzędzia do odczytywania treści strony.

Oczywiście w przypadku obcojęzycznych wtrąceń w treści warto je również oznaczać przy pomocy tego samego atrybutu:

```html
<p><i lang="en">Apple</i> to po angielsku jabłko.</p>
```

## Myślenie wyglądem

Z HTML-a bez semantyki robi się T – sam tekst. Dlatego tak niezmiernie ważne jest używanie znaczników zgodnie z ich przeznaczeniem. Bardzo łatwo sprawdzić, czy nasza strona jest semantyczna, po prostu wyłączając CSS. Można do tego użyć [prostej skryptozakładki](javascript:document.querySelectorAll('[rel=stylesheet],style').forEach(n=>n.remove());) lub [odpalić Lynksa](http://lynx.browser.org/). Jeśli strona po jej zastosowaniu jest czytelna i widać wyraźnie nagłówki, menu itd., to znaczy, że strona najprawdopodobniej jest napisana w pełni poprawny, semantyczny sposób. Jeśli po wyłączeniu CSS-a strona staje się całkowicie nieczytelna i nie wiadomo, co jest czym, wówczas raczej nie ma w niej za dużo semantyki.

A brak semantyki to brak wsparcia choćby dla czytników ekranowych czy – co być może dla niektórych będzie bardziej przekonujące – robotów Google'a.

## Nieopisowe linki

"Kliknij tutaj" ma znaczenie tylko w konkretnym tutaj i tylko jeśli kontekst jest odpowiednio jasny. Niemniej w chwili, gdy użytkownik będzie miał zaprezentowane linki jako po prostu listę, to setka wyciągniętych z kontekstu "tutaj" doprowadzi go jedynie do białej gorączki. Bardzo podobny efekt będzie miała nawigacja po stronie klawiszem <kbd>Tab</kbd>, podczas której użytkownik będzie się natykał po prostu na kolejne "tutaj". Jeśli link prowadzi do strony o jednorożcach, to jego opis powinien na to wskazywać. "Strona o jednorożcach" to o wiele lepszy opis niż "tutaj".

## Niski kontrast

[Standard WCAG 2.0 bardzo wyraźnie określa wymagania co do kontrastu](http://internet-bez-barier.com/kontrast/). Warto się do nich stosować, żeby strony były dostępne także dla osób niedowidzących lub mających inne wady wzroku. Bardzo dobrym narzędziem do sprawdzania kontrastu jest [Contrast Ratio od Lea Verou](http://leaverou.github.io/contrast-ratio/).

## [Błąd #1](https://kornel.ski/pl/bledy#sec20)

>   Największy błąd ze wszystkich błędów to nie słuchać dobrych rad. Nikt nie jest doskonały i nie należy się obrażać za konstruktywną krytykę.

## I to by było na tyle…

Uff, trochę się rozpisałem, a i tak raptem przejechałem po powierzchni problemu, bez wgłębiania się w żadne szczegóły. Na temat każdej z tych spraw wypadałoby napisać obszerny artykuł, niemniej… nie mam za bardzo czasu. W końcu Lew musi ścigać antylopy, a te za szybko uciekają, by jeszcze się skupiać na pisaniu. [Roar!](https://www.youtube.com/watch?v=UH8bkmm9XlY)