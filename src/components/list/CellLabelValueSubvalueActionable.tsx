import * as React from "react";
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    TextStyle,
    View,
    ViewProps,
    ViewStyle,
} from "react-native";
import { useStyles } from "../../hooks";
import { ICellLabelValueSubvalueActionable } from "../../models/list";
import { ITheme } from "../../models/theme";
import { Icon, IIconStyle } from "../icon";
import { CellView, ICellViewStyle } from "./CellView";

export type ICellLabelValueSubvalueActionableProps = Omit<ViewProps, "style"> &
    ICellLabelValueSubvalueActionable;

export function CellLabelValueSubvalueActionable(
    props: ICellLabelValueSubvalueActionableProps
) {
    const styles = useStyles(Styles, props.style);
    return (
        <CellView
            testID={props.label}
            {...props}
            disabled={props.disabled || props.loadingValue}
            onPress={props.onPress}
            style={{ cell: styles.rootContainer }}
        >
            <View style={{ flex: 1 }}>
                <Text style={styles.label}>{props.label}</Text>
            </View>
            <View style={styles.contentContainer}>
                {props.loadingValue ? (
                    <View
                        style={{
                            alignItems: "flex-end",
                            justifyContent: "center",
                        }}
                    >
                        <ActivityIndicator />
                    </View>
                ) : (
                    <>
                        <Text style={styles.value}>{props.value}</Text>
                        <Text style={styles.subvalue}>{props.subvalue}</Text>
                    </>
                )}
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
    contentContainer: ViewStyle;
    icon: IIconStyle;
    iconContainer: ViewStyle;
    label: TextStyle;
    rootContainer: ICellViewStyle["cell"];
    subvalue: TextStyle;
    value: TextStyle;
}

export type ICellLabelValueSubvalueActionableStyle = {
    subvalue: Pick<IStyle["subvalue"], "color">;
};

function Styles(theme: ITheme): IStyle {
    const { colors, spacings } = theme;
    const styleObject: IStyle = {
        contentContainer: { flex: 1, marginLeft: spacings.small },
        icon: {
            color: colors.black,
            fontSize: theme.text.body.fontSize,
        },
        iconContainer: { marginLeft: spacings.xsmall },
        label: theme.text.headingM,
        rootContainer: {
            alignItems: "center",
            flexDirection: "row",
        },
        subvalue: {
            ...theme.text.bodySHeavy,
            color: colors.brandActive,
            marginTop: 2,
            textAlign: "right",
        },
        value: {
            ...theme.text.headingS,
            color: colors.greyDark,
            textAlign: "right",
        },
    };

    return StyleSheet.create(styleObject);
}
