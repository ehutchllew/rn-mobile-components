import * as React from "react";
import {
    StyleSheet,
    Text,
    TextStyle,
    View,
    ViewProps,
    ViewStyle,
} from "react-native";
import { useStyles } from "../../hooks";
import { ICellLabelLeftAlignValue } from "../../models/list";
import { ITheme } from "../../models/theme";
import { CellView, ICellViewStyle } from "./CellView";

export type ICellLabelLeftAlignValueProps = Omit<ViewProps, "style"> &
    ICellLabelLeftAlignValue;

export function CellLabelLeftAlignValue(props: ICellLabelLeftAlignValueProps) {
    const styles = useStyles(Styles, props.style);

    return (
        <CellView
            testID={props.label || props.testID}
            {...props}
            style={{ cell: styles.rootContainer }}
        >
            <View style={{ flex: 1 }}>
                <Text style={styles.label} numberOfLines={1}>
                    {props.label}
                </Text>
            </View>
            <View style={styles.valueContainer}>
                <Text style={styles.value}>{props.value}</Text>
            </View>
        </CellView>
    );
}

export interface IStyle {
    label: TextStyle;
    rootContainer: ICellViewStyle["cell"];
    value: TextStyle;
    valueContainer: ViewStyle;
}

export type ICellLabelLeftAlignValueStyle = never;

function Styles(theme: ITheme): IStyle {
    const { colors, spacings } = theme;
    const styleObject: IStyle = {
        label: theme.text.headingM,
        rootContainer: {
            alignItems: "center",
            flexDirection: "row",
        },
        value: { ...theme.text.headingM, color: colors.greyDark },
        valueContainer: {
            flex: 2,
            marginLeft: spacings.large,
        },
    };

    return StyleSheet.create(styleObject);
}
