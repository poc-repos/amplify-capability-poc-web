/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { AccessRequests } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function AccessRequestsCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    username: undefined,
    WebApplicationsRelation: {},
    requestdate: undefined,
    accessreason: undefined,
    status: undefined,
    approverusername: undefined,
    approverreason: undefined,
    accessRequestsWebApplicationsRelationId: undefined,
  };
  const [username, setUsername] = React.useState(initialValues.username);
  const [WebApplicationsRelation, setWebApplicationsRelation] = React.useState(
    initialValues.WebApplicationsRelation
  );
  const [requestdate, setRequestdate] = React.useState(
    initialValues.requestdate
  );
  const [accessreason, setAccessreason] = React.useState(
    initialValues.accessreason
  );
  const [status, setStatus] = React.useState(initialValues.status);
  const [approverusername, setApproverusername] = React.useState(
    initialValues.approverusername
  );
  const [approverreason, setApproverreason] = React.useState(
    initialValues.approverreason
  );
  const [
    accessRequestsWebApplicationsRelationId,
    setAccessRequestsWebApplicationsRelationId,
  ] = React.useState(initialValues.accessRequestsWebApplicationsRelationId);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUsername(initialValues.username);
    setWebApplicationsRelation(initialValues.WebApplicationsRelation);
    setRequestdate(initialValues.requestdate);
    setAccessreason(initialValues.accessreason);
    setStatus(initialValues.status);
    setApproverusername(initialValues.approverusername);
    setApproverreason(initialValues.approverreason);
    setAccessRequestsWebApplicationsRelationId(
      initialValues.accessRequestsWebApplicationsRelationId
    );
    setErrors({});
  };
  const validations = {
    username: [],
    WebApplicationsRelation: [],
    requestdate: [],
    accessreason: [],
    status: [],
    approverusername: [],
    approverreason: [],
    accessRequestsWebApplicationsRelationId: [],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          username,
          WebApplicationsRelation,
          requestdate,
          accessreason,
          status,
          approverusername,
          approverreason,
          accessRequestsWebApplicationsRelationId,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(new AccessRequests(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "AccessRequestsCreateForm")}
    >
      <TextField
        label="Username"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username: value,
              WebApplicationsRelation,
              requestdate,
              accessreason,
              status,
              approverusername,
              approverreason,
              accessRequestsWebApplicationsRelationId,
            };
            const result = onChange(modelFields);
            value = result?.username ?? value;
          }
          if (errors.username?.hasError) {
            runValidationTasks("username", value);
          }
          setUsername(value);
        }}
        onBlur={() => runValidationTasks("username", username)}
        errorMessage={errors.username?.errorMessage}
        hasError={errors.username?.hasError}
        {...getOverrideProps(overrides, "username")}
      ></TextField>
      <SelectField
        label="Web applications relation"
        placeholder="Please select an option"
        isDisabled={false}
        value={WebApplicationsRelation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              WebApplicationsRelation: value,
              requestdate,
              accessreason,
              status,
              approverusername,
              approverreason,
              accessRequestsWebApplicationsRelationId,
            };
            const result = onChange(modelFields);
            value = result?.WebApplicationsRelation ?? value;
          }
          if (errors.WebApplicationsRelation?.hasError) {
            runValidationTasks("WebApplicationsRelation", value);
          }
          setWebApplicationsRelation(value);
        }}
        onBlur={() =>
          runValidationTasks("WebApplicationsRelation", WebApplicationsRelation)
        }
        errorMessage={errors.WebApplicationsRelation?.errorMessage}
        hasError={errors.WebApplicationsRelation?.hasError}
        {...getOverrideProps(overrides, "WebApplicationsRelation")}
      ></SelectField>
      <TextField
        label="Requestdate"
        isRequired={false}
        isReadOnly={false}
        type="date"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              WebApplicationsRelation,
              requestdate: value,
              accessreason,
              status,
              approverusername,
              approverreason,
              accessRequestsWebApplicationsRelationId,
            };
            const result = onChange(modelFields);
            value = result?.requestdate ?? value;
          }
          if (errors.requestdate?.hasError) {
            runValidationTasks("requestdate", value);
          }
          setRequestdate(value);
        }}
        onBlur={() => runValidationTasks("requestdate", requestdate)}
        errorMessage={errors.requestdate?.errorMessage}
        hasError={errors.requestdate?.hasError}
        {...getOverrideProps(overrides, "requestdate")}
      ></TextField>
      <TextField
        label="Accessreason"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              WebApplicationsRelation,
              requestdate,
              accessreason: value,
              status,
              approverusername,
              approverreason,
              accessRequestsWebApplicationsRelationId,
            };
            const result = onChange(modelFields);
            value = result?.accessreason ?? value;
          }
          if (errors.accessreason?.hasError) {
            runValidationTasks("accessreason", value);
          }
          setAccessreason(value);
        }}
        onBlur={() => runValidationTasks("accessreason", accessreason)}
        errorMessage={errors.accessreason?.errorMessage}
        hasError={errors.accessreason?.hasError}
        {...getOverrideProps(overrides, "accessreason")}
      ></TextField>
      <SelectField
        label="Status"
        placeholder="Please select an option"
        isDisabled={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              WebApplicationsRelation,
              requestdate,
              accessreason,
              status: value,
              approverusername,
              approverreason,
              accessRequestsWebApplicationsRelationId,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      >
        <option
          children="Approved"
          value="APPROVED"
          {...getOverrideProps(overrides, "statusoption0")}
        ></option>
        <option
          children="Rejected"
          value="REJECTED"
          {...getOverrideProps(overrides, "statusoption1")}
        ></option>
      </SelectField>
      <TextField
        label="Approverusername"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              WebApplicationsRelation,
              requestdate,
              accessreason,
              status,
              approverusername: value,
              approverreason,
              accessRequestsWebApplicationsRelationId,
            };
            const result = onChange(modelFields);
            value = result?.approverusername ?? value;
          }
          if (errors.approverusername?.hasError) {
            runValidationTasks("approverusername", value);
          }
          setApproverusername(value);
        }}
        onBlur={() => runValidationTasks("approverusername", approverusername)}
        errorMessage={errors.approverusername?.errorMessage}
        hasError={errors.approverusername?.hasError}
        {...getOverrideProps(overrides, "approverusername")}
      ></TextField>
      <TextField
        label="Approverreason"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              WebApplicationsRelation,
              requestdate,
              accessreason,
              status,
              approverusername,
              approverreason: value,
              accessRequestsWebApplicationsRelationId,
            };
            const result = onChange(modelFields);
            value = result?.approverreason ?? value;
          }
          if (errors.approverreason?.hasError) {
            runValidationTasks("approverreason", value);
          }
          setApproverreason(value);
        }}
        onBlur={() => runValidationTasks("approverreason", approverreason)}
        errorMessage={errors.approverreason?.errorMessage}
        hasError={errors.approverreason?.hasError}
        {...getOverrideProps(overrides, "approverreason")}
      ></TextField>
      <TextField
        label="Access requests web applications relation id"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              WebApplicationsRelation,
              requestdate,
              accessreason,
              status,
              approverusername,
              approverreason,
              accessRequestsWebApplicationsRelationId: value,
            };
            const result = onChange(modelFields);
            value = result?.accessRequestsWebApplicationsRelationId ?? value;
          }
          if (errors.accessRequestsWebApplicationsRelationId?.hasError) {
            runValidationTasks(
              "accessRequestsWebApplicationsRelationId",
              value
            );
          }
          setAccessRequestsWebApplicationsRelationId(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "accessRequestsWebApplicationsRelationId",
            accessRequestsWebApplicationsRelationId
          )
        }
        errorMessage={
          errors.accessRequestsWebApplicationsRelationId?.errorMessage
        }
        hasError={errors.accessRequestsWebApplicationsRelationId?.hasError}
        {...getOverrideProps(
          overrides,
          "accessRequestsWebApplicationsRelationId"
        )}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
