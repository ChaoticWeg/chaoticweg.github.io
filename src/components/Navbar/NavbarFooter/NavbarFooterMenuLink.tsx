import { MantineColor, Menu, ThemeIcon } from "@mantine/core";
import type { TablerIcon } from "@tabler/icons";
import { IconFileBroken } from "@tabler/icons";
import { LazyExoticComponent, Suspense, useMemo } from "react";
import { Link } from "react-router-dom";

export function NavbarFooterMenuLink(props: NavbarFooterMenuLinkProps) {
    const { IconComponent, color, title, href, stroke } = props;

    const icon = useMemo(
        () => (
            <Suspense fallback={<IconFileBroken size={20} />}>
                <ThemeIcon variant="light" color={color}>
                    <IconComponent size={20} stroke={stroke ?? 1.5} />
                </ThemeIcon>
            </Suspense>
        ),
        [color, stroke]
    );

    return (
        <Link to={href} target="_blank" style={{ textDecoration: "none" }}>
            <Menu.Item icon={icon}>{title}</Menu.Item>
        </Link>
    );
}

interface NavbarFooterMenuLinkProps {
    IconComponent: LazyExoticComponent<TablerIcon>;
    color: MantineColor;
    title: string;
    href: string;
    fill?: boolean;
    stroke?: number;
}
