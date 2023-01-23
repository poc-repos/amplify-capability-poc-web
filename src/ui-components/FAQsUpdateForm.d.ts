/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FAQs } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FAQsUpdateFormInputValues = {
    question?: string;
    answer?: string;
};
export declare type FAQsUpdateFormValidationValues = {
    question?: ValidationFunction<string>;
    answer?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FAQsUpdateFormOverridesProps = {
    FAQsUpdateFormGrid?: FormProps<GridProps>;
    question?: FormProps<TextFieldProps>;
    answer?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FAQsUpdateFormProps = React.PropsWithChildren<{
    overrides?: FAQsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    fAQs?: FAQs;
    onSubmit?: (fields: FAQsUpdateFormInputValues) => FAQsUpdateFormInputValues;
    onSuccess?: (fields: FAQsUpdateFormInputValues) => void;
    onError?: (fields: FAQsUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: FAQsUpdateFormInputValues) => FAQsUpdateFormInputValues;
    onValidate?: FAQsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FAQsUpdateForm(props: FAQsUpdateFormProps): React.ReactElement;
