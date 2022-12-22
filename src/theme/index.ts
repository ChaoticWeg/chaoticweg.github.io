import type { MantineThemeOverride } from "@mantine/core";

import colors from "./colors";
import components from "./components";
import fontSizes from "./fontSizes";
import headings from "./headings";

const theme: MantineThemeOverride = {
    primaryColor: "red",
    colors,
    components,
    fontSizes,
    headings
};

export default theme;
