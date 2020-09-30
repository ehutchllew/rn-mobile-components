import * as React from "react";
import { StyleSheet, Switch, Text, TextStyle, ViewProps } from "react-native";
import { useStyles } from "../../hooks";
import { ICellLabelSwitch } from "../../models/list";
import { ITheme } from "../../models/theme";
import { CellView, ICellViewStyle } from "./CellView";

export type ICellLabelSwitchProps = Omit<ViewProps, "style"> & ICellLabelSwitch;

export function CellLabelSwitch(props: ICellLabelSwitchProps) {
    const styles = useStyles(Styles, props.style);
    return (
        <CellView
            testID={props.label}
            {...props}
            style={{ cell: styles.rootContainer }}
        >
            <Text style={styles.label}>{props.label}</Text>
            <Switch
                testID={`${props.label}-switch`}
                value={props.value}
                disabled={props.disabled}
                onValueChange={props.onValueChange}
            />
        </CellView>
    );
}

export interface IStyle {
    label: TextStyle;
    rootContainer: ICellViewStyle["cell"];
}

export type ICellLabelSwitchStyle = never;

function Styles(theme: ITheme): IStyle {
    const styleObject: IStyle = {
        label: theme.text.headingM,
        rootContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        },
    };

    return StyleSheet.create(styleObject);
}
