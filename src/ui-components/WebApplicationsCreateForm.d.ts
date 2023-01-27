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
export declare type WebApplicationsCreateFormInputValues = {
    name?: string;
    description?: string;
};
export declare type WebApplicationsCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WebApplicationsCreateFormOverridesProps = {
    WebApplicationsCreateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type WebApplicationsCreateFormProps = React.PropsWithChildren<{
    overrides?: WebApplicationsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: WebApplicationsCreateFormInputValues) => WebApplicationsCreateFormInputValues;
    onSuccess?: (fields: WebApplicationsCreateFormInputValues) => void;
    onError?: (fields: WebApplicationsCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: WebApplicationsCreateFormInputValues) => WebApplicationsCreateFormInputValues;
    onValidate?: WebApplicationsCreateFormValidationValues;
} & React.CSSProperties>;
export default function WebApplicationsCreateForm(props: WebApplicationsCreateFormProps): React.ReactElement;
