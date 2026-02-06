# 🚗 YOLO Projekat - Veb Portal

[![Svelte](https://img.shields.io/badge/Framework-SvelteKit-ff3e00.svg)](https://kit.svelte.dev/)
[![Deploy](https://img.shields.io/badge/Deploy-GitHub_Pages-blue.svg)](https://pages.github.com/)
[![Hardware](https://img.shields.io/badge/Hardware-Raspberry_Pi_5-c51a4a.svg)](https://www.raspberrypi.com/)

Ovaj repozitorijum sadrži izvorni kod za zvaničnu prezentaciju **YOLO Projekta**. Sajt služi kao centralno mesto za dokumentaciju, tehničke specifikacije i linkove ka svim podsistemima (Windows, Android i Python).



---

## ✨ Pregled Sistema

Projekat se bazira na **N1 stepenu autonomije** i koristi **Raspberry Pi 5** za procesiranje podataka u realnom vremenu. Sistem je podeljen na tri ključne celine:

1.  **Windows Desktop App:** Razvijen u WinUI 3, služi kao komandni centar.
2.  **Android App:** Jetpack Compose aplikacija za mobilnu kontrolu i AI praćenje.
3.  **Python Engine:** Jezgro sistema koje pokreće YOLOv8/v11 modele i upravlja WebSocket komunikacijom.

---

## 🛠 Tehničke Specifikacije

| Komponenta | Tehnologija |
| :--- | :--- |
| **Veb Sajt** | SvelteKit + TailwindCSS (Static Gen) |
| **AI Inferenca** | ONNX Runtime & Google ML Kit |
| **Komunikacija** | WebSockets (TCP 1606) |
| **Video Stream** | HTTP Multipart (TCP 1607) |
| **OS Vozila** | Raspberry Pi OS (Bookworm) |

---

## 🚀 Instalacija i Razvoj

Ako želite lokalno da pokrenete ovaj portal:

1. **Klonirajte repozitorijum:**
   ```bash
   git clone https://github.com/yolo-projekat/Yolo-Projekat-Sajt/edit/main/README.md
Instalirajte zavisnosti:

Bash
npm install
Pokrenite razvojni server:

Bash
npm run dev -- --open
🌐 Deployment
Sajt se automatski hostuje putem GitHub Actions na GitHub Pages. Svaki push na main granu automatski pokreće build proces i osvežava sajt.

Autor: Danilo Stoletovic
Škola: ETŠ „Nikola Tesla“ Niš

Licenca: MIT
