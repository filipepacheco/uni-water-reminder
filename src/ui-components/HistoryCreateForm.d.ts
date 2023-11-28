/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type HistoryCreateFormInputValues = {
    date?: string;
    userID?: string;
    amount?: number;
};
export declare type HistoryCreateFormValidationValues = {
    date?: ValidationFunction<string>;
    userID?: ValidationFunction<string>;
    amount?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HistoryCreateFormOverridesProps = {
    HistoryCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    userID?: PrimitiveOverrideProps<AutocompleteProps>;
    amount?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HistoryCreateFormProps = React.PropsWithChildren<{
    overrides?: HistoryCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: HistoryCreateFormInputValues) => HistoryCreateFormInputValues;
    onSuccess?: (fields: HistoryCreateFormInputValues) => void;
    onError?: (fields: HistoryCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HistoryCreateFormInputValues) => HistoryCreateFormInputValues;
    onValidate?: HistoryCreateFormValidationValues;
} & React.CSSProperties>;
export default function HistoryCreateForm(props: HistoryCreateFormProps): React.ReactElement;
