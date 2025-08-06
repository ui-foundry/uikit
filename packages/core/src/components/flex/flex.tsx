import type { Property } from "csstype";
import { Component, h, Host, Prop } from "@stencil/core";

@Component({
	tag: "ui-flex",
	styleUrl: "flex.scss",
	shadow: false,
})
export class UiFlex {
	@Prop() gap?: Property.Gap<number>;

	private styles() {
		return {
			...(this.gap && { gap: `${this.gap}px` }),
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
