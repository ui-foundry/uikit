import { Component, h, Host, Prop, State } from '@stencil/core';

@Component({
	tag: 'ui-avatar',
	styleUrl: 'avatar.scss',
	shadow: false,
})
export class UiAvatar {
	@State() hasError = false;

	@Prop() image = '';
	@Prop() alt = '';
	@Prop() initials = '';
	@Prop() radius: 'none' | 'sm' | 'md' | 'full' = 'md';
	@Prop() size: number = 32;

	private handleImageError = () => {
		this.hasError = true;
	};

	private getStyle() {
		return {
			'--avatar-radius': this.radius === 'none' ? '0' : `var(--radius-${this.radius})`,
			'--avatar-size': `${this.size}px`,
		};
	}

	render() {
		return (
			<Host class="ui-avatar" style={this.getStyle()}>
				<span class="ui-avatar__placeholder">{this.initials}</span>
				{this.image && !this.hasError && <img class="ui-avatar__image" src={this.image} alt={this.alt} onError={this.handleImageError} />}
			</Host>
		);
	}
}
