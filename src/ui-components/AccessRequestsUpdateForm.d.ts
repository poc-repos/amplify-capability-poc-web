/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AccessRequests } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AccessRequestsUpdateFormInputValues = {
    username?: string;
    WebApplicationsRelation?: string;
    requestdate?: string;
    accessreason?: string;
    status?: string;
    approverusername?: string;
    approverreason?: string;
    accessRequestsWebApplicationsRelationId?: string;
};
export declare type AccessRequestsUpdateFormValidationValues = {
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
export declare type AccessRequestsUpdateFormOverridesProps = {
    AccessRequestsUpdateFormGrid?: FormProps<GridProps>;
    username?: FormProps<TextFieldProps>;
    WebApplicationsRelation?: FormProps<SelectFieldProps>;
    requestdate?: FormProps<TextFieldProps>;
    accessreason?: FormProps<TextFieldProps>;
    status?: FormProps<SelectFieldProps>;
    approverusername?: FormProps<TextFieldProps>;
    approverreason?: FormProps<TextFieldProps>;
    accessRequestsWebApplicationsRelationId?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AccessRequestsUpdateFormProps = React.PropsWithChildren<{
    overrides?: AccessRequestsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    accessRequests?: AccessRequests;
    onSubmit?: (fields: AccessRequestsUpdateFormInputValues) => AccessRequestsUpdateFormInputValues;
    onSuccess?: (fields: AccessRequestsUpdateFormInputValues) => void;
    onError?: (fields: AccessRequestsUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: AccessRequestsUpdateFormInputValues) => AccessRequestsUpdateFormInputValues;
    onValidate?: AccessRequestsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AccessRequestsUpdateForm(props: AccessRequestsUpdateFormProps): React.ReactElement;
