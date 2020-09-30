import { IColors } from "./colors.model";
import { ISpacings } from "./spacings.model";
import { IFontFamily, IText } from "./text.model";

export type IPartialTheme = Omit<ITheme, "text">;
export interface ITheme {
    colors: IColors;
    fontFamily: IFontFamily;
    spacings: ISpacings;
    text: IText;
}
