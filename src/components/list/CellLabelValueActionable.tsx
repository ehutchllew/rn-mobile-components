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
import { ICellLabelValueActionable } from "../../models/list";
import { ITheme } from "../../models/theme";
import { Icon, IIconStyle } from "../icon";
import { CellView, ICellViewStyle } from "./CellView";

export type ICellLabelValueActionableProps = Omit<ViewProps, "style"> &
    ICellLabelValueActionable;

export function CellLabelValueActionable(
    props: ICellLabelValueActionableProps
) {
    const styles = useStyles(Styles, props.style);
    return (
        <CellView
            testID={props.label}
            {...props}
            onPress={props.onPress}
            style={{ cell: styles.rootContainer }}
        >
            <View style={{ flex: 1 }}>
                <Text style={styles.label}>{props.label}</Text>
            </View>
            <View style={styles.valueContainer}>
                <Text
                    testID={`${props.testID}Text`}
                    numberOfLines={props.isSingleLine ? 1 : undefined}
                    style={styles.value}
                >
                    {props.value}
                </Text>
            </View>
            {!props.rightArrowDisabled && (
                <View style={styles.iconContainer}>
                    <Icon
                        apitureFont
                        name={"caret-right"}
                        style={styles.icon}
                    />
                </View>
            )}
        </CellView>
    );
}

export interface IStyle {
    icon: IIconStyle;
    iconContainer: ViewStyle;
    label: TextStyle;
    rootContainer: ICellViewStyle["cell"];
    value: TextStyle;
    valueContainer: ViewStyle;
}

export type ICellLabelValueActionableStyle = never;

function Styles(theme: ITheme): IStyle {
    const { colors, spacings } = theme;
    const styleObject: IStyle = {
        icon: {
            color: colors.black,
            fontSize: theme.text.body.fontSize,
        },
        iconContainer: {
            marginLeft: spacings.xsmall,
        },
        label: {
            ...theme.text.headingM,
            color: colors.greyDark,
            textAlign: "right",
        },
        rootContainer: {
            alignItems: "center",
            flexDirection: "row",
        },
        value: {
            ...theme.text.headingM,
            color: colors.black,
        },
        valueContainer: { flex: 2, marginLeft: spacings.small },
    };

    return StyleSheet.create(styleObject);
}
