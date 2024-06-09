import { customElement, property } from "lit/decorators.js";
import { LitElement, html } from "lit-element";

@customElement("wc-router")
class Router extends LitElement {
  @property({ type: String }) name: string = "/";
  @property({ attribute: false }) viewportList: NodeListOf<Element> | null =
    null;

  constructor() {
    super();
    this._listerNavigateEvent = this._listerNavigateEvent.bind(this); // avoid losing the context of this
  }

  connectedCallback(): void {
    super.connectedCallback();

    this.viewportList = document.querySelectorAll("wc-viewport" ) as NodeListOf<Element>;
    
    this.addEventListener("navigateTo",this._listerNavigateEvent as EventListener);
  }

  private _listerNavigateEvent(event: CustomEvent<never>) {
    let { to, path } = event.detail;

    if (path !== undefined || path !== name) {
      this.viewportList?.forEach((viewport: any) => {
        viewport.renderView(to);
      });
    }

    event.stopPropagation();
  }

    render() {
        return html`
        <slot></slot>
        `;
    }
}
