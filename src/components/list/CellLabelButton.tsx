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
import { ICellLabelButton } from "../../models/list";
import { ITheme } from "../../models/theme";
import { SecondaryButton } from "../buttons";
import { ISecondaryButtonStyle } from "../buttons/SecondaryButton";
import { CellView, ICellViewStyle } from "./CellView";

export type CellLabelButtonProps = Omit<ViewProps, "style"> & ICellLabelButton;
export const CellLabelButton = (props: CellLabelButtonProps) => {
    const styles = useStyles(Styles, props.style);
    return (
        <CellView style={{ cell: styles.rootContainer }}>
            <View style={styles.labelContainer}>
                <Text style={styles.label}>{props.label}</Text>
            </View>
            <View style={styles.secondaryButtonContainer}>
                <SecondaryButton
                    disabled={props.disabled}
                    label={props.buttonLabel}
                    loading={props.loading}
                    onPress={props.onPressButton}
                    style={{ rootContainer: styles.secondaryButton }}
                    testID={props.testID || props.label}
                />
            </View>
        </CellView>
    );
};

export interface IStyle {
    label: TextStyle;
    labelContainer: ViewStyle;
    rootContainer: ICellViewStyle["cell"];
    secondaryButton: ISecondaryButtonStyle["rootContainer"];
    secondaryButtonContainer: ViewStyle;
}

export type ICellLabelButtonStyle = never;

function Styles(theme: ITheme): IStyle {
    const { spacings } = theme;
    const styleObject: IStyle = {
        label: theme.text.headingM,
        labelContainer: { flex: 1, paddingVertical: spacings.small },
        rootContainer: {
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 0, // override because of Button's vertical space
        },
        secondaryButton: {
            borderWidth: 0,
        },
        secondaryButtonContainer: {
            marginLeft: spacings.med,
        },
    };

    return StyleSheet.create(styleObject);
}
