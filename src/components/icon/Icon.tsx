import config from "@apiture/icon-font/config.json";
import React from "react";
import { createIconSetFromFontello } from "react-native-vector-icons";
import RNVIcon from "react-native-vector-icons/FontAwesome";
import { IconProps as RnvIconProps } from "react-native-vector-icons/Icon";
export const IconFontello = createIconSetFromFontello(config);

export type IIconProps = Omit<RnvIconProps, "style"> & {
    apitureFont?: boolean;
    style: Partial<IIconStyle>;
};

export interface IIconStyle {
    color?: string;
    fontSize?: number;
}

export function Icon(props: IIconProps) {
    const IconComponent = props.apitureFont ? (
        <IconFontello {...props} />
    ) : (
        <RNVIcon {...props} />
    );
    return IconComponent;
}
