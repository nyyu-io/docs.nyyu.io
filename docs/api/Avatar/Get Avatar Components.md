The `getAvatarComponents` query is used to retrieve all avatar components available in the system.

### Query: `getAvatarComponents`

#### Schema:
```graphql
getAvatarComponents: [AvatarComponent]
```

#### Parameters

- None

#### Return

The query returns a list of all `AvatarComponent` objects.

### Example Query

The following is an example of how to use the `getAvatarComponents` query to retrieve all avatar components:

```graphql
query {
  getAvatarComponents {
    id,
    name,
    description,
    imageUrl
  }
}
```

In this example, the query retrieves all avatar components. Each `AvatarComponent` object in the returned list includes `id`, `name`, `description`, and `imageUrl` of the components.