import {customElement, property} from 'lit/decorators.js';
import { LitElement, html, css } from "lit-element";

interface InputData {
    name: string;
    surname: string;
    age: string;
}

@customElement('wc-register')
class Register extends LitElement implements InputData{

    @property({ type: String }) name: string = '';
    @property({ type: String }) surname: string = '';
    @property({ type: String }) age: string = '';

    inputHandler(inputName: keyof InputData) {
        return (e: Event) => {
            // double binding
            const input = e.target as HTMLInputElement;
            this[inputName] = input.value;
        }
    }

    onSubmitForm() {
        let detail = {
            name: this.name,
            surname: this.surname,
            age: this.age
        };

        let actionOptions = {
            detail: detail,
            bubbles: true, // to bubble up the event
            composed: true // to propagate shadow DOM boundaries
        }

        this.dispatchEvent(new CustomEvent('submitRegisterForm', actionOptions));
    }

    render() {
        return html`
            <h1>Register</h1>
            <form>
                <label for="name">Name:</label><br>
                <input type="text" @input=${this.inputHandler("name")} id="name" name="name" .value=${this.name}><br>

                <label for="surname">Surname:</label><br>
                <input type="text" @input=${this.inputHandler("surname")} id="surname" name="surname" .value=${this.surname}><br>

                <label for="age">Age:</label><br>
                <input type="text"  @input=${this.inputHandler("age")} id="age" name="age" .value=${this.age}><br><br>

                <button @click=${this.onSubmitForm} type="button">Submit</button>
            </form>
        `;
    }
}