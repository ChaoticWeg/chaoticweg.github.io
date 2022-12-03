import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import ReactDOM from "react-dom/client";
import ErrorBoundary from "./layout/ErrorBoundary";

const queryClient = new QueryClient();

import("./App").then(({ default: App }) => {
    ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
        <React.StrictMode>
            <QueryClientProvider client={queryClient}>
                <ErrorBoundary>
                    <App />
                </ErrorBoundary>
                <ReactQueryDevtools position="bottom-right" />
            </QueryClientProvider>
        </React.StrictMode>
    );
});
