import { r as registerInstance, h, d as Host } from './index-Xd35V0a6.js';

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
        return (h(Host, { key: '67fb4c5808825edd5fd9ec7c988425c7e415c1fd', class: "ui-d-flex", style: this.styles() }, h("slot", { key: 'bf1d9c9f3f7792a68666554c2aeb6057e9e6bb5a' })));
    }
};
UiFlex.style = flexCss;

export { UiFlex as ui_flex };
//# sourceMappingURL=ui-flex.entry.esm.js.map

//# sourceMappingURL=ui-flex.entry.js.map