import { customElement, property } from "lit/decorators.js";
import { LitElement, html } from "lit-element";

@customElement("wc-viewport")
class Viewport extends LitElement {

    @property({ type: String }) currentPath: string = '/';
    @property({ attribute: false }) viewList: NodeListOf<Element> | null = null;


    connectedCallback(): void {
        super.connectedCallback();
        this.viewList = document.querySelectorAll("wc-route") as NodeListOf<Element>;
        this.renderView(this.currentPath);
    }

    renderView(path:string): void {
        this.innerHTML = '';
        
        if (this.shadowRoot) {
          this.shadowRoot.innerHTML = '';
        }
      
        let view = Array.from(this.viewList!).find((view) => {
            return view.getAttribute('path') === path;
        });
        
        !!view && this.shadowRoot?.appendChild(view);
        this.currentPath = view as unknown as string;
    }

}