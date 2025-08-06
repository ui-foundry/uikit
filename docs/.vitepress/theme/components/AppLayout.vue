<script setup>
import { useData, useRoute } from "vitepress";
const { theme } = useData();
const route = useRoute();
</script>

<template>
	<aside class="flex flex-col w-72 border-r border-solid border-t-0 h-full overflow-hidden">
		<AppLogo />
		<nav class="docs-menu flex-1 h-full p-4 mb-4 overflow-auto">
			<div class="flex flex-col space-y-6 pb-4">
				<AppMenu v-for="(section, index) in Object.values(theme.sidebar).flat()" :key="index" :title="section.text" :menus="section.items" />
			</div>
		</nav>
	</aside>
	<main class="flex-1 h-full overflow-auto p-4 markdown">
		<Content />
	</main>
</template>
