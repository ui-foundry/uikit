<script lang="ts" setup>
defineProps<{
	title: string;
	menus: Array<{
		name: string;
		link: string;
	}>;
}>();
</script>

<template>
	<div class="flex flex-col space-y-3">
		<span class="text-gray-900 leading-normal text-base tracking-normal font-medium">{{ title }}</span>
		<div class="flex flex-col text-sm">
			<NuxtLink
				v-for="(menu, index) in menus"
				:key="index"
				:to="menu.link"
				class="group py-1.5 flex space-x-2 items-center text-sm text-gray-600 border-solid border-l-2 border-gray-200 px-4 hover:border-blue-500 hover:bg-blue-200"
			>
				<span>{{ menu.name }}</span>
			</NuxtLink>
		</div>
	</div>
</template>
