---
id: change-password-by-user
title: Change Password by User
sidebar_label: Change Password by User
sidebar_position: 9
---

The `changePassword` mutation allows a user to change their password.

### Mutation: `changePassword`

#### Schema:
```graphql
changePassword(
  newPassword: String!
): String!
```

#### Parameters

- `newPassword` (String): The new password for the user's account. This field is mandatory.

#### Return

The mutation returns a string indicating the result of the password change attempt.

- `"Success"`: Indicates that the password has been successfully changed.

### Example Mutation

The following is an example of how to use the `changePassword` mutation to change a user's password:

```graphql
mutation {
  changePassword(
    newPassword: "newPassword123"
  )
}
```

In this example, the mutation changes the password for the user to `newPassword123`. The return value will indicate whether the password change was successful.