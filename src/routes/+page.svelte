<script lang="ts">
    // Definisanje tipa za projekte
    interface Project {
        title: string;
        tech: string;
        desc: string;
        link: string;
    }

    const projects: Project[] = [
        {
            title: 'Windows Klijent',
            tech: 'WinUI 3, C#, ONNX Runtime',
            desc: 'Centralni komandni panel sa video strimingom niske latencije i Tesseract OCR integracijom.',
            link: 'https://github.com/yolo-projekat/Yolo-Projekat-Windows'
        },
        {
            title: 'Android Aplikacija',
            tech: 'Kotlin, Jetpack Compose, ML Kit',
            desc: 'Mobilna kontrola sa Smart Follow modom i direktnim snimanjem video zapisa sa robota.',
            link: 'https://github.com/yolo-projekat/Yolo-Projekat-Android'
        },
        {
            title: 'Python Skripte',
            tech: 'Python, YOLOv8, OpenCV',
            desc: 'Multithreaded sistem za detekciju objekata i automatsko praćenje (Banana Tracker).',
            link: 'https://github.com/yolo-projekat/Yolo-Projekat-Python'
        },
        {
            title: 'Ovaj Sajt',
            tech: 'Svelte',
            desc: 'Moderan sajt napravljen u Svelte JS framework-u.',
            link: 'https://github.com/yolo-projekat/Yolo-Projekat-Sajt'
        },
        {
            title: 'Kontrolni Server',
            tech: 'python, systemd',
            desc: 'Fajlovi za server, koji se nalaze na Rassbery Pi platformi.',
            link: 'https://github.com/yolo-projekat/Yolo-Projekat-Raspberry-Pi'
        }
    ];

    // Funkcija za glatko skrolovanje sa definisanim tipom (popravlja error 7006)
    function scrollTo(id: string): void {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    }
</script>

<svelte:head>
    <title>YOLO Projekat | Danilo Stoletović</title>
</svelte:head>

<nav class="navbar">
    <div class="nav-content">
        <div class="logo">YOLO<span>PROJEKAT</span></div>
        <div class="links">
            <button on:click={() => scrollTo('hero')}>Početna</button>
            <button on:click={() => scrollTo('projects')}>Projekti</button>
            <button on:click={() => scrollTo('specs')}>Specifikacije</button>
            <a href="https://github.com/yolo-projekat" target="_blank" class="gh-btn">GitHub Repositorijum</a>
        </div>
    </div>
</nav>

