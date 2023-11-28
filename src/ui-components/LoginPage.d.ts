/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { Capturedecran20231126a17034Props } from "./Capturedecran20231126a17034";
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
export declare type LoginPageOverridesProps = {
    LoginPage?: PrimitiveOverrideProps<FlexProps>;
    "Frame 1"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 4381"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 4380"?: PrimitiveOverrideProps<ViewProps>;
    "Capture d\u2019e\u0301cran 2023-11-26 a\u0300 17.03 4"?: Capturedecran20231126a17034Props;
    "Water Reminder"?: PrimitiveOverrideProps<TextProps>;
    "Frame 3"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 4382"?: PrimitiveOverrideProps<ViewProps>;
    "Welcome to Water Reminder!\u2028Drink Water & Live Better"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type LoginPageProps = React.PropsWithChildren<Partial<FlexProps> & {
    Formulario?: React.ReactNode;
    frame4381?: React.ReactNode;
} & {
    overrides?: LoginPageOverridesProps | undefined | null;
}>;
export default function LoginPage(props: LoginPageProps): React.ReactElement;
