import { Navbar as MantineNavbar, Text } from "@mantine/core";
import { IconCpu } from "@tabler/icons";
import { NavbarColorToggle } from "./NavbarColorToggle";

export function NavbarHeader(props: NavbarHeaderProps) {
    const { className, iconClassName } = props;

    return (
        <MantineNavbar.Section className={className}>
            <IconCpu className={iconClassName} />
            <div style={{ flex: 1 }}>
                <Text>chaoticweg</Text>
            </div>
            <NavbarColorToggle />
        </MantineNavbar.Section>
    );
}

interface NavbarHeaderProps {
    className: string;
    iconClassName: string;
}
