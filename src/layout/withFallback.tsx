import type { ReactNode } from "react";
import { Suspense } from "react";
import { FallbackScreen } from "../components/Screen";

export function withFallback(WrappedComponent: ReactNode) {
    return <Suspense fallback={<FallbackScreen />}>{WrappedComponent}</Suspense>;
}
