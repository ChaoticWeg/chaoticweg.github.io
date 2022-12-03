import { Group, Switch, useMantineColorScheme, useMantineTheme } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons";
import type { TablerIconProps } from "@tabler/icons";
import { useCallback, useMemo } from "react";

const getIconProps = (color?: string, fill: boolean = false) => {
    const props: TablerIconProps = { color, size: 16, stroke: 2 };

    if (fill) {
        props.fill = color;
    }

    return props;
};

export function NavbarColorToggle() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const theme = useMantineTheme();

    const checked = useMemo(() => colorScheme === "dark", [colorScheme]);
    const onChange = useCallback(() => toggleColorScheme(), [toggleColorScheme]);

    const onLabel = useMemo(() => <IconSun {...getIconProps(theme.white)} />, [theme.white]);
    const offLabel = useMemo(
        () => <IconMoon {...getIconProps(theme.fn.primaryColor(), true)} />,
        [theme.fn.primaryColor]
    );

    return (
        <Group>
            <Switch checked={checked} onChange={onChange} size="sm" onLabel={onLabel} offLabel={offLabel} />
        </Group>
    );
}
