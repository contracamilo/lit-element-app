import {customElement, property} from 'lit/decorators.js';
import { html, css, LitElement } from 'lit';

@customElement('wc-button')
class Button extends LitElement {
    @property({ type: String }) label = '';

    static styles = css`
        button {
            display: inline-block;
            padding: 8px 16px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        button:hover {
            background-color: #0056b3;
        }
    `;

    handleClick(e: Event) {}
    
    render() {
        return html`
            <button @click=${this.handleClick}>${this.label}</button>
        `;
    }

   
}