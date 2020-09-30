import { IColors } from "./colors.model";
import { ISpacings } from "./spacings.model";
import { IFonts, IText } from "./text.model";
import { IPartialTheme, ITheme } from "./theme.model";

type IPartialDeep<T> = {
    [P in keyof T]?: IPartialDeep<T[P]>;
};

export {
    IColors,
    ISpacings,
    IFonts,
    IText,
    IPartialDeep,
    IPartialTheme,
    ITheme,
};
