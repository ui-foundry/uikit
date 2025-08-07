---
title: Avatar
description: Avatar component documentation
---

# Avatar <span class="text-size-3.5">`<ui-avatar/>`</span>

An Avatar container to show user photo or initials.

The **Avatar** component is designed to display user profile images or initials in a circular format. It can be used to represent users in various contexts, such as comments, user lists, or profile cards.

## Examples

#### Images

To use an image for the avatar, set the image and label attributes. This will take priority and be shown over initials.

<ui-flex gap="10">
    <ui-avatar image="/images/avatar.png" initials="RA" alt="User Avatar"></ui-avatar>
    <ui-avatar image="/images/avatar.png" size="42" alt="User Avatar"></ui-avatar>
    <ui-avatar image="/images/avatar.png" size="48" alt="User Avatar"></ui-avatar>
</ui-flex>

#### Initials

When you don't have an image to use, you can set the initials attribute to show something more personalized than an icon.

<ui-flex gap="10">
    <ui-avatar initials="RA" size="32"></ui-avatar>
    <ui-avatar initials="RA" size="42"></ui-avatar>
    <ui-avatar initials="RA" size="48"></ui-avatar>
</ui-flex>

#### Shapes

<ui-flex gap="10">
    <ui-avatar initials="RA" size="36" radius="xs"></ui-avatar>
    <ui-avatar initials="RA" size="36" radius="sm"></ui-avatar>
    <ui-avatar initials="RA" size="36" radius="md"></ui-avatar>
    <ui-avatar initials="RA" size="36" radius="lg"></ui-avatar>
    <ui-avatar initials="RA" size="36" radius="full"></ui-avatar>
</ui-flex>

#### Avatar Groups

<div class="ui-avatar-group">
	<ui-avatar image="/images/avatar.png" size="32" radius="full" alt="User Avatar"></ui-avatar>
	<ui-avatar image="/images/avatar.png" size="32" radius="full" alt="User Avatar"></ui-avatar>
	<ui-avatar image="/images/avatar.png" size="32" radius="full" alt="User Avatar"></ui-avatar>
	<ui-avatar image="/images/avatar.png" size="32" radius="full" alt="User Avatar"></ui-avatar>
	<ui-avatar image="/images/avatar.png" size="32" radius="full" alt="User Avatar"></ui-avatar>
</div>
