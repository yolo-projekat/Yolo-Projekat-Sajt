<script lang="ts">
	import favicon from '$lib/assets/favicon.png';
	import { onMount } from 'svelte';

	let { children } = $props();
	let isMenuOpen = $state(false);
	let scrolled = $state(false);

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 20;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function scrollTo(id: string): void {
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({ behavior: 'smooth' });
			isMenuOpen = false;
		}
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<nav class="navbar" class:scrolled>
	<div class="nav-content">
		<div class="left-section">
			<button class="hamburger" onclick={toggleMenu} aria-label="Meni">
				<div class="bar" class:open={isMenuOpen}></div>
				<div class="bar" class:open={isMenuOpen}></div>
				<div class="bar" class:open={isMenuOpen}></div>
			</button>
			<div class="logo">YOLO<span>PROJEKAT</span></div>
		</div>

		<div class="nav-links" class:active={isMenuOpen}>
			<button onclick={() => scrollTo('hero')}>Home</button>
			<button onclick={() => scrollTo('projects')}>Projekti</button>
			<button onclick={() => scrollTo('specs')}>Tehnologije</button>
			<a
				href="https://github.com/yolo-projekat/"
				target="_blank"
				rel="noreferrer"
				class="cta-button"
			>
				<span>GitHub</span>
				<svg
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
					></path>
				</svg>
			</a>
		</div>
	</div>
</nav>

<main>
	{@render children()}
</main>

<style>
	:global(:root) {
		/* Default Light Theme Variables */
		--primary: #38bdf8;
		--bg: #f8fafc;
		--card-bg: rgba(255, 255, 255, 0.8);
		--text-main: #0f172a;
		--text-dim: #64748b;
		--nav-bg: rgba(248, 250, 252, 0.8);
		--border: rgba(0, 0, 0, 0.05);
	}

	@media (prefers-color-scheme: dark) {
		:global(:root) {
			/* Dark Theme Overrides */
			--bg: #0f172a;
			--card-bg: rgba(30, 41, 59, 0.45);
			--text-main: #f8fafc;
			--text-dim: #94a3b8;
			--nav-bg: rgba(15, 23, 42, 0.75);
			--border: rgba(255, 255, 255, 0.05);
		}
	}

	:global(body) {
		margin: 0;
		background-color: var(--bg);
		color: var(--text-main);
		font-family: 'Plus Jakarta Sans', sans-serif;
		overflow-x: hidden;
		transition:
			background-color 0.3s ease,
			color 0.3s ease;
	}

	.navbar {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		height: 80px;
		z-index: 1000;
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		display: flex;
		align-items: center;
	}

	.navbar.scrolled {
		height: 65px;
		background: var(--nav-bg);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		border-bottom: 1px solid var(--border);
	}

	.nav-content {
		max-width: 1200px;
		margin: 0 auto;
		width: 100%;
		padding: 0 24px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.left-section {
		display: flex;
		align-items: center;
		gap: 20px;
	}

	.logo {
		font-weight: 800;
		font-size: 1.2rem;
		letter-spacing: -0.5px;
		color: var(--text-main);
	}
	.logo span {
		color: var(--primary);
	}

	.hamburger {
		display: none;
		background: rgba(56, 189, 248, 0.1);
		border: 1px solid rgba(56, 189, 248, 0.2);
		padding: 10px;
		border-radius: 12px;
		cursor: pointer;
		flex-direction: column;
		gap: 5px;
	}

	.bar {
		width: 18px;
		height: 2px;
		background: var(--primary);
		transition: 0.3s;
	}

	.bar.open:nth-child(1) {
		transform: translateY(7px) rotate(45deg);
	}
	.bar.open:nth-child(2) {
		opacity: 0;
	}
	.bar.open:nth-child(3) {
		transform: translateY(-7px) rotate(-45deg);
	}

	.nav-links {
		display: flex;
		align-items: center;
		gap: 32px;
	}

	.nav-links button {
		background: none;
		border: none;
		color: var(--text-dim);
		font-weight: 600;
		font-size: 0.9rem;
		cursor: pointer;
		transition: 0.2s;
	}

	.nav-links button:hover {
		color: var(--text-main);
	}

	.cta-button {
		background: var(--primary);
		color: white;
		padding: 10px 20px;
		border-radius: 10px;
		font-weight: 700;
		font-size: 0.85rem;
		text-decoration: none;
		display: flex;
		align-items: center;
		gap: 8px;
	}

	@media (max-width: 1024px) {
		.hamburger {
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
			justify-content: center;
			gap: 40px;
			transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
			box-shadow: -10px 0 30px rgba(0, 0, 0, 0.2);
			z-index: 999;
		}
		.nav-links.active {
			right: 0;
		}
	}
</style>
