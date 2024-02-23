import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import styles from "./header.component.scss?inline";

@customElement("app-header")
export class HeaderComponent extends LitElement {
  static styles = unsafeCSS(styles);

  render() {
    return html`
      <header>HEADER</header>
    `;
  }
}
