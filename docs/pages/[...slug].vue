<template>
	<NotFound v-if="notfound" />
	<template v-else> content </template>
</template>

<script setup lang="ts">
const notfound = ref(false);
</script>
