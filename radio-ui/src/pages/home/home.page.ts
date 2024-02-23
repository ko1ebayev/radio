import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import styles from "./home.page.scss?inline";

@customElement("app-home-page")
export class HomePageComponent extends LitElement {
  static styles = unsafeCSS(styles);

  render() {
    return html`
    <app-player></app-player>
    `;
  }
}
