---
id: get-user
title: Get User
sidebar_label: Get User
sidebar_position: 2
---

:::note
The functions described is accessible only to users with ADMIN privileges.
:::

The `getUser` query is used to retrieve the current user's information. This query can be executed by users with the appropriate privileges.

### Query: `getUser`

#### Schema:
```graphql
getUser: User
```

#### Parameters

- None

#### Return

The query returns the current user's information.

### Example Query

The following is an example of how to use the `getUser` query to retrieve the current user's information:

```graphql
query {
  getUser {
    id
    email
    name
    role
  }
}
```

In this example, the query retrieves the current user's information, including their `id`, `email`, `name`, and `role`.