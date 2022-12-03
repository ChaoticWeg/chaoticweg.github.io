import { createStyles, Navbar as MantineNavbar } from "@mantine/core";
import { IconCpu, IconHome } from "@tabler/icons";
import { NavbarFooter } from "./NavbarFooter";
import { NavbarHeader } from "./NavbarHeader";
import type { NavbarLinkProps } from "./NavbarLinks";
import { NavbarLinks } from "./NavbarLinks";

const useStyles = createStyles((theme) => {
    const border = `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`;
    const margin = -theme.spacing.xs;

    return {
        header: {
            padding: theme.spacing.md,
            marginLeft: margin,
            marginRight: margin,
            color: theme.colorScheme === "dark" ? theme.white : theme.black,
            borderBottom: border,
            display: "flex",
            alignItems: "flex-end"
        },

        headerIcon: {
            color: theme.fn.primaryColor(),
            marginRight: theme.spacing.xs
        },

        links: {
            padding: `${theme.spacing.md}px 0`
        },

        footer: {
            marginLeft: margin,
            marginRight: margin,
            borderTop: border
        }
    };
});

const links: NavbarLinkProps[] = [
    { title: "Home", href: "/", Icon: IconHome },
    { title: "LOL", href: "/lol", Icon: IconCpu }
];

export default function Navbar() {
    const { classes } = useStyles();

    return (
        <MantineNavbar width={{ base: 250 }} px="xs">
            <NavbarHeader className={classes.header} iconClassName={classes.headerIcon} />
            <NavbarLinks className={classes.links} links={links} />
            <NavbarFooter className={classes.footer} />
        </MantineNavbar>
    );
}
