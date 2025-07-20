import type { EventEmitter } from "@stencil/core";
import { Component, Element, Event, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "uk-alert",
	styleUrl: "alert.scss",
})
export class UkAlert {
	@Element() el: HTMLElement;

	@Prop() type?: "info" | "success" | "warning" | "danger" = "success";
	@Prop() heading?: string;

	@Event() closed: EventEmitter<void>;

	componentDidLoad() {
		this.el.attributes.removeNamedItem("message");
		// this.el.classList.remove("hydrated");
	}

	private handleClose = () => {
		this.closed.emit();
	};

	render() {
		return (
			<Host class={`uk-alert uk-alert-${this.type}`}>
				{this.heading && <span class="message">{this.heading}</span>}
				<button type="button" class="close" onClick={this.handleClose}>
					&times;
				</button>
			</Host>
		);
	}
}
