import * as React from "react";
import { ActivityIndicator, StyleSheet, ViewProps } from "react-native";
import { useStyles } from "../../hooks";
import { CellView, ICellViewStyle } from "./CellView";

type ICellLoadingProps = Omit<ViewProps, "style"> & {
    style?: Partial<ICellLoadingStyle>;
};
export const CellLoading = (props: ICellLoadingProps) => {
    const styles = useStyles(Styles, props.style);
    return (
        <CellView
            testID={"loading"}
            {...props}
            style={{
                cell: styles.rootContainer,
            }}
        >
            <ActivityIndicator />
        </CellView>
    );
};

export interface IStyle {
    rootContainer: ICellViewStyle["cell"];
}

export type ICellLoadingStyle = never;

function Styles(): IStyle {
    const styleObject: IStyle = {
        rootContainer: {
            alignItems: "center",
            backgroundColor: "transparent",
        },
    };

    return StyleSheet.create(styleObject);
}
