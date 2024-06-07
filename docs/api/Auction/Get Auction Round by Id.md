:::note
The functions described is accessible only to users with ADMIN privileges.
:::

The `getAuctionById` query is used to retrieve a specific auction round based on its unique ID. This query can be executed by users with ADMIN privileges.

### Query: `getAuctionById`

#### Schema:
```graphql
query getAuctionById(
  id: Int!
): Auction
```

#### Parameters

- `id` (Int): The unique ID of the auction round to retrieve. This field is mandatory.

#### Return

The query returns the `Auction` object that has the specified ID.

### Example Query

The following is an example of how to use the `getAuctionById` query to retrieve an auction round by its ID:

```graphql
query {
  getAuctionById(
    id: 123
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

In this example, the query retrieves the auction round with the ID `123`. The returned `Auction` object includes `id`, `round`, `startedAt`, `duration`, `totalToken`, `minPrice`, `avatar`, `token`, and `status` of the auction.