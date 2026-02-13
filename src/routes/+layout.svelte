<script lang="ts">
	import favicon from '$lib/assets/favicon.png';
	import { onMount } from 'svelte';

	let { children } = $props();
	let isMenuOpen = $state(false);
	let scrolled = $state(false);
	let theme = $state('dark'); // Default dok se ne učita sistem

	onMount(() => {
		// 1. Provera prioriteta: LocalStorage -> Sistemska Tema
		const savedTheme = localStorage.getItem('theme');
		const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');

		const applyTheme = (newTheme: string) => {
			theme = newTheme;
			document.documentElement.setAttribute('data-theme', newTheme);
		};

		if (savedTheme) {
			applyTheme(savedTheme);
		} else {
			applyTheme(systemPrefersDark.matches ? 'dark' : 'light');
		}

		// 2. Automatsko praćenje sistemskih promena (ako korisnik promeni u OS-u dok je na sajtu)
		const handleSystemChange = (e: MediaQueryListEvent) => {
			if (!localStorage.getItem('theme')) {
				applyTheme(e.matches ? 'dark' : 'light');
			}
		};

		systemPrefersDark.addEventListener('change', handleSystemChange);

		// 3. Scroll efekat za Navbar
		const handleScroll = () => {
			scrolled = window.scrollY > 50;
		};
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
			systemPrefersDark.removeEventListener('change', handleSystemChange);
		};
	});

	function toggleTheme() {
		const newTheme = theme === 'dark' ? 'light' : 'dark';
		theme = newTheme;
		document.documentElement.setAttribute('data-theme', newTheme);
		localStorage.setItem('theme', newTheme);
	}

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		isMenuOpen = false;
	}

	function scrollTo(id: string): void {
		const el = document.getElementById(id);
		if (el) {
			const offset = 80;
			const elementPosition = el.getBoundingClientRect().top + window.scrollY;
			window.scrollTo({
				top: elementPosition - offset,
				behavior: 'smooth'
			});
			isMenuOpen = false;
		}
	}
</script>

<svelte:head>
	<title>YOLO Projekat | Autonomno AI Vozilo</title>
	<meta
		name="description"
		content="Edukativna platforma za Edge AI i Raspberry Pi 5. Istražite autonomno kretanje i YOLOv11 detekciju."
	/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap&font-display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<a href="#main-content" class="skip-link">Preskoči na sadržaj</a>

