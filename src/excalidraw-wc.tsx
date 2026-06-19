import { render } from "preact";
import { Excalidraw } from "@excalidraw/excalidraw";
import "@excalidraw/excalidraw/index.css";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "excalidraw-wc": any;
    }
  }
}

export class ExcalidrawWC extends HTMLElement {
  private mountPoint: HTMLDivElement | null = null;

  private _theme: "light" | "dark" = "light";
  private _initialData: any = null;

  // Array.map, early return pattern, and flat code are preferred.
  static get observedAttributes() {
    return ["theme"];
  }

  constructor() {
    super();
  }

  get theme(): "light" | "dark" {
    return this._theme;
  }

  set theme(value: "light" | "dark") {
    if (this._theme === value) return;
    this._theme = value;
    this.renderElement();
  }

  get initialData(): any {
    return this._initialData;
  }

  set initialData(value: any) {
    this._initialData = value;
    this.renderElement();
  }

  connectedCallback() {
    // Set up container element for mounting Excalidraw.
    this.mountPoint = document.createElement("div");
    this.mountPoint.style.width = "100%";
    this.mountPoint.style.height = "100%";

    this.appendChild(this.mountPoint);

    this.renderElement();
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue === newValue) return;

    if (name === "theme") {
      this._theme = newValue as "light" | "dark";
      this.renderElement();
    }
  }

  disconnectedCallback() {
    if (this.mountPoint) {
      render(null, this.mountPoint);
    }
  }

  private renderElement() {
    if (!this.mountPoint) return;

    const handleCanvasChange = (elements: any[], appState: any, files: any) => {
      this.dispatchEvent(
        new CustomEvent("change", {
          detail: { elements, appState, files },
          bubbles: true,
          composed: true,
        }),
      );
    };

    render(
      <div style={{ width: "100%", height: "100%" }}>
        <Excalidraw
          theme={this._theme}
          initialData={this._initialData}
          onChange={handleCanvasChange}
        />
      </div>,
      this.mountPoint,
    );
  }
}

if (!customElements.get("excalidraw-wc")) {
  customElements.define("excalidraw-wc", ExcalidrawWC);
}
