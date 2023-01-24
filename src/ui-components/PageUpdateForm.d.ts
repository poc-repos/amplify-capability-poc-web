/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Page } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PageUpdateFormInputValues = {
    slug?: string;
    title?: string;
    body?: string;
};
export declare type PageUpdateFormValidationValues = {
    slug?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    body?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PageUpdateFormOverridesProps = {
    PageUpdateFormGrid?: FormProps<GridProps>;
    slug?: FormProps<TextFieldProps>;
    title?: FormProps<TextFieldProps>;
    body?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PageUpdateFormProps = React.PropsWithChildren<{
    overrides?: PageUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    page?: Page;
    onSubmit?: (fields: PageUpdateFormInputValues) => PageUpdateFormInputValues;
    onSuccess?: (fields: PageUpdateFormInputValues) => void;
    onError?: (fields: PageUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: PageUpdateFormInputValues) => PageUpdateFormInputValues;
    onValidate?: PageUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PageUpdateForm(props: PageUpdateFormProps): React.ReactElement;
