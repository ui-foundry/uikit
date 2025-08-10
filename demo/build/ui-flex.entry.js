import { r as registerInstance, h, d as Host } from './index-Bh24I87Q.js';

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
        return (h(Host, { key: '442f63da47404bccbddbfcd326b700fa3a57261e', class: "ui-d-flex", style: this.styles() }, h("slot", { key: 'e4f44927fc8ad4b61f0260b0d651d8af7d3bf869' })));
    }
};
UiFlex.style = flexCss;

export { UiFlex as ui_flex };
//# sourceMappingURL=ui-flex.entry.esm.js.map

//# sourceMappingURL=ui-flex.entry.js.map