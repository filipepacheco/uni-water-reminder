/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type SignUpForm2InputValues = {
    name?: string;
    birthdate?: string;
    weight?: number;
    Histories?: any[];
    Reminders?: any[];
    email?: string;
    gender?: string;
    phone_number?: string;
};
export declare type SignUpForm2ValidationValues = {
    name?: ValidationFunction<string>;
    birthdate?: ValidationFunction<string>;
    weight?: ValidationFunction<number>;
    Histories?: ValidationFunction<any>;
    Reminders?: ValidationFunction<any>;
    email?: ValidationFunction<string>;
    gender?: ValidationFunction<string>;
    phone_number?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SignUpForm2OverridesProps = {
    SignUpForm2Grid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    birthdate?: PrimitiveOverrideProps<TextFieldProps>;
    weight?: PrimitiveOverrideProps<TextFieldProps>;
    Histories?: PrimitiveOverrideProps<AutocompleteProps>;
    Reminders?: PrimitiveOverrideProps<AutocompleteProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    gender?: PrimitiveOverrideProps<SelectFieldProps>;
    phone_number?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SignUpForm2Props = React.PropsWithChildren<{
    overrides?: SignUpForm2OverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SignUpForm2InputValues) => SignUpForm2InputValues;
    onSuccess?: (fields: SignUpForm2InputValues) => void;
    onError?: (fields: SignUpForm2InputValues, errorMessage: string) => void;
    onChange?: (fields: SignUpForm2InputValues) => SignUpForm2InputValues;
    onValidate?: SignUpForm2ValidationValues;
} & React.CSSProperties>;
export default function SignUpForm2(props: SignUpForm2Props): React.ReactElement;
