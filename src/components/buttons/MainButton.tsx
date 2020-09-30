import React from "react";
import {
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    ViewStyle,
} from "react-native";
import { useStyles } from "../../hooks";
import { ITheme } from "../../models/theme";

type IMainButtonProps = {
    disabled: boolean;
    label: string;
    onPress: () => void;
    style?: Partial<IMainButtonStyle>;
    testID: string;
};

export function MainButton(props: IMainButtonProps) {
    const styles = useStyles(Styles, props.style);
    return (
        <TouchableOpacity
            style={[
                styles.rootContainer,
                props.disabled && styles.disabledContainer,
            ]}
            testID={props.testID}
        >
            <Text
                style={[styles.label, props.disabled && styles.disabledLabel]}
            >
                {props.label}
            </Text>
        </TouchableOpacity>
    );
}

const defaultProps: Partial<IMainButtonProps> = {
    disabled: false,
    onPress: () => {},
};

MainButton.defaultProps = defaultProps;

interface IStyle {
    disabledContainer: ViewStyle;
    disabledLabel: TextStyle;
    label: TextStyle;
    rootContainer: ViewStyle;
}

export type IMainButtonStyle = never;

export const Styles = (theme: ITheme): IStyle => {
    const { colors } = theme;
    const styleObject: IStyle = {
        disabledContainer: {
            backgroundColor: theme.colors.greyLight,
        },
        disabledLabel: {
            color: theme.colors.greyMedDark,
        },
        rootContainer: {
            alignItems: "center",
            backgroundColor: colors.brandActive,
            borderRadius: 3,
            justifyContent: "center",
            padding: 15,
            width: "100%",
        },
        label: {
            ...theme.text.cta,
            color: colors.white,
        },
    };
    return StyleSheet.create<IStyle>(styleObject);
};
