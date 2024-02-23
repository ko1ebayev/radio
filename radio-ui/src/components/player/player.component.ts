import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('app-player')
export class PlayerComponent extends LitElement {
    render() {
        return html`
          <audio controls autoplay muted>
            <source
              src="https://c25.radioboss.fm:8232/stream"
              type="audio/ogg"
            />
          </audio>
        `;
    }
}