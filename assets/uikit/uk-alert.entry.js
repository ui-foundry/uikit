import { r as registerInstance, h, a as Host } from './index-D21SvVqK.js';

const alertCss = ".uk-alert{padding:1rem;border-radius:0.25rem;position:relative;font-size:1rem;color:#fff;display:block}.uk-alert .message{margin-right:2rem}.uk-alert .close{position:absolute;top:0.75rem;right:0.625rem;background:rgba(0,0,0,0);border:none;font-size:1.25rem;color:inherit;cursor:pointer}.uk-alert-success{background-color:#28a745}.uk-alert-warning{background-color:#ffc107;color:#000}.uk-alert-danger{background-color:#dc3545}.uk-alert-info{background-color:#17a2b8}";

const UkAlert = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    type = 'success';
    render() {
        return (h(Host, { key: '3e7bf87c65e97f46de28ddd6aefea334c95cddc6', class: `uk-alert uk-alert-${this.type}` }, h("slot", { key: 'c913471d82f56080c890108bc5502c0642eda8aa' })));
    }
};
UkAlert.style = alertCss;

export { UkAlert as uk_alert };
//# sourceMappingURL=uk-alert.entry.js.map

//# sourceMappingURL=uk-alert.entry.js.map