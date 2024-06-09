import {customElement, property} from 'lit/decorators.js';
import { LitElement, html, css } from "lit-element";

@customElement('wc-about')
class AboutPage extends LitElement {
        render(){
            return html`
                <h1>About</h1>
            `;
        }
}
