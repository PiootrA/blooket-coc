import { createRoot } from "react-dom/client";
import App from "./Strict.jsx";

const root = document.getElementById("root");
if (root) {
    const getRoot = createRoot(root);
    getRoot.render(<App />);
}
