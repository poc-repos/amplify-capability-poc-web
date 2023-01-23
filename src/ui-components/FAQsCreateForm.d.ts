/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FAQsCreateFormInputValues = {
    question?: string;
    answer?: string;
};
export declare type FAQsCreateFormValidationValues = {
    question?: ValidationFunction<string>;
    answer?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FAQsCreateFormOverridesProps = {
    FAQsCreateFormGrid?: FormProps<GridProps>;
    question?: FormProps<TextFieldProps>;
    answer?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FAQsCreateFormProps = React.PropsWithChildren<{
    overrides?: FAQsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FAQsCreateFormInputValues) => FAQsCreateFormInputValues;
    onSuccess?: (fields: FAQsCreateFormInputValues) => void;
    onError?: (fields: FAQsCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: FAQsCreateFormInputValues) => FAQsCreateFormInputValues;
    onValidate?: FAQsCreateFormValidationValues;
} & React.CSSProperties>;
export default function FAQsCreateForm(props: FAQsCreateFormProps): React.ReactElement;
