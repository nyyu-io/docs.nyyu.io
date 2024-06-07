The `getAvatar` query is used to retrieve the avatar profile based on the unique ID of the profile.

### Query: `getAvatar`

#### Schema:
```graphql
getAvatar(
  id: Int!
): AvatarProfile
```

#### Parameters

- `id` (Int): The unique ID of the avatar profile to retrieve. This field is mandatory.

#### Return

The query returns an `AvatarProfile` object that corresponds to the specified ID.

### Example Query

The following is an example of how to use the `getAvatar` query to retrieve an avatar profile:

```graphql
query {
  getAvatar(
    id: 123
  ) {
    id,
    name,
    imageUrl,
    description
  }
}
```

In this example, the query retrieves the avatar profile with the ID `123`. The returned `AvatarProfile` object includes the `id`, `name`, `imageUrl`, and `description` of the avatar.