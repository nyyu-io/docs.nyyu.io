---
id: suspend-user-by-admin
title: Suspend User by Admin
sidebar_label: Suspend User by Admin
sidebar_position: 13
---

:::note
The functions described is accessible only to users with ADMIN privileges.
:::

The `suspendUserByAdmin` mutation allows an admin to suspend a user's account. This can be used to temporarily disable a user's access to the system.

### Mutation: `suspendUserByAdmin`

#### Schema:
```graphql
suspendUserByAdmin(
  email: String!
): String
```

#### Parameters

- `email` (String): The email address of the user to be suspended. This field is mandatory.

#### Return

The mutation returns a string indicating the result of the suspension attempt.

- `"Success"`: Indicates that the user's account has been successfully suspended.
- `"Failed"`: Indicates that there was an error in processing the request, such as the user not being found.

### Example Mutation

The following is an example of how to use the `suspendUserByAdmin` mutation to suspend a user's account:

```graphql
mutation {
  suspendUserByAdmin(
    email: "user@example.com"
  )
}
```

In this example, the mutation attempts to suspend the user with the email address `user@example.com`. The return value will indicate whether the suspension was successful.