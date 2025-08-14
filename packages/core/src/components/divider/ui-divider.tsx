import { Component, Host, h, Prop, State } from "@stencil/core";

import { getTextContent, hasSlotContent } from "../../utils";

@Component({
	tag: "ui-divider",
	styleUrl: "./scss/ui-divider.scss",
	shadow: false,
})
export class UiDivider {
	// Own Properties
	// Reference to host HTML element
	// State() variables
	// Public Property API
	// Prop lifecycle events
	// Component lifecycle events
	// Local methods

	private titleElem: HTMLDivElement;

	@State() private hasTitle: boolean;

	@Prop() label: string;
	@Prop() color: string;
	@Prop() labelPosition: "center" | "left" | "right" = "center";
	@Prop({ reflect: true }) orientation: "horizontal" | "vertical" = "horizontal";

	private handleSlotChange = () => {
		this.hasTitle = hasSlotContent(this.titleElem) || !!getTextContent(this.titleElem.querySelector("slot"));
	};

	render() {
		return (
			<Host class="ui-divider">
				<div part="root" data-orientation={this.orientation} data-with-label={this.label ? "true" : "false"}>
					<slot onSlotchange={this.handleSlotChange} />
				</div>
			</Host>
		);
	}
}
