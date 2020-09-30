import { IColors, IPartialDeep, ITheme } from "../models/theme";
import { IFontFamily } from "../models/theme/text.model";
import { mergeStyles } from "../util";
import { baseTheme } from "./baseTheme";

export class Theme {
    private static _colors: ITheme["colors"] = baseTheme.colors;
    private static _fontFamily: IFontFamily = baseTheme.fontFamily;
    private static _spacings: ITheme["spacings"] = baseTheme.spacings;
    private static _text: ITheme["text"] = buildText(
        Theme._colors,
        Theme._fontFamily
    );
    private static _theme: ITheme;

    private constructor() {}

    public static get colors() {
        return Theme._colors;
    }

    public static get fontFamily() {
        return Theme._fontFamily;
    }

    public static get spacings() {
        return Theme._spacings;
    }

    public static get text() {
        return Theme._text;
    }

    public static get theme() {
        if (!Theme._theme) {
            Theme._theme = {
                colors: Theme.colors,
                fontFamily: Theme.fontFamily,
                spacings: Theme.spacings,
                text: Theme.text,
            };
        }

        return Theme._theme;
    }

    /**
     * For some reason setting this as a setter makes it so
     * both the getter and setter are typed as IPartialDeep
     * despite _theme explicitly being of type ITheme.
     */
    public static set(themeOverride: IPartialDeep<ITheme>) {
        const mergedTheme: ITheme = mergeStyles(Theme.theme, themeOverride);
        const { colors, fontFamily, spacings, text } = mergedTheme;
        Theme._colors = colors;
        Theme._fontFamily = fontFamily;
        Theme._spacings = spacings;
        Theme._text = text;
        Theme._theme = mergedTheme;
    }
}

function buildText(colors: IColors, fontFamily: IFontFamily): ITheme["text"] {
    return {
        /**
         * BODY
         */
        body: {
            color: colors.black,
            fontFamily: fontFamily.regular,
            fontSize: 15,
            fontWeight: "400",
        },
        bodyHeavy: {
            color: colors.black,
            fontFamily: fontFamily.medium,
            fontSize: 15,
            fontWeight: "500",
        },
        bodyLight: {
            color: colors.black,
            fontFamily: fontFamily.light,
            fontSize: 15,
            fontWeight: "300",
        },
        bodyS: {
            fontFamily: fontFamily.regular,
            fontSize: 12,
            fontWeight: "400",
            color: colors.black,
        },
        bodySHeavy: {
            fontFamily: fontFamily.medium,
            fontSize: 12,
            fontWeight: "500",
            color: colors.black,
        },
        bodySLight: {
            color: colors.black,
            fontFamily: fontFamily.light,
            fontSize: 12,
            fontWeight: "300",
        },

        /**
         * CALL TO ACTION
         */
        cta: {
            color: colors.black,
            fontFamily: fontFamily.medium,
            fontSize: 17,
            fontWeight: "500",
        },
        ctaL: {
            color: colors.brandActive,
            fontFamily: fontFamily.medium,
            fontSize: 20,
            fontWeight: "500",
        },
        ctaS: {
            color: colors.brandActive,
            fontFamily: fontFamily.medium,
            fontSize: 15,
            fontWeight: "500",
        },

        /**
         * HEADERS
         */
        headingL: {
            color: colors.black,
            fontFamily: fontFamily.regular,
            fontSize: 28,
            fontWeight: "400",
        },
        headingM: {
            color: colors.black,
            fontFamily: fontFamily.regular,
            fontSize: 21,
            fontWeight: "400",
        },
        headingS: {
            color: colors.black,
            fontFamily: fontFamily.regular,
            fontSize: 17,
            fontWeight: "400",
        },
        headingXL: {
            color: colors.black,
            fontFamily: fontFamily.light,
            fontSize: 36,
            fontWeight: "300",
        },
        headingXS: {
            color: colors.black,
            fontFamily: fontFamily.regular,
            fontSize: 14,
            fontWeight: "400",
        },
        subhead: {
            color: colors.black,
            fontFamily: fontFamily.regular,
            fontSize: 15,
            fontWeight: "400",
        },
    };
}
