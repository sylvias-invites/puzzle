# Interaktivní svatební pozvánka (Puzzle)

Moderní a originální digitální svatební pozvánka postavená na interaktivní hře – skládání puzzle. Hosté musí před odhalením detailů o svatbě správně složit 4dílné puzzle s fotografií snoubenců.

## Vlastnosti
- **Interaktivní minihra (2x2 puzzle):** Jednoduché prohazování dílků kliknutím, ideální pro mobilní zařízení.
- **Dynamické oříznutí fotky:** Využívá jedinou zdrojovou fotku a CSS (`background-position`), takže odpadá nutnost ručního stříhání obrázků.
- **Oslava po složení:** Automatické spuštění konfet (ve stylových eukalyptových barvách a tvarech) po úspěšném složení puzzle.
- **Postupné odhalení:** Tlačítko pro další informace se uživateli zobrazí až po dokončení hry.
- **Respektuje design:** Čistý, minimalistický vzhled s důrazem na eukalyptovou zelenou barvu a elegantní typografii.

## Jak spustit projekt lokálně

1. Klunuj si repozitář nebo stáhni soubory do počítače.
2. Ujisti se, že ve stejné složce jako `index.html` máš připravenou fotku snoubenců pod názvem **`snoubenci.png`** (doporučený čtvercový formát, např. 600x600 px).
3. Otevři soubor **`index.html`** v libovolném webovém prohlížeči.

## Použité technologie
- **HTML5 & CSS3** (Flexbox, CSS Grid)
- **JavaScript (Vanilla)** (Logika prohazování dílků, ověření výhry, manipulace s DOM)
- **Canvas Confetti** (Knihovna pro animaci konfet přes CDN)
- **Google Fonts** (*Cormorant Garamond* & *Montserrat*)

## Rychlé úpravy pro klienty
- **Změna jmen a textů:** Upravíš přímo v HTML v sekci `<div class="card-container">`.
- **Cíl tlačítka:** V HTML změň atribut `href="#dalsi-info"` u tlačítka na odkaz na RSVP formulář nebo detailní harmonogram.
