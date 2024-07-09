---
id: delete-user-tier
title: Delete User Tier
sidebar_label: Delete User Tier
sidebar_position: 1
---

:::note
The functions described is accessible only to users with ADMIN privileges.
:::

The `deleteUserTier` mutation allows an admin to delete an existing user tier level from the system.

### Mutation: `deleteUserTier`

#### Schema:
```graphql
deleteUserTier(
  level: Int!
): Int
```

#### Parameters

- `level` (Int): The unique value to identify the tier level to delete. This field is mandatory.

#### Return

The mutation returns an integer representing the level of the deleted user tier.

### Example Mutation

The following is an example of how to use the `deleteUserTier` mutation to delete a user tier level:

```graphql
mutation {
  deleteUserTier(
    level: 1
  )
}
```

### Return

The example returns the integer value of the deleted tier's `level`.

In this example, the mutation deletes the user tier with level `1`. The return value indicates the level of the deleted user tier.