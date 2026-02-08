<script lang="ts">
	import favicon from '$lib/assets/favicon.png';
	import { onMount } from 'svelte';

	let { children } = $props();
	let isMenuOpen = $state(false);
	let scrolled = $state(false);

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 50;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

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
			const offset = 100;
			const bodyRect = document.body.getBoundingClientRect().top;
			const elementRect = el.getBoundingClientRect().top;
			const elementPosition = elementRect - bodyRect;
			const offsetPosition = elementPosition - offset;

			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth'
			});
			isMenuOpen = false;
		}
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<nav class="navbar" class:scrolled>
	<div class="nav-container">
		<button class="logo" onclick={scrollToTop} aria-label="Povratak na vrh">
			<div class="logo-icon">
				<div class="logo-ring"></div>
				<div class="logo-dot"></div>
			</div>
			<div class="logo-text">
				<span class="logo-main">YOLO</span>
				<span class="logo-sub">PROJEKAT</span>
			</div>
		</button>

		<div class="nav-links" class:open={isMenuOpen}>
			<div class="links-wrapper">
				<button class="nav-item" onclick={() => scrollTo('hardware')}>HARDVER</button>
				<button class="nav-item" onclick={() => scrollTo('software-logic')}>SOFTVER</button>
				<button class="nav-item" onclick={() => scrollTo('projects')}>EKOSISTEM</button>
				<button class="nav-item" onclick={() => scrollTo('use-cases')}>PRIMENA</button>
			</div>
			<a href="https://github.com/yolo-projekat" target="_blank" class="github-cta">
				<span>GITHUB</span>
				<svg
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2.5"
					stroke-linecap="round"
					stroke-linejoin="round"
					><path
						d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
					></path></svg
				>
			</a>
		</div>

		<button class="mobile-toggle" onclick={toggleMenu} aria-label="Meni">
			<div class="hamburger" class:active={isMenuOpen}>
				<span></span>
				<span></span>
			</div>
		</button>
	</div>
</nav>

<main>
	{@render children()}
</main>

<style>
	:global(:root) {
		--bg: #020617;
		--card-bg: rgba(15, 23, 42, 0.6);
		--primary: #38bdf8;
		--primary-glow: rgba(56, 189, 248, 0.3);
		--text-main: #f8fafc;
		--text-dim: #94a3b8;
		--border: rgba(255, 255, 255, 0.06);
		--nav-glass: rgba(2, 6, 23, 0.7);
	}

	@media (prefers-color-scheme: light) {
		:global(:root) {
			--bg: #f8fafc;
			--card-bg: rgba(255, 255, 255, 0.7);
			--primary: #0ea5e9;
			--primary-glow: rgba(14, 165, 233, 0.2);
			--text-main: #0f172a;
			--text-dim: #64748b;
			--border: rgba(15, 23, 42, 0.08);
			--nav-glass: rgba(248, 250, 252, 0.8);
		}
	}

	:global(body) {
		margin: 0;
		background-color: var(--bg);
		color: var(--text-main);
		font-family: 'Plus Jakarta Sans', sans-serif;
		overflow-x: hidden;
		line-height: 1.5;
	}

	/* --- NAVBAR CORE --- */
	.navbar {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1000;
		padding: 32px 24px;
		transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.navbar.scrolled {
		padding: 16px 24px;
		background: var(--nav-glass);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		border-bottom: 1px solid var(--border);
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	}

	.nav-container {
		max-width: 1300px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	/* --- LOGO MODERNIZACIJA --- */
	.logo {
		background: none;
		border: none;
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: 14px;
		padding: 0;
		transition: transform 0.3s ease;
	}

	.logo:hover {
		transform: scale(1.02);
	}

	.logo-icon {
		position: relative;
		width: 24px;
		height: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.logo-ring {
		position: absolute;
		width: 100%;
		height: 100%;
		border: 2px solid var(--primary);
		border-radius: 8px;
		opacity: 0.3;
		transform: rotate(45deg);
	}

	.logo-dot {
		width: 8px;
		height: 8px;
		background: var(--primary);
		border-radius: 2px;
		box-shadow: 0 0 15px var(--primary);
		animation: pulse 2s infinite;
	}

	.logo-text {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		line-height: 1;
	}

	.logo-main {
		font-weight: 800;
		font-size: 1.1rem;
		letter-spacing: 1px;
		color: var(--primary);
	}

	.logo-sub {
		font-weight: 700;
		font-size: 0.65rem;
		letter-spacing: 2px;
		color: var(--text-dim);
		margin-top: 2px;
	}

	/* --- NAV LINKS --- */
	.nav-links {
		display: flex;
		align-items: center;
		gap: 40px;
	}

	.links-wrapper {
		display: flex;
		gap: 32px;
	}

	.nav-item {
		background: none;
		border: none;
		color: var(--text-dim);
		font-weight: 700;
		font-size: 0.75rem;
		letter-spacing: 1px;
		cursor: pointer;
		transition: all 0.3s ease;
		padding: 8px 0;
		position: relative;
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

	.nav-item:hover {
		color: var(--text-main);
	}
	.nav-item:hover::after {
		width: 100%;
	}

	.github-cta {
		background: var(--text-main);
		color: var(--bg);
		padding: 10px 20px;
		border-radius: 100px;
		font-weight: 800;
		font-size: 0.75rem;
		text-decoration: none;
		display: flex;
		align-items: center;
		gap: 8px;
		transition: all 0.3s ease;
		border: 1px solid transparent;
	}

	.github-cta:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 20px var(--primary-glow);
		background: var(--primary);
		color: white;
	}

	/* --- MOBILE TOGGLE --- */
	.mobile-toggle {
		display: none;
		background: var(--card-bg);
		border: 1px solid var(--border);
		width: 44px;
		height: 44px;
		border-radius: 12px;
		cursor: pointer;
		align-items: center;
		justify-content: center;
	}

	.hamburger {
		width: 20px;
		height: 14px;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.hamburger span {
		display: block;
		width: 100%;
		height: 2px;
		background: var(--primary);
		transition: all 0.3s ease;
	}

	.hamburger.active span:nth-child(1) {
		transform: translateY(6px) rotate(45deg);
	}
	.hamburger.active span:nth-child(2) {
		transform: translateY(-6px) rotate(-45deg);
	}

	@keyframes pulse {
		0% {
			opacity: 1;
			transform: scale(1);
		}
		50% {
			opacity: 0.6;
			transform: scale(1.2);
		}
		100% {
			opacity: 1;
			transform: scale(1);
		}
	}

	/* --- RESPONSIVE --- */
	@media (max-width: 900px) {
		.mobile-toggle {
			display: flex;
		}

		.nav-links {
			position: fixed;
			top: 0;
			right: -100%;
			width: 80%;
			height: 100vh;
			background: var(--bg);
			flex-direction: column;
			justify-content: center;
			padding: 40px;
			transition: 0.4s cubic-bezier(0.16, 1, 0.3, 1);
			border-left: 1px solid var(--border);
		}

		.nav-links.open {
			right: 0;
		}
		.links-wrapper {
			flex-direction: column;
			align-items: flex-start;
			gap: 40px;
		}
		.nav-item {
			font-size: 1.5rem;
		}
	}
</style>
