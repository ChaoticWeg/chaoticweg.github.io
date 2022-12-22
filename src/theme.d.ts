import type { Tuple, DefaultMantineColor } from "@mantine/core";

type CustomColors = "cohost" | "twitch" | "twitter";
type ExtendedCustomColors = CustomColors | DefaultMantineColor;

declare module "@mantine/core" {
    export interface MantineThemeColorsOverride {
        colors: Record<ExtendedCustomColors, Tuple<string, 10>>;
    }
}
