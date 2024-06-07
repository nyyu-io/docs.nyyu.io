The `getBidListById` query is used to retrieve the list of bids for a specified auction round by its ID.

### Query: `getBidListById`

#### Schema:
```graphql
getBidListById(
  roundId: String!
): [Bid]
```

#### Parameters

- `roundId` (String): The ID of the round to get the list of bids. This field is mandatory.

#### Return

The query returns a list of `Bid` objects for the specified round.

### Example Query

The following is an example of how to use the `getBidListById` query to retrieve the list of bids for a specific round:

```graphql
query {
  getBidListById(
    roundId: "abcd1234"
  ) {
    userId,
    roundId,
    tokenAmount,
    totalPrice,
    tokenPrice,
    tempTokenAmount,
    tempTokenPrice,
    delta,
    pendingIncrease,
    holdings {
      key,
      value {
        crypto,
        usd
      }
    },
    payType,
    cryptoType,
    placedAt,
    updatedAt,
    status
  }
}
```

In this example, the query retrieves the list of bids for the round with ID `abcd1234`. Each `Bid` object in the returned list includes details such as `userId`, `roundId`, `tokenAmount`, `totalPrice`, `tokenPrice`, `tempTokenAmount`, `tempTokenPrice`, `delta`, `pendingIncrease`, `holdings`, `payType`, `cryptoType`, `placedAt`, `updatedAt`, and `status`.