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
        return (h(Host, { key: 'c640253585b24d062fdfa74f4995ae2e53c3fe73', class: "ui-d-flex", style: this.styles() }, h("slot", { key: '27f67e96115eb807baca8cc01c4baa0e6b77e4a4' })));
    }
};
UiFlex.style = flexCss;

export { UiFlex as ui_flex };
//# sourceMappingURL=ui-flex.entry.esm.js.map

//# sourceMappingURL=ui-flex.entry.js.map