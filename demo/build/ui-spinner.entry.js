import { r as registerInstance, h, d as Host } from './index-Bh24I87Q.js';

const spinnerCss = ":host,ui-spinner{--track-color:rgb(128 128 128 / 25%);--indicator-color:#27bafd;--stroke-width:4px}.ui-spinner{display:inline-block;border-radius:var(--radius-full, 50%);width:var(--spinner-size);height:var(--spinner-size);border:solid var(--stroke-width) var(--track-color);border-top-color:var(--indicator-color);border-right-color:var(--indicator-color);animation:1s linear infinite spin}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";

const UiSpinner = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    size = 60;
    getStyle() {
        return {
            "--spinner-size": `${this.size}px`,
        };
    }
    render() {
        return h(Host, { key: 'faa5edc5992663c9eb6cc07eb9460cd5a3af4ab4', class: "ui-spinner", style: this.getStyle() });
    }
};
UiSpinner.style = spinnerCss;

export { UiSpinner as ui_spinner };
//# sourceMappingURL=ui-spinner.entry.esm.js.map

//# sourceMappingURL=ui-spinner.entry.js.map