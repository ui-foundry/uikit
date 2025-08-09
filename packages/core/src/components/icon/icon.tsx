import { Component, Element, Host, h, Prop, State, Watch } from "@stencil/core";

@Component({
	tag: "ui-icon",
	styleUrl: "icon.scss",
	shadow: false,
})
export class UiIcon {
	@Element() el!: HTMLElement;

	@Prop() filled: boolean = false;
	@Prop() size: number = 24;
	@Prop() label?: string = "";
	@Prop() color?: string;
	@Prop() src?: string;
	@Prop() variant: "fill" | "stroke" = "fill";

	@State() svgContent?: string;

	private applyVariant(svg: string) {
		if (this.variant === "stroke") {
			return svg.replace(/<svg([^>]*)>/, `<svg$1 stroke="currentColor" fill="none">`).replace(/stroke="[^"]*"/g, 'stroke="currentColor"'); // normalize strokes
		}
		// Fill variant
		return svg.replace(/<svg([^>]*)>/, `<svg$1 fill="currentColor">`).replace(/fill="[^"]*"/g, 'fill="currentColor"'); // normalize fills
	}

	private async loadSvg(path: string) {
		try {
			const res = await fetch(path);
			console.log(res);
			if (!res.ok) throw new Error(`Failed to load SVG: ${res.statusText}`);
			this.svgContent = this.applyVariant(await res.text());
		} catch (err) {
			console.error(err);
			this.svgContent = undefined;
		}
	}

	@Watch("src")
	async onSrcChange(newValue?: string) {
		console.log("Icon src changed:", newValue);
		if (newValue) {
			await this.loadSvg(newValue);
		}
	}

	private getStyle() {
		return {
			"--icon-size": this.size ? `${this.size}px` : null,
			"--icon-color": this.color ? this.color : null,
		};
	}

	async componentWillLoad() {
		if (this.src) {
			await this.loadSvg(this.src);
		}
	}

	render() {
		const hasSlottedSvg = this.el.querySelector("svg") !== null;

		return (
			<Host
				class="ui-icon"
				role="img"
				aria-hidden={this.label ? "false" : "true"}
				style={this.getStyle()}
				innerHTML={!hasSlottedSvg && this.svgContent ? this.svgContent : undefined}
			>
				{this.label ? <span class="sr-only">{this.label}</span> : null}
				{hasSlottedSvg && <slot />}
			</Host>
		);
	}
}
