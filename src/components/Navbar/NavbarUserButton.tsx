import { Avatar, createStyles, Group, Text, UnstyledButton } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons";
import type { MouseEventHandler } from "react";
import { forwardRef } from "react";

const useStyles = createStyles((theme) => ({
    button: {
        display: "block",
        width: "100%",
        padding: theme.spacing.md,
        color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

        "&:hover": {
            backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0]
        }
    }
}));

export const NavbarUserButton = forwardRef<HTMLButtonElement, NavbarUserButtonProps>((props, ref) => {
    const { onClick, user } = props;
    const { classes } = useStyles();

    return (
        <UnstyledButton className={classes.button} ref={ref} onClick={onClick}>
            <Group>
                <Avatar src={user?.avatar_url} radius="xl" />
                <div style={{ flex: 1 }}>
                    <Text size="sm" weight={500}>
                        {user?.name ?? "..."}
                    </Text>
                    <Text color="dimmed" size="xs">
                        Links
                    </Text>
                </div>
                <IconChevronRight size={14} stroke={1.5} />
            </Group>
        </UnstyledButton>
    );
});

export interface NavbarUser {
    name: string;
    avatar_url: string;
}

interface NavbarUserButtonProps {
    onClick: MouseEventHandler<HTMLButtonElement>;
    user?: NavbarUser | null;
}
