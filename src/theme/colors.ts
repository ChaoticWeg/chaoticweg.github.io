import type { Tuple } from "@mantine/core";
import type { ExtendedCustomColors } from "../theme";

const colors: Partial<Record<ExtendedCustomColors, Tuple<string, 10>>> = {
    cohost: [
        "#ffe8f3",
        "#f1c2d7",
        "#e49bbb",
        "#d874a0",
        "#cb4d85",
        "#b2346c",
        "#8b2754",
        "#641b3c",
        "#3e0e24",
        "#1b020e"
    ],
    twitch: [
        "#f2e3ff",
        "#d3b2ff",
        "#b380ff",
        "#954dff",
        "#771bfe",
        "#5d02e5",
        "#4800b3",
        "#340081",
        "#1f004f",
        "#0b001f"
    ],
    twitter: [
        "#dcf6ff",
        "#b1e0ff",
        "#83cafa",
        "#55b5f5",
        "#28a0f1",
        "#0e86d7",
        "#0168a8",
        "#004b7a",
        "#002d4c",
        "#00101f"
    ]
}

export default colors;