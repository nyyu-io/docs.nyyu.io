---
id: delete-account
title: Delete Account
sidebar_label: Delete Account
sidebar_position: 10
---

The `deleteAccount` mutation allows a user to delete their own account. Admins can also use this mutation to delete any user account.

### Mutation: `deleteAccount`

#### Schema:
```graphql
deleteAccount: String
```

#### Parameters

- None

#### Return

The mutation returns a string containing the email address of the deleted account.

### Example Mutation

The following is an example of how to use the `deleteAccount` mutation to delete an account:

```graphql
mutation {
  deleteAccount
}
```

In this example, the mutation deletes the current user's account and returns the email address of the deleted account.