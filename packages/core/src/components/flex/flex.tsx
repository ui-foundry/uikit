import { Component, Host, h, Prop } from "@stencil/core";
import type { Property } from "csstype";

@Component({
	tag: "ui-flex",
	styleUrl: "flex.scss",
	shadow: false,
})
export class UiFlex {
	@Prop() gap?: number;
	@Prop() direction: Property.FlexDirection = "row";
	@Prop() wrap: Property.FlexWrap = "wrap";
	@Prop() align: Property.AlignItems = "flex-start";
	@Prop() justify: Property.JustifyContent = "flex-start";

	private styles() {
		return {
			...(this.gap && { gap: `${this.gap}px` }),
			...(this.direction && { "flex-direction": this.direction }),
			...(this.wrap && { "flex-wrap": this.wrap }),
			...(this.align && { "align-items": this.align }),
			...(this.justify && { "justify-content": this.justify }),
		};
	}

	render() {
		return (
			<Host class="ui-d-flex" style={this.styles()}>
				<slot />
			</Host>
		);
	}
}
