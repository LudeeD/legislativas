<script lang="ts">
	import { fade, fly, scale } from 'svelte/transition';

	// Available game years
	const availableYears = [2022, 2024, 2025];
	let selectedYear = $state<number | null>(null);

	function selectYear(year: number) {
		selectedYear = year;
		setTimeout(() => {
			window.location.href = `/sordoutor/${year}`;
		}, 500);
	}
</script>

<div class="min-h-screen bg-gradient-to-b from-indigo-50 to-blue-100 p-4">
	<div
		class="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-lg"
		in:scale={{ duration: 400, start: 0.95 }}
	>
		<div class="text-center">
			<h1 class="mb-4 text-4xl font-bold text-indigo-800">Sôr Doutor?</h1>
			<div class="mb-6 rounded-lg bg-indigo-50 p-4">
				<p class="text-gray-700">
					Epá, depois de tanto se discutir a Spinunviva, a minha maior dúvida — e que acho que o
					Primeiro-Ministro e os outros candidatos devem, de facto, explicar aos portugueses — é:
					por que razão insistem em tratar-se por "Sôr Doutor" uns aos outros? Vamos investigar!🔎
				</p>
			</div>
		</div>

		<div class="mb-8 overflow-hidden rounded-xl bg-indigo-100 shadow-md">
			<img src="/gifs/investigar.webp" alt="Sôr Doutor Game" class="h-auto w-full object-cover" />
		</div>

		<div class="flex flex-col gap-3">
			{#each availableYears as year (year)}
				<button
					class="w-full transform transition-all duration-200 hover:scale-102"
					class:opacity-75={selectedYear !== null && selectedYear !== year}
					onclick={() => selectYear(year)}
					disabled={selectedYear !== null}
					in:fly={{ y: 20, delay: year * 100, duration: 300 }}
				>
					<div
						class="flex items-center justify-between rounded-xl border-2 border-indigo-100 bg-indigo-50 p-4 hover:bg-indigo-200"
					>
						<div class="text-left">
							<h3 class="text-xl font-bold text-indigo-700">Legislativas {year}</h3>
							<p class="text-sm text-gray-600">
								{#if year === 2022}
									O original ✨
								{:else if year === 2024}
									A atualização 🚀
								{:else}
									A cópia ♻️
								{/if}
							</p>
						</div>
						<div class="text-indigo-600">
							<span class="text-lg">Jogar →</span>
						</div>
					</div>
				</button>
			{/each}
		</div>

		<a
			href="/"
			class="mx-auto mt-6 block rounded-lg bg-indigo-600 px-6 py-2 text-white shadow-md transition-colors duration-200 hover:bg-indigo-700"
			in:fly={{ y: 20, delay: 600, duration: 300 }}
		>
			← Voltar à página inicial
		</a>

		<div class="mt-8 text-center text-sm text-gray-500">
			<p>
				Desenvolvido com 💙 por <a
					class="underline hover:text-indigo-600"
					href="https://about.luissilva.eu">mim</a
				>
			</p>
		</div>
	</div>
</div>
