import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import styles from "./footer.component.scss?inline";

@customElement("app-footer")
export class FooterComponent extends LitElement {
  static styles = unsafeCSS(styles);

  render() {
    return html` <footer>FOOTER</footer> `;
  }
}
