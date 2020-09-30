import * as React from "react";
import {
    StyleSheet,
    TextStyle,
    TouchableOpacity,
    TouchableOpacityProps,
    ViewStyle,
} from "react-native";
import { useStyles } from "../../hooks";
import { ITheme } from "../../models/theme";

export type ICellViewProps = Omit<TouchableOpacityProps, "style"> & {
    children?: React.ReactNode;
    disabled?: boolean | null;
    onPress?: () => void;
    style?: Partial<ICellViewStyle>;
};

export function CellView(props: ICellViewProps) {
    const styles = useStyles(Styles, props.style);
    return (
        <TouchableOpacity
            {...props}
            disabled={props.disabled || !props.onPress}
            style={[styles.cell, props.disabled && styles.cellDisabled]}
        />
    );
}

export interface ICellViewStyle {
    cell: ViewStyle;
    cellDisabled: TextStyle;
}

function Styles(theme: ITheme): ICellViewStyle {
    const { colors, spacings } = theme;
    const styleObject: ICellViewStyle = {
        cell: {
            backgroundColor: colors.backgroundMain,
            paddingHorizontal: spacings.sideMargin,
            paddingVertical: spacings.small,
        },
        cellDisabled: {
            backgroundColor: colors.greyExtraLight,
            opacity: 0.7,
        },
    };
    return StyleSheet.create<ICellViewStyle>(styleObject);
}
