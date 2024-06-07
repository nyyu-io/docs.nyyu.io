The `updateUserTier` mutation allows an admin to update the details of an existing user tier level.

### Mutation: `updateUserTier`

#### Schema:
```graphql
updateUserTier(
  level: Int!,
  name: String,
  point: Float,
  svg: String
): Tier
```

#### Parameters

- `level` (Int): Unique value to identify the tier level. This field is mandatory.
- `name` (String): The new name of the user tier, for example, Bronze, Diamond. This field is optional.
- `point` (Float): The new points required to reach that tier level. This field is optional.
- `svg` (String): The new content of the SVG file. This field is optional.

#### Return

The mutation returns the updated `Tier` object if successful. If not successful, it returns `null`.

### Example Mutation

The following is an example of how to use the `updateUserTier` mutation to update an existing user tier level:

```graphql
mutation {
  updateUserTier(
    level: 1,
    name: "Silver",
    point: 200.0,
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

The example returns the updated `Tier` object with details such as `level`, `name`, `point`, and `svg`.

In this example, the mutation updates the user tier with level `1` to have the name "Silver", require `200.0` points, and includes the new content of the SVG file. The return value includes the details of the updated `Tier`.