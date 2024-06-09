import { customElement, property } from "lit/decorators.js";
import { LitElement, html } from "lit-element";

@customElement("wc-route")
class Route extends LitElement {
    render() {
        return html`
            <slot></slot>
        `;
    }
}