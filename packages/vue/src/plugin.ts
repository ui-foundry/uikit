import { Plugin } from 'vue';
import { defineCustomElements } from '@uifoundry/uikit/loader';

export const UiFoundryUiKitComponents: Plugin = {
	async install() {
		defineCustomElements();
	},
};
