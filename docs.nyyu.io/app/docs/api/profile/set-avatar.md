---
id: set-avatar
title: Set Avatar
sidebar_label: Set Avatar
sidebar_position: 1
---

The `setAvatar` mutation allows a user to set an avatar when creating a new account after setting 2FA.

### Mutation: `setAvatar`

#### Schema:
```graphql
setAvatar(
  prefix: String!,
  name: String!
): String
```

#### Parameters

- `prefix` (String): The avatar short name. This field is mandatory.
- `name` (String): The user-defined or auto-generated name. This field is mandatory.

#### Return

The mutation returns a string indicating the result of setting the avatar. Possible return values are:
- `"Success"`: If the avatar was successfully set.
- `"Already Exists"`: If an avatar with the given prefix and name already exists.

### Example Mutation

The following is an example of how to use the `setAvatar` mutation to set an avatar:

```graphql
mutation {
  setAvatar(
    prefix: "Tesla",
    name: "12"
  )
}
```

### Note

In this example, the mutation sets the avatar with the prefix "Tesla" and the name "12". The return value indicates whether the operation was successful or if the avatar already exists.