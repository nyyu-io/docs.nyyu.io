---
id: create-new-user-by-admin
title: Create New User By Admin
sidebar_label: Create New User By Admin
sidebar_position: 4
---

:::note
The functions described is accessible only to users with ADMIN privileges.
:::

The `createNewUser` mutation allows an admin to create a new user account. The password is auto-generated and sent to the user by email.

### Mutation: `createNewUser`

#### Schema:
```graphql
createNewUser(
  email: String!,
  country: String!,
  role: String!,
  avatarName: String!,
  shortName: String!
): String
```

#### Parameters

- `email` (String): The user's email address. This field is mandatory.
- `country` (String): The user's country. This field is mandatory.
- `role` (String): The role of the created user. Possible values are `"ROLE_ADMIN"` or `"ROLE_USER"`. This field is mandatory.
- `avatarName` (String): The name of the user's avatar. This field is mandatory.
- `shortName` (String): The user's short name (e.g., "Tesla.12"). This field is mandatory.

#### Return

The mutation returns a string indicating the result of the user creation attempt.

### Example Mutation

The following is an example of how to use the `createNewUser` mutation to create a new user:

```graphql
mutation {
  createNewUser(
    email: "newuser@example.com",
    country: "USA",
    role: "ROLE_USER",
    avatarName: "UserAvatar",
    shortName: "User.01"
  )
}
```

In this example, the mutation creates a new user with the email address `newuser@example.com`, country `USA`, role `ROLE_USER`, avatar name `UserAvatar`, and short name `User.01`. The return value will indicate whether the user was successfully created.
```