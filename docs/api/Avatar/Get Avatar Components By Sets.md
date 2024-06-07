The `getAvatarComponentsBySet` query is used to retrieve a list of avatar components based on a provided set of components. This query allows users to get the components associated with a specific avatar profile.

### Query: `getAvatarComponentsBySet`

#### Schema:
```graphql
getAvatarComponentsBySet(
  set: [AvatarSetInput]
): [AvatarComponent]
```

#### Parameters

- `set` ([AvatarSetInput]): The list of components that the profile has. Each component includes:
  - `groupId` (String): The group ID of the component.
  - `compId` (Int): The component ID.

#### Return

The query returns a list of `AvatarComponent` objects that the profile has.

### Example Query

The following is an example of how to use the `getAvatarComponentsBySet` query to retrieve avatar components:

```graphql
query {
  getAvatarComponentsBySet(
    set: [
      { groupId: "engineers", compId: 101 },
      { groupId: "scientists", compId: 202 }
    ]
  ) {
    id,
    name,
    description,
    imageUrl
  }
}
```

In this example, the query retrieves the avatar components with the specified set of `groupId` and `compId`. The returned `AvatarComponent` objects include `id`, `name`, `description`, and `imageUrl` of the components.