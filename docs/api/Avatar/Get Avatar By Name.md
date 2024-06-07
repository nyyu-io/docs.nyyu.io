The `getAvatarByName` query is used to retrieve the avatar profile based on the unique surname of the profile.

### Query: `getAvatarByName`

#### Schema:
```graphql
getAvatarByName(
  surname: String!
): AvatarProfile
```

#### Parameters

- `surname` (String): The unique surname of the avatar profile to retrieve. This field is mandatory.

#### Return

The query returns an `AvatarProfile` object that corresponds to the specified surname.

### Example Query

The following is an example of how to use the `getAvatarByName` query to retrieve an avatar profile by surname:

```graphql
query {
  getAvatarByName(
    surname: "Doe"
  ) {
    id,
    name,
    imageUrl,
    description
  }
}
```

In this example, the query retrieves the avatar profile with the surname `Doe`. The returned `AvatarProfile` object includes the `id`, `name`, `imageUrl`, and `description` of the avatar.