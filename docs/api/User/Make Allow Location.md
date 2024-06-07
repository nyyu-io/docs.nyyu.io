:::note
The functions described is accessible only to users with ADMIN privileges.
:::

The `makeAllow` mutation allows an admin to remove a previously disallowed country from the disallowed list, permitting users from that country to access the system again.

### Mutation: `makeAllow`

#### Schema:
```graphql
makeAllow(
  locationId: Int!
): Int
```

#### Parameters

- `locationId` (Int): The unique ID of the disallowed location to be allowed. This field is mandatory.

#### Return

The mutation returns an integer representing the ID of the location that has been allowed.

### Example Mutation

The following is an example of how to use the `makeAllow` mutation to allow a previously disallowed location:

```graphql
mutation {
  makeAllow(
    locationId: 123
  )
}
```

In this example, the mutation allows the location with the ID `123`, removing it from the disallowed list. The return value will be the ID of the allowed location.