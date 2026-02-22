<div align="center">

# 🗄️ [ARHIVIRANO] YOLO Projekat - Veb Sajt
### *Istorijski SvelteKit Hub za Dokumentaciju*

> [!WARNING]  
> **STATUS REPOZITORIJUMA: ARHIVIRAN (DEPRECATED)**
> 
> Ovaj repozitorijum sadrži prvobitnu SvelteKit verziju sajta za YOLO Projekat i više se ne održava. Projekat je migriran na čistu **Vanilla HTML/CSS/JS** arhitekturu.
>
> **Inženjersko objašnjenje tranzicije:** Nakon tehničke revizije, zaključeno je da upotreba SvelteKit-a za jednostranični, statički prezentacioni sajt predstavlja klasičan **overengineering**. Iako Svelte nudi odličan *Developer Experience* (DX), uvođenje Node.js zavisnosti, procesa build-ovanja fajlova i klijentske JS hidratacije je potpuno nepotrebno za ovaj nivo kompleksnosti. 
> 
> **Trade-offs (Kompromisi):** Odbacili smo Svelte komponente i automatsku optimizaciju slika u korist **sirovih performansi i apsolutne prenosivosti**. Nova Vanilla implementacija ima skoro trenutni *Time to Interactive (TTI)*, nema *framework overhead*-a i može se pokrenuti lokalno jednostavnim otvaranjem `index.html` fajla u browseru ($O(1)$ kompleksnost pokretanja). Ovo značajno olakšava buduće održavanje i distribuciju platforme u edukativne svrhe.

[![SvelteKit](https://img.shields.io/badge/SvelteKit-2.0-ff3e00?style=for-the-badge&logo=svelte&logoColor=white&color=gray)](https://kit.svelte.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=for-the-badge&logo=typescript&logoColor=white&color=gray)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.0-38bdf8?style=for-the-badge&logo=tailwind-css&logoColor=white&color=gray)](https://tailwindcss.com/)

---

<p align="center">
  <i>Istorijska arhiva: Zvanična prezentacija YOLO Projekta koja je služila kao centralno mesto za tehničku dokumentaciju pre prelaska na Vanilla arhitekturu.</i>
</p>

</div>

## 🧩 Originalna SvelteKit Arhitektura (Istorija)

Ovaj projekat je prvobitno koristio moderne web tehnologije kako bi osigurao brzo učitavanje, ali uz kompleksniji proces razvoja:

* **Static Site Generation (SSG):** Optimizovano za performanse i SEO, ali je zahtevalo Node.js *build step*.
* **Component-Based Architecture:** Modularni Svelte dizajn koji je nudio dobru organizaciju koda, ali nepotreban *overhead* za jednu stranicu.
* **Modern Styling:** Tailwind CSS implementacija sa fokusom na "Glassmorphism" vizuelni identitet.
* **Automated CI/CD:** Integrisan GitHub Actions pipeline koji je automatski ažurirao produkcionu verziju sajta.

---

## 🚀 Pregled Ekosistema

Sajt i dalje služi kao baza za podsisteme YOLO projekta (razvoj mobilnih i desktop klijenata ostaje aktivan u odvojenim repozitorijumima):

### 📱 Android Aplikacija
* **Jetpack Compose:** Deklarativni UI za intuitivnu mobilnu kontrolu.
* **Vision Intelligence:** Integracija Google ML Kit-a za on-device detekciju.

### 🖥️ Windows Desktop
* **WinUI 3:** Profesionalni komandni panel sa ONNX Runtime inferencom.
* **OCR System:** Tesseract engine za očitavanje tekstualnih komandi.

---

## 🛠 Stari Tehnološki Stack

| Komponenta | Tehnologija | Uloga u ovoj verziji (Sada napušteno) |
| :--- | :--- | :--- |
| **Frontend** | **SvelteKit** | Visokoperformansni SSG Framework |
| **Styling** | **Tailwind CSS** | Moderni vizuelni identitet i Layout |
| **Deployment** | **GitHub Actions** | Automatizovan CI/CD pipeline za SSG |
| **Icons** | **Lucide Svelte** | Vektorski simboli i UI indikatori |
| **Hardware** | **Raspberry Pi 5** | Glavna procesorska jedinica vozila |

---

<div align="center">

**Autor:** Danilo Stoletović • **Mentor:** Dejan Batanjac  
**ETŠ „Nikola Tesla“ Niš • 2026**

</div>