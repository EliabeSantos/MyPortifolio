import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Os subsets já vêm separados por unicode-range: o navegador baixa
// apenas o arquivo latin quando o texto é em pt-BR.
import "@fontsource-variable/inter";
import "@fontsource-variable/sora";
import "./styles/global.css";

import App from "./App";

const container = document.getElementById("root");
if (!container) {
  throw new Error('Elemento com id "root" não encontrado no index.html.');
}

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
