---
id: change-show-status
title: Change Show Status
sidebar_label: Change Show Status
sidebar_position: 1
---

These mutations allow a user to change the show status of different types of deposit transactions (PayPal, Stripe, Bank) to either hide or show them.

### Change PayPal Deposit Show Status

#### Mutation: `changePayPalDepositShowStatus`

##### Schema:
```graphql
changePayPalDepositShowStatus(
  id: Int!,
  showStatus: Int!
): Int
```

##### Parameters

- `id` (Int): The ID of the PayPal deposit transaction. This field is mandatory.
- `showStatus` (Int): The new show status (e.g., 0 for hide, 1 for show). This field is mandatory.

##### Return

The mutation returns an integer indicating the updated show status.

##### Example Mutation

```graphql
mutation {
  changePayPalDepositShowStatus(
    id: 123,
    showStatus: 1
  )
}
```

### Change Stripe Deposit Show Status

#### Mutation: `changeStripeDepositShowStatus`

##### Schema:
```graphql
changeStripeDepositShowStatus(
  id: Int!,
  showStatus: Int!
): Int
```

##### Parameters

- `id` (Int): The ID of the Stripe deposit transaction. This field is mandatory.
- `showStatus` (Int): The new show status (e.g., 0 for hide, 1 for show). This field is mandatory.

##### Return

The mutation returns an integer indicating the updated show status.

##### Example Mutation

```graphql
mutation {
  changeStripeDepositShowStatus(
    id: 456,
    showStatus: 0
  )
}
```

### Change Bank Deposit Show Status

#### Mutation: `changeBankDepositShowStatus`

##### Schema:
```graphql
changeBankDepositShowStatus(
  id: Int!,
  showStatus: Int!
): Int
```

##### Parameters

- `id` (Int): The ID of the bank deposit transaction. This field is mandatory.
- `showStatus` (Int): The new show status (e.g., 0 for hide, 1 for show). This field is mandatory.

##### Return

The mutation returns an integer indicating the updated show status.

##### Example Mutation

```graphql
mutation {
  changeBankDepositShowStatus(
    id: 789,
    showStatus: 1
  )
}
```

### Note

In each example, the mutation changes the show status of the specified deposit transaction. The return value indicates the updated show status.