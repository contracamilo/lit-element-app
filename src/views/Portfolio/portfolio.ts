import {customElement, property} from 'lit/decorators.js';
import { LitElement, html, css } from "lit-element";


@customElement('wc-portfolio')
class PortfolioPage extends LitElement {
        render(){
            return html`
                <h1>Portfolio</h1>
            `;
        }
}
