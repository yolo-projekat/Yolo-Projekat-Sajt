<script lang="ts">
	import favicon from '$lib/assets/favicon.png?enhanced';
	import { onMount } from 'svelte';

	let { children } = $props();
	let isMenuOpen = $state(false);
	let scrolled = $state(false);
	let theme = $state('dark');

	/**
	 * Rešava oba TypeScript problema:
	 * 1. Ako je favicon 'string', vraća ga direktno.
	 * 2. Ako je favicon 'Picture' (enhanced), izvlači .src bez greške.
	 */
	function getFaviconUrl(img: any): string {
		if (img && typeof img === 'object' && 'sources' in img) {
			// Slučaj: @sveltejs/enhanced-img Picture objekat
			const sources = Object.values(img.sources) as any[][];
			return sources[0]?.[0]?.src || '';
		}
		// Slučaj: Običan string import
		return String(img);
	}

	const faviconUrl = getFaviconUrl(favicon);

	onMount(() => {
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

		const handleScroll = () => {
			window.requestAnimationFrame(() => {
				scrolled = window.scrollY > 50;
			});
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function toggleTheme() {
		const newTheme = theme === 'dark' ? 'light' : 'dark';
		theme = newTheme;
		document.documentElement.setAttribute('data-theme', newTheme);
		localStorage.setItem('theme', newTheme);
	}

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
		document.body.style.overflow = isMenuOpen ? 'hidden' : '';
	}

	function closeMenu() {
		isMenuOpen = false;
		document.body.style.overflow = '';
	}

	function scrollTo(id: string): void {
		const el = document.getElementById(id);
		if (el) {
			window.scrollTo({
				top: el.getBoundingClientRect().top + window.scrollY - 80,
				behavior: 'smooth'
			});
		}
		closeMenu();
	}
</script>

<svelte:head>
	<title>YOLO Projekat | Autonomno AI Vozilo</title>
	<meta name="description" content="Edukativna platforma za Edge AI na Raspberry Pi 5." />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

	<link rel="icon" href={faviconUrl} />

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap&font-display=swap"
		rel="stylesheet"
	/>
</svelte:head>

{#if isMenuOpen}
	<button
		class="menu-overlay"
		onclick={closeMenu}
		onkeydown={(e) => e.key === 'Escape' && closeMenu()}
		aria-label="Zatvori meni"
	>
	</button>
{/if}

<header class="navbar {scrolled ? 'scrolled' : ''}">
	<div class="nav-container">
		<button
			class="logo"
			onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
			aria-label="Home"
		>
			<div class="logo-icon" aria-hidden="true">
				<div class="logo-ring"></div>
				<div class="logo-dot"></div>
			</div>
			<div class="logo-text">
				<span class="logo-main">YOLO</span>
				<span class="logo-sub">PROJEKAT</span>
			</div>
		</button>

		<nav class="nav-links {isMenuOpen ? 'open' : ''}" aria-label="Glavna navigacija">
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
							stroke-linecap="round"
							><circle cx="12" cy="12" r="5" /><path
								d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
							/></svg
						>
					{:else}
						<svg
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg
						>
					{/if}
				</button>
				<a
					href="https://github.com/yolo-projekat"
					target="_blank"
					rel="noopener noreferrer"
					class="github-cta">GITHUB</a
				>
			</div>
		</nav>

		<button class="mobile-toggle" onclick={toggleMenu} aria-label="Meni" aria-expanded={isMenuOpen}>
			<div class="hamburger {isMenuOpen ? 'active' : ''}">
				<span></span><span></span><span></span>
			</div>
		</button>
	</div>
</header>

<main id="main-content">
	{@render children()}
</main>

<style>
	/* Tvoj originalni UI zadržan u potpunosti */
	:global(:root) {
		--bg: #f8fafc;
		--text-main: #0f172a;
		--text-dim: #475569;
		--border: #e2e8f0;
		--primary: #0284c7;
		--nav-glass: rgba(248, 250, 252, 0.85);
	}

	:global(:root[data-theme='dark']) {
		--bg: #020617;
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
		overflow-x: hidden;
	}

	.menu-overlay {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.4);
		backdrop-filter: blur(4px);
		z-index: 998;
		border: none;
		cursor: pointer;
		width: 100%;
		height: 100%;
	}

	.navbar {
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 1000;
		padding: 24px;
		transition: all 0.4s ease;
	}

	.navbar.scrolled {
		padding: 12px 24px;
		background: var(--nav-glass);
		backdrop-filter: blur(12px);
		border-bottom: 1px solid var(--border);
	}

	.nav-container {
		max-width: 1300px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.nav-links {
		display: flex;
		align-items: center;
		gap: 40px;
	}
	.nav-list {
		display: flex;
		gap: 32px;
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.nav-item {
		background: none;
		border: none;
		color: var(--text-dim);
		font-weight: 700;
		font-size: 0.75rem;
		cursor: pointer;
		transition: 0.3s;
	}
	.nav-item:hover {
		color: var(--primary);
	}

	.theme-toggle {
		background: none;
		border: 1px solid var(--border);
		color: var(--text-main);
		padding: 8px;
		border-radius: 10px;
		cursor: pointer;
		display: flex;
	}
	.github-cta {
		background: var(--text-main);
		color: var(--bg);
		padding: 8px 16px;
		border-radius: 10px;
		text-decoration: none;
		font-weight: 800;
		font-size: 0.75rem;
	}

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
		background: none;
		border: none;
		cursor: pointer;
		padding: 5px;
		z-index: 1001;
	}
	.hamburger {
		width: 24px;
		height: 18px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.hamburger span {
		display: block;
		width: 100%;
		height: 2px;
		background: var(--primary);
		transition: 0.3s ease;
		border-radius: 2px;
	}

	.hamburger.active span:nth-child(1) {
		transform: translateY(8px) rotate(45deg);
	}
	.hamburger.active span:nth-child(2) {
		opacity: 0;
	}
	.hamburger.active span:nth-child(3) {
		transform: translateY(-8px) rotate(-45deg);
	}

	@media (max-width: 1024px) {
		.mobile-toggle {
			display: block;
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
			transition: 0.4s ease;
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
</style>
