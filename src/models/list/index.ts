import { SectionBase } from "react-native";
import { ICellAddActionableStyle } from "../../components/list/CellAddActionable";
import { ICellErrorStyle } from "../../components/list/CellError";
import { ICellIconLabelActionableStyle } from "../../components/list/CellIconLabelActionable";
import { ICellLabelActionableStyle } from "../../components/list/CellLabelActionable";
import { ICellLabelActionableBeneficiaryStyle } from "../../components/list/CellLabelActionableBeneficiary";
import { ICellLabelButtonStyle } from "../../components/list/CellLabelButton";
import { ICellLabelCenterStyle } from "../../components/list/CellLabelCenter";
import { ICellLabelInternalAccountActionableStyle } from "../../components/list/CellLabelInternalAccountActionable";
import { ICellLabelLeftAlignValueStyle } from "../../components/list/CellLabelLeftAlignValue";
import { ICellLabelSupervalueStyle } from "../../components/list/CellLabelSupervalue";
import { ICellLabelSupervalueActionableStyle } from "../../components/list/CellLabelSupervalueActionable";
import { ICellLabelSwitchStyle } from "../../components/list/CellLabelSwitch";
import { ICellLabelValueStyle } from "../../components/list/CellLabelValue";
import { ICellLabelValueActionableStyle } from "../../components/list/CellLabelValueActionable";
import { ICellLabelValueSubvalueActionableStyle } from "../../components/list/CellLabelValueSubvalueActionable";
import { ICellLoadingStyle } from "../../components/list/CellLoading";

// used in CommonList and supported Cells
//
// to add a new cell:
// - add CELL_TYPE enum
// - interface, which extends CommonCell<typeof STRING_CONST>
// - add interface to ICellTypes list
// - add render support in CommonList renderItem()
export type ICellTypes =
    | ICellAddActionable
    | ICellCustom
    | ICellError
    | ICellIconLabelActionable
    | ICellLabelActionable
    | ICellLabelActionableBeneficiary
    | ICellLabelSupervalue
    | ICellLabelSupervalueActionable
    | ICellLabelButton
    | ICellLabelCenter
    | ICellLabelLeftAlignValue
    | ICellLabelSwitch
    | ICellLabelValue
    | ICellLabelValueActionable
    | ICellLabelValueSubvalueActionable
    | ICellLabelInternalAccountActionable
    | ICellLoading;

type ICellStyles = {
    [CELL_TYPE.ADD_ACTIONABLE]: ICellAddActionableStyle;
    [CELL_TYPE.CUSTOM]: any;
    [CELL_TYPE.ERROR]: ICellErrorStyle;
    [CELL_TYPE.ICON_LABEL_ACTIONABLE]: ICellIconLabelActionableStyle;
    [CELL_TYPE.LABEL_ACTIONABLE]: ICellLabelActionableStyle;
    [CELL_TYPE.LABEL_ACTIONABLE_BENEFICIARY]: ICellLabelActionableBeneficiaryStyle;
    [CELL_TYPE.LABEL_BUTTON]: ICellLabelButtonStyle;
    [CELL_TYPE.LABEL_CENTER]: ICellLabelCenterStyle;
    [CELL_TYPE.LABEL_INTERNAL_ACCOUNT_ACTIONABLE]: ICellLabelInternalAccountActionableStyle;
    [CELL_TYPE.LABEL_LEFT_ALIGN_VALUE]: ICellLabelLeftAlignValueStyle;
    [CELL_TYPE.LOADING]: ICellLoadingStyle;
    [CELL_TYPE.LABEL_VALUE_SUBVALUE_ACTIONABLE]: ICellLabelValueSubvalueActionableStyle;
    [CELL_TYPE.LABEL_SUPERVALUE]: ICellLabelSupervalueStyle;
    [CELL_TYPE.LABEL_SUPERVALUE_ACTIONABLE]: ICellLabelSupervalueActionableStyle;
    [CELL_TYPE.LABEL_SWITCH]: ICellLabelSwitchStyle;
    [CELL_TYPE.LABEL_VALUE]: ICellLabelValueStyle;
    [CELL_TYPE.LABEL_VALUE_ACTIONABLE]: ICellLabelValueActionableStyle;
};

export enum CELL_TYPE {
    ADD_ACTIONABLE = "ADD_ACTIONABLE",
    CUSTOM = "CUSTOM",
    ERROR = "ERROR",
    ICON_LABEL_ACTIONABLE = "ICON_LABEL_ACTIONABLE",
    LABEL_ACTIONABLE = "LABEL_ACTIONABLE",
    LABEL_ACTIONABLE_BENEFICIARY = "LABEL_ACTIONABLE_BENEFICIARY",
    LABEL_BUTTON = "LABEL_BUTTON",
    LABEL_CENTER = "LABEL_CENTER",
    LABEL_INTERNAL_ACCOUNT_ACTIONABLE = "LABEL_INTERNAL_ACCOUNT_ACTIONABLE",
    LABEL_LEFT_ALIGN_VALUE = "LABEL_LEFT_ALIGN_VALUE",
    LABEL_SUPERVALUE = "LABEL_SUPERVALUE",
    LABEL_SUPERVALUE_ACTIONABLE = "LABEL_SUPERVALUE_ACTIONABLE",
    LABEL_VALUE = "LABEL_VALUE",
    LABEL_VALUE_ACTIONABLE = "LABEL_VALUE_ACTIONABLE",
    LABEL_VALUE_SUBVALUE_ACTIONABLE = "LABEL_VALUE_SUBVALUE_ACTIONABLE",
    LABEL_SWITCH = "LABEL_SWITCH",
    LOADING = "LOADING",
}

