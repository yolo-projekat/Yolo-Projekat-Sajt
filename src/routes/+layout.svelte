<script lang="ts">
	import favicon from '$lib/assets/favicon.png';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let { children } = $props();

	// Svelte 5 State
	let isMenuOpen = $state(false);
	let scrolled = $state(false);
	let theme = $state('dark');

	const applyTheme = (newTheme: string) => {
		theme = newTheme;
		if (browser) {
			document.documentElement.setAttribute('data-theme', newTheme);
			localStorage.setItem('theme', newTheme);
		}
	};

	onMount(() => {
		// Sync theme state with attribute set by the head script
		theme = document.documentElement.getAttribute('data-theme') || 'dark';

		let ticking = false;
		const handleScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					scrolled = window.scrollY > 20;
					ticking = false;
				});
				ticking = true;
			}
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', handleScroll);
			if (browser) document.body.style.overflow = '';
		};
	});

	function toggleTheme() {
		applyTheme(theme === 'dark' ? 'light' : 'dark');
	}

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
		if (browser) {
			document.body.style.overflow = isMenuOpen ? 'hidden' : '';
		}
	}

	function closeMenu() {
		if (isMenuOpen) {
			isMenuOpen = false;
			document.body.style.overflow = '';
		}
	}

	function scrollTo(id: string): void {
		const el = document.getElementById(id);
		if (el) {
			window.scrollTo({
				top: el.offsetTop - 90,
				behavior: 'smooth'
			});
		}
		closeMenu();
	}
</script>

<svelte:head>
	<title>YOLO Projekat | Autonomno AI Vozilo</title>
	<meta
		name="description"
		content="Edukativna platforma za razvoj Edge AI rešenja na Raspberry Pi 5 platformi."
	/>
	<link rel="icon" type="image/png" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap"
		rel="stylesheet"
	/>

	<script>
		(function () {
			const saved = localStorage.getItem('theme');
			const pref = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
			document.documentElement.setAttribute('data-theme', saved || pref);
		})();
	</script>
</svelte:head>

