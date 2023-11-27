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
export declare type UniUserCreateFormInputValues = {
    name?: string;
    birthdate?: string;
    weight?: number;
};
export declare type UniUserCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    birthdate?: ValidationFunction<string>;
    weight?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UniUserCreateFormOverridesProps = {
    UniUserCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    birthdate?: PrimitiveOverrideProps<TextFieldProps>;
    weight?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UniUserCreateFormProps = React.PropsWithChildren<{
    overrides?: UniUserCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UniUserCreateFormInputValues) => UniUserCreateFormInputValues;
    onSuccess?: (fields: UniUserCreateFormInputValues) => void;
    onError?: (fields: UniUserCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UniUserCreateFormInputValues) => UniUserCreateFormInputValues;
    onValidate?: UniUserCreateFormValidationValues;
} & React.CSSProperties>;
export default function UniUserCreateForm(props: UniUserCreateFormProps): React.ReactElement;
