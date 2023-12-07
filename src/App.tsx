import pages from "@pages/index";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from "react-router-dom";

export default function App(): JSX.Element {
    return (
        <ErrorBoundary fallback={<h1>Something went wrong.</h1>}>
            <Suspense fallback={<h1>Loading page...</h1>}>
                <BrowserRouter>
                    <pages.Home />
                </BrowserRouter>
            </Suspense>
        </ErrorBoundary>
    )
}