---
id: get-bid-list-by-user
title: Get Bid List By User
sidebar_label: Get Bid List By User
sidebar_position: 2
---

The `getBidListByUser` query is used to retrieve the list of bids placed by the current user for all auction rounds.

### Query: `getBidListByUser`

#### Schema:
```graphql
getBidListByUser: [Bid]
```

#### Parameters

- None

#### Return

The query returns a list of `Bid` objects that are placed by the current user for all rounds. The user ID will be obtained from the JWT token.

### Example Query

The following is an example of how to use the `getBidListByUser` query to retrieve the bid list for the current user:

```graphql
query {
  getBidListByUser {
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

In this example, the query retrieves the list of bids placed by the current user. Each `Bid` object in the returned list includes details such as `userId`, `roundId`, `tokenAmount`, `totalPrice`, `tokenPrice`, `tempTokenAmount`, `tempTokenPrice`, `delta`, `pendingIncrease`, `holdings`, `payType`, `cryptoType`, `placedAt`, `updatedAt`, and `status`.

### Note

1. Users cannot retrieve bids placed by other users.