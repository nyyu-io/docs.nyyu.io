---
id: get-bid-by-admin
title: Get Bid By Admin
sidebar_label: Get Bid By Admin
sidebar_position: 2
---

:::note
The functions described is accessible only to users with ADMIN privileges.
:::

The `getBidByAdmin` query allows an admin to retrieve the bid placed by a specific user for a specific auction round.

### Query: `getBidByAdmin`

#### Schema:
```graphql
getBidByAdmin(
  userId: String!,
  round: Int!
): Bid
```

#### Parameters

- `userId` (String): The ID of the user. This field is mandatory.
- `round` (Int): The number of the round. This field is mandatory.

#### Return

The query returns the `Bid` object placed by the specified user for the specified round.

### Example Query

The following is an example of how to use the `getBidByAdmin` query to retrieve a bid for a specific user and round:

```graphql
query {
  getBidByAdmin(
    userId: "user123",
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

In this example, the query retrieves the bid placed by the user with ID `user123` for the round number `12`. The returned `Bid` object includes details such as `userId`, `roundId`, `tokenAmount`, `totalPrice`, `tokenPrice`, `tempTokenAmount`, `tempTokenPrice`, `delta`, `pendingIncrease`, `holdings`, `payType`, `cryptoType`, `placedAt`, `updatedAt`, and `status`.

### Note

- This query is accessible only to users with ADMIN privileges.