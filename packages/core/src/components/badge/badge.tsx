import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "ui-badge",
	styleUrl: "badge.scss",
	shadow: false,
})
export class UiBadge {
	@Prop() circle: boolean = false;
	@Prop() size: string = "fit-content";
	@Prop() radius: "xs" | "sm" | "md" | "pill" = "pill";

	private getStyle() {
		return {
			"--badge-radius": `var(--radius-${this.circle ? "full" : this.radius})`,
			"--badge-size": this.size,
		};
	}

	render() {
		return (
			<Host class="ui-badge" style={this.getStyle()}>
				<slot />
			</Host>
		);
	}
}
