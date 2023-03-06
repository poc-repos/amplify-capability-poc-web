/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAccessRequests = /* GraphQL */ `
  query GetAccessRequests($id: ID!) {
    getAccessRequests(id: $id) {
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
export const listAccessRequests = /* GraphQL */ `
  query ListAccessRequests(
    $filter: ModelAccessRequestsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccessRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncAccessRequests = /* GraphQL */ `
  query SyncAccessRequests(
    $filter: ModelAccessRequestsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAccessRequests(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getWebApplications = /* GraphQL */ `
  query GetWebApplications($id: ID!) {
    getWebApplications(id: $id) {
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
export const listWebApplications = /* GraphQL */ `
  query ListWebApplications(
    $filter: ModelWebApplicationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWebApplications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncWebApplications = /* GraphQL */ `
  query SyncWebApplications(
    $filter: ModelWebApplicationsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWebApplications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getFAQs = /* GraphQL */ `
  query GetFAQs($id: ID!) {
    getFAQs(id: $id) {
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
export const listFAQs = /* GraphQL */ `
  query ListFAQs(
    $filter: ModelFAQsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFAQs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        question
        answer
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncFAQs = /* GraphQL */ `
  query SyncFAQs(
    $filter: ModelFAQsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFAQs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        question
        answer
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPage = /* GraphQL */ `
  query GetPage($id: ID!) {
    getPage(id: $id) {
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
export const listPages = /* GraphQL */ `
  query ListPages(
    $filter: ModelPageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncPages = /* GraphQL */ `
  query SyncPages(
    $filter: ModelPageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
