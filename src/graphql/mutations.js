/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAccessRequests = /* GraphQL */ `
  mutation CreateAccessRequests(
    $input: CreateAccessRequestsInput!
    $condition: ModelAccessRequestsConditionInput
  ) {
    createAccessRequests(input: $input, condition: $condition) {
      id
      username
      WebApplicationsRelation {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      requestdate
      accessreason
      status
      approverusername
      approverreason
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      accessRequestsWebApplicationsRelationId
    }
  }
`;
export const updateAccessRequests = /* GraphQL */ `
  mutation UpdateAccessRequests(
    $input: UpdateAccessRequestsInput!
    $condition: ModelAccessRequestsConditionInput
  ) {
    updateAccessRequests(input: $input, condition: $condition) {
      id
      username
      WebApplicationsRelation {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      requestdate
      accessreason
      status
      approverusername
      approverreason
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      accessRequestsWebApplicationsRelationId
    }
  }
`;
export const deleteAccessRequests = /* GraphQL */ `
  mutation DeleteAccessRequests(
    $input: DeleteAccessRequestsInput!
    $condition: ModelAccessRequestsConditionInput
  ) {
    deleteAccessRequests(input: $input, condition: $condition) {
      id
      username
      WebApplicationsRelation {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      requestdate
      accessreason
      status
      approverusername
      approverreason
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      accessRequestsWebApplicationsRelationId
    }
  }
`;
export const createWebApplications = /* GraphQL */ `
  mutation CreateWebApplications(
    $input: CreateWebApplicationsInput!
    $condition: ModelWebApplicationsConditionInput
  ) {
    createWebApplications(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateWebApplications = /* GraphQL */ `
  mutation UpdateWebApplications(
    $input: UpdateWebApplicationsInput!
    $condition: ModelWebApplicationsConditionInput
  ) {
    updateWebApplications(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteWebApplications = /* GraphQL */ `
  mutation DeleteWebApplications(
    $input: DeleteWebApplicationsInput!
    $condition: ModelWebApplicationsConditionInput
  ) {
    deleteWebApplications(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createFAQs = /* GraphQL */ `
  mutation CreateFAQs(
    $input: CreateFAQsInput!
    $condition: ModelFAQsConditionInput
  ) {
    createFAQs(input: $input, condition: $condition) {
      id
      question
      answer
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateFAQs = /* GraphQL */ `
  mutation UpdateFAQs(
    $input: UpdateFAQsInput!
    $condition: ModelFAQsConditionInput
  ) {
    updateFAQs(input: $input, condition: $condition) {
      id
      question
      answer
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteFAQs = /* GraphQL */ `
  mutation DeleteFAQs(
    $input: DeleteFAQsInput!
    $condition: ModelFAQsConditionInput
  ) {
    deleteFAQs(input: $input, condition: $condition) {
      id
      question
      answer
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createPage = /* GraphQL */ `
  mutation CreatePage(
    $input: CreatePageInput!
    $condition: ModelPageConditionInput
  ) {
    createPage(input: $input, condition: $condition) {
      id
      slug
      title
      body
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updatePage = /* GraphQL */ `
  mutation UpdatePage(
    $input: UpdatePageInput!
    $condition: ModelPageConditionInput
  ) {
    updatePage(input: $input, condition: $condition) {
      id
      slug
      title
      body
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deletePage = /* GraphQL */ `
  mutation DeletePage(
    $input: DeletePageInput!
    $condition: ModelPageConditionInput
  ) {
    deletePage(input: $input, condition: $condition) {
      id
      slug
      title
      body
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
