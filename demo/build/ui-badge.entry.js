import { r as registerInstance, h, d as Host } from './index-Xd35V0a6.js';

const badgeCss = "ui-badge{display:inline-flex;align-items:center;justify-content:center;font-size:12px;line-height:1.3;padding-inline:8px;padding-block:2px;border-radius:var(--badge-radius);background:var(--primary);color:var(--primary-foreground);width:var(--badge-size);height:var(--badge-size)}";

const UiBadge = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    circle = false;
    size = "fit-content";
    radius = "pill";
    getStyle() {
        return {
            "--badge-radius": `var(--radius-${this.circle ? "full" : this.radius})`,
            "--badge-size": this.size,
        };
    }
    render() {
        return (h(Host, { key: 'd81e169d086b54532d15376ac83fc6228d903d48', class: "ui-badge", style: this.getStyle() }, h("slot", { key: '86916eb62275cbc414e7c35f3d1666559caf9c7d' })));
    }
};
UiBadge.style = badgeCss;

export { UiBadge as ui_badge };
//# sourceMappingURL=ui-badge.entry.esm.js.map

//# sourceMappingURL=ui-badge.entry.js.map