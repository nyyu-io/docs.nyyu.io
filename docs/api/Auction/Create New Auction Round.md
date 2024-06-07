:::note
The functions described is accessible only to users with ADMIN privileges.
:::

The `createAuction` mutation allows an admin to create a new auction round with specified attributes.

### Mutation: `createAuction`

#### Schema:
```graphql
createAuction(
  round: Int!,
  startedAt: Float!,
  duration: Float!,
  totalToken: Float!,
  minPrice: Float!,
  avatar: [AvatarSetInput],
  token: Float
): Auction
```

#### Parameters

- `round` (Int): Auction round number (unique value). It will be checked in the backend. This field is mandatory.
- `startedAt` (Float): The start time in milliseconds. This field is mandatory.
- `duration` (Float): The duration of the round in milliseconds. This field is mandatory.
- `totalToken` (Float): The amount of tokens assigned to this round. This field is mandatory.
- `minPrice` (Float): The minimum price of NDB tokens in this round. This field is mandatory.
- `avatar` ([AvatarSetInput]): A list of avatar components included in the auction. This field is optional.
- `token` (Float): Extra tokens to be allocated for avatar matching user. This field is optional.

#### Return

The mutation returns the newly created `Auction` object if successful.

### Example Mutation

The following is an example of how to use the `createAuction` mutation to create a new auction round:

```graphql
mutation {
  createAuction(
    round: 1,
    startedAt: 1625247600000.0,
    duration: 86400000.0,  // 24 hours in milliseconds
    totalToken: 1000.0,
    minPrice: 0.1,
    avatar: [
      { groupId: "heroes", compId: 201 },
      { groupId: "villains", compId: 301 }
    ],
    token: 500.0
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

### Notes

1. If there are no existing rounds, the status of the newly created round will be `countdown`. When the countdown reaches 0, the round will start automatically.
2. If the status of the previous round is `STARTED`, the new round will have a `countdown` status.
3. For all other cases, the status will be `PENDING`.

In this example, the mutation creates a new auction round with the specified attributes such as `round`, `startedAt`, `duration`, `totalToken`, `minPrice`, `avatar`, and `token`. The return value includes the created `Auction` object with all specified attributes, including its status.