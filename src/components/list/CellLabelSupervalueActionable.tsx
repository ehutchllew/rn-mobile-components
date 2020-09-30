import * as React from "react";
import { StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import { useStyles } from "../../hooks";
import { ICellLabelSupervalueActionable } from "../../models/list";
import { ITheme } from "../../models/theme";
import { Icon, IIconStyle } from "../icon";
import { CellView } from "./CellView";

export interface ICellLabelSupervalueActionableProps
    extends ICellLabelSupervalueActionable {}

export function CellLabelSupervalueActionable(
    props: ICellLabelSupervalueActionableProps
) {
    const styles = useStyles(Styles, props.style);
    return (
        <CellView
            testID={props.label}
            {...props}
            onPress={props.onPress}
            style={{ cell: styles.rootContainer }}
        >
            <View
                style={{
                    flex: 1,
                    flexDirection: props.reversed ? "column-reverse" : "column",
                }}
            >
                {props.supervalue ? (
                    <Text style={[styles.supervalueText]}>
                        {props.supervalue}
                    </Text>
                ) : null}
                <Text style={styles.label}>{props.label}</Text>
            </View>

            <View style={styles.rightContainer}>
                {props.rightText && (
                    <Text style={styles.rightText}>{props.rightText}</Text>
                )}
                {!props.rightArrowDisabled && (
                    <Icon
                        apitureFont
                        name={"caret-right"}
                        style={styles.icon}
                    />
                )}
            </View>
        </CellView>
    );
}

export interface IStyle {
    icon: IIconStyle;
    label: TextStyle;
    rightContainer: ViewStyle;
    rightText: TextStyle;
    rootContainer: ViewStyle;
    supervalueText: TextStyle;
}

export type ICellLabelSupervalueActionableStyle = {
    supervalueText: Pick<IStyle["supervalueText"], "color">;
};

const Styles = (theme: ITheme): IStyle => {
    const { colors, spacings } = theme;
    const styleObject: IStyle = {
        icon: {
            color: colors.black,
            fontSize: theme.text.body.fontSize,
        },
        label: {
            ...theme.text.headingM,
            color: colors.black,
        },
        rightContainer: {
            flexDirection: "row",
        },
        rightText: {
            marginRight: spacings.small,
        },
        rootContainer: {
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
        },
        supervalueText: {
            ...theme.text.headingS,
            color: colors.brandStatic,
            marginBottom: spacings.micro,
        },
    };
    return StyleSheet.create(styleObject);
};
