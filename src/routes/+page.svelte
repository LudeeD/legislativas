<script lang="ts">
	import { fly, fade, scale } from 'svelte/transition';
</script>

<div class="min-h-screen bg-gradient-to-b from-indigo-50 to-blue-100 p-4 py-12">
	<div class="mx-auto max-w-4xl">
		<!-- Header -->
		<div class="mb-12 text-center" in:fade={{ duration: 700, delay: 300 }}>
			<h1 class="mb-4 text-4xl font-bold text-indigo-800 md:text-5xl">Legislativas</h1>
		</div>

		<!-- Featured Game -->
		<div
			class="mb-16 overflow-hidden rounded-2xl bg-white shadow-xl"
			in:scale={{ duration: 500, delay: 200, start: 0.95 }}
		>
			<div class="md:flex">
				<div class="relative overflow-hidden md:w-2/5">
					<img
						src="/gifs/investigar.webp"
						alt="Sôr Doutor Game"
						class="h-full w-full object-cover"
					/>
					<div
						class="absolute top-4 left-4 rounded-full bg-indigo-600 px-3 py-1 text-sm font-semibold text-white"
					>
						Destaque - Nova Edição 2025
					</div>
				</div>
				<div class="p-6 md:w-3/5">
					<h2 class="mb-3 text-3xl font-bold text-indigo-800">Sôr Doutor?</h2>
					<p class="mb-4 text-gray-600">
						Todos os anos a mesma coisa, todos se tratam por Sôr Doutor. Mas será mesmo assim?
					</p>
					<a
						href="/sordoutor"
						class="inline-block rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white shadow-md transition-colors hover:bg-indigo-700"
					>
						Investiga Agora →
					</a>
				</div>
			</div>
		</div>

		<!-- Coming Soon Section -->
		<div class="mb-16" in:fly={{ y: 20, duration: 500, delay: 500 }}>
			<h2 class="mb-6 text-center text-2xl font-bold text-indigo-800">Em Breve</h2>

			<div class="grid gap-6 md:grid-cols-2">
				<div
					class="bg-opacity-70 rounded-xl border-2 border-dashed border-indigo-200 bg-white p-6 shadow-md"
				>
					<div class="mb-3 flex items-center justify-between">
						<h3 class="text-xl font-semibold text-indigo-700">O governo caiu</h3>
						<span class="rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-800"
							>Em breve</span
						>
					</div>
					<p class="text-gray-600">
						Consegues contruir a próxima notícia que vai fazer cair o próximo governo?
					</p>
				</div>
			</div>
		</div>

		<!-- Footer -->
		<footer class="mt-12 text-center text-sm text-gray-600">
			<p>
				Desenvolvido com 💙 por <a
					href="https://about.luissilva.eu"
					class="underline hover:text-indigo-600">mim</a
				>
			</p>
			<p class="mt-2">
				© {new Date().getFullYear()}
			</p>
		</footer>
	</div>
</div>
