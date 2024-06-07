:::note
The functions described is accessible only to users with ADMIN privileges.
:::

The `updateAuction` mutation allows an admin to update an existing auction round's details. 

### Mutation: `updateAuction`

#### Schema:
```graphql
updateAuction(
  id: String!,
  round: Int, 
  duration: Float,  
  totalToken: Float, 
  minPrice: Float,
  avatar: [AvatarSetInput],
  token: Float
): Auction!
```

#### Parameters

- `id` (String): Unique ID of the round to update. This field is mandatory.
- `round` (Int): Auction round number. This field is optional.
- `duration` (Float): Duration of the round in milliseconds. This field is optional.
- `totalToken` (Float): Amount of tokens assigned to this round. This field is optional.
- `minPrice` (Float): Minimum price of NDB tokens in this round. This field is optional.
- `avatar` ([AvatarSetInput]): List of avatar components included in the auction. This field is optional.
- `token` (Float): Extra tokens to be allocated for avatar matching user. This field is optional.

#### Return

The mutation returns the updated `Auction` object if successful.

### Example Mutation

The following is an example of how to use the `updateAuction` mutation to update an existing auction round:

```graphql
mutation {
  updateAuction(
    id: "abcd1234",
    round: 2,
    duration: 7200000.0,  // 2 hours in milliseconds
    totalToken: 1500.0,
    minPrice: 0.15,
    avatar: [
      { groupId: "heroes", compId: 202 },
      { groupId: "villains", compId: 302 }
    ],
    token: 600.0
  ) {
    id,
    round,
    startedAt,
    duration,
    totalToken,
    minPrice,
    avatar {
      groupId,
      compId
    },
    token,
    status
  }
}
```

### Note

- If the status of the round is not `PENDING`, the update cannot be performed.

In this example, the mutation updates the auction round with the ID `abcd1234`, modifying attributes such as `round`, `duration`, `totalToken`, `minPrice`, `avatar`, and `token`. The return value includes the updated `Auction` object with all specified attributes, including its status.