<header class="navbar" class:scrolled>
	<div class="nav-container">
		<button class="logo" onclick={scrollToTop} aria-label="Povratak na vrh">
			<div class="logo-icon" aria-hidden="true">
				<div class="logo-ring"></div>
				<div class="logo-dot"></div>
			</div>
			<div class="logo-text">
				<span class="logo-main">YOLO</span>
				<span class="logo-sub">PROJEKAT</span>
			</div>
		</button>

		<nav class="nav-links" class:open={isMenuOpen} aria-label="Glavna navigacija">
			<ul class="nav-list">
				<li><button class="nav-item" onclick={() => scrollTo('hardware')}>HARDVER</button></li>
				<li>
					<button class="nav-item" onclick={() => scrollTo('software-logic')}>SOFTVER</button>
				</li>
				<li><button class="nav-item" onclick={() => scrollTo('projects')}>EKOSISTEM</button></li>
				<li><button class="nav-item" onclick={() => scrollTo('use-cases')}>PRIMENA</button></li>
			</ul>

			<div class="nav-actions">
				<button onclick={toggleTheme} class="theme-toggle" aria-label="Promeni temu">
					{#if theme === 'dark'}
						<svg
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line
								x1="12"
								y1="21"
								x2="12"
								y2="23"
							/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line
								x1="18.36"
								y1="18.36"
								x2="19.78"
								y2="19.78"
							/><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line
								x1="4.22"
								y1="19.78"
								x2="5.64"
								y2="18.36"
							/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg
						>
					{:else}
						<svg
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg
						>
					{/if}
				</button>

				<a
					href="https://github.com/yolo-projekat"
					target="_blank"
					rel="noopener noreferrer"
					class="github-cta"
				>
					<span>GITHUB</span>
					<svg
						width="18"
						height="18"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2.5"
						><path
							d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
						></path></svg
					>
				</a>
			</div>
		</nav>

		<button class="mobile-toggle" onclick={toggleMenu} aria-label="Meni" aria-expanded={isMenuOpen}>
			<div class="hamburger" class:active={isMenuOpen}>
				<span></span>
				<span></span>
			</div>
		</button>
	</div>
</header>

<main id="main-content">
	{@render children()}
</main>

<style>
	/* CSS Varijable za teme */
	:global(:root) {
		--bg: #f8fafc;
		--card-bg: #ffffff;
		--text-main: #0f172a;
		--text-dim: #475569;
		--border: #e2e8f0;
		--primary: #0284c7;
		--nav-glass: rgba(248, 250, 252, 0.85);
	}

	:global(:root[data-theme='dark']) {
		--bg: #020617;
		--card-bg: rgba(15, 23, 42, 0.6);
		--text-main: #f8fafc;
		--text-dim: #94a3b8;
		--border: rgba(255, 255, 255, 0.06);
		--primary: #38bdf8;
		--nav-glass: rgba(2, 6, 23, 0.85);
	}

	:global(body) {
		margin: 0;
		background-color: var(--bg);
		color: var(--text-main);
		font-family: 'Plus Jakarta Sans', sans-serif;
		transition: background-color 0.3s ease;
		overflow-x: hidden;
	}

	.skip-link {
		position: absolute;
		top: -100px;
		left: 0;
		background: var(--primary);
		color: white;
		padding: 10px;
		z-index: 9999;
	}
	.skip-link:focus {
		top: 0;
	}

	.navbar {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1000;
		padding: 24px;
		transition: all 0.4s ease;
	}

	.navbar.scrolled {
		padding: 12px 24px;
		background: var(--nav-glass);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		border-bottom: 1px solid var(--border);
	}

	.nav-container {
		max-width: 1300px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.nav-list {
		display: flex;
		gap: 32px;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.nav-links {
		display: flex;
		align-items: center;
		gap: 40px;
	}

	.nav-item {
		background: none;
		border: none;
		color: var(--text-dim);
		font-weight: 700;
		font-size: 0.75rem;
		letter-spacing: 1px;
		cursor: pointer;
		transition: color 0.3s;
	}

	.nav-item:hover {
		color: var(--primary);
	}

	.nav-actions {
		display: flex;
		align-items: center;
		gap: 16px;
	}

	.theme-toggle {
		background: var(--card-bg);
		border: 1px solid var(--border);
		color: var(--text-main);
		padding: 8px;
		border-radius: 10px;
		cursor: pointer;
		display: flex;
		transition: 0.2s;
	}
	.theme-toggle:hover {
		border-color: var(--primary);
		color: var(--primary);
	}

	.github-cta {
		display: flex;
		align-items: center;
		gap: 8px;
		background: var(--text-main);
		color: var(--bg);
		padding: 8px 16px;
		border-radius: 10px;
		text-decoration: none;
		font-weight: 800;
		font-size: 0.75rem;
	}

	/* Logo & Hamburger (Zadržani tvoji originalni stilovi) */
	.logo {
		background: none;
		border: none;
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: 12px;
	}
	.logo-ring {
		width: 32px;
		height: 32px;
		border: 3px solid var(--primary);
		border-radius: 10px;
		transform: rotate(45deg);
	}
	.logo-main {
		font-weight: 800;
		font-size: 1.2rem;
		color: var(--text-main);
	}
	.logo-sub {
		color: var(--primary);
		font-size: 0.6rem;
		letter-spacing: 2px;
	}

	.mobile-toggle {
		display: none;
	}

	@media (max-width: 1024px) {
		.mobile-toggle {
			display: flex;
		}
		.nav-links {
			position: fixed;
			top: 0;
			right: -100%;
			width: 280px;
			height: 100vh;
			background: var(--bg);
			flex-direction: column;
			padding: 100px 40px;
			transition: 0.4s;
			border-left: 1px solid var(--border);
		}
		.nav-links.open {
			right: 0;
		}
		.nav-list {
			flex-direction: column;
			gap: 30px;
		}
	}

	.hamburger {
		width: 20px;
		height: 14px;
		position: relative;
	}
	.hamburger span {
		position: absolute;
		width: 100%;
		height: 2px;
		background: var(--primary);
		transition: 0.3s;
	}
	.hamburger span:first-child {
		top: 0;
	}
	.hamburger span:last-child {
		bottom: 0;
	}
	.hamburger.active span:first-child {
		transform: translateY(6px) rotate(45deg);
	}
	.hamburger.active span:last-child {
		transform: translateY(-6px) rotate(-45deg);
	}
</style>
