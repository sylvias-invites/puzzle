# Interaktivní svatební pozvánka (Puzzle)

Digitální svatební pozvánka s úvodní hrou: hosté složí čtyřdílné puzzle a poté si mohou zobrazit informace o svatbě.

## Funkce

- Puzzle 2 × 2 ovládané kliknutím, vhodné i pro dotyková zařízení.
- Puzzle používá jednu fotografii a její výřezy zobrazuje pomocí CSS `background-position`.
- Po složení puzzle se zobrazí animace konfet a tlačítko k informacím o svatbě.
- Stránka s odpočtem do svatby, místem konání, programem, dress codem, informacemi o darech a formulářem RSVP.

## Soubory projektu

- `index.html` – obsah pozvánky.
- `style.css` – vzhled a rozložení stránky.
- `script.js` – logika puzzle, odpočtu, konfet a formuláře.
- `snoubenci.png` – fotografie použitá v puzzle a v detailech pozvánky.
- `artkytka.png`, `eukalyptus.png` – doplňkové obrázky.

Všechny uvedené soubory ponechte ve stejné složce. Při výměně fotografie zachovejte název `snoubenci.png` včetně velikosti písmen.

## Spuštění

Otevřete složku projektu ve VS Code a spusťte `index.html` pomocí rozšíření Live Server nebo Live Preview. Případně lze soubor otevřít přímo v prohlížeči.

Google Fonts a knihovna Canvas Confetti se načítají z internetu. Některé květinové dekorace se také načítají z externích odkazů, proto pro jejich zobrazení musí být dostupné připojení k internetu.

## Úpravy

- Jména, texty, datum svatby, program a další obsah upravte v `index.html`.
- Barvy, rozměry a rozložení upravte v `style.css`.
- Chování puzzle a odpočtu upravte v `script.js`.
- Formulář RSVP nyní pouze zobrazí potvrzovací zprávu v prohlížeči; odpovědi se nikam neodesílají ani neukládají.

## Použité technologie

- HTML5, CSS3 a JavaScript bez frameworku.
- [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti) načítané z CDN.
- Google Fonts: Cormorant Garamond, Great Vibes a Montserrat.
