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
export declare type PageCreateFormInputValues = {
    slug?: string;
    body?: string;
};
export declare type PageCreateFormValidationValues = {
    slug?: ValidationFunction<string>;
    body?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PageCreateFormOverridesProps = {
    PageCreateFormGrid?: FormProps<GridProps>;
    slug?: FormProps<TextFieldProps>;
    body?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PageCreateFormProps = React.PropsWithChildren<{
    overrides?: PageCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PageCreateFormInputValues) => PageCreateFormInputValues;
    onSuccess?: (fields: PageCreateFormInputValues) => void;
    onError?: (fields: PageCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: PageCreateFormInputValues) => PageCreateFormInputValues;
    onValidate?: PageCreateFormValidationValues;
} & React.CSSProperties>;
export default function PageCreateForm(props: PageCreateFormProps): React.ReactElement;
