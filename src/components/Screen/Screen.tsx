import { ScrollArea } from "@mantine/core";
import type { ReactNode } from "react";
import { useEffect } from "react";

export function Screen(props: ScreenProps) {
    const { children, title } = props;

    useEffect(() => {
        const siteTitle = import.meta.env.VITE_APP_TITLE;
        document.title = title ? `${title} \u2022 ${siteTitle}` : siteTitle;
    }, [title]);

    return <ScrollArea>{children}</ScrollArea>;
}

interface ScreenProps {
    children: ReactNode;
    title?: string;
}
