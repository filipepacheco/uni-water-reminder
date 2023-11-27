/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getHistory = /* GraphQL */ `
  query GetHistory($id: ID!) {
    getHistory(id: $id) {
      id
      date
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listHistories = /* GraphQL */ `
  query ListHistories(
    $filter: ModelHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHistories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const historiesByUserID = /* GraphQL */ `
  query HistoriesByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    historiesByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        date
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getReminder = /* GraphQL */ `
  query GetReminder($id: ID!) {
    getReminder(id: $id) {
      id
      periodicity
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listReminders = /* GraphQL */ `
  query ListReminders(
    $filter: ModelReminderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReminders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        periodicity
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const remindersByUserID = /* GraphQL */ `
  query RemindersByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelReminderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    remindersByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        periodicity
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUniUser = /* GraphQL */ `
  query GetUniUser($id: ID!) {
    getUniUser(id: $id) {
      id
      name
      birthdate
      weight
      Histories {
        nextToken
        __typename
      }
      Reminders {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUniUsers = /* GraphQL */ `
  query ListUniUsers(
    $filter: ModelUniUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUniUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        birthdate
        weight
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
