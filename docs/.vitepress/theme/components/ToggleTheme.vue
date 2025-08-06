<script setup>
import { onMounted } from "vue";

const setTheme = (mode) => {
	document.documentElement.setAttribute("data-color-scheme", mode);
	localStorage.setItem("color-scheme", mode);
};

const initTheme = () => {
	const saved = localStorage.getItem("color-scheme");
	if (saved) {
		setTheme(saved);
	} else {
		const system = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
		setTheme(system);
	}
};

const toggleTheme = () => {
	const current = document.documentElement.getAttribute("data-color-scheme");
	setTheme(current === "dark" ? "light" : "dark");
};

onMounted(() => {
	initTheme();

	// Optional: Update when system preference changes (only if no manual override)
	if (!localStorage.getItem("color-scheme")) {
		window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
			const systemTheme = e.matches ? "dark" : "light";
			setTheme(systemTheme);
		});
	}
});
</script>

<template>
	<button type="button" class="cursor-pointer position-absolute top-5 right-5" @click="toggleTheme">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="size-4.5"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
			<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
			<path d="M12 3l0 18"></path>
			<path d="M12 9l4.65 -4.65"></path>
			<path d="M12 14.3l7.37 -7.37"></path>
			<path d="M12 19.6l8.85 -8.85"></path>
		</svg>
	</button>
</template>
