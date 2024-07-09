---
id: get-all-auction-rounds
title: Get All Auction Rounds
sidebar_label: Get All Auction Rounds
sidebar_position: 1
---

The `getAuctions` query is used to retrieve all auction rounds available in the system.

### Query: `getAuctions`

#### Schema:
```graphql
query getAuctions: [Auction]
```

#### Parameters

- None

#### Return

The query returns a list of all `Auction` objects.

### Example Query

The following is an example of how to use the `getAuctions` query to retrieve all auction rounds:

```graphql
query {
  getAuctions {
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

In this example, the query retrieves all auction rounds. Each `Auction` object in the returned list includes `id`, `round`, `startedAt`, `duration`, `totalToken`, `minPrice`, `avatar`, `token`, and `status` of the auctions.