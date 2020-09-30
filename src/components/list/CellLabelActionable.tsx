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
import { ICellLabelActionable } from "../../models/list";
import { ITheme } from "../../models/theme";
import { Icon, IIconStyle } from "../icon";
import { CellView } from "./CellView";

export type ICellLabelActionableProps = Omit<ViewProps, "style"> &
    ICellLabelActionable;

export function CellLabelActionable(props: ICellLabelActionableProps) {
    const styles = useStyles(Styles, props.style);
    return (
        <CellView
            testID={props.label}
            {...props}
            onPress={props.onPress}
            style={{ cell: styles.rootContainer }}
        >
            <View style={{ flex: 1 }}>
                <Text
                    testID={`${props.testID}Text`}
                    style={styles.label}
                    numberOfLines={props.isSingleLine ? 1 : undefined}
                >
                    {props.label}
                </Text>
            </View>
            {!props.rightArrowDisabled && (
                <View style={styles.arrowContainer}>
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
    arrowContainer: ViewStyle;
    icon: IIconStyle;
    label: TextStyle;
    rootContainer: ViewStyle;
}

export type ICellLabelActionableStyle = never;

function Styles(theme: ITheme): IStyle {
    const { colors, spacings } = theme;
    const styleObject: IStyle = {
        arrowContainer: {
            marginLeft: spacings.xsmall,
        },
        icon: {
            color: colors.black,
            fontSize: theme.text.body.fontSize,
        },
        label: {
            ...theme.text.headingM,
            color: colors.black,
        },
        rootContainer: {
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
        },
    };

    return StyleSheet.create(styleObject);
}
