---
id: add-new-tier
title: Add New Tier
sidebar_label: Add New Tier
sidebar_position: 1
---

:::note
The functions described is accessible only to users with ADMIN privileges.
:::

The `addNewUserTier` mutation allows an admin to add a new user tier level.

### Mutation: `addNewUserTier`

#### Schema:
```graphql
addNewUserTier(
  level: Int!,
  name: String!,
  point: Float!,
  svg: String!
): Tier
```

#### Parameters

- `level` (Int): Unique value to identify the tier level. This field is mandatory.
- `name` (String): The name of the user tier, for example, Bronze, Diamond. This field is mandatory.
- `point` (Float): The points required to reach that tier level. This field is mandatory.
- `svg` (String): The content of the SVG file. This field is mandatory.

#### Return

The mutation returns a `Tier` object representing the created user tier if successful. If not successful, it returns `null`.

### Example Mutation

The following is an example of how to use the `addNewUserTier` mutation to add a new user tier level:

```graphql
mutation {
  addNewUserTier(
    level: 1,
    name: "Bronze",
    point: 100.0,
    svg: "<svg>...</svg>"
  ) {
    level,
    name,
    point,
    svg
  }
}
```

### Return

The example returns the created `Tier` object with details such as `level`, `name`, `point`, and `svg`.

In this example, the mutation adds a new user tier named "Bronze" with a level of `1`, requiring `100.0` points, and includes the content of the SVG file. The return value includes the details of the created `Tier`.