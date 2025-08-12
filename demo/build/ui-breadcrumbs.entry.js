import { r as registerInstance, a as getElement, h, d as Host } from './index-Xd35V0a6.js';

const breadcrumbsCss = "ui-breadcrumbs{--separator-inline-margin:10px;display:block}ui-breadcrumbs .ui-breadcrumbs{position:relative;display:flex;align-items:center}ui-breadcrumbs [slot=separator]{display:flex;align-items:center;margin-inline:var(--separator-inline-margin);color:#9ca3af;user-select:none}";

const UiBreadcrumbs = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    label = "Breadcrumbs";
    sim = "10px";
    get el() { return getElement(this); }
    componentDidLoad() {
        this.handleSlotChange();
    }
    getSeparatorContent = () => {
        // Check if there's a custom separator provided
        const customSeparator = this.el.querySelector('[slot="separator"]');
        if (customSeparator) {
            return customSeparator.outerHTML;
        }
        return "<span>/</span>";
    };
    handleSlotChange = () => {
        const breadcrumbItems = Array.from(this.el.querySelectorAll("ui-breadcrumb-item"));
        const itemCount = breadcrumbItems.length;
        const separatorHTML = this.getSeparatorContent();
        breadcrumbItems.forEach((item, index) => {
            const isLastItem = index === itemCount - 1;
            // Remove existing separator if any
            const existingSeparator = item.querySelector('[slot="separator"]');
            if (existingSeparator) {
                existingSeparator.remove();
            }
            // Add separator if not last item
            if (!isLastItem) {
                const tempDiv = document.createElement("div");
                tempDiv.innerHTML = separatorHTML;
                const separatorElem = tempDiv.firstElementChild;
                separatorElem.slot = "separator";
                item.appendChild(separatorElem);
            }
            item.setAttribute("aria-current", isLastItem ? "page" : "");
        });
    };
    render() {
        return (h(Host, { key: '2ddff3ad34c8304590b5c18fd19b12a59a9a1a12', part: "root", style: { "--separator-inline-margin": this.sim } }, h("nav", { key: 'e8835dc9c71fd83d11fe63ac652861100f9c4546', class: "ui-breadcrumbs", "aria-label": this.label, part: "navigation" }, h("slot", { key: 'afc0fb1c666a933d4300515fa30ed2d9ddd9f59b', onSlotchange: this.handleSlotChange })), h("div", { key: '13e11c738191182f0a08744a1823cbc0f4566cd3', hidden: true }, h("slot", { key: 'f33ef780c139b16bc15473a58721c2ecce9cd001', name: "separator" }))));
    }
};
UiBreadcrumbs.style = breadcrumbsCss;

export { UiBreadcrumbs as ui_breadcrumbs };
//# sourceMappingURL=ui-breadcrumbs.entry.esm.js.map

//# sourceMappingURL=ui-breadcrumbs.entry.js.map