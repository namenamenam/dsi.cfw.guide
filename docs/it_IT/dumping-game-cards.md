---
title: Dumping delle cartucce di gioco
---

Questa sezione riguarda il dumping delle cartucce utilizzando GodMode9i, per usarle su emulatori, flashcard o sulla scheda SD tramite nds-bootstrap.

## Requisiti
- La cartuccia di gioco del titolo che si desidera effettuare un dump
- Una console Nintendo DSi con [Unlaunch](installing-unlaunch) installato sopra

## Istruzioni
### Sezione I - Configurazione della Scheda SD

::: tip

Usi un dispositivo Windows, Linux o macOS? Usa [Lazy DSi Downloader](lazy-dsi-downloader) per configurare automaticamente la tua scheda SD.

:::

1. Scarica l'ultima versione di [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases)
1. Estrai `GodMode9i.nds` dall'archivio GodMode9i e mettilo in un percorso qualsiasi sulla scheda SD

### Sezione II - Istruzioni Nintendo DSi
1. Accendi la console tenendo premuto <kbd class="face">A</kbd> e <kbd class="face">B</kbd>
   - Questo dovrebbe avviare il menu di Unlaunch
1. Avvia GodMode9i tramite il menu di Unlaunch
1. Assicurati che la cartuccia di gioco sia inserita nella console
1. Seleziona l'opzione "NDS GAMECARD" in GodMode9i
1. Seleziona se si desidera o no il riempimento (padding):
   - Full: Padding incluso
   - Trim: Padding rimosso
1. Ripeti i passi 3-5 per tutte le cartucce di cui desideri effettuare un dump

::: tip

I dump delle cartucce di gioco saranno trovato in `sd:/gm9i/out`.

:::
