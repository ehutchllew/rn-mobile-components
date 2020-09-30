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
import { ICellLabelSupervalue } from "../../models/list";
import { ITheme } from "../../models/theme";
import { CellView, ICellViewStyle } from "./CellView";

export type ICellLabelSupervalueProps = Omit<ViewProps, "style"> &
    ICellLabelSupervalue;
export function CellLabelSupervalue(props: ICellLabelSupervalueProps) {
    const styles = useStyles(Styles, props.style);

    return (
        <CellView
            testID={props.label}
            {...props}
            style={{ cell: styles.rootContainer }}
        >
            <View
                style={[
                    styles.contentContainer,
                    props.reversed && styles.contentContainerReversed,
                ]}
            >
                {props.supervalue ? (
                    <Text style={styles.supervalue}>{props.supervalue}</Text>
                ) : null}
                <Text
                    style={styles.label}
                    numberOfLines={props.isSingleLine ? 1 : undefined}
                >
                    {props.label}
                </Text>
            </View>
        </CellView>
    );
}

export interface IStyle {
    contentContainer: ViewStyle;
    contentContainerReversed: ViewStyle;
    label: TextStyle;
    rootContainer: ICellViewStyle["cell"];
    supervalue: TextStyle;
}

export type ICellLabelSupervalueStyle = {
    supervalue: Pick<IStyle["supervalue"], "color">;
};

function Styles(theme: ITheme): IStyle {
    const { colors, spacings } = theme;
    const styleObject: IStyle = {
        contentContainer: {
            flex: 1,
        },
        contentContainerReversed: {
            flexDirection: "column-reverse",
        },
        label: theme.text.headingM,
        rootContainer: {
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
        },
        supervalue: {
            ...theme.text.headingM,
            color: colors.greyDark,
            marginBottom: spacings.micro,
        },
    };

    return StyleSheet.create(styleObject);
}
