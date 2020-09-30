import { IPartialTheme } from "../models/theme";

const baseTheme: IPartialTheme = {
    colors: {
        backgroundMain: "#FFFFFF",
        backgroundAlternate: "#F0F2F3",
        bannerBackground: "#FDE7E6",
        divider: "#B5BDC4",
        black: "#242627",
        brandActive: "#006988",
        brandStatic: "#002B49",
        brandAccent: "#E2AC34",
        brandOptional: "#FDE7E6",
        error: "#A71930",
        errorExtraLight: "#F6E8EA",
        errorLight: "#D38C98",
        greyDark: "#42484A",
        greyMed: "#B5BDC4",
        greyMedDark: "#6D7176",
        greyExtraLight: "#F0F2F3",
        greyLight: "#D3D7DC",
        highlightDark: "#B6D5DF",
        highlightDefault: "#D9E8ED",
        hover: "#004B61",
        notice: "#FFF2BE",
        success: "#00680D",
        successExtraLight: "#C7F7CD",
        successLight: "#008611",
        white: "#FFFFFF",
    },
    fontFamily: {
        bold: "helvetica",
        light: "helvetica",
        medium: "helvetica",
        regular: "helvetica",
    },
    spacings: {
        micro: 4,
        xsmall: 8,
        small: 12,
        med: 16,
        large: 24,
        xlarge: 40,
        xxlarge: 64,

        sideMargin: 24,
    },
};

export { baseTheme };
