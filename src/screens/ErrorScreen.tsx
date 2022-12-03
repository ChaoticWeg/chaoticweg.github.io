import { useRouteError } from "react-router-dom";

interface RouteError {
    statusText?: string;
    message?: string;
}

export default function ErrorScreen() {
    const error = useRouteError() as RouteError;
    return (
        <div id="error-page">
            <h1>Error</h1>
            <p>An unexpected error occurred...</p>
            <p>
                <i>{error?.statusText || error?.message}</i>
            </p>
        </div>
    );
}
