The `placeBid` mutation allows a user to place a new bid in a specified auction round.

### Mutation: `placeBid`

#### Schema:
```graphql
placeBid(
  roundId: String!,
  tokenAmount: Float!,
  tokenPrice: Float!,
  payment: Int!,
  cryptoType: String
): Bid
```

#### Parameters

- `roundId` (String): The ID of the round to place a new bid. This field is mandatory.
- `tokenAmount` (Float): The amount of tokens to bid. This field is mandatory.
- `tokenPrice` (Float): The price per token. This field is mandatory.
- `payment` (Int): The payment method (1: CREDIT, 2: CRYPTO, 3: WALLET). This field is mandatory.
- `cryptoType` (String): The type of cryptocurrency for payment, e.g., "BTC", "BCH". This field is optional but required if the payment method is CRYPTO.

#### Return

The mutation returns the newly created `Bid` object if successful.

### Example Mutation

The following is an example of how to use the `placeBid` mutation to place a new bid:

```graphql
mutation {
  placeBid(
    roundId: "abcd1234",
    tokenAmount: 100.0,
    tokenPrice: 0.5,
    payment: 2,
    cryptoType: "BTC"
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

### Notes

1. Bids can be placed only for rounds with status `STARTED`.
2. If the payment method is not `CREDIT`, `cryptoType` must be provided.
3. If the payment method is `CRYPTO`, bids must be placed at least 10 minutes before the end of the round.
4. The token price of the bid must be larger than the minimum price of the round.

In this example, the mutation places a bid in the round with ID `abcd1234`, bidding 100 tokens at a price of 0.5 per token, using Bitcoin (BTC) as the payment method. The return value includes the details of the newly created bid.