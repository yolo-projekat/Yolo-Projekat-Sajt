<script lang="ts">
	import { fade, fly, scale } from 'svelte/transition';
	import { onMount } from 'svelte';

	let visibleSections = $state(new Set());

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						visibleSections.add(entry.target.id);
						visibleSections = new Set(visibleSections);
					}
				});
			},
			{ threshold: 0.1 }
		);

		document.querySelectorAll('section').forEach((section) => observer.observe(section));
	});

	interface Project {
		title: string;
		tech: string;
		desc: string;
		link: string;
		icon: string;
	}

	const projects: Project[] = [
		{
			title: 'Windows Klijent',
			tech: 'WinUI 3 • C#',
			desc: 'Napredna kontrolna stanica sa ONNX Runtime-om za inženjerski nadzor na Windows 11 platformi.',
			link: 'https://github.com/yolo-projekat/Yolo-Projekat-Windows',
			icon: '🖥️'
		},
		{
			title: 'Linux Klijent',
			tech: 'GTK4 • Python',
			desc: 'Native GNOME aplikacija optimizovana za nisku latenciju i stabilnost na Linux distribucijama.',
			link: 'https://github.com/yolo-projekat/Yolo-Projekat-Linux',
			icon: '🐧'
		},
		{
			title: 'Android App',
			tech: 'Kotlin • Compose',
			desc: 'Mobilna kontrola sa WebSocket komunikacijom za upravljanje robotskim vozilom u realnom vremenu.',
			link: 'https://github.com/yolo-projekat/Yolo-Projekat-Android',
			icon: '📱'
		},
		{
			title: 'Python Engine',
			tech: 'YOLOv11 • OpenCV',
			desc: 'Srce AI sistema koje vrši procesiranje video strima i klasifikaciju objekata na samom vozilu.',
			link: 'https://github.com/yolo-projekat/Yolo-Projekat-Python',
			icon: '🐍'
		},
		{
			title: 'RPi Core',
			tech: 'Linux • Systemd',
			desc: 'Sistemski servisi i drajveri na Raspberry Pi 5 platformi zaduženi za hardversku orkestraciju.',
			link: 'https://github.com/yolo-projekat/Yolo-Projekat-Raspberry-Pi',
			icon: '⚙️'
		},
		{
			title: 'Veb Dashboard',
			tech: 'Next.js • WS',
			desc: 'Cloud-ready panel za daljinski monitoring telemetrije i vizuelni uvid u stanje senzora vozila.',
			link: 'https://github.com/yolo-projekat/Yolo-Projekat-Veb-Kontrola',
			icon: '🌐'
		}
	];
</script>

