import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "ui-spinner",
	styleUrl: "spinner.scss",
	shadow: false,
})
export class UiSpinner {
	@Prop() size: number = 60;

	private getStyle() {
		return {
			"--spinner-size": `${this.size}px`,
		};
	}

	render() {
		return <Host class="ui-spinner" style={this.getStyle()} />;
	}
}
