import { ITheme } from "../models/theme";
import { Theme } from "../theme";
import { mergeStyles } from "../util/styleOverrides";

export function useStyles<T, U>(
    StyleFunction: (theme: ITheme) => T,
    inlineStyles: Partial<U> = {}
): T {
    const mergedStyles = mergeStyles(StyleFunction(Theme.theme), inlineStyles);

    return mergedStyles;
}
