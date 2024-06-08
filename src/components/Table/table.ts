import {customElement, property} from 'lit/decorators.js';
import {html, css, LitElement} from 'lit';

@customElement('wc-table')
class Table extends LitElement {

    @property({ type: Array })
    data: Array<{ name: string; surname: string; age: number }> = [];
  
    render(){
        return html`
            <h2>Register Table</h2>
            <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
            ${this.data.map(
              (item) => html`
                <tr>
                  <td>${item.name}</td>
                  <td>${item.surname}</td>
                  <td>${item.age}</td>
                </tr>
              `
            )}
          </tbody>
          </table>
        `;
    }
}

