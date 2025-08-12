import { r as registerInstance, h, d as Host } from './index-Xd35V0a6.js';

const avatarCss = ":host{display:inline-block;--avatar-placeholder-fz:calc(var(--spacing) * 4.5);--avatar-size:calc(var(--spacing) * 8)}.ui-avatar{display:inline-flex;align-items:center;justify-content:center;position:relative;width:var(--avatar-size);height:var(--avatar-size);background:var(--primary);color:var(--primary-foreground);border-radius:var(--avatar-radius);overflow:hidden;user-select:none;text-decoration:none;padding:0;vertical-align:middle}.ui-avatar__placeholder{font-weight:600;display:flex;align-items:center;justify-content:center;width:100%;height:100%;user-select:none;border-radius:var(--avatar-radius);font-size:var(--avatar-placeholder-fz)}.ui-avatar-group{--ag-offset:calc(var(--spacing) * -3);display:flex}.ui-avatar-group .ui-avatar:not(:first-of-type){margin-inline-start:var(--ag-offset)}.ui-avatar-group .ui-avatar{border:2px solid var(--border)}";

const UiAvatar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    hasError = false;
    image = "";
    alt = "";
    initials = "";
    radius = "md";
    size = 32;
    handleImageError = () => {
        this.hasError = true;
    };
    getStyle() {
        return {
            "--avatar-radius": this.radius === "none" ? "0" : `var(--radius-${this.radius})`,
            "--avatar-size": `${this.size}px`,
        };
    }
    render() {
        return (h(Host, { key: 'c70830e5195af5b9cdd2fa6d59cb29c70564f403', class: "ui-avatar", style: this.getStyle() }, this.initials && !this.image && h("span", { key: '2f3a84fd7ac5d9e90c1e8e4fba390a98d74901a0', class: "ui-avatar__placeholder" }, this.initials), this.image && !this.hasError && h("img", { key: '362ab538705bc8a2229775f26bdf912f060a6348', class: "ui-avatar__image", src: this.image, alt: this.alt, onError: this.handleImageError })));
    }
};
UiAvatar.style = avatarCss;

export { UiAvatar as ui_avatar };
//# sourceMappingURL=ui-avatar.entry.esm.js.map

//# sourceMappingURL=ui-avatar.entry.js.map