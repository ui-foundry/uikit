<template>
	<!-- <AppHeader /> -->
	<aside class="flex flex-col w-72 border-r border-solid border-t-0 border-b-0 border-l-0 border-gray-300/80 h-full overflow-hidden">
		<AppLogo />
		<nav class="docs-menu flex-1 h-full p-4 mb-4 overflow-auto">
			<div class="flex flex-col space-y-6 pb-4">
				<AppMenus v-for="(section, index) in menuSections" :key="index" :title="section.title" :menus="section.menus" />
			</div>
		</nav>
	</aside>
	<slot />
</template>
