import * as React from "react";
import {
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacityProps,
} from "react-native";
import { useStyles } from "../../hooks";
import { ICellAddActionable } from "../../models/list";
import { ITheme } from "../../models/theme";
import { Icon, IIconStyle } from "../icon";
import { CellView, ICellViewStyle } from "./CellView";

export type ICellAddActionableProps = Omit<TouchableOpacityProps, "style"> &
    ICellAddActionable;

export function CellAddActionable(props: ICellAddActionableProps) {
    const styles = useStyles(Styles, props.style || {});
    return (
        <CellView
            accessibilityLabel={props.label}
            testID={props.label}
            {...props}
            onPress={props.onPress}
            style={{ cell: styles.rootContainer }}
        >
            <Icon apitureFont name={"plus"} style={styles.icon} />
            <Text style={styles.label}>{props.label}</Text>
        </CellView>
    );
}

interface IStyle {
    icon: IIconStyle;
    label: TextStyle;
    rootContainer: ICellViewStyle["cell"];
}

export type ICellAddActionableStyle = never;

function Styles(theme: ITheme): IStyle {
    const { colors, spacings } = theme;
    const styleObject: IStyle = {
        icon: {
            color: colors.brandActive,
            fontSize: 17,
        },
        label: {
            ...theme.text.cta,
            color: colors.brandActive,
            marginLeft: spacings.small,
        },
        rootContainer: {
            flexDirection: "row",
        },
    };
    return StyleSheet.create<IStyle>(styleObject);
}
