declare global {
    namespace JSX {
        interface IntrinsicElements {
            "excalidraw-wc": any;
        }
    }
}
export declare class ExcalidrawWC extends HTMLElement {
    private mountPoint;
    private _theme;
    private _initialData;
    private _enabledTools;
    private _appState;
    elements: any[];
    appState: any;
    files: any;
    api: any;
    static get observedAttributes(): string[];
    constructor();
    get theme(): "light" | "dark";
    set theme(value: "light" | "dark");
    get initialData(): any;
    set initialData(value: any);
    get enabledTools(): string | null;
    set enabledTools(value: string | null);
    get customAppState(): any;
    set customAppState(value: any);
    getSvg(): Promise<string>;
    connectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    disconnectedCallback(): void;
    private renderElement;
}
