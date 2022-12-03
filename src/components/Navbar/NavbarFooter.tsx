import { Navbar as MantineNavbar } from "@mantine/core";
import { useUser } from "../../query/useUser";
import { NavbarUserButton } from "./NavbarUserButton";

export function NavbarFooter(props: NavbarFooterProps) {
    const { className } = props;
    const { data: user } = useUser("chaoticweg");

    return (
        <MantineNavbar.Section className={className}>
            <NavbarUserButton user={user} />
        </MantineNavbar.Section>
    );
}

interface NavbarFooterProps {
    className: string;
}
