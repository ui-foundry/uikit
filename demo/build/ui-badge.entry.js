import { r as registerInstance, h, d as Host } from './index-Bh24I87Q.js';

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
        return (h(Host, { key: '18fa2c22229d91b4e2b758f70914015a418b7d3a', class: "ui-badge", style: this.getStyle() }, h("slot", { key: '295b7ba4687911b21cb5416148450ceb2211f718' })));
    }
};
UiBadge.style = badgeCss;

export { UiBadge as ui_badge };
//# sourceMappingURL=ui-badge.entry.esm.js.map

//# sourceMappingURL=ui-badge.entry.js.map