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
			tech: 'WinUI 3, C#, ONNX',
			desc: 'Komandni panel sa video strimingom niske latencije za inženjerski nadzor.',
			link: 'https://github.com/yolo-projekat/Yolo-Projekat-Windows',
			icon: '🖥️'
		},
		{
			title: 'Android Aplikacija',
			tech: 'Kotlin, Jetpack Compose',
			desc: 'Mobilna kontrola sa WebSocket protokolom za upravljanje u realnom vremenu.',
			link: 'https://github.com/yolo-projekat/Yolo-Projekat-Android',
			icon: '📱'
		},
		{
			title: 'Python Inference',
			tech: 'Python, YOLOv11, OpenCV',
			desc: 'Multithreaded motor koji obrađuje video stream i vrši YOLO/OCR klasifikaciju.',
			link: 'https://github.com/yolo-projekat/Yolo-Projekat-Python',
			icon: '🐍'
		},
		{
			title: 'RPi Core',
			tech: 'Linux, Systemd, Python',
			desc: 'Sistemski servisi na Raspberry Pi 5 platformi optimizovani za resurse.',
			link: 'https://github.com/yolo-projekat/Yolo-Projekat-Raspberry-Pi',
			icon: '⚙️'
		},
		{
			title: 'Veb Dashboard',
			tech: 'Next.js, WebSockets',
			desc: 'Dashboard za daljinski monitoring telemetrije i stanja senzora vozila.',
			link: 'https://github.com/yolo-projekat/Yolo-Projekat-Veb-Kontrola',
			icon: '🌐'
		},
		{
			title: 'Prezentacija',
			tech: 'SvelteKit, Tailwind',
			desc: 'Ova platforma za dokumentaciju i interaktivni prikaz projekta.',
			link: 'https://github.com/yolo-projekat/Yolo-Projekat-Sajt',
			icon: '🌍'
		}
	];
</script>

