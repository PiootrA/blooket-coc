import { StrictMode } from "react";
import App from "./App";

export default function Strict(): JSX.Element {
    return (
        <StrictMode>
            <App />
        </StrictMode>
    );
};