<main>
    <section id="hero" class="hero">
        <h1>AUTONOMNO YOLO VOZILO</h1>
        <p>Detekcija objekata i OCR analiza u realnom vremenu (Raspberry Pi 5 platforma)</p>
        <div class="badges">
            <span>🚀 N1 Autonomija</span>
            <span>🧠 YOLOv11/v8</span>
            <span>📶 WebSocket Control</span>
        </div>
    </section>

    <section id="projects" class="grid">
        {#each projects as project}
            <div class="card">
                <h3>{project.title}</h3>
                <p class="tech">{project.tech}</p>
                <p>{project.desc}</p>
                <a href={project.link} target="_blank" rel="noreferrer">Pogledaj Kod →</a>
            </div>
        {/each}
    </section>

    <section id="specs" class="specs-container">
        <div class="specs-card">
            <h2>Tehničke Specifikacije (Hardware)</h2>
            <ul>
                <li><strong>Glavni računar:</strong> Raspberry Pi 5 (Bookworm OS)</li>
                <li><strong>AI Inferenca:</strong> ONNX Runtime & Google ML Kit</li>
                <li><strong>Kamera:</strong> RPi Camera Module V2 (CSI-2 interfejs)</li>
                <li><strong>Komunikacija:</strong> WebSocket (port 1606) & HTTP Stream (port 1607)</li>
                <li><strong>Mreža:</strong> Automatski Access Point (rpi-ap) režim</li>
            </ul>
        </div>
    </section>

    <footer>
        <p>Autor: Danilo Stoletović, ETŠ „Nikola Tesla“ Niš</p>
		<p>Mentor: Dejan Batanjac</p>
    </footer>
</main>

<style>
    /* Globalna podešavanja */
    :global(html) {
        scroll-behavior: smooth;
    }

    :global(body) {
        margin: 0;
        background-color: #0f172a;
        color: white;
        font-family: 'Inter', sans-serif;
        padding-top: 70px; /* Kompenzacija za fiksni navbar */
    }

    /* Navbar */
    .navbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 70px;
        background: rgba(15, 23, 42, 0.9);
        backdrop-filter: blur(10px);
        border-bottom: 1px solid rgba(51, 65, 85, 0.5);
        z-index: 1000;
        display: flex;
        align-items: center;
    }

    .nav-content {
        max-width: 1200px;
        margin: 0 auto;
        width: 100%;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo {
        font-weight: 800;
        font-size: 1.2rem;
        letter-spacing: 1px;
    }

    .logo span {
        color: #38bdf8;
    }

    .links {
        display: flex;
        gap: 20px;
        align-items: center;
    }

    .links button {
        background: none;
        border: none;
        color: #94a3b8;
        cursor: pointer;
        font-size: 0.9rem;
        font-weight: 500;
        transition: color 0.2s;
    }

    .links button:hover {
        color: #38bdf8;
    }

    .gh-btn {
        background: #38bdf8;
        color: #0f172a !important;
        padding: 8px 16px;
        border-radius: 8px;
        font-size: 0.85rem !important;
        margin-top: 0 !important;
    }

    /* Hero */
    .hero {
        text-align: center;
        padding: 5rem 1rem;
        background: linear-gradient(to bottom, #1e293b, #0f172a);
    }

    h1 {
        font-size: clamp(2rem, 5vw, 3.5rem);
        margin-bottom: 0.5rem;
        color: #38bdf8;
        letter-spacing: -1px;
    }

    .badges {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 25px;
    }

    .badges span {
        background: rgba(56, 189, 248, 0.1);
        color: #38bdf8;
        padding: 6px 16px;
        border-radius: 20px;
        font-size: 0.85rem;
        border: 1px solid rgba(56, 189, 248, 0.2);
    }

    /* Projekti */
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 25px;
        max-width: 1200px;
        margin: 0 auto;
        padding: 40px 20px;
    }

    .card {
        background: #1e293b;
        padding: 2.5rem;
        border-radius: 16px;
        border: 1px solid #334155;
        transition: all 0.3s ease;
    }

    .card:hover {
        transform: translateY(-8px);
        border-color: #38bdf8;
        box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
    }

    .tech {
        color: #38bdf8;
        font-weight: 600;
        font-size: 0.85rem;
        text-transform: uppercase;
        margin-bottom: 1rem;
    }

    /* Hardware sekcija */
    .specs-container {
        max-width: 1200px;
        margin: 20px auto 60px;
        padding: 0 20px;
    }

    .specs-card {
        background: rgba(30, 41, 59, 0.5);
        padding: 2rem;
        border-radius: 16px;
        border: 1px dashed #334155;
    }

    .specs-card h2 {
        color: #f8fafc;
        font-size: 1.5rem;
        margin-top: 0;
    }

    .specs-card ul {
        list-style: none;
        padding: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 15px;
        margin-top: 20px;
    }

    .specs-card li {
        font-size: 0.95rem;
        color: #94a3b8;
    }

    .specs-card strong {
        color: #38bdf8;
        display: block;
        margin-bottom: 2px;
    }

    a {
        display: inline-block;
        margin-top: 25px;
        color: #38bdf8;
        text-decoration: none;
        font-weight: bold;
        transition: letter-spacing 0.2s;
    }

    a:hover {
        letter-spacing: 1px;
    }

    footer {
        text-align: center;
        padding: 4rem 2rem;
        border-top: 1px solid #1e293b;
        opacity: 0.7;
        font-size: 0.9rem;
    }

    /* Responzivnost za mobilni */
    @media (max-width: 768px) {
        .links {
            display: none; /* Sakrivamo linkove na mobilnom radi čistoće */
        }
    }
</style>