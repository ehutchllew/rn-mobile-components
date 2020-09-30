import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { MainButton, SecondaryButton } from "./components/buttons";
import { CommonList } from "./components/list";
import { CELL_TYPE } from "./models/list";
import { Theme } from "./theme";

Theme.set({ colors: { brandActive: "green" } });

export function App() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ padding: 20 }}>
                <View style={{ margin: 10 }} />
                <MainButton label="Main Button" testID="MainButton" />
                <View style={{ margin: 10 }} />
                <SecondaryButton
                    label="Secondary Button"
                    testID="SecondaryButton"
                />
                <View style={{ margin: 10 }} />
                <CommonList
                    data={[
                        {
                            title: "COMMON LIST",
                            data: [
                                {
                                    type: CELL_TYPE.ADD_ACTIONABLE,
                                    onPress: () => {},
                                    label: "Hello",
                                },
                                {
                                    type: CELL_TYPE.LABEL_SUPERVALUE_ACTIONABLE,
                                    onPress: () => {},
                                    label: "Super Value Actionable",
                                    supervalue: "Super value",
                                },
                                {
                                    type: CELL_TYPE.LABEL_VALUE,
                                    label: "CellLabelValue",
                                    value: "Some value",
                                },
                                {
                                    type: CELL_TYPE.ERROR,
                                    message: "Error Message",
                                    onRetry: () => {},
                                },
                            ],
                        },
                        {
                            title: "EJEMPLOS",
                            data: [
                                {
                                    type: CELL_TYPE.LABEL_SUPERVALUE_ACTIONABLE,
                                    onPress: () => {},
                                    label: "Reversed Super Actionable",
                                    reversed: true,
                                    style: {
                                        supervalueText: {
                                            color: "tomato",
                                        },
                                    },
                                    supervalue: "It's true",
                                },
                                {
                                    type: CELL_TYPE.LABEL_SUPERVALUE,
                                    label: "SUPERVALUE",
                                    supervalue: "some text",
                                },
                                {
                                    type: CELL_TYPE.ICON_LABEL_ACTIONABLE,
                                    iconName: "home",
                                    label: "ICON LABEL ACTIONABLE",
                                    onPress: () => {},
                                },
                                {
                                    type: CELL_TYPE.LABEL_ACTIONABLE,
                                    label: "Cell Label Actionable",
                                    onPress: () => {},
                                },
                            ],
                        },
                        {
                            title: "MOAR examples",
                            data: [
                                {
                                    type:
                                        CELL_TYPE.LABEL_ACTIONABLE_BENEFICIARY,
                                    label: "CEO",
                                    mode: "edit",
                                    onPress: () => {},
                                    percentage: 99,
                                    rightArrowDisabled: true,
                                },
                                {
                                    type: CELL_TYPE.LABEL_BUTTON,
                                    label: "Label Button",
                                    buttonLabel: "Button",
                                    onPressButton: () => {},
                                },
                                {
                                    type: CELL_TYPE.LABEL_CENTER,
                                    label: "CENTER LABEL",
                                },
                                {
                                    type:
                                        CELL_TYPE.LABEL_INTERNAL_ACCOUNT_ACTIONABLE,
                                    label: "Internal Account Actionable",
                                    onPress: () => {},
                                    rightText: "right text",
                                },
                                {
                                    type: CELL_TYPE.LABEL_LEFT_ALIGN_VALUE,
                                    label: "Left Align Label",
                                    value: "Value",
                                },
                                {
                                    type: CELL_TYPE.LABEL_VALUE_ACTIONABLE,
                                    label: "Value Actionable",
                                    onPress: () => {},
                                    value: "Some Value",
                                },
                                {
                                    type: CELL_TYPE.LOADING,
                                },
                                {
                                    type: CELL_TYPE.LABEL_SWITCH,
                                    label: "Label Switch",
                                    onValueChange: () => {},
                                    value: true,
                                },
                                {
                                    type:
                                        CELL_TYPE.LABEL_VALUE_SUBVALUE_ACTIONABLE,
                                    label: "Subvalue Actionable",
                                    subvalue: "Subvalue",
                                    onPress: () => {},
                                    value: "Value",
                                },
                            ],
                        },
                    ]}
                />
            </ScrollView>
        </SafeAreaView>
    );
}
