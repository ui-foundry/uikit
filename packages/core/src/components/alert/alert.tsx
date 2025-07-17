import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "uk-alert",
  shadow: true,
})
export class UkAlert {
  render() {
    return (
      <Host className="uk-alert">
        <div>
          <slot />
        </div>
      </Host>
    );
  }
}
