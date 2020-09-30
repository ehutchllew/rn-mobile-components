import * as React from "react";
import { StyleSheet, Text, TextStyle, ViewProps } from "react-native";
import { useStyles } from "../../hooks";
import { ICellLabelCenter } from "../../models/list";
import { ITheme } from "../../models/theme";
import { CellView, ICellViewStyle } from "./CellView";

export type CellLabelCenterProps = Omit<ViewProps, "style"> & ICellLabelCenter;

export function CellLabelCenter(props: CellLabelCenterProps) {
    const styles = useStyles(Styles, props.style);
    return (
        <CellView
            testID={props.testID || props.label}
            {...props}
            style={{ cell: styles.rootContainer }}
        >
            <Text style={styles.label}>{props.label}</Text>
        </CellView>
    );
}

export interface IStyle {
    label: TextStyle;
    rootContainer: ICellViewStyle["cell"];
}

export type ICellLabelCenterStyle = never;

function Styles(theme: ITheme): IStyle {
    const styleObject: IStyle = {
        label: {
            ...theme.text.body,
            color: theme.colors.greyMed,
        },
        rootContainer: {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
        },
    };

    return StyleSheet.create(styleObject);
}
