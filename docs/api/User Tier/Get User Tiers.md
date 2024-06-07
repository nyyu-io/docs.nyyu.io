The `getUserTiers` query is used to retrieve the list of all user tiers available in the system.

### Query: `getUserTiers`

#### Schema:
```graphql
getUserTiers: [Tier]
```

#### Parameters

- None

#### Return

The query returns a list of `Tier` objects representing all user tiers.

### Example Query

The following is an example of how to use the `getUserTiers` query to retrieve the list of all user tiers:

```graphql
query {
  getUserTiers {
    level,
    name,
    point,
    svg
  }
}
```

### Return

The example returns a list of `Tier` objects with details such as `level`, `name`, `point`, and `svg`.

In this example, the query retrieves the list of all user tiers. Each `Tier` object in the returned list includes details like `level`, `name`, `point`, and `svg`.