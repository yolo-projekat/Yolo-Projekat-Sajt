<script>
	const projects = [
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
			desc: 'Moderan sajt napravljen u Svelte JS framework-u',
			link: 'https://yolo-projekat.github.io/Yolo-Projekat-Sajt/'
		}
	];
</script>

<svelte:head>
	<title>YOLO Projekat | Danilo Stoletović</title>
</svelte:head>

<main>
	<section class="hero">
		<h1>AUTONOMNO YOLO VOZILO</h1>
		<p>Detekcija objekata i OCR analiza u realnom vremenu (Raspberry Pi 5 platforma)</p>
		<div class="badges">
			<span>🚀 N1 Autonomija</span>
			<span>🧠 YOLOv11/v8</span>
			<span>📶 WebSocket Control</span>
		</div>
	</section>

	<section class="grid">
		{#each projects as project}
			<div class="card">
				<h3>{project.title}</h3>
				<p class="tech">{project.tech}</p>
				<p>{project.desc}</p>
				<a href={project.link} target="_blank" rel="noreferrer">Pogledaj Kod →</a>
			</div>
		{/each}
	</section>

	<section class="specs-container">
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
		<p>Autor: Danilo Stoletovic, ETŠ „Nikola Tesla“ Niš</p>
		<p>Mentor: Dejan Batanjac</p>
	</footer>
</main>

<style>
	:global(body) {
		margin: 0;
		background-color: #0f172a;
		color: white;
		font-family: 'Inter', sans-serif;
	}

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
</style>
