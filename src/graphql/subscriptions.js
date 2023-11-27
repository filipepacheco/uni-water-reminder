/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateHistory = /* GraphQL */ `
  subscription OnCreateHistory($filter: ModelSubscriptionHistoryFilterInput) {
    onCreateHistory(filter: $filter) {
      id
      date
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateHistory = /* GraphQL */ `
  subscription OnUpdateHistory($filter: ModelSubscriptionHistoryFilterInput) {
    onUpdateHistory(filter: $filter) {
      id
      date
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteHistory = /* GraphQL */ `
  subscription OnDeleteHistory($filter: ModelSubscriptionHistoryFilterInput) {
    onDeleteHistory(filter: $filter) {
      id
      date
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateReminder = /* GraphQL */ `
  subscription OnCreateReminder($filter: ModelSubscriptionReminderFilterInput) {
    onCreateReminder(filter: $filter) {
      id
      periodicity
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateReminder = /* GraphQL */ `
  subscription OnUpdateReminder($filter: ModelSubscriptionReminderFilterInput) {
    onUpdateReminder(filter: $filter) {
      id
      periodicity
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteReminder = /* GraphQL */ `
  subscription OnDeleteReminder($filter: ModelSubscriptionReminderFilterInput) {
    onDeleteReminder(filter: $filter) {
      id
      periodicity
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateUniUser = /* GraphQL */ `
  subscription OnCreateUniUser($filter: ModelSubscriptionUniUserFilterInput) {
    onCreateUniUser(filter: $filter) {
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
export const onUpdateUniUser = /* GraphQL */ `
  subscription OnUpdateUniUser($filter: ModelSubscriptionUniUserFilterInput) {
    onUpdateUniUser(filter: $filter) {
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
export const onDeleteUniUser = /* GraphQL */ `
  subscription OnDeleteUniUser($filter: ModelSubscriptionUniUserFilterInput) {
    onDeleteUniUser(filter: $filter) {
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
