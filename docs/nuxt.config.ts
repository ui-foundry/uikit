export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	ssr: false,
	devtools: { enabled: true },
	css: ['~/assets/styles/app.css'],
	modules: ['@unocss/nuxt', '@nuxt/fonts'],
	plugins: ['~/plugins/uikit.client.ts'],
});
