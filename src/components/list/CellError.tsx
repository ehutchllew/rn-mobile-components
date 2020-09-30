import * as React from "react";
import { StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import { useStyles } from "../../hooks";
import { ICellError } from "../../models/list";
import { ITheme } from "../../models/theme";
import { Icon, IIconStyle } from "../icon";
import { CellView, ICellViewStyle } from "./CellView";

export interface ICellErrorProps extends ICellError {}

export function CellError(props: ICellErrorProps) {
    const styles = useStyles(Styles, props.style);
    return (
        <CellView
            testID={"errorCell"}
            {...props}
            onPress={props.onRetry}
            style={{ cell: styles.rootContainer }}
        >
            <View style={styles.contentContainer}>
                <Icon apitureFont name="warning" style={styles.icon} />
                <Text style={styles.message}>{props.message}</Text>
            </View>
            {!!props.onRetry && <Text style={styles.retry}>{"Retry"}</Text>}
        </CellView>
    );
}

export interface IStyle {
    contentContainer: ViewStyle;
    icon: IIconStyle;
    message: TextStyle;
    retry: TextStyle;
    rootContainer: ICellViewStyle["cell"];
}

export type ICellErrorStyle = never;

function Styles(theme: ITheme): IStyle {
    const { colors, spacings } = theme;
    const styleObject: IStyle = {
        contentContainer: {
            flexDirection: "row",
        },
        icon: {
            color: colors.greyMed,
            fontSize: 16,
        },
        message: {
            ...theme.text.bodyLight,
            color: colors.greyMedDark,
            marginLeft: spacings.small,
        },
        retry: {
            ...theme.text.cta,
            color: colors.brandActive,
            marginTop: spacings.xsmall,
        },
        rootContainer: {
            alignItems: "center",
        },
    };

    return StyleSheet.create(styleObject);
}
