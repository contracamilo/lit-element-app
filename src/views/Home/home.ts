import {customElement, property} from 'lit/decorators.js';
import { LitElement, html, css } from "lit-element";
import '../../components/Table/table'

@customElement('wc-home')
class Home extends LitElement {

    @property({ type: Array })
    data: Array<{ name: string; surname: string; age: number }> = [
      { name: "John", surname: "Doe", age: 30 },
      { name: "Jane", surname: "Doe", age: 25 },
      { name: "Jack", surname: "Smith", age: 40 }
    ];

    render() {
        return html`
            <h1>Home</h1>
            <wc-table .data=${this.data}></wc-table>
        `;
    }
}



