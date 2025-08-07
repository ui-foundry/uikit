import { r as registerInstance, h, a as Host } from './index-D00rk4ze.js';

const flexCss = "";

const UiFlex = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    gap;
    direction = "row";
    wrap = "wrap";
    align = "flex-start";
    justify = "flex-start";
    styles() {
        return {
            ...(this.gap && { gap: `${this.gap}px` }),
            ...(this.direction && { "flex-direction": this.direction }),
            ...(this.wrap && { "flex-wrap": this.wrap }),
            ...(this.align && { "align-items": this.align }),
            ...(this.justify && { "justify-content": this.justify }),
        };
    }
    render() {
        return (h(Host, { key: 'd1f56fc0016eb1a4045471fa388e97d30118b01d', class: "ui-d-flex", style: this.styles() }, h("slot", { key: 'c150eaa0030fa6013c9c8540563125bc350fcc33' })));
    }
};
UiFlex.style = flexCss;

export { UiFlex as ui_flex };
//# sourceMappingURL=ui-flex.entry.esm.js.map

//# sourceMappingURL=ui-flex.entry.js.map