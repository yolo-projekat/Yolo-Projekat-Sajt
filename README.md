<div align="center">

# 🌐 YOLO Projekat - Veb Sajt
### *Centralno čvorište za dokumentaciju i ekosistem podsistema*

[![SvelteKit](https://img.shields.io/badge/Framework-SvelteKit-ff3e00?style=for-the-badge&logo=svelte&logoColor=white)](https://kit.svelte.dev/)
[![TailwindCSS](https://img.shields.io/badge/Styling-Tailwind_CSS-06b6d4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub_Pages-22d3ee?style=for-the-badge&logo=github&logoColor=white)](https://pages.github.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-94a3b8?style=for-the-badge)](https://opensource.org/licenses/MIT)

---

<p align="center">
  <b>Zvanična prezentacija YOLO Projekta</b> služi kao interaktivno mesto za tehničku dokumentaciju. 
  <br>Sajt objedinjuje specifikacije za Windows, Android i Python klijente, pružajući uvid u <b>N1 stepen autonomije</b> vozila.
</p>

</div>

## 🚀 Pregled Ekosistema

### 📱 Android Aplikacija
* **Jetpack Compose:** Deklarativni UI za intuitivnu mobilnu kontrolu.
* **Vision Intelligence:** Integracija Google ML Kit-a za on-device detekciju.

### 🖥️ Windows Desktop
* **WinUI 3:** Profesionalni komandni panel sa ONNX Runtime inferencom.
* **OCR System:** Tesseract engine za očitavanje tekstualnih komandi u realnom vremenu.

### 🐍 Python Engine
* **The Core:** Jezgro sistema koje pokreće YOLOv8 modele.
* **WebSocket Gateway:** Upravljanje TCP komunikacijom na portu `1606`.

---

## 🛠 Tehničke Specifikacije

| Komponenta | Tehnologija | Uloga |
| :--- | :--- | :--- |
| **Frontend** | SvelteKit | Visokoperformansni Static Site Generation |
| **Styling** | TailwindCSS | Moderni "Glassmorphism" vizuelni identitet |
| **Deployment** | GitHub Actions | Automatizovan CI/CD pipeline |
| **Networking** | TCP 1606 / 1607 | Standardizovani portovi za komande i video |
| **Hardware** | Raspberry Pi 5 | Glavna procesorska jedinica vozila |

---

## 🔧 Instalacija i Lokalni Razvoj

Da biste podigli razvojno okruženje za veb sajt, pratite ove korake:

```bash
# 1. Kloniranje repozitorijuma
git clone [https://github.com/yolo-projekat/Yolo-Projekat-Sajt.git](https://github.com/yolo-projekat/Yolo-Projekat-Sajt.git)
##
---
<div align="center">

Autor: Danilo Stoletović • Mentor: Dejan Batanjac

ETŠ „Nikola Tesla“ Niš • 2026

</div>

# 2. Instalacija zavisnosti
npm install

# 3. Pokretanje razvojnog servera
npm run dev -- --open
