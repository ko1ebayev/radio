import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { Router } from "@lit-labs/router";

@customElement("app-root")
export class AppRoot extends LitElement {
  private _routes = new Router(this, [
    { path: "/", render: () => html`<app-home-page></app-home-page>` },
    { path: "/about", render: () => html`<h1>About</h1>` },
  ]);

  render() {
    return html`
      <app-header></app-header>
      <main>${this._routes.outlet()}</main>
      <app-footer></app-footer>
    `;
  }
}
