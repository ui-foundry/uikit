import { r as registerInstance, a as getElement, h, d as Host } from './index-Xd35V0a6.js';

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
        return (h(Host, { key: 'a992f9194a52a5c4ed74146bff668801e1285b3f', class: "ui-alert", role: "alert" }, h("div", { key: '619adf8f7fc28db00d2ce5352810323c6ed70075', class: "ui-alert__icon" }, h("svg", { key: 'd670528d64b77f4300febb821403b8bb9553b169', focusable: "false", "aria-hidden": "true", viewBox: "0 0 24 24" }, h("path", { key: '037707695e7781e543947d4cb995f55d755d02a2', d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" }))), h("div", { key: '27c544f5346a85c69ce7a1217fd35152c085bbe0', class: "ui-alert__content" }, this.heading && h("div", { key: '9efc76c0e8d66b2c836636516d0beffdf31a9025', class: "ui-alert__content-heading" }, this.heading), h("slot", { key: '53a8a9a38d87331d90c00604e15d1a153898d634' })), h("div", { key: '27234ad8531fddf7eee7245dec8cd6b62f904493', class: "ui-alert__action" })));
    }
};
UiAlert.style = alertCss;

export { UiAlert as ui_alert };
//# sourceMappingURL=ui-alert.entry.esm.js.map

//# sourceMappingURL=ui-alert.entry.js.map