<script setup>
const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	menus: {
		type: Array,
		required: true,
		default: () => [],
	},
});
</script>

<template>
	<div class="flex flex-col space-y-3">
		<span class="text-gray-900 leading-normal text-base tracking-normal font-medium">{{ props.title }}</span>
		<div class="flex flex-col text-sm">
			<a
				v-for="(menu, index) in props.menus"
				:key="index"
				:href="menu.link"
				class="group py-1.5 flex space-x-2 items-center text-sm text-gray-600 border-solid border-l-2 border-gray-200 px-4 hover:border-blue-500 hover:bg-blue-200"
			>
				<span>{{ menu.text }}</span>
			</a>
		</div>
	</div>
</template>
