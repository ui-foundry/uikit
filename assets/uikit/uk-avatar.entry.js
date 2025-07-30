import { r as registerInstance, h } from './index-gcGTeu1N.js';

const avatarCss = ":host{display:inline-block;--avatar-placeholder-fz:calc(var(--spacing) * 4.5);--avatar-size:calc(var(--spacing) * 8)}.uk-avatar{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:relative;width:var(--avatar-size);height:var(--avatar-size);background:#999;border-radius:var(--avatar-radius);overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-decoration:none;padding:0;vertical-align:middle}.uk-avatar__placeholder{font-weight:600;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:var(--avatar-radius);font-size:var(--avatar-placeholder-fz)}.uk-avatar-group{--ag-offset:calc(var(--spacing) * -3.5);display:-webkit-box;display:-ms-flexbox;display:flex}.uk-avatar-group uk-avatar:not(:first-of-type){-webkit-margin-start:var(--ag-offset);margin-inline-start:var(--ag-offset)}.uk-avatar-group .uk-avatar{border:0.125rem solid #1a1a1e}";

const UkAvatar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    hasError = false;
    image = '';
    alt = '';
    initials = '';
    radius = 'md';
    size = 32;
    handleImageError = () => {
        this.hasError = true;
    };
    getStyle() {
        return {
            '--avatar-radius': this.radius === 'none' ? '0' : `var(--radius-${this.radius})`,
            '--avatar-size': `${this.size}px`,
        };
    }
    render() {
        return (h("div", { key: 'cf28f677ba439730524815ed2dd3a53b549b89a6', class: 'uk-avatar', style: this.getStyle() }, h("span", { key: '45a843e9385416b23bac67610573c3a832cf5439', class: 'uk-avatar__placeholder' }, this.initials), this.image && !this.hasError && (h("img", { key: 'c68a2de983be726646c513da623cf0f6c83bd2de', class: 'uk-avatar__image', src: this.image, alt: this.alt, onError: this.handleImageError }))));
    }
};
UkAvatar.style = avatarCss;

export { UkAvatar as uk_avatar };
//# sourceMappingURL=uk-avatar.entry.js.map

//# sourceMappingURL=uk-avatar.entry.js.map