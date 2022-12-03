import { Navbar as MantineNavbar, ScrollArea } from "@mantine/core";
import { useMemo } from "react";
import type { NavbarLinkProps } from "./NavbarLink";
import { NavbarLink } from "./NavbarLink";

export function NavbarLinks(props: NavbarLinksProps) {
    const links = useMemo(() => props.links.map((link) => <NavbarLink key={link.href} {...link} />), [props.links]);

    return (
        <MantineNavbar.Section className={props.className} component={ScrollArea} grow>
            {links}
        </MantineNavbar.Section>
    );
}

interface NavbarLinksProps {
    className: string;
    links: NavbarLinkProps[];
}
