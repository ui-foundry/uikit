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
        return (h(Host, { key: '827513ff1603e657879d2531d8452bf2c023fdec', class: "ui-alert", role: "alert" }, h("div", { key: 'c7d44cdccd4da55df024a2cf34b2d7dd87c2bd87', class: "ui-alert__icon" }, h("svg", { key: '93b97faa32ff515d815edefece433b41ccc5a369', focusable: "false", "aria-hidden": "true", viewBox: "0 0 24 24" }, h("path", { key: '623f444fc8df8b73e0c886892342bab4f3fe4b02', d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" }))), h("div", { key: '43f6973d8cae871c3b8a95369f2792a33410dcc9', class: "ui-alert__content" }, this.heading && h("div", { key: '5698b2ccac51043c4a37a167cfe7a84665547e5d', class: "ui-alert__content-heading" }, this.heading), h("slot", { key: '8835aefab605b56987d2df3c933ef54fd74d8fe9' })), h("div", { key: '48c6c1267062aec6d1277654ee9b0185b7f10814', class: "ui-alert__action" })));
    }
};
UiAlert.style = alertCss;

export { UiAlert as ui_alert };
//# sourceMappingURL=ui-alert.entry.esm.js.map

//# sourceMappingURL=ui-alert.entry.js.map