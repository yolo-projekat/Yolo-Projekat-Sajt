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
		href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<nav class="navbar" class:scrolled>
	<div class="nav-content">
		<div class="left-section">
			<button class="logo" onclick={() => scrollTo('hero')}>
				<span class="logo-dot"></span>
				YOLO PROJECT
			</button>
		</div>

		<div class="nav-links" class:open={isMenuOpen}>
			<button onclick={() => scrollTo('hardware')}>HARDVER</button>
			<button onclick={() => scrollTo('software-logic')}>SOFTVER</button>
			<button onclick={() => scrollTo('projects')}>EKOSISTEM</button>
			<button onclick={() => scrollTo('use-cases')}>PRIMENA</button>
			<a href="https://github.com/yolo-projekat" target="_blank" class="cta-button">GITHUB</a>
		</div>

		<button class="mobile-menu" onclick={toggleMenu} aria-label="Toggle menu">
			<div class="bar" class:open={isMenuOpen}></div>
			<div class="bar" class:open={isMenuOpen}></div>
			<div class="bar" class:open={isMenuOpen}></div>
		</button>
	</div>
</nav>

<main>
	{@render children()}
</main>

<style>
	:global(:root) {
		--bg: #030712;
		--card-bg: rgba(17, 24, 39, 0.7);
		--primary: #38bdf8;
		--text-main: #f9fafb;
		--text-dim: #9ca3af;
		--border: rgba(255, 255, 255, 0.08);
		--nav-bg: rgba(3, 7, 18, 0.8);
	}

	@media (prefers-color-scheme: light) {
		:global(:root) {
			--bg: #f9fafb;
			--card-bg: rgba(255, 255, 255, 0.8);
			--primary: #0284c7;
			--text-main: #111827;
			--text-dim: #4b5563;
			--border: rgba(0, 0, 0, 0.08);
			--nav-bg: rgba(249, 250, 251, 0.8);
		}
	}

	:global(body) {
		margin: 0;
		padding: 0;
		background-color: var(--bg);
		color: var(--text-main);
		font-family: 'Plus Jakarta Sans', sans-serif;
		overflow-x: hidden;
		transition: background-color 0.3s ease;
	}

	.navbar {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1000;
		padding: 24px;
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.navbar.scrolled {
		padding: 16px 24px;
		background: var(--nav-bg);
		backdrop-filter: blur(12px);
		border-bottom: 1px solid var(--border);
	}

	.nav-content {
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo {
		background: none;
		border: none;
		color: var(--text-main);
		font-weight: 800;
		font-size: 1.2rem;
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.logo-dot {
		width: 8px;
		height: 8px;
		background: var(--primary);
		border-radius: 50%;
		box-shadow: 0 0 15px var(--primary);
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
		color: var(--primary);
	}

	.cta-button {
		background: var(--primary);
		color: white;
		padding: 10px 20px;
		border-radius: 12px;
		font-weight: 800;
		font-size: 0.85rem;
		text-decoration: none;
	}

	.mobile-menu {
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

	@media (max-width: 768px) {
		.mobile-menu {
			display: flex;
		}
		.nav-links {
			position: absolute;
			top: 100%;
			left: 24px;
			right: 24px;
			flex-direction: column;
			padding: 30px;
			gap: 20px;
			opacity: 0;
			pointer-events: none;
			transform: translateY(-10px);
			transition: 0.3s;
			background: var(--nav-bg);
			backdrop-filter: blur(20px);
			border: 1px solid var(--border);
			border-radius: 20px;
		}
		.nav-links.open {
			opacity: 1;
			pointer-events: all;
			transform: translateY(10px);
		}
	}
</style>
