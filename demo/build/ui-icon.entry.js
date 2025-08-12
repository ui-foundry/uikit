import { r as registerInstance, a as getElement, h, d as Host } from './index-Xd35V0a6.js';

const iconCss = "ui-icon{--icon-color:var(--foreground);display:inline-block;line-height:0;vertical-align:middle;height:var(--icon-size);width:var(--icon-size);color:var(--icon-color)}ui-icon>svg{width:var(--icon-size);height:var(--icon-size)}";

const UiIcon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    filled = false;
    size = 24;
    label = "";
    color;
    src;
    variant = "fill";
    svgContent;
    applyVariant(svg) {
        if (this.variant === "stroke") {
            return svg.replace(/<svg([^>]*)>/, `<svg$1 stroke="currentColor" fill="none">`).replace(/stroke="[^"]*"/g, 'stroke="currentColor"'); // normalize strokes
        }
        // Fill variant
        return svg.replace(/<svg([^>]*)>/, `<svg$1 fill="currentColor">`).replace(/fill="[^"]*"/g, 'fill="currentColor"'); // normalize fills
    }
    async loadSvg(path) {
        try {
            const res = await fetch(path);
            console.log(res);
            if (!res.ok)
                throw new Error(`Failed to load SVG: ${res.statusText}`);
            this.svgContent = this.applyVariant(await res.text());
        }
        catch (err) {
            console.error(err);
            this.svgContent = undefined;
        }
    }
    async onSrcChange(newValue) {
        console.log("Icon src changed:", newValue);
        if (newValue) {
            await this.loadSvg(newValue);
        }
    }
    getStyle() {
        return {
            "--icon-size": this.size ? `${this.size}px` : null,
            "--icon-color": this.color ? this.color : null,
        };
    }
    async componentWillLoad() {
        if (this.src) {
            await this.loadSvg(this.src);
        }
    }
    render() {
        const hasSlottedSvg = this.el.querySelector("svg") !== null;
        return (h(Host, { key: '4c15e0dfb5dc33a20dbda24296705c56326a871e', class: "ui-icon", role: "img", "aria-hidden": this.label ? "false" : "true", style: this.getStyle(), innerHTML: !hasSlottedSvg && this.svgContent ? this.svgContent : undefined }, this.label ? h("span", { class: "sr-only" }, this.label) : null, hasSlottedSvg && h("slot", { key: '87ce6e93bd891c3b9c65ef64caed45d11d525594' })));
    }
    static get watchers() { return {
        "src": ["onSrcChange"]
    }; }
};
UiIcon.style = iconCss;

export { UiIcon as ui_icon };
//# sourceMappingURL=ui-icon.entry.esm.js.map

//# sourceMappingURL=ui-icon.entry.js.map