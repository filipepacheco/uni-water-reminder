/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DrinkHistoryInputValues = {
    Field0?: string;
};
export declare type DrinkHistoryValidationValues = {
    Field0?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DrinkHistoryOverridesProps = {
    DrinkHistoryGrid?: PrimitiveOverrideProps<GridProps>;
    Field0?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DrinkHistoryProps = React.PropsWithChildren<{
    overrides?: DrinkHistoryOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DrinkHistoryInputValues) => DrinkHistoryInputValues;
    onSuccess?: (fields: DrinkHistoryInputValues) => void;
    onError?: (fields: DrinkHistoryInputValues, errorMessage: string) => void;
    onChange?: (fields: DrinkHistoryInputValues) => DrinkHistoryInputValues;
    onValidate?: DrinkHistoryValidationValues;
} & React.CSSProperties>;
export default function DrinkHistory(props: DrinkHistoryProps): React.ReactElement;