<section id="hero" class="hero">
	{#if visibleSections.has('hero')}
		<div class="hero-content">
			<h1 class="gradient-text">AUTONOMNO YOLO VOZILO</h1>
			<p>
				Projektovanje i realizacija naprednog vozila sa N1 stepenom autonomije na bazi Raspberry Pi
				5 platforme.
			</p>
			<div class="badges">
				<span>🚀 N1 Autonomija</span>
				<span>🧠 YOLO & OCR</span>
				<span>🔋 Li-Ion 3500mAh</span>
				<span>🏎️ Mecanum Drive</span>
			</div>
		</div>
	{/if}
</section>

<section id="hardware" class="section-container">
	{#if visibleSections.has('hardware')}
		<div in:fade={{ duration: 800 }} class="section-header">
			<h2 class="section-title">Hardverska Arhitektura</h2>
			<p>Integracija komponenti za stabilnu Edge AI obradu</p>
		</div>

		<div class="presentation-grid">
			<div in:fly={{ x: -50, duration: 1000 }} class="placeholder-box">
				<div class="img-mock">
					<span style="color: var(--text-dim)">[Shema: RPi 5 + XL4015 + L298N]</span>
				</div>
				<p class="caption">Slika 1: Šema veze - Raspberry Pi 5, XL4015 i L298N drajver</p>
			</div>
			<div in:fly={{ x: 50, duration: 1000 }} class="specs-card">
				<div class="spec-item">
					<strong>Napajanje</strong><span
						>XL4015 Step-down konverter spušta napon baterija na stabilnih 5.1V (5A) za RPi 5.</span
					>
				</div>
				<div class="spec-item">
					<strong>Kretanje</strong><span
						>Četiri DC motora sa Mecanum točkovima za kretanje u svim pravcima.</span
					>
				</div>
				<div class="spec-item">
					<strong>Vid</strong><span>RPi Camera Module V2 povezan putem MIPI CSI-2 interfejsa.</span>
				</div>
				<div class="spec-item">
					<strong>Autonomija</strong><span
						>Sistem nivoa N1: Detekcija i praćenje objekata uz kontinualni nadzor.</span
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

		<div class="grid">
			<div in:fly={{ y: 30, delay: 200 }} class="card">
				<div class="card-inner">
					<h3>YOLOv11 ONNX</h3>
					<p>
						Modeli su konvertovani u ONNX format radi postizanja stabilnog FPS-a direktno na CPU
						procesoru.
					</p>
				</div>
			</div>
			<div in:fly={{ y: 30, delay: 400 }} class="card">
				<div class="card-inner">
					<h3>Tesseract OCR</h3>
					<p>
						Interpretacija saobraćajnih znakova i naziva ulica za simulaciju pametnog transportnog
						sistema.
					</p>
				</div>
			</div>
			<div in:fly={{ y: 30, delay: 600 }} class="card">
				<div class="card-inner">
					<h3>Multithreading</h3>
					<p>
						Asinhrona arhitektura: poseban nit za video stream, poseban za AI inferenciju i kontrolu
						motora.
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
			<p>Kompletan kod i arhitektura dostupni su na GitHub platformi</p>
		</div>

		<div class="grid">
			{#each projects as project, i}
				<div in:fly={{ y: 20, delay: i * 100 }} class="card">
					<div class="card-inner">
						<div class="card-top">
							<span class="project-icon">{project.icon}</span>
							<div class="tech-tag">{project.tech}</div>
						</div>
						<h3>{project.title}</h3>
						<p>{project.desc}</p>
						<a href={project.link} target="_blank" rel="noreferrer" class="card-link">
							GitHub Repo
							<svg
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
							>
								<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
								<polyline points="15 3 21 3 21 9"></polyline>
								<line x1="10" y1="14" x2="21" y2="3"></line>
							</svg>
						</a>
					</div>
				</div>
			{/each}
		</div>
	{/if}
</section>

<section id="use-cases" class="section-container">
	{#if visibleSections.has('use-cases')}
		<div in:scale={{ start: 0.9, duration: 800 }} class="specs-card">
			<div class="specs-header">
				<div class="pulse-icon"></div>
				<h2>Sektori Primene</h2>
			</div>
			<div class="specs-grid">
				<div class="spec-item">
					<strong>Industrija</strong><span
						>Autonomni logistički roboti u magacinima i fabrikama.</span
					>
				</div>
				<div class="spec-item">
					<strong>Gradska Infra</strong><span
						>Monitoring saobraćaja i pametno očitavanje parking mesta.</span
					>
				</div>
				<div class="spec-item">
					<strong>Edukacija</strong><span
						>Open-source platforma za učenje robotike i AI algoritama.</span
					>
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
	.hero {
		height: 90vh;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		background: radial-gradient(circle at center, var(--card-bg) 0%, var(--bg) 100%);
	}

	.gradient-text {
		font-size: clamp(2.5rem, 8vw, 5rem);
		font-weight: 900;
		background: linear-gradient(135deg, var(--text-main) 30%, var(--primary) 100%);
		/* Ispravljeno: Dodata oba background-clip svojstva */
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		line-height: 1.2;
		margin-bottom: 20px;
	}

	.hero p {
		color: var(--text-dim);
		font-size: 1.2rem;
		max-width: 650px;
		margin: 0 auto 30px;
	}

	.badges {
		display: flex;
		justify-content: center;
		gap: 12px;
		flex-wrap: wrap;
	}
	.badges span {
		background: rgba(56, 189, 248, 0.1);
		border: 1px solid rgba(56, 189, 248, 0.2);
		padding: 6px 16px;
		border-radius: 100px;
		font-size: 0.8rem;
		color: var(--primary);
	}

	.section-container {
		max-width: 1200px;
		margin: 100px auto;
		padding: 0 24px;
	}
	.section-header {
		text-align: center;
		margin-bottom: 60px;
	}
	.section-title {
		font-size: 2.5rem;
		color: var(--text-main);
		margin-bottom: 10px;
	}

	.presentation-grid {
		display: grid;
		grid-template-columns: 1.2fr 1fr;
		gap: 40px;
		align-items: center;
	}
	.placeholder-box {
		background: var(--card-bg);
		border: 1px solid var(--border);
		border-radius: 28px;
		padding: 20px;
		text-align: center;
	}
	.img-mock {
		height: 350px;
		background: rgba(56, 189, 248, 0.05);
		border: 2px dashed var(--border);
		border-radius: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--text-dim);
		margin-bottom: 15px;
	}
	.caption {
		font-size: 0.85rem;
		color: var(--text-dim);
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 30px;
	}

	.card {
		border-radius: 28px;
		background: var(--card-bg);
		border: 1px solid var(--border);
		transition: all 0.4s ease;
	}

	.card-inner {
		padding: 35px;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.card:hover {
		transform: translateY(-6px);
	}

	.card-top {
		display: flex;
		justify-content: space-between;
		margin-bottom: 25px;
	}
	.tech-tag {
		color: var(--primary);
		font-size: 0.65rem;
		font-weight: 800;
		padding: 6px 12px;
		border-radius: 8px;
		background: rgba(56, 189, 248, 0.05);
	}

	.card h3 {
		color: var(--text-main);
		margin-bottom: 12px;
	}
	.card p {
		color: var(--text-dim);
		line-height: 1.6;
		margin-bottom: 30px;
	}
	.card-link {
		color: var(--primary);
		text-decoration: none;
		display: flex;
		align-items: center;
		gap: 8px;
		font-weight: 700;
	}

	.specs-card {
		background: var(--card-bg);
		padding: 40px;
		border-radius: 35px;
		border: 1px solid var(--border);
	}
	.spec-item {
		margin-bottom: 20px;
	}
	.spec-item strong {
		display: block;
		color: var(--primary);
		margin-bottom: 4px;
	}
	.spec-item span {
		color: var(--text-dim);
	}

	.specs-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 30px;
	}

	.pulse-icon {
		width: 10px;
		height: 10px;
		background: var(--primary);
		border-radius: 50%;
		animation: pulse 2s infinite;
	}

	@keyframes pulse {
		0% {
			box-shadow: 0 0 0 0 rgba(56, 189, 248, 0.4);
		}
		70% {
			box-shadow: 0 0 0 10px rgba(56, 189, 248, 0);
		}
		100% {
			box-shadow: 0 0 0 0 rgba(56, 189, 248, 0);
		}
	}

	footer {
		padding: 80px 20px;
		text-align: center;
		border-top: 1px solid var(--border);
		color: var(--text-dim);
	}

	@media (max-width: 1024px) {
		.presentation-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
