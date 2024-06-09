import {customElement, property} from 'lit/decorators.js';
import { LitElement, html, css } from "lit";

@customElement('wc-about')
class AboutPage extends LitElement {
    constructor() {
        super();
        console.log('constructor');
      }
    
      connectedCallback() {
        super.connectedCallback();
        console.log('connectedCallback');
      }
    
      disconnectedCallback() {
        super.disconnectedCallback();
        console.log('disconnectedCallback');
      }
    
      updated(changedProperties: Map<string | number | symbol, unknown>) {
        super.updated(changedProperties);
        console.log('updated');
      }
    
      firstUpdated(changedProperties: Map<string | number | symbol, unknown>) {
        super.firstUpdated(changedProperties);
        console.log('firstUpdated');
      }
        render(){
            return html`
                <h1>About</h1>
            `;
        }
}
