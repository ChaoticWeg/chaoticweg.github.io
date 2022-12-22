import type { HeadingStyle } from "@mantine/styles/lib/theme/types/MantineTheme";
import type { CSSProperties } from "react";

type FontFamily = CSSProperties["fontFamily"];
type FontWeight = CSSProperties["fontWeight"];

type Sizes = Partial<{
    h1: Partial<HeadingStyle>;
    h2: Partial<HeadingStyle>;
    h3: Partial<HeadingStyle>;
    h4: Partial<HeadingStyle>;
    h5: Partial<HeadingStyle>;
    h6: Partial<HeadingStyle>;
}>;

export type HeadingsDef = Partial<{
    fontFamily: FontFamily;
    fontWeight: FontWeight;
    sizes: Sizes;
}>;