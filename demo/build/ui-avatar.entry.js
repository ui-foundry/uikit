import { r as registerInstance, h, d as Host } from './index-Bh24I87Q.js';

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
        return (h(Host, { key: '25584365fe0f1901a826af752ec6d287bdc0b9e3', class: "ui-avatar", style: this.getStyle() }, this.initials && !this.image && h("span", { key: '829d673d8e76ccea92b9184e28522c7ccb930025', class: "ui-avatar__placeholder" }, this.initials), this.image && !this.hasError && h("img", { key: '88325e4c8cc0ceb8ec84a244452fb7092c564161', class: "ui-avatar__image", src: this.image, alt: this.alt, onError: this.handleImageError })));
    }
};
UiAvatar.style = avatarCss;

export { UiAvatar as ui_avatar };
//# sourceMappingURL=ui-avatar.entry.esm.js.map

//# sourceMappingURL=ui-avatar.entry.js.map