import type { MantineThemeOverride } from "@mantine/core";
import { ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { useColorScheme as useMediaColorScheme } from "@mantine/hooks";
import { lazy, useCallback, useEffect, useMemo, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Theme from "./theme";

import Layout from "./layout/Layout";
import { withFallback } from "./layout/withFallback";

const ErrorScreen = lazy(() => import("./screens/ErrorScreen"));
const HomeScreen = lazy(() => import("./screens/HomeScreen"));
const NotFoundScreen = lazy(() => import("./screens/NotFoundScreen"));

const COLOR_SCHEME_LS_KEY = "cc.chaoticweg/colorScheme";
const getInitialColorScheme = () => window.localStorage.getItem(COLOR_SCHEME_LS_KEY) as ColorScheme;

export default function App() {
    const mediaColorScheme = useMediaColorScheme();
    const [colorScheme, setColorScheme] = useState<ColorScheme>(getInitialColorScheme() ?? mediaColorScheme);
    const toggleColorScheme = useCallback(() => setColorScheme((val) => (val === "dark" ? "light" : "dark")), []);

    useEffect(() => {
        window.localStorage.setItem(COLOR_SCHEME_LS_KEY, colorScheme);
    }, [colorScheme]);

    const theme = useMemo<MantineThemeOverride>(() => ({ ...Theme, colorScheme }), [colorScheme]);

    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout />} errorElement={<ErrorScreen />}>
                            <Route index element={withFallback(<HomeScreen />)} />
                            <Route path="*" element={withFallback(<NotFoundScreen />)} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </MantineProvider>
        </ColorSchemeProvider>
    );
}
