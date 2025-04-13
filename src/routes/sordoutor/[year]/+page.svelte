<script lang="ts">
	import type { PageProps } from './$types';
	import { fade, fly, scale } from 'svelte/transition';
	import confetti from 'canvas-confetti';

	let { data }: PageProps = $props();

	let step = $state(0);
	let maxStep = $derived(data.data.length - 1);
	let finished = $state(false);
	let score = $state(0);
	let sordoutor = $derived(data.data[step]);
	let selectedAnswer = $state('');
	let explanationRef: HTMLElement | null = $state(null);
	let currentImg = $state('');
	let nextImg = $state('');
	let isTransitioning = $state(false);

	// Initialize the first image
	$effect(() => {
		currentImg = sordoutor.img;
	});

	function incrementStep() {
		if (selectedAnswer === '') return;

		if (step < maxStep) {
			// Prepare the next image for smooth transition
			isTransitioning = true;
			nextImg = data.data[step + 1].img;

			// Preload the next image
			const img = new Image();
			img.onload = () => {
				step += 1;
				selectedAnswer = '';
				currentImg = nextImg;
				isTransitioning = false;
			};
			img.src = nextImg;
		} else {
			finished = true;
			if (score > maxStep / 2) {
				triggerConfetti();
			}
		}
	}

	function checkAnswer(isDoutor: boolean) {
		selectedAnswer = isDoutor ? 'doutor' : 'plebeu';
		if ((isDoutor && sordoutor.sordoutor) || (!isDoutor && !sordoutor.sordoutor)) {
			score += 1;
		}

		// Scroll to explanation after a short delay
		setTimeout(() => {
			if (explanationRef) {
				explanationRef.scrollIntoView({ behavior: 'smooth', block: 'center' });
			}
		}, 100);
	}

	function triggerConfetti() {
		confetti({
			particleCount: 100,
			spread: 70,
			origin: { y: 0.6 }
		});
	}

	function restartGame() {
		step = 0;
		score = 0;
		finished = false;
		selectedAnswer = '';
		currentImg = data.data[0].img;
	}

	let subtitle = $derived(() => {
		if (sordoutor.sexo === 'masculino') {
			return `O ${sordoutor.name} é Sôr Doutor?`;
		} else {
			return `A ${sordoutor.name} é Sôr Doutora?`;
		}
	});
</script>

