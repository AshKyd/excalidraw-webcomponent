import { render } from "preact";
import { Excalidraw, exportToSvg } from "@excalidraw/excalidraw";
import "@excalidraw/excalidraw/index.css";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "excalidraw-wc": any;
    }
  }
}

const ALL_TOOLS = [
  "selection",
  "rectangle",
  "diamond",
  "ellipse",
  "arrow",
  "line",
  "freedraw",
  "text",
  "image",
  "eraser",
  "more-tools",
  "hand",
  "laser"
];

const TOOL_SELECTORS: Record<string, string> = {
  "selection": ".ToolIcon:has([data-testid='toolbar-selection'])",
  "rectangle": ".ToolIcon:has([data-testid='toolbar-rectangle'])",
  "diamond": ".ToolIcon:has([data-testid='toolbar-diamond'])",
  "ellipse": ".ToolIcon:has([data-testid='toolbar-ellipse'])",
  "arrow": ".ToolIcon:has([data-testid='toolbar-arrow'])",
  "line": ".ToolIcon:has([data-testid='toolbar-line'])",
  "freedraw": ".ToolIcon:has([data-testid='toolbar-freedraw'])",
  "text": ".ToolIcon:has([data-testid='toolbar-text'])",
  "image": ".ToolIcon:has([data-testid='toolbar-image'])",
  "eraser": ".ToolIcon:has([data-testid='toolbar-eraser'])",
  "more-tools": ".App-toolbar__extra-tools-trigger",
  "hand": ".ToolIcon:has([data-testid='toolbar-hand'])",
  "laser": ".ToolIcon:has([data-testid='toolbar-laser'])",
};

export class ExcalidrawWC extends HTMLElement {
  private mountPoint: HTMLDivElement | null = null;

  private _theme: "light" | "dark" = "light";
  private _initialData: any = null;
  private _enabledTools: string | null = null;
  private _appState: any = {};

  public elements: any[] = [];
  public appState: any = null;
  public files: any = null;
  public api: any = null;

  static get observedAttributes() {
    return ["theme", "enabled-tools", "app-state"];
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
    if (value && value.elements) {
      this.elements = value.elements;
    }
    if (value && value.appState) {
      this.appState = value.appState;
    }
    if (value && value.files) {
      this.files = value.files;
    }
    this.renderElement();
  }

  get enabledTools(): string | null {
    return this._enabledTools;
  }

  set enabledTools(value: string | null) {
    if (this._enabledTools === value) return;
    this._enabledTools = value;
    this.renderElement();
  }

  get customAppState(): any {
    return this._appState;
  }

  set customAppState(value: any) {
    if (typeof value === "string") {
      try {
        this._appState = JSON.parse(value);
      } catch (e) {
        console.error("Failed to parse appState string:", e);
        this._appState = {};
      }
    } else {
      this._appState = value || {};
    }
    this.renderElement();
  }

  async getSvg(): Promise<string> {
    if (!this.elements || this.elements.length === 0) return "";
    try {
      const svgElement = await exportToSvg({
        elements: this.elements,
        appState: {
          ...this.appState,
          exportWithDarkMode: this._theme === "dark",
        },
        files: this.files,
      });
      return svgElement.outerHTML;
    } catch (e) {
      console.error("Failed to export to SVG:", e);
      return "";
    }
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
    } else if (name === "enabled-tools") {
      this._enabledTools = newValue;
    } else if (name === "app-state") {
      try {
        this._appState = newValue ? JSON.parse(newValue) : {};
      } catch (e) {
        console.error("Failed to parse app-state JSON:", e);
        this._appState = {};
      }
    }
    this.renderElement();
  }

  disconnectedCallback() {
    if (this.mountPoint) {
      render(null, this.mountPoint);
    }
  }

  private renderElement() {
    if (!this.mountPoint) return;

    const handleCanvasChange = (elements: any[], appState: any, files: any) => {
      this.elements = elements;
      this.appState = appState;
      this.files = files;

      this.dispatchEvent(
        new CustomEvent("change", {
          detail: { elements, appState, files },
          bubbles: true,
          composed: true,
        }),
      );
    };

    // Calculate enabled tools set
    const enabledSet = new Set(
      this._enabledTools
        ? this._enabledTools.split(/[\s,]+/).map((t) => t.trim().toLowerCase())
        : ALL_TOOLS
    );

    // Generate style rules to hide disabled tools
    const styles: string[] = [];
    ALL_TOOLS.forEach((tool) => {
      if (!enabledSet.has(tool)) {
        const selector = TOOL_SELECTORS[tool];
        if (selector) {
          styles.push(`${selector} { display: none !important; }`);
        }
      }
    });

    console.log("[excalidraw-wc] Render configuration:", {
      enabledToolsAttr: this._enabledTools,
      enabledSet: Array.from(enabledSet),
      styles: styles.join("\n")
    });

    render(
      <div style={{ width: "100%", height: "100%" }}>
        {styles.length > 0 && <style dangerouslySetInnerHTML={{ __html: styles.join("\n") }} />}
        <Excalidraw
          excalidrawAPI={(api) => {
            this.api = api;
          }}
          theme={this._theme}
          initialData={this._initialData}
          onChange={handleCanvasChange}
          appState={{
            theme: this._theme,
            viewBackgroundColor: "transparent",
            ...this._appState
          }}
          UIOptions={{
            tools: {
              image: enabledSet.has("image")
            }
          }}
        />
      </div>,
      this.mountPoint,
    );
  }
}

if (!customElements.get("excalidraw-wc")) {
  customElements.define("excalidraw-wc", ExcalidrawWC);
}