{#if isMenuOpen}
	<button
		class="menu-overlay"
		onclick={closeMenu}
		onkeydown={(e) => e.key === 'Escape' && closeMenu()}
		aria-label="Zatvori meni"
	></button>
{/if}

<header class="navbar" class:scrolled>
	<div class="nav-container">
		<button
			class="logo"
			onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
			aria-label="Povratak na vrh"
		>
			<div class="logo-icon">
				<div class="logo-ring"></div>
				<div class="logo-dot"></div>
			</div>
			<div class="logo-text">
				<span class="logo-main">YOLO</span>
				<span class="logo-sub">PROJEKAT</span>
			</div>
		</button>

		<nav
			class="nav-links"
			class:open={isMenuOpen}
			id="main-nav"
			aria-hidden={!isMenuOpen && browser && window.innerWidth < 1024}
		>
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
							stroke-linejoin="round"
						>
							<circle cx="12" cy="12" r="5" />
							<line x1="12" y1="1" x2="12" y2="3" />
							<line x1="12" y1="21" x2="12" y2="23" />
							<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
							<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
							<line x1="1" y1="12" x2="3" y2="12" />
							<line x1="21" y1="12" x2="23" y2="12" />
							<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
							<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
						</svg>
					{:else}
						<svg
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
						</svg>
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

		<button
			class="mobile-toggle"
			onclick={toggleMenu}
			aria-label="Meni"
			aria-expanded={isMenuOpen}
			aria-controls="main-nav"
		>
			<div class="hamburger" class:active={isMenuOpen}>
				<span class="line-top"></span>
				<span class="line-mid"></span>
				<span class="line-bot"></span>
			</div>
		</button>
	</div>
</header>

<main id="main-content">
	{@render children()}
</main>

<style>
	:global(:root) {
		--bg: #fdfdfe;
		--text-main: #0f172a;
		--text-dim: #475569;
		--primary: #0271ad; /* Improved contrast for Light Mode */
		--glass-bg: rgba(255, 255, 255, 0.75);
		--glass-border: rgba(15, 23, 42, 0.08);
		--nav-pad: 24px;
		color-scheme: light;
	}

	:global(:root[data-theme='dark']) {
		--bg: #030712;
		--text-main: #f8fafc;
		--text-dim: #94a3b8;
		--primary: #38bdf8;
		--glass-bg: rgba(3, 7, 18, 0.75);
		--glass-border: rgba(255, 255, 255, 0.08);
		color-scheme: dark;
	}

	:global(body) {
		margin: 0;
		background-color: var(--bg);
		color: var(--text-main);
		font-family: 'Plus Jakarta Sans', sans-serif;
		overflow-x: hidden;
		transition: background-color 0.4s ease;
		-webkit-font-smoothing: antialiased;
	}

	/* Ensures smooth scrolling to sections with header offset */
	:global(section) {
		scroll-margin-top: 100px;
	}

	.navbar {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1000;
		padding: var(--nav-pad) 0;
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		will-change: padding, background-color;
	}

	.navbar.scrolled {
		padding: 12px 0;
		background: var(--glass-bg);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border-bottom: 1px solid var(--glass-border);
	}

	.nav-container {
		max-width: 1300px;
		margin: 0 auto;
		padding: 0 32px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.nav-links {
		display: flex;
		align-items: center;
		gap: 48px;
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
		font-size: 0.8rem;
		letter-spacing: 0.5px;
		cursor: pointer;
		transition: color 0.3s;
		position: relative;
		padding: 8px 0;
	}

	.nav-item:hover {
		color: var(--primary);
	}

	.nav-item::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0;
		height: 2px;
		background: var(--primary);
		transition: width 0.3s ease;
	}

	.nav-item:hover::after {
		width: 100%;
	}

	.nav-actions {
		display: flex;
		align-items: center;
		gap: 16px;
	}

	.theme-toggle {
		background: var(--glass-bg);
		border: 1px solid var(--glass-border);
		color: var(--text-main);
		padding: 10px;
		border-radius: 12px;
		cursor: pointer;
		display: flex;
		transition: all 0.3s ease;
	}

	.theme-toggle:hover {
		background: var(--primary);
		color: white;
		transform: rotate(15deg);
	}

	.github-cta {
		background: var(--text-main);
		color: var(--bg);
		padding: 10px 20px;
		border-radius: 12px;
		text-decoration: none;
		font-weight: 800;
		font-size: 0.75rem;
		transition: all 0.3s ease;
	}

	.github-cta:hover {
		transform: translateY(-2px);
		box-shadow: 0 10px 20px -10px var(--primary);
	}

	.logo {
		background: none;
		border: none;
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: 14px;
		padding: 0;
	}

	.logo-ring {
		width: 36px;
		height: 36px;
		border: 3.5px solid var(--primary);
		border-radius: 12px;
		transform: rotate(45deg);
		transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	.logo:hover .logo-ring {
		transform: rotate(225deg);
	}

	.logo-main {
		font-weight: 800;
		font-size: 1.4rem;
		color: var(--text-main);
		display: block;
		line-height: 1;
	}

	.logo-sub {
		color: var(--primary);
		font-size: 0.65rem;
		letter-spacing: 3px;
		font-weight: 800;
		display: block;
		margin-top: 4px;
	}

	.mobile-toggle {
		display: none;
		background: var(--glass-bg);
		border: 1px solid var(--glass-border);
		padding: 12px;
		border-radius: 14px;
		cursor: pointer;
		z-index: 1001;
	}

	.hamburger {
		width: 28px;
		height: 20px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.hamburger span {
		display: block;
		width: 100%;
		height: 3px;
		background: var(--primary);
		border-radius: 10px;
		transition: all 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
	}

	.hamburger.active .line-top {
		transform: translateY(8.5px) rotate(45deg);
	}
	.hamburger.active .line-mid {
		opacity: 0;
		transform: translateX(20px);
	}
	.hamburger.active .line-bot {
		transform: translateY(-8.5px) rotate(-45deg);
	}

	.menu-overlay {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.3);
		backdrop-filter: blur(8px);
		z-index: 998;
		border: none;
		cursor: pointer;
	}

	@media (max-width: 1024px) {
		.mobile-toggle {
			display: flex;
		}
		.nav-links {
			position: fixed;
			top: 0;
			right: -100%;
			width: 100%;
			max-width: 300px;
			height: 100vh;
			background: var(--bg);
			flex-direction: column;
			justify-content: center;
			padding: 40px;
			transition: right 0.5s ease;
			border-left: 1px solid var(--glass-border);
			visibility: hidden;
		}
		.nav-links.open {
			right: 0;
			visibility: visible;
		}
		.nav-list {
			flex-direction: column;
			gap: 40px;
			align-items: center;
		}
		.nav-actions {
			flex-direction: column;
			width: 100%;
			gap: 20px;
		}
	}
</style>
