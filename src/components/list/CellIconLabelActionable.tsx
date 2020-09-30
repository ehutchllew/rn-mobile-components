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
import { ICellIconLabelActionable } from "../../models/list";
import { ITheme } from "../../models/theme";
import { Icon, IIconStyle } from "../icon";
import { CellView, ICellViewStyle } from "./CellView";

export type ICellIconLabelActionableProps = Omit<ViewProps, "style"> &
    ICellIconLabelActionable;

export function CellIconLabelActionable(props: ICellIconLabelActionableProps) {
    const styles = useStyles(Styles, props.style);
    return (
        <CellView
            testID={props.label}
            accessibilityLabel={props.label}
            {...props}
            onPress={props.onPress}
            style={{ cell: styles.rootContainer }}
        >
            <View>
                <View style={styles.iconContainer}>
                    <Icon
                        apitureFont
                        name={props.iconName}
                        style={styles.icon}
                    />
                </View>
            </View>

            <View style={styles.labelContainer}>
                <Text style={styles.label}>{props.label}</Text>
            </View>
        </CellView>
    );
}

export interface IStyle {
    icon: IIconStyle;
    iconContainer: ViewStyle;
    label: TextStyle;
    labelContainer: ViewStyle;
    rootContainer: ICellViewStyle["cell"];
}

export type ICellIconLabelActionableStyle = never;

function Styles(theme: ITheme): IStyle {
    const { colors, spacings } = theme;
    const styleObject: IStyle = {
        icon: {
            color: colors.white,
            fontSize: 18,
        },
        iconContainer: {
            width: 32,
            height: 32,
            borderRadius: 16,
            backgroundColor: colors.brandActive,
            justifyContent: "center",
            alignItems: "center",
        },
        label: {
            ...theme.text.headingM,
            marginLeft: spacings.small,
        },
        labelContainer: {
            flex: 1,
            justifyContent: "center",
        },
        rootContainer: {
            flexDirection: "row",
        },
    };

    return StyleSheet.create(styleObject);
}
