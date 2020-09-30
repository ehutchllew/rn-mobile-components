import * as React from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TextStyle,
    TouchableOpacity,
    View,
    ViewProps,
    ViewStyle,
} from "react-native";
import { useStyles } from "../../hooks";
import { ICellLabelActionableBeneficiary } from "../../models/list";
import { ITheme } from "../../models/theme";
import { Icon, IIconStyle } from "../icon";
import { CellView, ICellViewStyle } from "./CellView";

export type ICellLabelActionableBeneficiaryProps = Omit<ViewProps, "style"> &
    ICellLabelActionableBeneficiary;

export const CellLabelActionableBeneficiary = (
    props: ICellLabelActionableBeneficiaryProps
) => {
    const styles = useStyles(Styles, props.style);
    const editMode = props.mode === "edit";
    const viewMode = props.mode === "view";

    return (
        <CellView
            testID={props.testID}
            {...props}
            onPress={() => (viewMode ? props.onPress() : {})}
            style={{ cell: styles.rootContainer }}
        >
            {editMode && (
                <EditPlusMinusButton
                    label={"-"}
                    onPress={props.onMinus}
                    testID={`${props.testID}-minus`}
                />
            )}
            <View>
                {editMode ? (
                    <TextInput
                        testID={`${props.testID}-textInputPercent`}
                        style={styles.percentageInput}
                        value={props.percentage?.toString()}
                        keyboardType={"numeric"}
                        onChangeText={(text: string) => {
                            const percentage = Number(text);
                            if (props.onChangePercentage) {
                                props.onChangePercentage(percentage);
                            }
                        }}
                    />
                ) : (
                    <Text style={styles.percentage}>{props.percentage}%</Text>
                )}
            </View>
            {editMode && (
                <EditPlusMinusButton
                    testID={`${props.testID}-plus`}
                    label={"+"}
                    onPress={props.onPlus}
                />
            )}
            {viewMode && <View style={[styles.verticalDivider]} />}
            <View style={{ flex: 1 }}>
                <Text style={[styles.label, editMode && styles.labelEditMode]}>
                    {props.label}
                </Text>
            </View>
            {editMode && <View style={styles.verticalDivider} />}
            {!props.rightArrowDisabled && (
                <View style={styles.iconContainer}>
                    <Icon
                        apitureFont
                        name={"caret-right"}
                        style={styles.icon}
                    />
                </View>
            )}
            {editMode && (
                <TouchableOpacity
                    onPress={props.onRemove}
                    testID={`${props.testID}-trash`}
                >
                    <Icon apitureFont name={"trash"} style={styles.trashIcon} />
                </TouchableOpacity>
            )}
        </CellView>
    );
};

const EditPlusMinusButton = (props: {
    label: string;
    onPress?: () => void;
    testID?: string;
}) => {
    const styles = useStyles(EditStyles);
    return (
        <TouchableOpacity
            testID={props.testID}
            style={styles.editPlusMinusContainer}
            onPress={props.onPress}
        >
            <View testID={props.label} style={styles.labelContainer}>
                <Text style={styles.label}>{props.label}</Text>
            </View>
        </TouchableOpacity>
    );
};

interface IEditPlusMinusButtonStyle {
    editPlusMinusContainer: ViewStyle;
    label: TextStyle;
    labelContainer: ViewStyle;
}

export interface IStyle {
    icon: IIconStyle;
    iconContainer: ViewStyle;
    label: TextStyle;
    labelEditMode: TextStyle;
    percentage: TextStyle;
    percentageInput: TextStyle;
    rootContainer: ICellViewStyle["cell"];
    trashIcon: IIconStyle;
    verticalDivider: ViewStyle;
}

export type ICellLabelActionableBeneficiaryStyle = never;

function Styles(theme: ITheme) {
    const { colors, spacings } = theme;
    const styleObject: IStyle = {
        icon: {
            color: colors.black,
            fontSize: theme.text.body.fontSize,
        },
        iconContainer: {
            marginLeft: spacings.xsmall,
        },
        label: theme.text.headingM,
        labelEditMode: {
            marginLeft: spacings.large,
        },
        percentage: {
            ...theme.text.headingM,
            marginHorizontal: spacings.small,
        },
        percentageInput: {
            ...theme.text.headingM,
            borderBottomColor: colors.greyMed,
            borderBottomWidth: StyleSheet.hairlineWidth,
            marginHorizontal: spacings.small,
            paddingHorizontal: spacings.small,
        },
        rootContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        },
        trashIcon: {
            color: colors.error,
            fontSize: 20,
        },
        verticalDivider: {
            width: 1,
            height: 20,
            backgroundColor: colors.greyMed,
            marginHorizontal: spacings.large,
        },
    };
    return StyleSheet.create(styleObject);
}

function EditStyles(theme: ITheme): IEditPlusMinusButtonStyle {
    const { colors } = theme;
    const styleObject: IEditPlusMinusButtonStyle = {
        editPlusMinusContainer: {
            alignItems: "center",
            borderColor: colors.brandAccent,
            borderRadius: 13,
            borderWidth: 1,
            height: 26,
            justifyContent: "center",
            width: 26,
        },
        label: {
            ...theme.text.headingM,
            textAlign: "center",
        },
        labelContainer: { alignItems: "center", justifyContent: "center" },
    };

    return StyleSheet.create(styleObject);
}
