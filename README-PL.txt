DROPSHIPPING HOW TO ASCEND — WERSJA W STYLU FINANCEADS

Projekt jest nadal zwykłą statyczną stroną HTML/CSS/JS przeznaczoną m.in. pod GitHub Pages.

Najważniejsze pliki:
- index.html — strona główna
- approach.html — Approach
- blog.html + blog/ — blog i artykuły
- contact.html — kontakt
- privacy.html / terms.html / data-deletion.html — strony prawne
- assets/css/style.css — cały wspólny wygląd
- assets/js/main.js — menu mobilne, FAQ i lekkie animacje
- CNAME — domena howtoascend.pl (NIE USUWAĆ przy wdrożeniu GitHub Pages)

Redesign:
- jasna biała/szara baza
- ciemnogranatowa typografia
- czerwone CTA
- hero dwukolumnowy z fotografią
- pas statystyk
- proste sekcje korporacyjne i kafle
- ciemny footer
- responsywne menu mobilne

Zdjęcia użyte w hero / sekcji wprowadzającej są ładowane z Pexels (free-to-use stock photography), zamiast kopiować zdjęcia należące do financeAds.

Kod nie zawiera Framera ani Reacta.

============================================================
NOWA STRONA GŁÓWNA — 2 TRYBY
============================================================

Strona główna ma teraz dwa warianty treści przełączane bez przeładowania:

1. Dropshipping — tryb domyślny.
2. Obsługa klienta — drugi wariant.

Przełącznik znajduje się w lewym górnym rogu zgodnie z wireframe'em.
Zmianie podlegają: hero, zdjęcie, lista korzyści, sekcja usług,
sekcja procesu, sekcja wyjaśniająca model firmy oraz końcowe CTA.

Pliki odpowiedzialne za tę funkcję:
- index.html — struktura strony głównej,
- assets/css/style.css — sekcja "DUAL MODE HOMEPAGE",
- assets/js/main.js — obiekt `modes` oraz funkcja `applyMode()`.

Zdjęcia wariantów:
- assets/images/hero-dropshipping-packages-2026.webp
- assets/images/hero-customer-support-red-2026.webp

Logowanie:
- login.html jest obecnie tylko przygotowaną wizualnie stroną logowania.
- przycisk logowania jest nieaktywny do czasu podłączenia backendu/autoryzacji.

CNAME dla GitHub Pages pozostaje w katalogu głównym i zawiera:
howtoascend.pl


Wersja hero V4: strona glowna odwzorowana z zatwierdzonego mockupu; grafika jest zbudowana z prawdziwych elementow HTML/CSS, nie jako screenshot.
