import { Avatar, createStyles, Group, Text, UnstyledButton } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons";

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

export function NavbarUserButton(props: NavbarUserButtonProps) {
    const { user } = props;
    const { classes } = useStyles();

    return (
        <UnstyledButton className={classes.button}>
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
}

export interface NavbarUser {
    name: string;
    avatar_url: string;
}

interface NavbarUserButtonProps {
    user?: NavbarUser | null;
}
