/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAccessRequests = /* GraphQL */ `
  subscription OnCreateAccessRequests(
    $filter: ModelSubscriptionAccessRequestsFilterInput
  ) {
    onCreateAccessRequests(filter: $filter) {
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
export const onUpdateAccessRequests = /* GraphQL */ `
  subscription OnUpdateAccessRequests(
    $filter: ModelSubscriptionAccessRequestsFilterInput
  ) {
    onUpdateAccessRequests(filter: $filter) {
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
export const onDeleteAccessRequests = /* GraphQL */ `
  subscription OnDeleteAccessRequests(
    $filter: ModelSubscriptionAccessRequestsFilterInput
  ) {
    onDeleteAccessRequests(filter: $filter) {
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
export const onCreateWebApplications = /* GraphQL */ `
  subscription OnCreateWebApplications(
    $filter: ModelSubscriptionWebApplicationsFilterInput
  ) {
    onCreateWebApplications(filter: $filter) {
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
export const onUpdateWebApplications = /* GraphQL */ `
  subscription OnUpdateWebApplications(
    $filter: ModelSubscriptionWebApplicationsFilterInput
  ) {
    onUpdateWebApplications(filter: $filter) {
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
export const onDeleteWebApplications = /* GraphQL */ `
  subscription OnDeleteWebApplications(
    $filter: ModelSubscriptionWebApplicationsFilterInput
  ) {
    onDeleteWebApplications(filter: $filter) {
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
export const onCreateFAQs = /* GraphQL */ `
  subscription OnCreateFAQs($filter: ModelSubscriptionFAQsFilterInput) {
    onCreateFAQs(filter: $filter) {
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
export const onUpdateFAQs = /* GraphQL */ `
  subscription OnUpdateFAQs($filter: ModelSubscriptionFAQsFilterInput) {
    onUpdateFAQs(filter: $filter) {
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
export const onDeleteFAQs = /* GraphQL */ `
  subscription OnDeleteFAQs($filter: ModelSubscriptionFAQsFilterInput) {
    onDeleteFAQs(filter: $filter) {
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
export const onCreatePage = /* GraphQL */ `
  subscription OnCreatePage($filter: ModelSubscriptionPageFilterInput) {
    onCreatePage(filter: $filter) {
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
export const onUpdatePage = /* GraphQL */ `
  subscription OnUpdatePage($filter: ModelSubscriptionPageFilterInput) {
    onUpdatePage(filter: $filter) {
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
export const onDeletePage = /* GraphQL */ `
  subscription OnDeletePage($filter: ModelSubscriptionPageFilterInput) {
    onDeletePage(filter: $filter) {
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
