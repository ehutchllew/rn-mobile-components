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
import { ICellLabelInternalAccountActionable } from "../../models/list";
import { ITheme } from "../../models/theme";
import { Icon, IIconStyle } from "../icon";
import { CellLoading } from "./CellLoading";
import { CellView, ICellViewStyle } from "./CellView";

export type ICellLabelInternalAccountActionableProps = Omit<
    ViewProps,
    "style"
> &
    ICellLabelInternalAccountActionable;
export function CellLabelInternalAccountActionable(
    props: ICellLabelInternalAccountActionableProps
) {
    const styles = useStyles(Styles, props.style);
    return props.loadingValue ? (
        <CellLoading />
    ) : (
        <CellView
            testID={props.label}
            {...props}
            onPress={props.onPress}
            style={{ cell: styles.rootContainer }}
        >
            <View
                style={[
                    styles.mainContentContainer,
                    props.reversed && styles.mainContentContainerReversed,
                ]}
            >
                {props.supervalue ? (
                    <Text
                        style={[
                            styles.supervalue,
                            props.isSelected && styles.superValueSelected,
                        ]}
                    >
                        {props.supervalue}
                    </Text>
                ) : null}
                <Text
                    style={[
                        styles.label,
                        props.isSelected && styles.labelSelected,
                    ]}
                >
                    {props.label}
                </Text>
            </View>
            <View style={styles.rightTextContainer}>
                <Text style={styles.rightText}>{props.rightText}</Text>
            </View>
            <View
                style={{
                    width: 30,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {props.isSelected && (
                    <Icon
                        apitureFont
                        name={"check-circle"}
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
    labelSelected: TextStyle;
    mainContentContainer: ViewStyle;
    mainContentContainerReversed: ViewStyle;
    rightText: TextStyle;
    rightTextContainer: ViewStyle;
    rootContainer: ICellViewStyle["cell"];
    supervalue: TextStyle;
    superValueSelected: TextStyle;
}

export type ICellLabelInternalAccountActionableStyle = never;

function Styles(theme: ITheme): IStyle {
    const { colors, spacings } = theme;
    const styleObject: IStyle = {
        icon: {
            color: colors.brandActive,
            fontSize: 18,
        },
        label: {
            ...theme.text.body,
            color: colors.brandActive,
        },
        labelSelected: {
            color: colors.black,
        },
        mainContentContainer: {
            flex: 1,
            flexDirection: "column",
        },
        mainContentContainerReversed: {
            flexDirection: "column-reverse",
        },
        rightText: {
            color: colors.brandActive,
        },
        rightTextContainer: {
            marginLeft: spacings.xsmall,
        },
        rootContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingRight: spacings.small,
        },
        supervalue: {
            ...theme.text.bodyS,
            color: colors.greyMedDark,
            marginBottom: spacings.micro,
        },
        superValueSelected: {
            color: colors.brandActive,
        },
    };

    return StyleSheet.create(styleObject);
}
