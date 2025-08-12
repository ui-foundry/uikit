import { Component, Element, Host, h, Prop } from "@stencil/core";

/**
 * The Breadcrumb is used to wraps a series of breadcrumb items to indicate the current page's location within a navigational hierarchy.
 *
 * @example How to use it
 * ```html
 * <ui-breadcrumbs label="Breadcrumb">
 *   <ui-breadcrumb-item>Home</ui-breadcrumb-item>
 *   <ui-breadcrumb-item>Men's clothing</ui-breadcrumb-item>
 *   <ui-breadcrumb-item>Shirt</ui-breadcrumb-item>
 *   <ui-breadcrumb-item>Casual shirts</ui-breadcrumb-item>
 * </ui-breadcrumbs>
 * ```
 *
 */

@Component({
	tag: "ui-breadcrumbs",
	styleUrl: "breadcrumbs.scss",
	shadow: false,
})
export class UiBreadcrumbs {
	@Prop({ reflect: true }) label: string = "Breadcrumbs";
	@Prop() sim: string = "10px";

	@Element() el!: HTMLUiBreadcrumbsElement;

	componentDidLoad() {
		this.handleSlotChange();
	}

	private getSeparatorContent = (): string => {
		// Check if there's a custom separator provided
		const customSeparator = this.el.querySelector('[slot="separator"]');
		if (customSeparator) {
			return customSeparator.outerHTML;
		}
		return "<span>/</span>";
	};

	private handleSlotChange = (): void => {
		const breadcrumbItems = Array.from(this.el.querySelectorAll("ui-breadcrumb-item"));
		const itemCount = breadcrumbItems.length;
		const separatorHTML = this.getSeparatorContent();

		breadcrumbItems.forEach((item, index) => {
			const isLastItem = index === itemCount - 1;

			// Remove existing separator if any
			const existingSeparator = item.querySelector('[slot="separator"]');
			if (existingSeparator) {
				existingSeparator.remove();
			}

			// Add separator if not last item
			if (!isLastItem) {
				const tempDiv = document.createElement("div");
				tempDiv.innerHTML = separatorHTML;
				const separatorElem = tempDiv.firstElementChild as HTMLElement;
				separatorElem.slot = "separator";
				item.appendChild(separatorElem);
			}

			item.setAttribute("aria-current", isLastItem ? "page" : "");
		});
	};

	render() {
		return (
			<Host part="root" style={{ "--separator-inline-margin": this.sim }}>
				<nav class="ui-breadcrumbs" aria-label={this.label} part="navigation">
					<slot onSlotchange={this.handleSlotChange}></slot>
				</nav>
				<div hidden>
					<slot name="separator"></slot>
				</div>
			</Host>
		);
	}
}
