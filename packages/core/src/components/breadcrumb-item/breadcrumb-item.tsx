import { Component, Host, h } from "@stencil/core";

@Component({
	tag: "ui-breadcrumb-item",
	styleUrl: "./breadcrumb-item.scss",
	shadow: false,
})
export class UiBreadcrumbItem {
	render() {
		return (
			<Host part="content">
				<slot />
			</Host>
		);
	}
}
