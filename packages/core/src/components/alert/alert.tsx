import { Component, Element, Host, h, Prop, State } from "@stencil/core";
import { hasSlot } from "../../utils";

@Component({
	tag: "ui-alert",
	styleUrl: "alert.scss",
	shadow: false,
})
export class UiAlert {
	@Element() el: HTMLElement;
	@State() hasIcon: boolean = false;

	@Prop() heading?: string;

	componentWillLoad() {
		this.hasIcon = hasSlot(this.el, "icon");
	}

	render() {
		return (
			<Host class="ui-alert" role="alert">
				<div class="ui-alert__icon">
					<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24">
						<path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
					</svg>
				</div>

				<div class="ui-alert__content">
					{this.heading && <div class="ui-alert__content-heading">{this.heading}</div>}
					<slot />
				</div>
				<div class="ui-alert__action"></div>
			</Host>
		);
	}
}
