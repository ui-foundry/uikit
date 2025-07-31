import { UiFoundryUiKitComponents } from '@uifoundry/uikit-vue';

export default defineNuxtPlugin(nuxtApp => {
	nuxtApp.vueApp.use(UiFoundryUiKitComponents);
});
