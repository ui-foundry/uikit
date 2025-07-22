import type { TAvatarShape, TAvatarSize } from './avatar.types'

import { Component, Element, Host, Prop, h } from '@stencil/core'
import { AVATAR_SIZE } from './avatar.types'

@Component({
    tag: 'uk-avatar',
    styleUrl: './scss/avatar.scss',
    shadow: true,
})
export class UkAvatar {
    trimmedInitials: string

    @Element() el!: HTMLDivElement

    @Prop({ reflect: true }) initials: string
    @Prop({ reflect: true }) shape: TAvatarShape = 'circle'
    @Prop({ reflect: true, mutable: true }) size: TAvatarSize = 'medium'

    componentWillLoad() {
        this.trimInitialsBasedOnSize()
    }

    private trimInitialsBasedOnSize = (): void => {
        if (!this.initials) return
        AVATAR_SIZE.forEach((size: TAvatarSize) => {
            if (this.size === size) {
                this.trimmedInitials = this.initials.substring(0, this.getIndex(size))
            }
        })
    }

    private getIndex = (size: TAvatarSize): number => {
        const sizeIndexMap = { xsmall: 1, small: 2, medium: 3, large: 4 }
        return sizeIndexMap[size] ?? sizeIndexMap.xsmall
    }

    render() {
        return (
            <Host>
                <div
                    class={{
                        'uk-avatar': true,
                        [`uk-avatar__size--${this.size}`]: true,
                        [`uk-avatar--${this.shape}`]: true,
                    }}
                    role='img'>
                    {this.initials && (
                        <span class='uk-avatar__initial' part='text'>
                            {this.trimmedInitials}
                        </span>
                    )}
                </div>
            </Host>
        )
    }
}
