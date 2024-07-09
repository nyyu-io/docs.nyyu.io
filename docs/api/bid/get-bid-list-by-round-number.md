---
id: get-bid-list-by-round-number
title: Get Bid List by Round Number
sidebar_label: Get Bid List by Round Number
sidebar_position: 2
---

The `getBidListByRound` query is used to retrieve the list of bids that are placed and confirmed for a specific auction round.

### Query: `getBidListByRound`

#### Schema:
```graphql
getBidListByRound(
  round: Int!
): [Bid]
```

#### Parameters

- `round` (Int): The number of the round to get the bid list. This field is mandatory.

#### Return

The query returns a list of `Bid` objects that are placed and confirmed for the specified round.

### Example Query

The following is an example of how to use the `getBidListByRound` query to retrieve the bid list for a specific round:

```graphql
query {
  getBidListByRound(
    round: 12
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

In this example, the query retrieves the list of bids for the round number `12`. Each `Bid` object in the returned list includes details such as `userId`, `roundId`, `tokenAmount`, `totalPrice`, `tokenPrice`, `tempTokenAmount`, `tempTokenPrice`, `delta`, `pendingIncrease`, `holdings`, `payType`, `cryptoType`, `placedAt`, `updatedAt`, and `status`.