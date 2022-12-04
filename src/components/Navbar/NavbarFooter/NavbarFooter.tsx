import { Menu, Navbar as MantineNavbar, useMantineTheme } from "@mantine/core";
import { IconBrandCohost, IconBrandGithub, IconBrandTwitch, IconBrandTwitter } from "@tabler/icons";
import { lazy, Suspense, useCallback, useState } from "react";

import { useUser } from "../../../query/useUser";
import { NavbarUserButton } from "../NavbarUserButton";

import { NavbarFooterMenuLink } from "./NavbarFooterMenuLink";

const IconTwitter = lazy(() => import("./icons/IconTwitter"));
const IconGithub = lazy(() => import("./icons/IconGithub"));
const IconTwitch = lazy(() => import("./icons/IconTwitch"));
const IconCohost = lazy(() => import("./icons/IconCohost"));

export function NavbarFooter(props: NavbarFooterProps) {
    const { className } = props;

    const { data: user } = useUser("chaoticweg");
    const theme = useMantineTheme();

    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const toggleMenuOpen = useCallback(() => setMenuOpen((mo) => !mo), []);

    return (
        <MantineNavbar.Section className={className}>
            <Menu
                opened={menuOpen}
                onChange={setMenuOpen}
                shadow="md"
                position="right-end"
                offset={10}
                withArrow
                withinPortal
                width={200}
            >
                <Menu.Target>
                    <NavbarUserButton onClick={toggleMenuOpen} user={user} />
                </Menu.Target>

                <Menu.Dropdown>
                    <Suspense fallback={<>...</>}>
                        <NavbarFooterMenuLink
                            IconComponent={IconGithub}
                            color="dark"
                            title="GitHub"
                            href="//github.com/chaoticweg"
                        />
                        <NavbarFooterMenuLink
                            fill
                            IconComponent={IconTwitter}
                            color="twitter"
                            title="Twitter"
                            href="//twitter.com/chaoticweg"
                        />
                        <NavbarFooterMenuLink
                            IconComponent={IconTwitch}
                            color="twitch"
                            title="Twitch"
                            href="//twitch.tv/chaoticweg"
                        />
                        <NavbarFooterMenuLink
                            IconComponent={IconCohost}
                            color="cohost"
                            title="Cohost"
                            href="//cohost.org/weg"
                        />
                    </Suspense>
                </Menu.Dropdown>
            </Menu>
        </MantineNavbar.Section>
    );
}

interface NavbarFooterProps {
    className: string;
}
