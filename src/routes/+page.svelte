<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	// Optimization: Import image via @sveltejs/enhanced-img
	import hardwareSchema from '$lib/assets/hardverska-sema.avif?enhanced';

	// Svelte 5 Rune: Efficient section tracking
	let visibleSections = $state(new Set<string>());

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						visibleSections.add(entry.target.id);
						visibleSections = new Set(visibleSections);
						// Performance: Stop observing once visible
						observer.unobserve(entry.target);
					}
				});
			},
			{
				threshold: 0.15,
				rootMargin: '50px'
			}
		);

		document.querySelectorAll('section[id]').forEach((section) => observer.observe(section));
		return () => observer.disconnect();
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

<svelte:head>
	<title>Autonomno YOLO Vozilo | Danilo Stoletović</title>
	<meta
		name="description"
		content="Edukativna platforma za Edge AI i Raspberry Pi 5. Autonomno kretanje uz YOLOv11 detekciju."
	/>
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "SoftwareSourceCode",
			"name": "Autonomno YOLO Vozilo",
			"author": { "@type": "Person", "name": "Danilo Stoletović" },
			"programmingLanguage": ["Python", "C#", "Kotlin", "TypeScript"]
		}
	</script>
</svelte:head>

<section id="hero" class="hero">
	<div class="hero-content">
		<h1 class="gradient-text">AUTONOMNO YOLO VOZILO</h1>
		{#if visibleSections.has('hero')}
			<div in:fade={{ delay: 100, duration: 800 }}>
				<p class="hero-desc">
					Otvorena platforma za istraživanje <strong>Edge AI tehnologija</strong> na Raspberry Pi 5 arhitekturi.
				</p>
				<div class="badges">
					<span class="high-contrast-badge">🎓 Edukativni Projekt</span>
					<span class="high-badge-outline">🧠 YOLOv11 & OCR</span>
					<span class="high-badge-outline">🚀 N1 Autonomija</span>
					<span class="high-badge-outline">🏎️ Mecanum Drive</span>
				</div>
			</div>
		{/if}
	</div>
</section>

<section id="hardware" class="section-container">
	{#if visibleSections.has('hardware')}
		<header in:fade={{ duration: 800 }} class="section-header">
			<h2 class="section-title">Hardverska Arhitektura</h2>
			<p class="section-subtitle">Transparentan uvid u komponente namenjen inženjerima</p>
		</header>
		<div class="presentation-grid">
			<div in:fly={{ x: -30, duration: 1000 }} class="image-container">
				<figure class="img-wrapper">
					<enhanced:img
						src={hardwareSchema}
						alt="Hardware connection schema for Raspberry Pi 5"
						class="hardware-img"
						loading="lazy"
					/>
					<figcaption class="caption">
						Slika 1: Šema povezivanja RPi 5 i senzorskih modula
					</figcaption>
				</figure>
			</div>

			<div in:fly={{ x: 30, duration: 1000 }} class="specs-card">
				<article class="spec-item">
					<strong class="text-primary-high">Napajanje</strong>
					<p>XL4015 Step-down konverter (5.1V, 5A) za stabilan rad Raspberry Pi 5.</p>
				</article>
				<article class="spec-item">
					<strong class="text-primary-high">Kretanje</strong>
					<p>Četiri DC motora sa Mecanum točkovima za kretanje u svim pravcima.</p>
				</article>
				<article class="spec-item">
					<strong class="text-primary-high">Vid</strong>
					<p>RPi Camera Module V2 (8MP) povezana putem MIPI CSI-2 interfejsa.</p>
				</article>
			</div>
		</div>
	{/if}
</section>

<section id="software-logic" class="section-container">
	{#if visibleSections.has('software-logic')}
		<header in:fade={{ duration: 800 }} class="section-header">
			<h2 class="section-title">Softverska Inteligencija</h2>
			<p class="section-subtitle">Optimizacija neuronske mreže za rad u realnom vremenu</p>
		</header>
		<div class="modern-grid">
			<article in:fly={{ y: 30, delay: 100 }} class="modern-card interactive">
				<div class="card-content">
					<div class="card-top">
						<span class="modern-icon" aria-hidden="true">🧠</span>
						<span class="tech-pill-high">AI Model</span>
					</div>
					<h3>YOLOv11 ONNX</h3>
					<p>Visok FPS na CPU korišćenjem ONNX optimizacija bez eksternog GPU-a.</p>
				</div>
			</article>
			<article in:fly={{ y: 30, delay: 200 }} class="modern-card interactive">
				<div class="card-content">
					<div class="card-top">
						<span class="modern-icon" aria-hidden="true">👁️</span>
						<span class="tech-pill-high">OCR Engine</span>
					</div>
					<h3>Tesseract OCR</h3>
					<p>Ekstrakcija teksta i saobraćajnih znakova u realnom vremenu.</p>
				</div>
			</article>
			<article in:fly={{ y: 30, delay: 300 }} class="modern-card interactive">
				<div class="card-content">
					<div class="card-top">
						<span class="modern-icon" aria-hidden="true">⚡</span>
						<span class="tech-pill-high">Parallelism</span>
					</div>
					<h3>Multithreading</h3>
					<p>Paralelna obrada akvizicije slike, inferencije i logike kontrole motora.</p>
				</div>
			</article>
		</div>
	{/if}
</section>

<section id="projects" class="section-container">
	{#if visibleSections.has('projects')}
		<header class="section-header">
			<h2 class="section-title">Modularni Ekosistem</h2>
			<p class="section-subtitle">Kompletan izvorni kod dostupan za učenje</p>
		</header>
		<div class="modern-grid">
			{#each projects as project, i (project.link)}
				<a href={project.link} target="_blank" rel="noopener noreferrer" class="modern-card-link">
					<article class="modern-card interactive">
						<div class="card-content">
							<div class="card-top">
								<span class="modern-icon" aria-hidden="true">{project.icon}</span>
								<span class="tech-pill-high">{project.tech}</span>
							</div>
							<h3>{project.title}</h3>
							<p>{project.desc}</p>
							<div class="card-footer-high"><span>Pogledaj kod →</span></div>
						</div>
					</article>
				</a>
			{/each}
		</div>
	{/if}
</section>

<footer>
	<p>Autor: <strong>Danilo Stoletović</strong> • Mentor: <strong>Dejan Batanjac</strong></p>
	<p>ETŠ „Nikola Tesla“ Niš • 2026</p>
</footer>

<style>
	:global(:root) {
		/* Standard WCAG AA contrast adjustments for Light Mode */
		--primary-high: #01579b;
		--text-main: #0f172a;
		--text-dim-high: #334155;
		--card-bg-glass: rgba(255, 255, 255, 0.95);
		--border: rgba(15, 23, 42, 0.15);
	}

	:global([data-theme='dark']) {
		/* Standard WCAG AA contrast adjustments for Dark Mode */
		--primary-high: #7dd3fc;
		--text-main: #f8fafc;
		--text-dim-high: #cbd5e1;
		--card-bg-glass: rgba(15, 23, 42, 0.85);
		--border: rgba(255, 255, 255, 0.1);
	}

	.hero {
		min-height: 80vh;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	.gradient-text {
		font-size: clamp(2.5rem, 8vw, 5rem);
		font-weight: 900;
		line-height: 1.1;
		margin-bottom: 24px;
		background: linear-gradient(135deg, var(--text-main) 30%, var(--primary-high) 100%);

		/* Compatibility: Standard + Webkit */
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		color: var(--text-main); /* Fallback */
	}

	.hero-desc {
		color: var(--text-dim-high);
		font-size: clamp(1.1rem, 2vw, 1.3rem);
		max-width: 800px;
		margin: 0 auto 40px;
	}

	.badges {
		display: flex;
		gap: 12px;
		justify-content: center;
		flex-wrap: wrap;
	}

	.high-contrast-badge {
		background: var(--primary-high);
		color: #ffffff;
		padding: 8px 18px;
		border-radius: 50px;
		font-size: 0.85rem;
		font-weight: 700;
	}

	.high-badge-outline {
		border: 2px solid var(--primary-high);
		color: var(--primary-high);
		padding: 6px 16px;
		border-radius: 50px;
		font-size: 0.85rem;
		font-weight: 700;
	}

	.section-container {
		max-width: 1200px;
		margin: 100px auto;
		padding: 0 24px;
		contain: layout;
	}

	.section-header {
		text-align: center;
		margin-bottom: 60px;
	}

	.section-title {
		font-size: clamp(2rem, 5vw, 2.8rem);
		color: var(--text-main);
		margin-bottom: 12px;
	}

	.section-subtitle {
		color: var(--text-dim-high);
		font-size: 1.1rem;
	}

	.presentation-grid {
		display: grid;
		grid-template-columns: 1.2fr 1fr;
		gap: 40px;
		align-items: start;
	}

	.image-container {
		background: var(--card-bg-glass);
		border: 1px solid var(--border);
		border-radius: 24px;
		padding: 20px;
		backdrop-filter: blur(10px);
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
	}

	.img-wrapper {
		border-radius: 16px;
		overflow: hidden;
		margin: 0;
		background: #f1f5f9;
		display: flex;
		flex-direction: column;
	}

	.hardware-img {
		width: 100%;
		height: auto;
		aspect-ratio: 16/10;
		object-fit: cover;
	}

	.caption {
		padding: 15px;
		color: var(--text-dim-high);
		text-align: center;
		font-size: 0.9rem;
		font-weight: 600;
		border-top: 1px solid var(--border);
	}

	.specs-card {
		background: var(--card-bg-glass);
		padding: 40px;
		border-radius: 24px;
		border: 1px solid var(--border);
		backdrop-filter: blur(10px);
	}

	.text-primary-high {
		color: var(--primary-high);
		font-size: 1.1rem;
		display: block;
		margin-bottom: 5px;
		font-weight: 800;
	}

	.spec-item p {
		color: var(--text-dim-high);
		margin-bottom: 25px;
		line-height: 1.6;
	}

	.modern-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: 24px;
	}

	.modern-card-link {
		text-decoration: none;
		color: inherit;
		display: block;
	}

	.modern-card {
		background: var(--card-bg-glass);
		border: 1px solid var(--border);
		border-radius: 24px;
		backdrop-filter: blur(12px);
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.interactive:hover {
		transform: translateY(-10px);
		border-color: var(--primary-high);
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
	}

	.card-content {
		padding: 32px;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
	}

	.card-top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20px;
	}

	.modern-icon {
		font-size: 1.8rem;
	}

	.tech-pill-high {
		background: rgba(1, 87, 155, 0.1);
		color: var(--primary-high);
		padding: 6px 14px;
		border-radius: 8px;
		font-size: 0.75rem;
		font-weight: 800;
		border: 1.5px solid var(--primary-high);
	}

	.modern-card h3 {
		color: var(--text-main);
		margin: 10px 0;
		font-size: 1.5rem;
		font-weight: 700;
	}

	.modern-card p {
		color: var(--text-dim-high);
		line-height: 1.6;
		font-size: 0.95rem;
		margin-bottom: 20px;
	}

	.card-footer-high {
		margin-top: auto;
		color: var(--primary-high);
		font-weight: 800;
		font-size: 0.9rem;
	}

	footer {
		padding: 80px 24px;
		text-align: center;
		border-top: 1px solid var(--border);
		color: var(--text-main);
	}

	@media (max-width: 900px) {
		.presentation-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
