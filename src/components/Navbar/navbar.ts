import { customElement, property } from "lit/decorators.js";
import { LitElement, html, css } from "lit-element";

@customElement("wc-navbar")
class Navbar extends LitElement {
  static styles = css`
    .navbar-container {
      list-style-type: none;
      display: flex;
      justify-content: center;
      margin: auto;
      background-color: #007bff;
      padding: 1rem;
    }
  `;

  render() {
    return html`
      <nav>
        <ul class="navbar-container">
          <li>
            <wc-link to="/" path="/"
              ><wc-button label="Home"></wc-button
            ></wc-link>
          </li>
          <li>
            <wc-link to="/about" path="/about"
              ><wc-button label="About"></wc-button
            ></wc-link>
          </li>
          <li>
            <wc-link to="/portfolio" path="/portfolio"
              ><wc-button label="Portfolio"></wc-button
            ></wc-link>
          </li>
        </ul>
      </nav>
    `;
  }
}
