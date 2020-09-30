import * as React from "react";
import {
    RefreshControlProps,
    SectionList,
    StyleSheet,
    Text,
    TextStyle,
    View,
    ViewStyle,
} from "react-native";
import { useStyles } from "../../hooks";
import {
    CELL_TYPE,
    ICellCustom,
    ICellTypes,
    ICommonListSection,
} from "../../models/list";
import { ITheme } from "../../models/theme";
import { CellAddActionable } from "./CellAddActionable";
import { CellError } from "./CellError";
import { CellIconLabelActionable } from "./CellIconLabelActionable";
import { CellLabelActionable } from "./CellLabelActionable";
import { CellLabelActionableBeneficiary } from "./CellLabelActionableBeneficiary";
import { CellLabelButton } from "./CellLabelButton";
import { CellLabelCenter } from "./CellLabelCenter";
import { CellLabelInternalAccountActionable } from "./CellLabelInternalAccountActionable";
import { CellLabelLeftAlignValue } from "./CellLabelLeftAlignValue";
import { CellLabelSupervalue } from "./CellLabelSupervalue";
import { CellLabelSupervalueActionable } from "./CellLabelSupervalueActionable";
import { CellLabelSwitch } from "./CellLabelSwitch";
import { CellLabelValue } from "./CellLabelValue";
import { CellLabelValueActionable } from "./CellLabelValueActionable";
import { CellLabelValueSubvalueActionable } from "./CellLabelValueSubvalueActionable";
import { CellLoading } from "./CellLoading";

export interface ICommonListProps {
    data: ICommonListSection[];
    refreshControl?: React.ReactElement<RefreshControlProps>;
    renderCustomItem?: (item: ICellCustom) => JSX.Element | null;
    style?: Partial<ICommonListStyle>;
    testID?: string;
}

export function CommonList(props: ICommonListProps) {
    const { data, refreshControl, renderCustomItem, style, testID } = props;
    const styles = useStyles(Styles, style || {});
    const ItemSeparator = () => <View style={styles.itemSeparator} />;
    const SectionSeparator = () => <View style={styles.sectionSeparator} />;

    function renderItem({
        item,
    }: {
        item: ICellTypes;
    }): React.ReactElement | null {
        switch (item.type) {
            case CELL_TYPE.ADD_ACTIONABLE:
                return <CellAddActionable {...item} />;
            case CELL_TYPE.CUSTOM: {
                if (!renderCustomItem) {
                    throw new Error(
                        "CELL_CUSTOM type declared, but no renderCustomItem prop"
                    );
                }
                return renderCustomItem(item);
            }
            case CELL_TYPE.ERROR:
                return <CellError {...item} />;
            case CELL_TYPE.ICON_LABEL_ACTIONABLE:
                return <CellIconLabelActionable {...item} />;
            case CELL_TYPE.LABEL_ACTIONABLE:
                return <CellLabelActionable {...item} />;
            case CELL_TYPE.LABEL_SUPERVALUE:
                return <CellLabelSupervalue {...item} />;
            case CELL_TYPE.LABEL_SUPERVALUE_ACTIONABLE:
                return <CellLabelSupervalueActionable {...item} />;
            case CELL_TYPE.LABEL_BUTTON:
                return <CellLabelButton {...item} />;
            case CELL_TYPE.LABEL_CENTER:
                return <CellLabelCenter {...item} />;
            case CELL_TYPE.LABEL_LEFT_ALIGN_VALUE:
                return <CellLabelLeftAlignValue {...item} />;
            case CELL_TYPE.LABEL_SWITCH:
                return <CellLabelSwitch {...item} />;
            case CELL_TYPE.LABEL_VALUE:
                return <CellLabelValue {...item} />;
            case CELL_TYPE.LABEL_VALUE_ACTIONABLE:
                return <CellLabelValueActionable {...item} />;
            case CELL_TYPE.LABEL_VALUE_SUBVALUE_ACTIONABLE:
                return <CellLabelValueSubvalueActionable {...item} />;
            case CELL_TYPE.LABEL_INTERNAL_ACCOUNT_ACTIONABLE:
                return <CellLabelInternalAccountActionable {...item} />;
            case CELL_TYPE.LABEL_ACTIONABLE_BENEFICIARY:
                return <CellLabelActionableBeneficiary {...item} />;
            case CELL_TYPE.LOADING:
                return <CellLoading />;
            default:
                return null;
        }
    }

    function renderSectionFooter({
        section,
    }: {
        section: any;
    }): React.ReactElement | null {
        if (section.footer) {
            return (
                <View style={styles.footer}>
                    <View>
                        <Text style={styles.footerText}>{section.footer}</Text>
                    </View>
                </View>
            );
        } else {
            return null;
        }
    }

    function renderSectionHeader({
        section,
    }: {
        section: any;
    }): React.ReactElement | null {
        if (section.title) {
            return (
                <View style={styles.header}>
                    <Text style={styles.headerText}>{section.title}</Text>
                </View>
            );
        } else {
            // if there are multiple sections in this list,
            // render spacing headers for each.
            if (data.length > 1 && section.data.length) {
                return <View style={styles.headerEmpty} />;
            } else {
                // if there's only one big section in this list, render no spacer at all.
                return null;
            }
        }
    }

    return (
        /**
         * This syntax is a bit weird: SectionList<ICellTypes> but
         * it's a way to cast this as the new definition for this
         * is only of type Class.
         */
        <SectionList<ICellTypes>
            testID={`${testID || ""}list`}
            style={styles.container}
            initialNumToRender={25}
            stickySectionHeadersEnabled={false}
            ItemSeparatorComponent={ItemSeparator}
            SectionSeparatorComponent={SectionSeparator}
            sections={data}
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            renderSectionFooter={renderSectionFooter}
            keyExtractor={(item: ICellTypes, index: number) =>
                item.type + index
            }
            refreshControl={refreshControl}
        />
    );
}

interface IStyle {
    container: ViewStyle;
    footer: TextStyle;
    footerText: TextStyle;
    header: TextStyle;
    headerEmpty: TextStyle;
    headerText: TextStyle;
    itemSeparator: ViewStyle;
    sectionSeparator: ViewStyle;
}

export type ICommonListStyle = never;

function Styles(theme: ITheme): IStyle {
    const { colors, spacings } = theme;
    return StyleSheet.create({
        container: {
            backgroundColor: colors.backgroundAlternate,
        },
        itemSeparator: {
            height: 1,
            backgroundColor: colors.greyLight,
        },
        sectionSeparator: {
            height: 1,
            backgroundColor: colors.greyLight,
        },
        header: {
            marginTop: spacings.large,
            paddingHorizontal: spacings.sideMargin,
            paddingVertical: spacings.small,
        },
        headerEmpty: {
            height: spacings.large,
        },
        headerText: {
            ...theme.text.headingS,
            color: colors.black,
        },
        footer: {
            paddingHorizontal: spacings.sideMargin,
            paddingVertical: spacings.xsmall,
        },
        footerText: {
            ...theme.text.headingS,
            color: colors.greyMedDark,
        },
    });
}
