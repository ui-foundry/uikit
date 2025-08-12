---
title: Breadcrumbs
description: Display breadcrumb navigation
---

# Breadcrumbs <span class="text-size-3.5">`<ui-breadcrumbs/>`</span>

Breadcrumbs provide a group of links so users can easily navigate a website's hierarchy.

Breadcrumb components are an essential element of user interface design, providing users with a clear and intuitive navigation structure within a website or application.

## Usage

<ui-breadcrumbs label="Breadcrumb">
    <ui-breadcrumb-item>Home</ui-breadcrumb-item>
    <ui-breadcrumb-item>Top level content page</ui-breadcrumb-item>
    <ui-breadcrumb-item>Parent page</ui-breadcrumb-item>
    <ui-breadcrumb-item>Current page</ui-breadcrumb-item>
</ui-breadcrumbs>

<br/>

<!-- Custom separator using slot -->

<ui-breadcrumbs sim="3px" label="Navigation">
	<svg slot="separator" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
		<path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"></path>
	</svg>
	<ui-breadcrumb-item>Home</ui-breadcrumb-item>
	<ui-breadcrumb-item>Men's clothing</ui-breadcrumb-item>
	<ui-breadcrumb-item>Shirt</ui-breadcrumb-item>
	<ui-breadcrumb-item>Casual shirts</ui-breadcrumb-item>
</ui-breadcrumbs>

