import type { Styles } from "@mantine/core";
import { AppShell } from "@mantine/core";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const styles: Styles<"main", Record<string, any>> = (theme) => ({
    main: {
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
        color: theme.colorScheme === "dark" ? theme.colors.gray[0] : theme.colors.dark[8]
    }
});

export default function Layout() {
    return (
        <AppShell padding="md" navbar={<Navbar />} styles={styles}>
            <Outlet />
        </AppShell>
    );
}
