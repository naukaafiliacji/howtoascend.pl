# Dropshipping How To Ascend — GitHub Pages

Gotowa statyczna kopia strony `howtoascend.pl`, przystosowana do
publikacji bez serwera aplikacyjnego.

## Publikacja na GitHub Pages

1. Otwórz istniejące repozytorium połączone z domeną `howtoascend.pl`.
2. Wgraj **całą zawartość tego katalogu** do głównego katalogu repozytorium.
3. Nie usuwaj plików `CNAME` ani `.nojekyll`.
4. W repozytorium otwórz **Settings → Pages** i sprawdź ustawienia:
   - **Source:** `Deploy from a branch`
   - **Branch:** `main`
   - **Folder:** `/ (root)`
5. Kliknij **Save** i poczekaj kilka minut na publikację.

Plik `.nojekyll` musi pozostać w repozytorium — dzięki niemu GitHub publikuje
zasoby z katalogu `_offline`.

## Własna domena

Projekt zawiera już plik `CNAME` wskazujący domenę `howtoascend.pl`. W polu
**Custom domain** w ustawieniach GitHub Pages również powinna widnieć domena
`howtoascend.pl`.

## Test lokalny

Stronę można uruchomić lokalnie za pomocą dołączonego skryptu:

- Windows: `START-WINDOWS.bat`
- Linux/macOS: `bash START-LINUX-MAC.sh`

Nie otwieraj pliku `index.html` bezpośrednio jako `file://`, ponieważ moduły
JavaScript wymagają serwera HTTP.
