import type { Styles } from "@mantine/core";
import { AppShell } from "@mantine/core";
import { lazy, Suspense, useMemo } from "react";
import { Outlet } from "react-router-dom";

import { Navbar as MantineNavbar } from "@mantine/core";
const Navbar = lazy(() => import("../components/Navbar"));

const styles: Styles<"main", Record<string, any>> = (theme) => ({
    main: {
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
        color: theme.colorScheme === "dark" ? theme.colors.gray[0] : theme.colors.dark[8]
    }
});

export default function Layout() {
    const fallbackNavbar = useMemo(() => <MantineNavbar children={null} width={{ base: 250 }} />, []);

    return (
        <AppShell
            padding="md"
            styles={styles}
            navbar={
                <Suspense fallback={fallbackNavbar}>
                    <Navbar />
                </Suspense>
            }
        >
            <Outlet />
        </AppShell>
    );
}
