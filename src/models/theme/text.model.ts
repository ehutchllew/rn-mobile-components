import { TextStyle } from "react-native";
import { IColors } from "./colors.model";

export interface IFontFamily {
    bold: string;
    light: string;
    medium: string;
    regular: string;
}
export interface IFonts {
    color: IColors[keyof IColors];
    fontFamily?: IFontFamily[keyof IFontFamily];
    fontSize?: number;
    fontWeight?: TextStyle["fontWeight"];
}

export interface IText {
    body: IFonts;
    bodyHeavy: IFonts;
    bodyLight: IFonts;
    bodyS: IFonts;
    bodySHeavy: IFonts;
    bodySLight: IFonts;

    cta: IFonts;
    ctaL: IFonts;
    ctaS: IFonts;

    headingL: IFonts;
    headingM: IFonts;
    headingS: IFonts;
    headingXL: IFonts;
    headingXS: IFonts;
    subhead: IFonts;
}
