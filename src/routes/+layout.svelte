<script lang="ts">
	import favicon from '$lib/assets/favicon.png';
	import { onMount } from 'svelte';

	let { children } = $props();
	let isMenuOpen = $state(false);
	let scrolled = $state(false);
	let theme = $state('dark');

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
				scrolled = window.scrollY > 20;
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
			const offset = 90;
			window.scrollTo({
				top: el.getBoundingClientRect().top + window.scrollY - offset,
				behavior: 'smooth'
			});
		}
		closeMenu();
	}
</script>

<svelte:head>
	<title>YOLO Projekat | Autonomno AI Vozilo</title>
	<meta name="description" content="Edukativna platforma za Edge AI na Raspberry Pi 5." />
	<link rel="icon" type="image/png" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap"
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

<header class="navbar" class:scrolled>
	<div class="nav-container">
		<button
			class="logo"
			onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
			aria-label="Home"
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

		<nav class="nav-links" class:open={isMenuOpen}>
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
		--text-dim: #64748b;
		--primary: #0284c7;
		--glass-bg: rgba(255, 255, 255, 0.7);
		--glass-border: rgba(15, 23, 42, 0.08);
		--nav-pad: 24px;
	}

	:global(:root[data-theme='dark']) {
		--bg: #030712;
		--text-main: #f8fafc;
		--text-dim: #94a3b8;
		--primary: #38bdf8;
		--glass-bg: rgba(3, 7, 18, 0.7);
		--glass-border: rgba(255, 255, 255, 0.08);
	}

	:global(body) {
		margin: 0;
		background-color: var(--bg);
		color: var(--text-main);
		font-family: 'Plus Jakarta Sans', sans-serif;
		overflow-x: hidden;
		transition: background-color 0.4s ease;
	}

	.menu-overlay {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.3);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		z-index: 998;
		border: none;
		cursor: pointer;
	}

	.navbar {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1000;
		padding: var(--nav-pad) 0;
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
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

	/* Nav links Desktop */
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
		transition: 0.3s;
		position: relative;
	}

	.nav-item:hover {
		color: var(--primary);
	}

	.nav-item::after {
		content: '';
		position: absolute;
		bottom: -4px;
		left: 0;
		width: 0;
		height: 2px;
		background: var(--primary);
		transition: width 0.3s;
	}
	.nav-item:hover::after {
		width: 100%;
	}

	/* Actions */
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
		transition: 0.3s;
	}

	.theme-toggle:hover {
		background: var(--primary);
		color: white;
		border-color: var(--primary);
	}

	.github-cta {
		background: var(--text-main);
		color: var(--bg);
		padding: 10px 20px;
		border-radius: 12px;
		text-decoration: none;
		font-weight: 800;
		font-size: 0.75rem;
		transition: 0.3s;
		border: 1px solid transparent;
	}

	.github-cta:hover {
		transform: translateY(-2px);
		box-shadow: 0 10px 20px -10px var(--primary);
	}

	/* Logo */
	.logo {
		background: none;
		border: none;
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: 14px;
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
	}
	.logo-sub {
		color: var(--primary);
		font-size: 0.65rem;
		letter-spacing: 3px;
		font-weight: 700;
	}

	/* Hamburger MODERNIZOVAN */
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
		position: relative;
	}

	.hamburger span {
		display: block;
		width: 100%;
		height: 3px;
		background: var(--primary);
		border-radius: 10px;
		transition: all 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
	}

	.hamburger .line-mid {
		width: 75%;
		align-self: flex-end;
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

	@media (max-width: 1024px) {
		.mobile-toggle {
			display: flex;
		}
		.nav-links {
			position: fixed;
			top: 0;
			right: -100%;
			width: 100%;
			max-width: 320px;
			height: 100vh;
			background: var(--glass-bg);
			backdrop-filter: blur(30px);
			-webkit-backdrop-filter: blur(30px);
			flex-direction: column;
			justify-content: center;
			padding: 40px;
			transition: right 0.5s cubic-bezier(0.4, 0, 0.2, 1);
			border-left: 1px solid var(--glass-border);
			gap: 60px;
		}
		.nav-links.open {
			right: 0;
		}
		.nav-list {
			flex-direction: column;
			gap: 40px;
			align-items: center;
		}
		.nav-item {
			font-size: 1.2rem;
		}
		.nav-actions {
			flex-direction: column;
			width: 100%;
			gap: 20px;
		}
		.github-cta {
			width: 100%;
			text-align: center;
			padding: 16px;
		}
	}
</style>
