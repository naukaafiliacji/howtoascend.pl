DROPSHIPPING HOW TO ASCEND — CLEAN STATIC BUILD

Ta wersja nie korzysta z Framera ani z jego runtime.

STRUKTURA
- index.html                  strona główna
- approach.html               podstrona Approach
- blog.html                   lista artykułów
- contact.html                kontakt
- privacy.html                polityka prywatności
- terms.html                  regulamin
- data-deletion.html          usuwanie danych
- blog/                       artykuły
- assets/css/style.css        CAŁY wygląd strony i breakpointy
- assets/js/main.js           menu mobilne, FAQ i proste animacje
- assets/images/              zoptymalizowane grafiki bloga
- assets/fonts/               lokalna czcionka Inter

JAK EDYTOWAĆ
1. Treść danej strony zmieniasz bezpośrednio w jej pliku HTML.
2. Kolory, promienie, szerokości i podstawowe parametry są na początku assets/css/style.css w :root.
3. Nową kartę dodaje się przez skopiowanie <article class="card ...">.
4. Menu to zwykły <nav class="nav-links"> — brak hydracji Framera i brak generowanych identyfikatorów.
5. Breakpoint mobilny: 809px.

HOSTOWANIE
Projekt jest zwykłą stroną statyczną. Można wrzucić zawartość katalogu bezpośrednio do repozytorium GitHub Pages. Nie wymaga npm, builda, Reacta ani Framera.
