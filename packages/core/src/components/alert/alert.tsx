import { Component, h, Host, Prop } from '@stencil/core'

@Component({
    tag: 'uk-alert',
    styleUrl: 'alert.scss',
})
export class UkAlert {
    @Prop() type?: 'info' | 'success' | 'warning' | 'danger' = 'success'

    render() {
        return (
            <Host class={`uk-alert uk-alert-${this.type}`}>
                <slot />
            </Host>
        )
    }
}