<div class="min-h-screen bg-gradient-to-b from-indigo-50 to-blue-100 p-4">
	<div
		class="mx-auto flex max-w-2xl flex-col items-center justify-center rounded-2xl bg-white p-8 shadow-lg"
	>
		{#if !finished}
			<div class="mb-6 flex w-full items-center justify-between">
				<div class="rounded-full bg-blue-100 px-4 py-2">
					<span class="font-medium">Questão {step + 1}/{maxStep + 1}</span>
				</div>
				<div class="rounded-full bg-blue-100 px-4 py-2">
					<span class="font-medium">✨ Pontos: {score}</span>
				</div>
			</div>

			<h1 class="mb-8 text-center text-3xl font-bold text-indigo-800" in:fade={{ duration: 400 }}>
				{subtitle()}
			</h1>

			<div
				class="relative mb-8 w-full overflow-hidden rounded-xl shadow-md"
				style="max-height: 400px;"
			>
				<img
					class="h-full w-full object-cover object-center transition-opacity duration-500"
					src={currentImg}
					alt={sordoutor.name}
					style={isTransitioning ? 'opacity: 0.7;' : 'opacity: 1;'}
				/>
			</div>

			<div class="flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
				<button
					class="w-full rounded-lg bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-md transition-all hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
					class:ring-4={selectedAnswer === 'doutor'}
					class:ring-green-500={selectedAnswer === 'doutor' && sordoutor.sordoutor}
					class:ring-red-500={selectedAnswer === 'doutor' && !sordoutor.sordoutor}
					onclick={() => checkAnswer(true)}
					disabled={selectedAnswer !== '' || isTransitioning}
				>
					{#if sordoutor.sexo === 'masculino'}
						🤓 Sôr Doutor
					{:else}
						🤓 Sôr Doutora
					{/if}
				</button>
				<button
					class="w-full rounded-lg bg-gray-700 px-6 py-3 text-lg font-semibold text-white shadow-md transition-all hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
					class:ring-4={selectedAnswer === 'plebeu'}
					class:ring-green-500={selectedAnswer === 'plebeu' && !sordoutor.sordoutor}
					class:ring-red-500={selectedAnswer === 'plebeu' && sordoutor.sordoutor}
					onclick={() => checkAnswer(false)}
					disabled={selectedAnswer !== '' || isTransitioning}
				>
					{#if sordoutor.sexo === 'masculino'}
						😒 Plebeu
					{:else}
						😒 Plebeia
					{/if}
				</button>
			</div>

			{#if selectedAnswer !== ''}
				<div
					class="mt-4 rounded-lg border-t-0 border-l-4 bg-gray-50 p-4
    {sordoutor.sordoutor ? 'border-indigo-500' : 'border-gray-500'}"
				>
					<p class="font-medium">
						{#if sordoutor.sordoutor && selectedAnswer === 'doutor'}
							✅ <span class="text-indigo-700">Correto:</span>
							{sordoutor.name}
							{sordoutor.sexo === 'masculino' ? 'é' : 'é'} efetivamente {sordoutor.sexo ===
							'masculino'
								? 'um Sôr Doutor'
								: 'uma Sôr Doutora'}!
						{:else if selectedAnswer === 'plebeu' && !sordoutor.sordoutor}
							✅ <span class="text-indigo-700">Correto:</span>
							{sordoutor.name} é efetivamente {sordoutor.sexo === 'masculino'
								? 'um simples plebeu'
								: 'uma simples plebeia'}!
						{:else}
							❌ <span class="text-red-700">Errado:</span>
							{sordoutor.name} não é
							{sordoutor.sordoutor ? 'da plebe' : 'dos doutores'}!
						{/if}
					</p>
				</div>
				<div class="mt-6" in:fly={{ y: 20, duration: 300 }} bind:this={explanationRef}>
					<div class="rounded-lg border-l-4 border-indigo-500 bg-slate-50 p-4">
						<p class="mb-2 font-medium">Segundo a Wikipedia:</p>
						<p class="text-gray-700">
							<!-- eslint-disable-next-line -->
							{@html sordoutor.summary}
						</p>
						<a
							href={sordoutor.wikipedia}
							target="_blank"
							rel="noopener noreferrer"
							class="mt-2 inline-block text-sm text-indigo-600 hover:text-indigo-800"
						>
							Ver na Wikipedia →
						</a>
					</div>

					<div class="mt-4 flex justify-center">
						<button
							class="rounded-lg bg-indigo-600 px-6 py-2 text-white shadow-md transition-all hover:bg-indigo-700"
							onclick={incrementStep}
							disabled={isTransitioning}
						>
							<span>Próxima Questão 🚀</span>
						</button>
					</div>
				</div>
			{/if}
		{:else}
			<div in:scale={{ duration: 600, delay: 300 }}>
				<h1 class="mb-4 text-center text-3xl font-bold text-indigo-800">Fim do Jogo!</h1>

				<div class="mb-6 rounded-xl bg-gradient-to-r from-indigo-100 to-blue-100 p-6">
					<p class="text-center text-2xl font-bold">
						Pontuação final: {score}/{maxStep + 1}
					</p>
					<p class="mt-2 text-center">
						{#if score === maxStep + 1}
							🏆 Perfeito! És um especialista em doutoramentos!
						{:else if score > maxStep / 2}
							👏 Muito bem! Tens bom olho para académicos!
						{:else if score > 0}
							🤔 Continua a tentar, há espaço para melhorar!
						{:else}
							😅 Ups! Talvez devas rever os teus conhecimentos sobre doutoramentos!
						{/if}
					</p>
				</div>

				<div class="mb-4 flex flex-row justify-between gap-4">
					<a
						href="/sordoutor"
						class="rounded-lg bg-indigo-600 px-3 py-3 text-white shadow-md transition-all hover:bg-indigo-700"
					>
						🏠 Voltar
					</a>
					<button
						class="rounded-lg bg-indigo-600 px-3 py-3 text-white shadow-md transition-all hover:bg-indigo-700"
						onclick={restartGame}
					>
						🔄 Jogar Novamente
					</button>
				</div>
			</div>
		{/if}
	</div>
</div>
