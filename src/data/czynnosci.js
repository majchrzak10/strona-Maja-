/**
 * Czynności notarialne - dane merytoryczne
 * Podstawa: art. 79 Prawa o notariacie (Dz.U. 1991 nr 22 poz. 91 z późn. zm.)
 *
 * UWAGA: Wykaz dokumentów ma charakter orientacyjny. Ostateczna lista zostanie
 * potwierdzona przez kancelarię indywidualnie dla każdej sprawy.
 */

export const czynnosci = [
  {
    id: 'nieruchomosci',
    kategoria: 'Nieruchomości',
    opis: 'Umowy dotyczące przeniesienia własności, ustanowienia praw rzeczowych oraz czynności związane z obrotem nieruchomościami.',
    pozycje: [
      {
        nazwa: 'Sprzedaż lokalu mieszkalnego lub użytkowego (Księga Wieczysta)',
        dokumenty: [
          'Tytuł prawny – podstawa nabycia (akt notarialny, postanowienie sądu, przydział ze spółdzielni)',
          'Aktualny odpis z Księgi Wieczystej (lub numer KW)',
          'Zaświadczenie o braku osób zameldowanych w lokalu',
          'Zaświadczenie zarządcy/wspólnoty o braku zaległości w opłatach eksploatacyjnych',
          'Zaświadczenie o niezaleganiu z podatkiem od nieruchomości',
          'Dowody osobiste stron',
          'W przypadku małżonków – odpis aktu małżeństwa',
          'Numer rachunku bankowego sprzedającego',
        ],
      },
      {
        nazwa: 'Sprzedaż spółdzielczego własnościowego prawa do lokalu',
        dokumenty: [
          'Zaświadczenie ze spółdzielni mieszkaniowej potwierdzające prawo do lokalu i brak zaległości',
          'Podstawa nabycia prawa (przydział, akt notarialny, postanowienie sądu)',
          'Numer KW (jeśli prawo jest wpisane do księgi wieczystej)',
          'Dowody osobiste stron',
          'W przypadku małżonków – odpis aktu małżeństwa',
        ],
      },
      {
        nazwa: 'Sprzedaż działki budowlanej lub rolnej',
        dokumenty: [
          'Wypis z rejestru gruntów (z klauzulą aktualności)',
          'Wyrys z mapy ewidencyjnej',
          'Zaświadczenie o przeznaczeniu działki w Miejscowym Planie Zagospodarowania Przestrzennego (MPZP) lub zaświadczenie o braku MPZP',
          'Aktualny odpis z Księgi Wieczystej',
          'Zaświadczenie o niezaleganiu z podatkiem od nieruchomości / podatkiem rolnym',
          'W przypadku działki rolnej: zaświadczenie o nieskorzystaniu z prawa pierwokupu przez KOWR (jeśli dotyczy)',
          'Dowody osobiste stron',
        ],
      },
      {
        nazwa: 'Darowizna nieruchomości',
        dokumenty: [
          'Dokumenty jak przy sprzedaży (tytuł prawny, odpis KW, wypisy z rejestru)',
          'Dowody osobiste obdarowanego i darczyńcy',
          'Odpis aktu urodzenia (jeśli obdarowanym jest dziecko)',
          'Odpis aktu małżeństwa (jeśli dotyczy)',
        ],
      },
      {
        nazwa: 'Umowa dożywocia',
        dokumenty: [
          'Dokumenty dotyczące nieruchomości (tytuł prawny, odpis KW)',
          'Dowody osobiste stron',
          'Odpis aktu małżeństwa zbywcy (jeśli dotyczy)',
        ],
      },
      {
        nazwa: 'Ustanowienie hipoteki',
        dokumenty: [
          'Aktualny odpis z Księgi Wieczystej nieruchomości',
          'Umowa kredytowa lub treść oświadczenia wierzyciela',
          'Dowody osobiste właściciela nieruchomości',
          'Odpis aktu małżeństwa (jeśli dotyczy)',
        ],
      },
      {
        nazwa: 'Ustanowienie służebności (drogi koniecznej, przesyłu, osobistej)',
        dokumenty: [
          'Aktualny odpis z Księgi Wieczystej nieruchomości obciążonej i władnącej',
          'Mapa z zaznaczonym przebiegiem służebności',
          'Dowody osobiste stron',
        ],
      },
      {
        nazwa: 'Umowa zamiany nieruchomości',
        dokumenty: [
          'Dokumenty dotyczące obu nieruchomości (tytuły prawne, odpisy KW)',
          'Dowody osobiste stron',
        ],
      },
      {
        nazwa: 'Oświadczenie o poddaniu się egzekucji (art. 777 k.p.c.)',
        dokumenty: [
          'Umowa (najem, pożyczka, sprzedaż) stanowiąca podstawę obowiązku',
          'Dowody osobiste dłużnika',
          'NIP/REGON podmiotu (w przypadku firm)',
        ],
      },
    ],
  },
  {
    id: 'prawo-spadkowe',
    kategoria: 'Prawo spadkowe',
    opis: 'Czynności związane z dziedziczeniem, potwierdzeniem praw do spadku, zapisami i innymi sprawami spadkowymi.',
    pozycje: [
      {
        nazwa: 'Akt Poświadczenia Dziedziczenia (APD)',
        dokumenty: [
          'Odpis aktu zgonu spadkodawcy',
          'Dowody osobiste wszystkich spadkobierców',
          'Numery PESEL wszystkich spadkobierców',
          'Odpisy aktów stanu cywilnego potwierdzające pokrewieństwo (akt małżeństwa, akt urodzenia)',
          'Testament (jeśli został sporządzony)',
          'Numer PESEL i ostatni adres zamieszkania spadkodawcy',
          'Ewentualne wcześniejsze postanowienia sądu dotyczące spadku',
        ],
      },
      {
        nazwa: 'Europejskie Poświadczenie Spadkowe',
        dokumenty: [
          'Dokument jak do APD',
          'Dokumenty potwierdzające miejsce zamieszkania lub centrum interesów życiowych spadkodawcy w innym państwie UE',
          'Dokumenty dotyczące majątku w kraju UE',
        ],
      },
      {
        nazwa: 'Testament notarialny',
        dokumenty: [
          'Dowód osobisty testatora (osoba sporządzająca testament)',
          'Dane spadkobierców: imię, nazwisko, imiona rodziców, data urodzenia, numer PESEL, adres zamieszkania',
          'Jeśli zapis windykacyjny dotyczy nieruchomości – numer Księgi Wieczystej',
        ],
      },
      {
        nazwa: 'Odwołanie lub zmiana testamentu',
        dokumenty: [
          'Dowód osobisty testatora',
          'Poprzedni testament (jeśli był sporządzony u notariusza – numer repertorium)',
        ],
      },
      {
        nazwa: 'Oświadczenie o przyjęciu lub odrzuceniu spadku',
        dokumenty: [
          'Odpis aktu zgonu spadkodawcy',
          'Dowód osobisty składającego oświadczenie',
          'Numer PESEL spadkodawcy',
          'W przypadku odrzucenia w imieniu małoletniego – uprzednie zezwolenie sądu opiekuńczego',
        ],
      },
      {
        nazwa: 'Umowa o dział spadku',
        dokumenty: [
          'Prawomocne postanowienie sądu o nabyciu spadku lub APD',
          'Dokumenty dotyczące poszczególnych składników majątku (nieruchomości, pojazdy)',
          'Dowody osobiste wszystkich spadkobierców',
        ],
      },
      {
        nazwa: 'Zapis windykacyjny (w testamencie notarialnym)',
        dokumenty: [
          'Dowód osobisty testatora',
          'Dane obiektu zapisu (np. numer KW nieruchomości, opis przedmiotu)',
          'Dane zapisobiorcy',
        ],
      },
    ],
  },
  {
    id: 'umowy-majatkowe',
    kategoria: 'Małżeńskie umowy majątkowe i podział majątku',
    opis: 'Intercyzy, rozdzielność majątkowa oraz podział majątku wspólnego małżonków.',
    pozycje: [
      {
        nazwa: 'Intercyza – umowa majątkowa małżeńska (rozdzielność majątkowa)',
        dokumenty: [
          'Dowody osobiste obu małżonków (lub narzeczonych)',
          'Odpis aktu małżeństwa (jeśli małżeństwo zostało już zawarte)',
        ],
      },
      {
        nazwa: 'Rozszerzenie lub ograniczenie wspólności ustawowej',
        dokumenty: [
          'Dowody osobiste małżonków',
          'Odpis aktu małżeństwa',
          'Dokumenty dotyczące składników majątku (np. KW nieruchomości)',
        ],
      },
      {
        nazwa: 'Podział majątku wspólnego małżonków',
        dokumenty: [
          'Dowody osobiste małżonków',
          'Odpis aktu małżeństwa lub wyrok rozwodowy/separacyjny',
          'Dokumenty poszczególnych składników majątku (KW nieruchomości, dokumenty pojazdów itp.)',
          'Intercyza (jeśli była zawarta)',
        ],
      },
    ],
  },
  {
    id: 'pelnomocnictwa',
    kategoria: 'Pełnomocnictwa',
    opis: 'Umocowanie do dokonywania czynności prawnych w imieniu mocodawcy.',
    pozycje: [
      {
        nazwa: 'Pełnomocnictwo ogólne',
        dokumenty: [
          'Dowód osobisty mocodawcy',
          'Dane pełnomocnika: imię, nazwisko, imiona rodziców, PESEL, adres zamieszkania',
          'Numer i seria dowodu osobistego pełnomocnika (lub innego dokumentu tożsamości)',
        ],
      },
      {
        nazwa: 'Pełnomocnictwo szczególne (np. do sprzedaży nieruchomości)',
        dokumenty: [
          'Dowód osobisty mocodawcy',
          'Dane pełnomocnika (j.w.)',
          'Opis czynności, do której udzielane jest pełnomocnictwo',
          'Dane nieruchomości lub innego przedmiotu pełnomocnictwa',
        ],
      },
      {
        nazwa: 'Pełnomocnictwo do reprezentowania osoby niepełnosprawnej lub starszej',
        dokumenty: [
          'Dowód osobisty mocodawcy',
          'Dane pełnomocnika',
          'Przy pełnomocnictwie do kwestii majątkowych – dokumenty tych składników majątku',
        ],
      },
      {
        nazwa: 'Odwołanie pełnomocnictwa',
        dokumenty: [
          'Dowód osobisty mocodawcy',
          'Dane dotychczasowego pełnomocnictwa (numer repertorium, data)',
        ],
      },
    ],
  },
  {
    id: 'poswiadczenia',
    kategoria: 'Poświadczenia',
    opis: 'Potwierdzenie autentyczności podpisów, daty, zgodności kopii z oryginałem.',
    pozycje: [
      {
        nazwa: 'Poświadczenie własnoręczności podpisu',
        dokumenty: [
          'Dokument tożsamości osoby podpisującej (dowód osobisty, paszport)',
          'Dokument, na którym ma być złożony podpis – NIEPODPISANY wcześniej',
          'Uwaga: podpis składa się w obecności notariusza',
        ],
      },
      {
        nazwa: 'Poświadczenie daty pewnej',
        dokumenty: [
          'Dokument, którego data ma być poświadczona',
          'Dowód osobisty osoby przedkładającej dokument',
        ],
      },
      {
        nazwa: 'Poświadczenie zgodności kopii (odpis, wyciąg)',
        dokumenty: [
          'Oryginał dokumentu, z którego sporządzana jest kopia',
          'Dowód osobisty osoby składającej wniosek',
        ],
      },
    ],
  },
  {
    id: 'spolki',
    kategoria: 'Prawo spółek i działalność gospodarcza',
    opis: 'Zakładanie i zmiany w spółkach, umowy wspólników, zgromadzenia.',
    pozycje: [
      {
        nazwa: 'Zawiązanie spółki z ograniczoną odpowiedzialnością (sp. z o.o.)',
        dokumenty: [
          'Dowody osobiste wszystkich wspólników',
          'Uzgodniona treść umowy spółki',
          'Dane członków zarządu: imię, nazwisko, PESEL, adres',
          'NIP/REGON wspólników będących przedsiębiorcami',
          'Informacja o wkładach i udziałach',
        ],
      },
      {
        nazwa: 'Zmiana umowy spółki / podwyższenie kapitału',
        dokumenty: [
          'Aktualny odpis KRS spółki',
          'Dotychczasowa umowa spółki (tekst jednolity)',
          'Uchwała wspólników',
          'Dowody osobiste osób podpisujących',
        ],
      },
      {
        nazwa: 'Protokół z walnego zgromadzenia lub zgromadzenia wspólników',
        dokumenty: [
          'Aktualny odpis KRS',
          'Lista wspólników / akcjonariuszy z podaniem udziałów',
          'Porządek obrad',
          'Dowody osobiste uczestników uprawnionych do głosowania',
        ],
      },
      {
        nazwa: 'Umowa zbycia udziałów w sp. z o.o.',
        dokumenty: [
          'Aktualny odpis KRS spółki',
          'Umowa spółki',
          'Dowody osobiste zbywcy i nabywcy',
          'Uchwała wspólników o zgodzie (jeśli wymagana umową)',
        ],
      },
    ],
  },
  {
    id: 'depozyty',
    kategoria: 'Depozyt notarialny',
    opis: 'Przechowanie pieniędzy, dokumentów i papierów wartościowych przez notariusza.',
    pozycje: [
      {
        nazwa: 'Depozyt pieniężny (np. przy transakcji sprzedaży nieruchomości)',
        dokumenty: [
          'Dowody osobiste stron',
          'Umowa lub zobowiązanie będące podstawą depozytu',
          'Numer rachunku bankowego, na który środki mają zostać przekazane',
          'Warunki zwolnienia depozytu (uzgodnione przez strony)',
        ],
      },
      {
        nazwa: 'Depozyt dokumentów',
        dokumenty: [
          'Dowód osobisty osoby składającej depozyt',
          'Dokument lub rzecz oddawana na przechowanie',
          'Wskazanie osoby uprawnionej do odbioru',
        ],
      },
    ],
  },
  {
    id: 'inne',
    kategoria: 'Inne czynności notarialne',
    opis: 'Protesty weksli, doręczenia oświadczeń, zarząd sukcesyjny i inne.',
    pozycje: [
      {
        nazwa: 'Protest weksla lub czeku',
        dokumenty: [
          'Oryginał weksla lub czeku',
          'Dowód osobisty remitenta (osoby składającej protest)',
          'Informacje o dłużniku wekslowym',
        ],
      },
      {
        nazwa: 'Doręczenie oświadczenia (art. 79 pkt 4 Prawa o notariacie)',
        dokumenty: [
          'Dowód osobisty składającego oświadczenie',
          'Treść oświadczenia i dane adresata',
          'Adres do doręczenia',
        ],
      },
      {
        nazwa: 'Ustanowienie zarządcy sukcesyjnego (za życia przedsiębiorcy)',
        dokumenty: [
          'Dowód osobisty przedsiębiorcy',
          'Dane kandydata na zarządcę: imię, nazwisko, PESEL',
          'Zgoda kandydata na zarządcę (może być złożona przy notariuszu)',
          'Informacje o wpisie do CEIDG',
        ],
      },
      {
        nazwa: 'Powołanie zarządcy sukcesyjnego po śmierci przedsiębiorcy',
        dokumenty: [
          'Odpis aktu zgonu przedsiębiorcy',
          'Dowody osobiste uprawnionych (małżonek, spadkobiercy)',
          'Dane kandydata na zarządcę',
        ],
      },
      {
        nazwa: 'Ugoda notarialna',
        dokumenty: [
          'Dowody osobiste stron',
          'Dokumenty dotyczące przedmiotu ugody',
          'Treść uzgodniona przez strony',
        ],
      },
    ],
  },
];
