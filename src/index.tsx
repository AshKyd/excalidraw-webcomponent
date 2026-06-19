import { render } from "preact";
import "./style.css";
import "./excalidraw-wc";
import { useState } from "preact/hooks";

export function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <header
        style={{
          padding: "1rem",
          background: "#333",
          color: "#fff",
          display: "flex",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <h2>Excalidraw Web Component Demo</h2>
        <button
          onClick={toggleTheme}
          style={{ padding: "0.5rem 1rem", cursor: "pointer" }}
        >
          Toggle Theme (Current: {theme})
        </button>
      </header>
      <div style={{ flex: 1, position: "relative" }}>
        {/* Custom element rendering */}
        <excalidraw-wc theme={theme} />
      </div>
    </div>
  );
}

render(<App />, document.getElementById("app")!);
