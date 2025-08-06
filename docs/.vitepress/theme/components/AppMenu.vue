<script setup>
const props = defineProps({
	title: { type: String, required: true },
	menus: { type: Array, required: true, default: () => [] },
});
</script>

<template>
	<div class="flex flex-col space-y-3">
		<span class="leading-normal text-base tracking-normal font-medium">{{ props.title }}</span>
		<div class="flex flex-col text-sm">
			<a
				v-for="(menu, index) in props.menus"
				:key="index"
				:href="menu.link"
				class="group py-1.5 flex space-x-2 items-center text-sm border-left px-4 hover:border-gray-50/50 hover:bg-gray-50/10"
			>
				<span>{{ menu.text }}</span>
			</a>
		</div>
	</div>
</template>

<style>
.border-left {
	border-left: 2px solid var(--border);
}
</style>
