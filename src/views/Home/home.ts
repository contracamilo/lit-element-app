import {customElement, property} from 'lit/decorators.js';
import { LitElement, html, css } from "lit-element";
import '../../components/Table/table'
import '../../components/Register/register'

@customElement('wc-home')
class Home extends LitElement {

    @property({ type: Array })
    data: Array<{ name: string; surname: string; age: number }> = [
      { name: "John", surname: "Doe", age: 30 },
      { name: "Jane", surname: "Doe", age: 25 },
      { name: "Jack", surname: "Smith", age: 40 }
    ];

    addRegister(event: CustomEvent<never>){
        let updatedList = Object.assign([], this.data);
        updatedList = [...updatedList, event.detail];
        this.data = updatedList;
    }

    render() {
        return html`
            <h1>Home</h1>
            <wc-register @submitRegisterForm=${this.addRegister}></wc-register>
            <wc-table .data=${this.data}></wc-table>   
        `;
    }
}