export type ICommonCell<T extends CELL_TYPE> = {
    style?: Partial<ICellStyles[T]>;
    type: T;
};

export interface ICommonListSection extends SectionBase<ICellTypes> {
    footer?: string;
    loading?: boolean;
    title?: string;
}

export interface ICellCustom extends ICommonCell<CELL_TYPE.CUSTOM> {
    [x: string]: any;
}

export interface ICellLabelValue extends ICommonCell<CELL_TYPE.LABEL_VALUE> {
    isSingleLine?: boolean;
    label: string;
    testID?: string;
    value: string;
}
export interface ICellLabelLeftAlignValue
    extends ICommonCell<CELL_TYPE.LABEL_LEFT_ALIGN_VALUE> {
    label: string;
    testID?: string;
    value: string;
}
export interface ICellLabelActionable
    extends ICommonCell<CELL_TYPE.LABEL_ACTIONABLE> {
    isSingleLine?: boolean;
    label: string;
    onPress: () => void;
    rightArrowDisabled?: boolean;
    testID?: string;
}

export interface ICellLabelActionableBeneficiary
    extends ICommonCell<CELL_TYPE.LABEL_ACTIONABLE_BENEFICIARY> {
    label: string;
    mode?: "edit" | "view";
    onChangePercentage?: (percentage: number) => void;
    onMinus?: () => void;
    onPlus?: () => void;
    onPress: () => void;
    onRemove?: () => void;
    percentage?: number;
    rightArrowDisabled?: boolean;
    testID?: string;
}

export interface ICellLabelSupervalue
    extends ICommonCell<CELL_TYPE.LABEL_SUPERVALUE> {
    isSingleLine?: boolean;
    label: string;
    reversed?: boolean;
    supervalue?: string;
    testID?: string;
}
export interface ICellLabelSupervalueActionable
    extends ICommonCell<CELL_TYPE.LABEL_SUPERVALUE_ACTIONABLE> {
    label: string;
    onPress?: () => void;
    reversed?: boolean;
    rightArrowDisabled?: boolean;
    rightText?: string;
    supervalue?: string;
    testID?: string;
}
export interface ICellLabelInternalAccountActionable
    extends ICommonCell<CELL_TYPE.LABEL_INTERNAL_ACCOUNT_ACTIONABLE> {
    disabled?: boolean;
    isSelected?: boolean;
    label: string;
    loadingValue?: boolean;
    onPress: () => void;
    reversed?: boolean;
    rightText?: string;
    supervalue?: string;
    testID?: string;
}
export interface ICellLabelValueActionable
    extends ICommonCell<CELL_TYPE.LABEL_VALUE_ACTIONABLE> {
    disabled?: boolean;
    isSingleLine?: boolean;
    label: string;
    onPress: () => void;
    rightArrowDisabled?: boolean;
    testID?: string;
    value: string;
}
export interface ICellLabelValueSubvalueActionable
    extends ICommonCell<CELL_TYPE.LABEL_VALUE_SUBVALUE_ACTIONABLE> {
    disabled?: boolean;
    label: string;
    loadingValue?: boolean;
    onPress: () => void;
    rightArrowDisabled?: boolean;
    subvalue: string;
    testID?: string;
    value: string;
}
export interface ICellLabelSwitch extends ICommonCell<CELL_TYPE.LABEL_SWITCH> {
    disabled?: boolean;
    label: string;
    onValueChange: (value: boolean) => void;
    value?: boolean;
}
export interface ICellLabelButton extends ICommonCell<CELL_TYPE.LABEL_BUTTON> {
    buttonLabel: string;
    disabled?: boolean;
    label: string;
    loading?: boolean;
    onPressButton: () => void;
    testID?: string;
}

export interface ICellIconLabelActionable
    extends ICommonCell<CELL_TYPE.ICON_LABEL_ACTIONABLE> {
    iconName: string;
    label: string;
    onPress: () => void;
    testID?: string;
}
export interface ICellAddActionable
    extends ICommonCell<CELL_TYPE.ADD_ACTIONABLE> {
    disabled?: boolean;
    label: string;
    onPress: () => void;
    testID?: string;
}
export interface ICellLoading extends ICommonCell<CELL_TYPE.LOADING> {}
export interface ICellError extends ICommonCell<CELL_TYPE.ERROR> {
    message: string;
    onRetry?: () => void;
}
export interface ICellLabelCenter extends ICommonCell<CELL_TYPE.LABEL_CENTER> {
    label: string;
    testID?: string;
}
