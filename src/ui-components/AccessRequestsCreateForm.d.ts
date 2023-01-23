/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AccessRequestsCreateFormInputValues = {
    username?: string;
    WebApplicationsRelation?: string;
    requestdate?: string;
    accessreason?: string;
    status?: string;
    approverusername?: string;
    approverreason?: string;
    accessRequestsWebApplicationsRelationId?: string;
};
export declare type AccessRequestsCreateFormValidationValues = {
    username?: ValidationFunction<string>;
    WebApplicationsRelation?: ValidationFunction<string>;
    requestdate?: ValidationFunction<string>;
    accessreason?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    approverusername?: ValidationFunction<string>;
    approverreason?: ValidationFunction<string>;
    accessRequestsWebApplicationsRelationId?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AccessRequestsCreateFormOverridesProps = {
    AccessRequestsCreateFormGrid?: FormProps<GridProps>;
    username?: FormProps<TextFieldProps>;
    WebApplicationsRelation?: FormProps<SelectFieldProps>;
    requestdate?: FormProps<TextFieldProps>;
    accessreason?: FormProps<TextFieldProps>;
    status?: FormProps<SelectFieldProps>;
    approverusername?: FormProps<TextFieldProps>;
    approverreason?: FormProps<TextFieldProps>;
    accessRequestsWebApplicationsRelationId?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AccessRequestsCreateFormProps = React.PropsWithChildren<{
    overrides?: AccessRequestsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AccessRequestsCreateFormInputValues) => AccessRequestsCreateFormInputValues;
    onSuccess?: (fields: AccessRequestsCreateFormInputValues) => void;
    onError?: (fields: AccessRequestsCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: AccessRequestsCreateFormInputValues) => AccessRequestsCreateFormInputValues;
    onValidate?: AccessRequestsCreateFormValidationValues;
} & React.CSSProperties>;
export default function AccessRequestsCreateForm(props: AccessRequestsCreateFormProps): React.ReactElement;
