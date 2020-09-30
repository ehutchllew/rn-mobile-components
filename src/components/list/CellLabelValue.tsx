import * as React from "react";
import { StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import { useStyles } from "../../hooks";
import { ICellLabelValue } from "../../models/list";
import { ITheme } from "../../models/theme";
import { CellView, ICellViewStyle } from "./CellView";

export interface ICellLabelValueProps extends ICellLabelValue {}

export function CellLabelValue(props: ICellLabelValueProps) {
    const styles = useStyles(Styles, props.style);

    return (
        <CellView
            testID={props.label}
            {...props}
            style={{ cell: styles.rootContainer }}
        >
            <View style={{ flex: 1 }}>
                <Text style={styles.label}>{props.label}</Text>
            </View>
            <View style={styles.valueContainer}>
                <Text
                    style={styles.value}
                    numberOfLines={props.isSingleLine ? 1 : undefined}
                >
                    {props.value}
                </Text>
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

export type ICellLabelValueStyle = never;

function Styles(theme: ITheme): IStyle {
    const { colors, spacings } = theme;
    const styleObject: IStyle = {
        label: theme.text.headingM,
        rootContainer: {
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
        },
        value: {
            ...theme.text.headingM,
            color: colors.greyDark,
            textAlign: "right",
        },
        valueContainer: {
            flex: 1,
            marginLeft: spacings.small,
        },
    };

    return StyleSheet.create<IStyle>(styleObject);
}
