/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ImageProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type Capturedecran20231126a17034OverridesProps = {
    Capturedecran20231126a17034?: PrimitiveOverrideProps<ViewProps>;
    "Capture d\u2019e\u0301cran 2023-11-26 a\u0300 17.03 4"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type Capturedecran20231126a17034Props = React.PropsWithChildren<Partial<ViewProps> & {
    src?: String;
} & {
    overrides?: Capturedecran20231126a17034OverridesProps | undefined | null;
}>;
export default function Capturedecran20231126a17034(props: Capturedecran20231126a17034Props): React.ReactElement;
