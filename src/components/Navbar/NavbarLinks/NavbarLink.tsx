import { createStyles, ThemeIcon } from "@mantine/core";
import type { TablerIcon } from "@tabler/icons";
import { Link, useLocation } from "react-router-dom";

const useStyles = createStyles((theme, _params, getRef) => {
    const lightPrimary = theme.fn.variant({ variant: "light", color: theme.primaryColor });

    return {
        link: {
            ...theme.fn.focusStyles(),
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            fontSize: theme.fontSizes.sm,
            color: theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7],
            padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
            borderRadius: theme.radius.sm,
            fontWeight: 500,

            "&:hover": {
                backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
                color: theme.colorScheme === "dark" ? theme.white : theme.black
            }
        },

        linkIcon: {
            marginRight: theme.spacing.sm
        },

        linkActive: {
            "&, &:hover": {
                backgroundColor: lightPrimary.background,
                color: lightPrimary.color
            }
        }
    };
});

export function NavbarLink(props: NavbarLinkProps) {
    const { title, href, Icon } = props;
    const { classes, cx } = useStyles();
    const location = useLocation();

    return (
        <Link
            aria-label={title}
            className={cx(classes.link, {
                [classes.linkActive]: href === location.pathname
            })}
            to={href}
        >
            <ThemeIcon variant="light" className={classes.linkIcon}>
                <Icon />
            </ThemeIcon>
            <span>{title}</span>
        </Link>
    );
}

export interface NavbarLinkProps {
    title: string;
    href: string;
    Icon: TablerIcon;
}
