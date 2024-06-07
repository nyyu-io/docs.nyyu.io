The `increaseBid` mutation allows a user to increase the token price or token amount of an existing bid in a specified auction round.

### Mutation: `increaseBid`

#### Schema:
```graphql
increaseBid(
  roundId: String!,
  tokenAmount: Float!,
  tokenPrice: Float!,
  payment: Int!,
  cryptoType: String
): Bid
```

#### Parameters

- `roundId` (String): The ID of the round to increase the bid. This field is mandatory.
- `tokenAmount` (Float): The new amount of tokens to bid. This field is mandatory.
- `tokenPrice` (Float): The new price per token. This field is mandatory.
- `payment` (Int): The payment method (1: CREDIT, 2: CRYPTO, 3: WALLET). This field is mandatory.
- `cryptoType` (String): The type of cryptocurrency for payment, e.g., "BTC", "BCH". This field is optional but required if the payment method is CRYPTO.

#### Return

The mutation returns the updated `Bid` object if successful.

### Example Mutation

The following is an example of how to use the `increaseBid` mutation to increase an existing bid:

```graphql
mutation {
  increaseBid(
    roundId: "abcd1234",
    tokenAmount: 150.0,
    tokenPrice: 0.6,
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

1. The new price must be larger than or equal to the original price.
2. Other conditions are the same as placing a bid:
   - Bids can be placed only for rounds with status `STARTED`.
   - If the payment method is not `CREDIT`, `cryptoType` must be provided.
   - If the payment method is `CRYPTO`, bids must be placed at least 10 minutes before the end of the round.
   - The token price of the bid must be larger than the minimum price of the round.

In this example, the mutation increases the bid in the round with ID `abcd1234`, increasing the token amount to 150 and the token price to 0.6, using Bitcoin (BTC) as the payment method. The return value includes the details of the updated bid.