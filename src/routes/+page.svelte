<script lang="ts">
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
			tech: 'WinUI 3, C#, ONNX Runtime',
			desc: 'Centralni komandni panel sa video strimingom niske latencije.',
			link: 'https://github.com/yolo-projekat/Yolo-Projekat-Windows',
			icon: '🖥️'
		},
		{
			title: 'Android Aplikacija',
			tech: 'Kotlin, Jetpack Compose',
			desc: 'Mobilna kontrola sa Smart Follow modom i real-time telemetrijom.',
			link: 'https://github.com/yolo-projekat/Yolo-Projekat-Android',
			icon: '📱'
		},
		{
			title: 'Python Skripta',
			tech: 'Python, YOLOv8, OpenCV',
			desc: 'Multithreaded sistem za detekciju i automatsko praćenje objekata.',
			link: 'https://github.com/yolo-projekat/Yolo-Projekat-Python',
			icon: '🐍'
		},
		{
			title: 'Kontrolni Server',
			tech: 'Python, Systemd',
			desc: 'Core servisi i API endpointi na Raspberry Pi 5 platformi.',
			link: 'https://github.com/yolo-projekat/Yolo-Projekat-Raspberry-Pi',
			icon: '⚙️'
		},
		{
			title: 'Veb Kontrola',
			tech: 'Next.js, React, WebSockets',
			desc: 'Interaktivni dashboard za daljinsko upravljanje vozilom i video monitoring.',
			link: 'https://github.com/yolo-projekat/Yolo-Projekat-Veb-Kontrola',
			icon: '🌐'
		},
		{
			title: 'YOLO Veb Sajt',
			tech: 'SvelteKit, Tailwind, GitHub Pages',
			desc: 'Centralni hub za dokumentaciju, specifikacije i prezentaciju celog ekosistema.',
			link: 'https://github.com/yolo-projekat/Yolo-Projekat-Sajt',
			icon: '🌍'
		}
	];
</script>

<section id="hero" class="hero">
	<div class="hero-content">
		<h1 class="gradient-text">AUTONOMNO YOLO VOZILO</h1>
		<p>Detekcija objekata i OCR analiza u realnom vremenu na Raspberry Pi 5 platformi</p>
		<div class="badges">
			<span>🚀 N1 Autonomija</span>
			<span>🧠 YOLOv11/v8</span>
			<span>📶 WebSocket</span>
		</div>
	</div>
</section>

<section id="projects" class="section-container">
	<div class="section-header">
		<h2 class="section-title">Projekti sistema</h2>
		<p>Modularna arhitektura podeljena u specijalizovane repozitorijume</p>
	</div>

	<div class="grid">
		{#each projects as project}
			<div class="card">
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
							stroke-linecap="round"
							stroke-linejoin="round"
							><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline
								points="15 3 21 3 21 9"
							></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg
						>
					</a>
				</div>
			</div>
		{/each}
	</div>
</section>

<section id="specs" class="section-container">
	<div class="specs-card glass">
		<div class="specs-header">
			<div class="pulse-icon"></div>
			<h2>Hardverska Arhitektura</h2>
		</div>
		<div class="specs-grid">
			<div class="spec-item"><strong>Procesor</strong><span>Raspberry Pi 5 (8GB)</span></div>
			<div class="spec-item"><strong>Kamera</strong><span>RPi Camera Module V2</span></div>
			<div class="spec-item"><strong>Protokol</strong><span>WebSockets (Port 1606)</span></div>
			<div class="spec-item"><strong>AI Core</strong><span>ONNX & ML Kit</span></div>
		</div>
	</div>
</section>

<footer>
	<p>Autor: <strong>Danilo Stoletović</strong> • Mentor: <strong>Dejan Batanjac</strong></p>
	<p>ETŠ „Nikola Tesla“ Niš • 2026</p>
</footer>

<style>
	:global(:root) {
		--primary: #38bdf8;
		--bg: #0f172a;
		--text-dim: #94a3b8;
	}

	.hero {
		height: 90vh;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		background: radial-gradient(circle at center, #1e293b 0%, #0f172a 100%);
	}

	.gradient-text {
		font-size: clamp(2.5rem, 8vw, 5rem);
		font-weight: 900;
		background: linear-gradient(135deg, #ffffff 30%, var(--primary, #38bdf8) 100%);

		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;

		line-height: 1.2;
		margin-bottom: 20px;

		display: block;
	}
	.hero p {
		color: var(--text-dim);
		font-size: 1.2rem;
		max-width: 600px;
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
		margin-bottom: 10px;
	}
	.section-header p {
		color: var(--text-dim);
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 30px;
	}

	/* GLASSMORPHISM KARTICE SA SMALJENIM OSVETLJENJEM */
	.card {
		position: relative;
		border-radius: 28px;
		padding: 1px;
		/* Suptilnija ivica u startu */
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%);
		transition: all 0.4s ease;
	}

	.card-inner {
		background: rgba(30, 41, 59, 0.45);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		border-radius: 27px;
		padding: 35px;
		height: 100%;
		display: flex;
		flex-direction: column;
		border: 1px solid rgba(255, 255, 255, 0.03);
	}

	.card:hover {
		transform: translateY(-6px);
		/* Smanjen intenzitet plave na hoveru (sa 0.5 na 0.25) */
		background: linear-gradient(135deg, rgba(56, 189, 248, 0.25) 0%, transparent 100%);
		/* Manji, diskretniji shadow */
		box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.4);
	}

	.card-top {
		display: flex;
		justify-content: space-between;
		margin-bottom: 25px;
	}
	.project-icon {
		font-size: 2rem;
	}

	.tech-tag {
		color: var(--primary);
		font-size: 0.65rem;
		font-weight: 800;
		padding: 6px 12px;
		border-radius: 8px;
		background: rgba(56, 189, 248, 0.05);
		border: 1px solid rgba(56, 189, 248, 0.15);
	}

	.card h3 {
		font-size: 1.4rem;
		margin: 0 0 12px 0;
		color: #f8fafc;
	}
	.card p {
		color: #94a3b8;
		line-height: 1.6;
		font-size: 0.95rem;
		margin-bottom: 30px;
	}
	.card-link {
		color: var(--primary);
		text-decoration: none;
		font-weight: 700;
		display: flex;
		align-items: center;
		gap: 8px;
		margin-top: auto;
		opacity: 0.8;
		transition: 0.2s;
	}
	.card-link:hover {
		opacity: 1;
	}

	/* HARDVERSKA KARTICA */
	.specs-card {
		background: rgba(17, 26, 46, 0.4);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		padding: 50px;
		border-radius: 35px;
		border: 1px solid rgba(56, 189, 248, 0.1);
	}

	.specs-header {
		display: flex;
		align-items: center;
		gap: 15px;
		margin-bottom: 40px;
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

	.specs-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 30px;
	}
	.spec-item strong {
		display: block;
		color: var(--primary);
		margin-bottom: 5px;
		opacity: 0.9;
	}

	footer {
		padding: 80px 20px;
		text-align: center;
		border-top: 1px solid rgba(255, 255, 255, 0.05);
		color: var(--text-dim);
		font-size: 0.9rem;
	}
</style>
