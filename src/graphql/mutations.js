/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createHistory = /* GraphQL */ `
  mutation CreateHistory(
    $input: CreateHistoryInput!
    $condition: ModelHistoryConditionInput
  ) {
    createHistory(input: $input, condition: $condition) {
      id
      date
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateHistory = /* GraphQL */ `
  mutation UpdateHistory(
    $input: UpdateHistoryInput!
    $condition: ModelHistoryConditionInput
  ) {
    updateHistory(input: $input, condition: $condition) {
      id
      date
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteHistory = /* GraphQL */ `
  mutation DeleteHistory(
    $input: DeleteHistoryInput!
    $condition: ModelHistoryConditionInput
  ) {
    deleteHistory(input: $input, condition: $condition) {
      id
      date
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createReminder = /* GraphQL */ `
  mutation CreateReminder(
    $input: CreateReminderInput!
    $condition: ModelReminderConditionInput
  ) {
    createReminder(input: $input, condition: $condition) {
      id
      periodicity
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateReminder = /* GraphQL */ `
  mutation UpdateReminder(
    $input: UpdateReminderInput!
    $condition: ModelReminderConditionInput
  ) {
    updateReminder(input: $input, condition: $condition) {
      id
      periodicity
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteReminder = /* GraphQL */ `
  mutation DeleteReminder(
    $input: DeleteReminderInput!
    $condition: ModelReminderConditionInput
  ) {
    deleteReminder(input: $input, condition: $condition) {
      id
      periodicity
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createUniUser = /* GraphQL */ `
  mutation CreateUniUser(
    $input: CreateUniUserInput!
    $condition: ModelUniUserConditionInput
  ) {
    createUniUser(input: $input, condition: $condition) {
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
export const updateUniUser = /* GraphQL */ `
  mutation UpdateUniUser(
    $input: UpdateUniUserInput!
    $condition: ModelUniUserConditionInput
  ) {
    updateUniUser(input: $input, condition: $condition) {
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
export const deleteUniUser = /* GraphQL */ `
  mutation DeleteUniUser(
    $input: DeleteUniUserInput!
    $condition: ModelUniUserConditionInput
  ) {
    deleteUniUser(input: $input, condition: $condition) {
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
