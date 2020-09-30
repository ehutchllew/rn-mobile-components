import React from "react";
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    ViewStyle,
} from "react-native";
import { useStyles } from "../../hooks";
import { ITheme } from "../../models/theme";

type ISecondaryButtonProps = {
    disabled: boolean;
    label: string;
    loading: boolean;
    onPress: () => void;
    style?: Partial<ISecondaryButtonStyle>;
    testID: string;
};

export function SecondaryButton(props: ISecondaryButtonProps) {
    const styles = useStyles(Styles, props.style);
    return (
        <TouchableOpacity
            style={[
                styles.rootContainer,
                props.disabled && styles.disabledContainer,
            ]}
            testID={props.testID}
        >
            {props.loading ? (
                <ActivityIndicator color={styles.activityIndicator.color} />
            ) : (
                <Text
                    style={[
                        styles.label,
                        props.disabled && styles.disabledLabel,
                    ]}
                >
                    {props.label}
                </Text>
            )}
        </TouchableOpacity>
    );
}

SecondaryButton.defaultProps = {
    disabled: false,
    loading: false,
    onPress: () => {},
};

export interface IStyle {
    activityIndicator: TextStyle;
    disabledContainer: ViewStyle;
    disabledLabel: TextStyle;
    label: TextStyle;
    rootContainer: ViewStyle;
}

export type ISecondaryButtonStyle = {
    rootContainer: Pick<IStyle["rootContainer"], "borderWidth">;
};

export const Styles = (theme: ITheme): IStyle => {
    const { colors } = theme;
    const styleObject: IStyle = {
        activityIndicator: {
            color: theme.colors.brandActive,
        },
        disabledContainer: {
            borderColor: theme.colors.greyMed,
        },
        disabledLabel: {
            color: theme.colors.greyMedDark,
        },
        rootContainer: {
            alignItems: "center",
            backgroundColor: colors.white,
            borderColor: colors.brandActive,
            borderRadius: 3,
            borderWidth: 2,
            justifyContent: "center",
            padding: 15,
            width: "100%",
        },
        label: {
            ...theme.text.cta,
            color: theme.colors.brandActive,
        },
    };
    return StyleSheet.create<IStyle>(styleObject);
};
