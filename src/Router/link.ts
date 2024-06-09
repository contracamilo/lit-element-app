import { customElement, property } from "lit/decorators.js";
import { LitElement, html, css } from "lit-element";

@customElement("wc-link")
class Link extends LitElement {
  @property({ type: String }) to: string = "";
  @property({ type: String }) path: string = "";

  private _handleLinkClick() {
   
    let detail = {
      to: this.to,
      path: this.path,
    };

    this.dispatchEvent(new CustomEvent("navigateTo", { detail: detail, bubbles: true, composed: true}));
  }

  render() {
    return html`
      <div aria-label="nav-link" @click=${this._handleLinkClick}>
        <slot></slot>
      </div>
    `;
  }
}