<section id="hero" class="hero">
	<div class="hero-content">
		<h1 class="gradient-text">AUTONOMNO YOLO VOZILO</h1>

		{#if visibleSections.has('hero')}
			<div in:fade={{ delay: 100, duration: 800 }}>
				<p class="hero-desc">
					Otvorena platforma za istraživanje Edge AI tehnologija i ugradnih sistema na Raspberry Pi
					5 arhitekturi.
				</p>
				<div class="badges">
					<span>🎓 Edukativni Projekt</span>
					<span>🧠 YOLOv11 & OCR</span>
					<span>🚀 N1 Autonomija</span>
					<span>🏎️ Mecanum Drive</span>
				</div>
			</div>
		{/if}
	</div>
</section>

<section id="hardware" class="section-container">
	{#if visibleSections.has('hardware')}
		<div in:fade={{ duration: 800 }} class="section-header">
			<h2 class="section-title">Hardverska Arhitektura</h2>
			<p>Transparentan uvid u komponente namenjen budućim inženjerima</p>
		</div>

		<div class="presentation-grid">
			<div in:fly={{ x: -30, duration: 1000 }} class="image-container">
				<div class="img-wrapper">
					<img src="/hardverska-sema.avif" alt="Hardverska šema YOLO vozila" class="hardware-img" />
				</div>
				<p class="caption">Slika 1: Šema povezivanja RPi 5 i senzorskih modula</p>
			</div>

			<div in:fly={{ x: 30, duration: 1000 }} class="specs-card">
				<div class="spec-item">
					<strong>Napajanje</strong><span
						>XL4015 Step-down konverter (5.1V, 5A) za stabilan rad Raspberry Pi 5.</span
					>
				</div>
				<div class="spec-item">
					<strong>Kretanje</strong><span
						>Četiri DC motora sa Mecanum točkovima za kretanje u svim pravcima.</span
					>
				</div>
				<div class="spec-item">
					<strong>Vid</strong><span
						>RPi Camera Module V2 (8MP) povezana putem MIPI CSI-2 interfejsa.</span
					>
				</div>
				<div class="spec-item">
					<strong>Učenje kroz rad</strong><span
						>Sistem je dizajniran za lako testiranje različitih algoritama kretanja.</span
					>
				</div>
			</div>
		</div>
	{/if}
</section>

<section id="software-logic" class="section-container">
	{#if visibleSections.has('software-logic')}
		<div in:fade={{ duration: 800 }} class="section-header">
			<h2 class="section-title">Softverska Inteligencija</h2>
			<p>Optimizacija neuronske mreže za rad u realnom vremenu</p>
		</div>

		<div class="modern-grid">
			<div in:fly={{ y: 30, delay: 100 }} class="modern-card no-link">
				<div class="card-glow"></div>
				<div class="card-content">
					<div class="card-top">
						<span class="modern-icon">🧠</span>
						<span class="tech-pill">AI Model</span>
					</div>
					<h3>YOLOv11 ONNX</h3>
					<p>
						Korišćenje ONNX formata omogućava modelu da koristi specijalizovane biblioteke za
						ubrzanje na CPU, čime se postiže visok FPS bez eksternog GPU-a.
					</p>
				</div>
			</div>

			<div in:fly={{ y: 30, delay: 200 }} class="modern-card no-link">
				<div class="card-glow"></div>
				<div class="card-content">
					<div class="card-top">
						<span class="modern-icon">👁️</span>
						<span class="tech-pill">OCR Engine</span>
					</div>
					<h3>Tesseract OCR</h3>
					<p>
						Služi za ekstrakciju teksta u realnom vremenu. Omogućava vozilu da očitava saobraćajne
						znakove i registarske tablice tokom kretanja.
					</p>
				</div>
			</div>

			<div in:fly={{ y: 30, delay: 300 }} class="modern-card no-link">
				<div class="card-glow"></div>
				<div class="card-content">
					<div class="card-top">
						<span class="modern-icon">⚡</span>
						<span class="tech-pill">Parallelism</span>
					</div>
					<h3>Multithreading</h3>
					<p>
						Sistem paralelno obrađuje tri toka: akviziciju slike, AI inferenciju i logiku kontrole
						motora, sprečavajući kašnjenje u upravljanju.
					</p>
				</div>
			</div>
		</div>
	{/if}
</section>

<section id="projects" class="section-container">
	{#if visibleSections.has('projects')}
		<div class="section-header">
			<h2 class="section-title">Modularni Ekosistem</h2>
			<p>Kompletan izvorni kod dostupan za učenje i modifikaciju</p>
		</div>

		<div class="modern-grid">
			{#each projects as project, i}
				<a
					href={project.link}
					target="_blank"
					class="modern-card-link"
					in:fly={{ y: 30, delay: i * 100 }}
				>
					<div class="modern-card">
						<div class="card-glow"></div>
						<div class="card-content">
							<div class="card-top">
								<span class="modern-icon">{project.icon}</span>
								<span class="tech-pill">{project.tech}</span>
							</div>
							<h3>{project.title}</h3>
							<p>{project.desc}</p>
							<div class="card-footer">
								<span class="action-text">Pogledaj kod</span>
								<svg
									width="18"
									height="18"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg
								>
							</div>
						</div>
					</div>
				</a>
			{/each}
		</div>
	{/if}
</section>

<section id="use-cases" class="section-container">
	{#if visibleSections.has('use-cases')}
		<div in:fade={{ duration: 800 }} class="section-header">
			<h2 class="section-title">Primarna Namena i Primena</h2>
			<p>Od edukativne platforme do realnih industrijskih rešenja</p>
		</div>

		<div class="modern-grid">
			<div in:fly={{ y: 30, delay: 100 }} class="modern-card no-link featured-card">
				<div class="card-glow featured-glow"></div>
				<div class="card-content">
					<div class="card-top">
						<span class="modern-icon">🎓</span>
						<span class="tech-pill primary-pill">Glavna Svrha</span>
					</div>
					<h3>Edukacija i R&D</h3>
					<p>
						Projekat služi kao sveobuhvatna baza za učenje savremenih tehnologija: od Python
						programiranja i AI treninga, do sistemske administracije na Linux-u i elektronike.
					</p>
				</div>
			</div>

			<div in:fly={{ y: 30, delay: 200 }} class="modern-card no-link">
				<div class="card-glow"></div>
				<div class="card-content">
					<div class="card-top">
						<span class="modern-icon">🏙️</span>
						<span class="tech-pill">Smart City</span>
					</div>
					<h3>Gradska Infrastruktura</h3>
					<p>
						Razvijeni algoritmi se mogu primeniti na pametne raskrsnice za monitoring saobraćaja u
						realnom vremenu i automatizovano očitavanje parking mesta.
					</p>
				</div>
			</div>

			<div in:fly={{ y: 30, delay: 300 }} class="modern-card no-link">
				<div class="card-glow"></div>
				<div class="card-content">
					<div class="card-top">
						<span class="modern-icon">🏭</span>
						<span class="tech-pill">Industry 4.0</span>
					</div>
					<h3>Logistika</h3>
					<p>
						Implementacija autonomnih transportnih robota u kontrolisanim okruženjima magacina koji
						zahtevaju precizno izbegavanje prepreka.
					</p>
				</div>
			</div>
		</div>
	{/if}
</section>

<footer>
	<p>Autor: <strong>Danilo Stoletović</strong> • Mentor: <strong>Dejan Batanjac</strong></p>
	<p>ETŠ „Nikola Tesla“ Niš • 2026</p>
</footer>

<style>
	/* Stilovi ostaju isti kao u tvom originalnom kodu */
	.section-container {
		max-width: 1200px;
		margin: 80px auto;
		padding: 0 20px;
	}

	.hero {
		min-height: 85vh;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 100px 20px 60px;
		background: radial-gradient(circle at center, var(--card-bg) 0%, var(--bg) 100%);
	}
	.gradient-text {
		font-size: clamp(2.5rem, 10vw, 5rem);
		font-weight: 900;
		background: linear-gradient(135deg, var(--text-main) 30%, var(--primary) 100%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		line-height: 1.1;
		margin-bottom: 24px;
	}
	.hero-desc {
		color: var(--text-dim);
		font-size: clamp(1rem, 4vw, 1.25rem);
		max-width: 750px;
		margin: 0 auto 40px;
	}
	.badges {
		display: flex;
		justify-content: center;
		gap: 10px;
		flex-wrap: wrap;
	}
	.badges span {
		background: rgba(56, 189, 248, 0.1);
		border: 1px solid rgba(56, 189, 248, 0.2);
		padding: 6px 14px;
		border-radius: 100px;
		font-size: 0.75rem;
		color: var(--primary);
	}

	.section-header {
		text-align: center;
		margin-bottom: 50px;
	}
	.section-title {
		font-size: clamp(1.75rem, 5vw, 2.5rem);
		color: var(--text-main);
		margin-bottom: 12px;
	}

	.presentation-grid {
		display: grid;
		grid-template-columns: 1.2fr 1fr;
		gap: 30px;
		align-items: start;
	}
	.image-container {
		background: var(--card-bg);
		border: 1px solid var(--border);
		border-radius: 24px;
		padding: 16px;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
		transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
	}
	.img-wrapper {
		width: 100%;
		overflow: hidden;
		border-radius: 16px;
	}
	.hardware-img {
		width: 100%;
		height: auto;
		object-fit: contain;
		display: block;
		transition: transform 0.5s ease;
	}
	.image-container:hover {
		transform: translateY(-5px);
		border-color: rgba(56, 189, 248, 0.3);
	}
	.image-container:hover .hardware-img {
		transform: scale(1.08);
	}
	.caption {
		margin-top: 15px;
		color: var(--text-dim);
		font-size: 0.8rem;
		font-style: italic;
		text-align: center;
	}

	.modern-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: 25px;
		margin-top: 40px;
	}
	.modern-card-link {
		text-decoration: none;
		color: inherit;
		display: block;
		height: 100%;
	}

	.modern-card {
		position: relative;
		background: rgba(255, 255, 255, 0.03);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 24px;
		overflow: hidden;
		transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
		height: 100%;
	}

	.card-glow {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: radial-gradient(circle at 50% 0%, rgba(56, 189, 248, 0.15) 0%, transparent 70%);
		opacity: 0;
		transition: opacity 0.4s ease;
	}

	.featured-card {
		border: 1px solid rgba(56, 189, 248, 0.3);
		background: rgba(56, 189, 248, 0.04);
	}
	.featured-glow {
		opacity: 0.3;
		background: radial-gradient(circle at 50% 0%, rgba(56, 189, 248, 0.3) 0%, transparent 70%);
	}
	.primary-pill {
		background: var(--primary) !important;
		color: white !important;
	}

	.modern-card:hover {
		transform: translateY(-10px) scale(1.02);
		background: rgba(255, 255, 255, 0.05);
		border-color: rgba(56, 189, 248, 0.4);
		box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
	}

	.modern-card:hover .card-glow {
		opacity: 1;
	}
	.card-content {
		position: relative;
		padding: 32px;
		z-index: 1;
		display: flex;
		flex-direction: column;
		height: 100%;
	}
	.card-top {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 24px;
	}
	.modern-icon {
		font-size: 2rem;
		filter: drop-shadow(0 0 10px rgba(56, 189, 248, 0.3));
	}
	.tech-pill {
		font-size: 0.7rem;
		font-weight: 800;
		text-transform: uppercase;
		color: var(--primary);
		background: rgba(56, 189, 248, 0.1);
		padding: 6px 12px;
		border-radius: 100px;
		border: 1px solid rgba(56, 189, 248, 0.2);
	}
	.modern-card h3 {
		font-size: 1.4rem;
		margin: 0 0 12px 0;
		font-weight: 700;
		color: var(--text-main);
	}
	.modern-card p {
		font-size: 0.95rem;
		line-height: 1.6;
		color: var(--text-dim);
		margin-bottom: 24px;
	}

	.card-footer {
		margin-top: auto;
		display: flex;
		align-items: center;
		gap: 10px;
		color: var(--primary);
		font-weight: 700;
		font-size: 0.85rem;
		opacity: 0.8;
		transition: gap 0.3s ease;
	}
	.modern-card-link:hover .card-footer {
		gap: 15px;
		opacity: 1;
	}

	.specs-card {
		background: var(--card-bg);
		padding: 30px;
		border-radius: 24px;
		border: 1px solid var(--border);
	}
	.spec-item {
		margin-bottom: 18px;
	}
	.spec-item strong {
		display: block;
		color: var(--primary);
		margin-bottom: 4px;
		font-size: 0.95rem;
	}
	.spec-item span {
		color: var(--text-dim);
		font-size: 0.9rem;
	}

	footer {
		padding: 60px 20px;
		text-align: center;
		border-top: 1px solid var(--border);
		color: var(--text-dim);
		font-size: 0.9rem;
	}

	@media (max-width: 900px) {
		.presentation-grid {
			grid-template-columns: 1fr;
		}
	}
	@media (max-width: 480px) {
		.modern-card:hover {
			transform: translateY(-5px) scale(1.01);
		}
	}
</style>
