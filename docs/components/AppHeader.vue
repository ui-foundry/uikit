<template>
	<header class="docs-header">
		<div class="doc-logo flex flex-col items-center relative">
			<img src="~assets/images/logo.png" width="150" alt="UIKit Logo" class="doc-logo" />
			<span class="desc text-xs relative absolute top-0">A design system for everyone.</span>
		</div>
		<nav class="menu flex items-center">
			<a href="/">Home</a>
			<a href="/guide">Guide</a>
			<a href="/components">Components</a>
			<a href="/changelog">Changelog</a>
			<a href="/design-tokens">github</a>
		</nav>
	</header>
</template>

<style>
.docs-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 60px;
	padding-inline: 1rem;
	background-color: #fff;
	border-bottom: 1px solid #eee;
}

.docs-header .menu a {
	display: flex;
	text-decoration: none;
	align-items: center;
	padding-inline: 12px;
	font-size: 14px;
	font-weight: 600;
	color: #3c3c43;
}
</style>
