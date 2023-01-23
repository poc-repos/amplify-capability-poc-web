/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { WebApplications } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type WebApplicationsUpdateFormInputValues = {
    name?: string;
    description?: string;
    approvergroup?: string;
};
export declare type WebApplicationsUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    approvergroup?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WebApplicationsUpdateFormOverridesProps = {
    WebApplicationsUpdateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
    approvergroup?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type WebApplicationsUpdateFormProps = React.PropsWithChildren<{
    overrides?: WebApplicationsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    webApplications?: WebApplications;
    onSubmit?: (fields: WebApplicationsUpdateFormInputValues) => WebApplicationsUpdateFormInputValues;
    onSuccess?: (fields: WebApplicationsUpdateFormInputValues) => void;
    onError?: (fields: WebApplicationsUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: WebApplicationsUpdateFormInputValues) => WebApplicationsUpdateFormInputValues;
    onValidate?: WebApplicationsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function WebApplicationsUpdateForm(props: WebApplicationsUpdateFormProps): React.ReactElement;
