---
layout: post
title: "50 twarzy JS: 4. Aplikacja mobilna w JS"
---

Cześć! Pyrkon minął, majówka również. Ja zasłużenie odpoczywałam przy dobrych larpach ([Co to jest larp?](https://pl.wikipedia.org/wiki/Live_action_role-playing)) i sesjach rpg w tym czasie. Co to ten Pyrkon? Rzeknę tak, największe święto fantastyki w naszym kochanym kraju, odbywające się co roku w Poznaniu. Zarówno miejsce jak i czas naładowane niesamowicie pozytywną energią, gdzie niedobór snu i jedzenia jakoś nikomu nie przeszkadza, bo chyba żyjemy tam oktaryną i zasobami many wszelakiej. *Ale zaraz, zaraz, Kocie, czemu ty nam o tym piszesz* - zapytacie. To zrozumiałe, w końcu blog jest technologiczny i powinny się na nim pojawiać poważne programistyczne treści. Ale spokojnie mięsko też się dzisiaj pojawi - w końcu tytuł mówi sam za siebie.  Wracając do Pyrkonu - przytuliłam tam ponad 200 osób (tak liczyłam to ręcznie, na pazurkach) i tak sobie pomyślałam, że gdyby mieć proste narzędzie do zliczania tych wszystkich tulasków. Jako że zabawa odbywa się tam raczej bez elektroniki, a przynajmniej ja ten czas tak spędzam. Gniazdko elektryczne jest na wagę złota - ja już jestem nauczona brać dwa powerbanki po to, żeby móc pstrykać zdjęcia co ciekawszym rzeczom. Skoro najbardziej dostępną elektroniką w takiej sytuacji są urządzenia mobilne, to warto postarać się o napisanie takiej apki (która rozwiązuje problemy kociego pierwszego świata) i podzielenie się tym z wami.

## Ale jak to, mobilne w JS?

Czy ten cykl nie miał pokazać, że w JS można napisać, jeśli nie wszystko, to na pewno bardzo dużo? Przypominam tylko o tym. Kwestia użycia odpowiednich narzędzi. Czego użyjemy tym razem? Apache Cordova - frameworka do tworzenia aplikacji na różne platformy mobilne ([link do dokumentacji Cordovy](https://cordova.apache.org/docs/en/latest/)) - pozwala nam pisać kod aplikacji raz, a potem buildować paczki na różne platformy. Oczywiście nie zawsze to działa tak różowo. Warto jednak wiedzieć, że jest taka możliwość. Oczywiście pokażę przykład apki poglądowej, ale co do reszty, wiadomo dokumentacja jest jak najlepszym źródłem informacji. O samym narzędziu możemy przeczytać na ich stronie:

> Apache Cordova is an open-source mobile development framework. It allows you to use standard web technologies - HTML5, CSS3, and JavaScript for cross-platform development. Applications execute within wrappers targeted to each platform, and rely on standards-compliant API bindings to access each device's capabilities such as sensors, data, network status, etc.

## Co dzisiaj zrobimy?

Mega prostą aplikację, która będzie licznikiem czegokolwiek, a na moje potrzeby konwentowych tulasków.  Wybrałam jedną platformę docelową: Android - jest to o tyle ważne, że aby móc rozwijać swoją aplikację na różne platformy potrzebujemy ich SDK. Oto główne funkcjonalności mojej aplikacji:

* Dodanie nowego licznika z nazwą
* Usunięcie licznika z listy
* Dodanie wartości w liczniku 
* Usunięcie wartości w liczniku
* Wyzerowanie licznika

Wydaje się proste i takie jest w istocie. Nie pozostaje nam nic więcej, niż tylko zacząć pracę. Do dzieła!

## Instalacja środowiska

No bo jak bez tego? Cordova jest bardzo fajna, tylko żeby coś z nią zrobić potrzeba odrobiny konfiguracji. Nie będę dokładnie mówić co i jak macie zainstalować, bo pewnie jestem jednym z mniej licznych linuksiarzy tutaj, więc wiecie, dokumentacja wam pomoże. Zakładam, że jako ludzie zainteresowani frontendem macie zainstalowane NodeJS. 

* Instalujemy Android Studio i dodajemy ścieżkę do PATH

* Razem ze środowiskiem dostajemy emulator urządzeń na androida - potrzebujemy stworzyć wirtualne urządzenie z Androidem

* Instalujemy Cordova CLI poleceniem:

  ```sh
  npm install -g cordova
  ```

* Tworzymy nowy projekt:

  ``` sh
  cordova create nazwa_folderu_z_projektem
  ```

* Dodajemy obsługiwaną platformę 

  ``` sh
  cordova platform add android
  ```

* Sprawdzamy czy działa:

  ``` sh
  cordova run android
  ```

Jeśli nie wystąpiły żadne błędy, to powinniśmy otrzymać mniej więcej taki obrazek:

![Ekran smartfona z uruchomioną apką startową Apache Cordova](/img/cordova-app.png)

W razie wystąpienia jakichkolwiek błędów: czytamy je, rozwiązujemy, ewentualnie wklejamy treść błędu w google. To powinno pomóc w większości przypadków. Przechodzimy do katalogu z projektem i widzimy, że cordova potworzyła nam już co nieco. Na razie interesuje nas tylko folder www - to właśnie w nim tworzymy swoją aplikację.  