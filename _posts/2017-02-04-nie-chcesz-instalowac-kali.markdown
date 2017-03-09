---
layout: post
title:  "Nie chcesz zainstalować Kali Linux na swoim komputerze."
date:   2017-02-04 19:01:27 +0100
categories: linux  dajsiepoznac2017
---
Dzisiejszy post narodził się z pewnej potrzeby. Jestem osobą aktywną w sieci i społecznościach developerów. Niemal codziennie stykam się tam z osobami, które proszą o pomoc. Z chęcią udzielam tej pomocy i odpowiadam na pytania mniej doświadczonych kolegów. W końcu moje doświadczenie nie urosło jeszcze do rozmiarów potwora z szafy i pamiętam jak to jest być zielonym w jakiejś dziedzinie.

Od jakiegoś czasu dzieją się jednak niepokojące rzeczy. Rzesze młodych adeptów zaklęć linuksowych zanim jeszcze nauczą się wywoływać moc Superkrowy (kiedyś wam o tym napiszę, chyba że wyguglujecie) instalują na swoich maszynach Kali Linux. I to wprost na dysku! Ja spróbuję przekonać takie kocięta, które nie wiedzą, co czynią, do odwrotu z tej ścieżki. Mniej więcej rozumiem, co takimi jednostkami kieruje. Chcą zostać "hakerami", nauczyć się testów penetracyjnych lub po prostu pochwalić się przed znajomymi. Żaden z tych powodów nie jest dobry, aby zainstalować tę dystrybucję bezpośrednio na dysku swojego komputera.

### Każda dystrybucja ma swoje zastosowanie
Zacznę od przykładu. Masz sobie puszkę z kukurydzą lub inną zawartością. Obojętnie, chodzi o taką puszkę, do której potrzeba otwieracza. Czego użyjesz do jej otwarcia: otwieracza, wiertarki udarowej, psiej obroży czy encyklopedii. Zbyt abstrakcyjnie? Z Linuksem jest podobnie. Jest on wykorzystywany jako narzędzie w bardzo wielu różnych sytuacjach i urządzeniach. I każde zastosowanie ma swoją dedykowaną dystrybucję lub grupę dystrybucji. Inne distro będzie na serwerze www, inne w routerze, na twoim laptopie, a jeszcze inne jest narzędziem do audytów bezpieczeństwa. Kali jest dedykowanym systemem do tego ostatniego. Nie chcesz go zatem na swoim laptopie. Tak samo jak słoika nie otwierasz za pomocą dźwigu.

### Linuks to Linuks ... i po co drążyć temat
I tak i nie. No jasne z podstaw to konsola jest zasadniczo ta sama. Pamiętaj tylko, że aby wygodnie pracować z jakimkolwiek systemem potrzebujesz konfiguracji i pewnych udogodnień. Jeśli Kali ma być twoim pierwszym starciem z Linuksem, to nie wróżę długiej przyjaźni, a tylko szybki i burzliwy romans. Uważaj tylko, żeby komputer za okno nie wyleciał.

Na początku i tak masz się zająć konsolą i nauką jej obsługi. Bez tego ani rusz. I po prostu masz się nauczyć obsługi podstawowych narzędzi, a nie użerać z tym, że nie działa ci wi-fi, bo brak sterowników dla twojej dystrybucji. Kali ma zmienione jądro i ograniczony zestaw pakietów. I czasami pewne rzeczy po prostu nie będą z nim działać. Co jeszcze odróżnia tę mityczną dystrybucję? Używa ciągle konta z uprawnieniami roota. Wiem, że na InnymPopularnymSystemie robi się tak cały czas, ale to materiał na oddzielną historię.

### Bezpieczeństwo przede wszystkim
Standardowo w systemach rodziny Linux na co dzień posługujesz się ograniczonymi uprawnieniami na swoim koncie użytkownika. To dla bezpieczeństwa - taka filozofia, jeśli nie musisz z czegoś korzystać, to tego nie robisz. Hasło admina jest ci potrzebne tylko raz na jakiś czas, więc tylko wtedy z niego korzystasz. To teraz wyobraź sobie, że ktoś włamuje się na twoje konto. Nie mając hasła admina, to tak naprawdę nic nie zdziała. A na Kali jesteś adminem z automatu. To tylko krok od tego, żebu powykradać dane z komputera, z którego korzystasz. Po więcej mięska zapraszam do [dokumentacji](http://docs.kali.org/introduction/should-i-use-kali-linux).

### Co robić?
Jeśli mimo wszystko chcesz się nauczyć obsługi właśnie tej dystrybucji, to masz moim zdaniem dwa wyjścia. Albo tworzysz sobie bootowalnego pendrive i odpalasz Kali jako LiveCD. System znajduje się na twoim pen-drive, i wesoło sobie z niego korzystasz. Drugi sposób, to zainstalowanie wirtualnej maszyny na swoim komputerze. Na przykład Virtual Boxa, na którym możesz przetestować sobie możliwości niemal każdego systemu, jaki ci przyjdzie do głowy. Pamiętaj, że zainstalowanie Kali i tak nie zrobi z ciebie hackera, a bez wiedzy i doświadczenia nie włamiesz się do komputera kolegi. Na razie pozdrawiam, może mleczka? Miau!
