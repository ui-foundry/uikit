import { r as registerInstance, a as getElement, h, d as Host } from './index-Bh24I87Q.js';

function hasSlot(el, slotName) {
    return !!el.querySelector(`[slot="${slotName}"]`);
}

const alertCss = "ui-alert{--alert-radius:var(--radius-xl);--alert-bg:var(--primary);--alert-text-color:var(--primary-foreground);--alert-icon-size:calc(var(--spacing) * 6);display:flex;font-size:.875rem;line-height:1.25rem;gap:calc(var(--spacing)*3);border-radius:var(--alert-radius);background-color:var(--alert-bg);padding-inline:calc(var(--spacing)*4);padding-block:calc(var(--spacing)*3);color:var(--alert-text-color);border:1px solid var(--alert-text-color)}ui-alert .ui-alert__icon{position:relative;top:2px;width:var(--alert-icon-size);height:var(--alert-icon-size)}ui-alert .ui-alert__icon>svg{width:100%;height:100%;fill:currentColor;transition:fill 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;display:inline-block}ui-alert .ui-alert__content{min-width:0;overflow:auto}ui-alert .ui-alert__content-heading{margin:0;font-size:16px;font-weight:bold;line-height:1.5;letter-spacing:.15008px;font-weight:500;margin-bottom:-2px}";

const UiAlert = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    hasIcon = false;
    heading;
    componentWillLoad() {
        this.hasIcon = hasSlot(this.el, "icon");
    }
    render() {
        return (h(Host, { key: '3f9995171968e229931a833714a2e77d684ccc5c', class: "ui-alert", role: "alert" }, h("div", { key: '8aab6734ead2539a37fcc6a4e660136099d1564b', class: "ui-alert__icon" }, h("svg", { key: 'ed6c69b588e1daafc97d82c54201073ee48bf9f8', focusable: "false", "aria-hidden": "true", viewBox: "0 0 24 24" }, h("path", { key: '33cd2e4937ca93badf6c3fc4b33f67cdbe900779', d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" }))), h("div", { key: 'e2a233bfe029dec6f01b192410d7c0bea62ed578', class: "ui-alert__content" }, this.heading && h("div", { key: '45794370db7e516d4b4d8d36ab53eaef9b1b0ff2', class: "ui-alert__content-heading" }, this.heading), h("slot", { key: '10028369b220f2bbb2dd67eabdba4c1c8def8a6f' })), h("div", { key: '2ea2d3d80334ef9ff0f72d067d212e71ff159364', class: "ui-alert__action" })));
    }
};
UiAlert.style = alertCss;

export { UiAlert as ui_alert };
//# sourceMappingURL=ui-alert.entry.esm.js.map

//# sourceMappingURL=ui-alert.entry.js.map