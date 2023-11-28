/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MainPageOverridesProps = {
    MainPage?: PrimitiveOverrideProps<ViewProps>;
    NavBarHeader?: PrimitiveOverrideProps<FlexProps>;
    LogoWithText?: PrimitiveOverrideProps<ViewProps>;
    "Uni\u2028Water\u2028Reminder"?: PrimitiveOverrideProps<TextProps>;
    "Frame 32139732345"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon39732346?: PrimitiveOverrideProps<ViewProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    SideBar?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32139732349"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 322"?: PrimitiveOverrideProps<FlexProps>;
    icon39732351?: PrimitiveOverrideProps<FlexProps>;
    MyIcon39732352?: PrimitiveOverrideProps<ViewProps>;
    label39732353?: PrimitiveOverrideProps<TextProps>;
    Section?: PrimitiveOverrideProps<FlexProps>;
    label39732355?: PrimitiveOverrideProps<TextProps>;
    link39732356?: PrimitiveOverrideProps<FlexProps>;
    icon39732357?: PrimitiveOverrideProps<FlexProps>;
    MyIcon39732358?: PrimitiveOverrideProps<ViewProps>;
    label39732359?: PrimitiveOverrideProps<TextProps>;
    link39732360?: PrimitiveOverrideProps<FlexProps>;
    icon39732361?: PrimitiveOverrideProps<FlexProps>;
    MyIcon39732362?: PrimitiveOverrideProps<ViewProps>;
    label39732363?: PrimitiveOverrideProps<TextProps>;
    link39732364?: PrimitiveOverrideProps<FlexProps>;
    icon39732365?: PrimitiveOverrideProps<FlexProps>;
    MyIcon39732366?: PrimitiveOverrideProps<ViewProps>;
    label39732367?: PrimitiveOverrideProps<TextProps>;
    "Frame 438"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type MainPageProps = React.PropsWithChildren<Partial<ViewProps> & {
    frame438?: React.ReactNode;
    redirectUrl?: String;
} & {
    overrides?: MainPageOverridesProps | undefined | null;
}>;
export default function MainPage(props: MainPageProps): React.ReactElement;
