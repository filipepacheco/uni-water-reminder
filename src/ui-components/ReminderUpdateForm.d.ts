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
export declare type ReminderUpdateFormInputValues = {
    periodicity?: string;
    userID?: string;
};
export declare type ReminderUpdateFormValidationValues = {
    periodicity?: ValidationFunction<string>;
    userID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReminderUpdateFormOverridesProps = {
    ReminderUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    periodicity?: PrimitiveOverrideProps<TextFieldProps>;
    userID?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type ReminderUpdateFormProps = React.PropsWithChildren<{
    overrides?: ReminderUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    reminder?: any;
    onSubmit?: (fields: ReminderUpdateFormInputValues) => ReminderUpdateFormInputValues;
    onSuccess?: (fields: ReminderUpdateFormInputValues) => void;
    onError?: (fields: ReminderUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReminderUpdateFormInputValues) => ReminderUpdateFormInputValues;
    onValidate?: ReminderUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ReminderUpdateForm(props: ReminderUpdateFormProps): React.ReactElement;
