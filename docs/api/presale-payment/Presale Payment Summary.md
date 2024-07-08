### Coin
Represents a cryptocurrency coin.

```graphql
type Coin {
  name: String,
  symbol: String
}
```

- `name` (String): The name of the coin.
- `symbol` (String): The symbol of the coin.

### PayResponse
Represents the response from a payment processing request.

```graphql
type PayResponse {
  clientSecret: String,
  paymentIntentId: String,
  requiresAction: Boolean,
  error: String
}
```

- `clientSecret` (String): The client secret for the payment.
- `paymentIntentId` (String): The payment intent ID.
- `requiresAction` (Boolean): Indicates if further action is required for the payment.
- `error` (String): Error message, if any.

### StripeTransaction
Represents a transaction made through Stripe.

```graphql
type StripeTransaction {
  roundId: String!,
  userId: String!,
  paymentIntentId: String,
  amount: Float,
  status: Int,
  createdAt: Float
}
```

- `roundId` (String): The ID of the auction round.
- `userId` (String): The ID of the user.
- `paymentIntentId` (String): The payment intent ID.
- `amount` (Float): The amount of the transaction.
- `status` (Int): The status of the transaction.
- `createdAt` (Float): The timestamp when the transaction was created.

### CryptoTransaction
Represents a cryptocurrency transaction.

```graphql
type CryptoTransaction {
  txnId: String!,
  roundId: String!,
  userId: String!,
  code: String!,
  amount: Float!,
  cryptoAmount: Float,
  cryptoType: String,
  status: Int,
  createdAt: String,
  updatedAt: String
}
```

- `txnId` (String): The transaction ID.
- `roundId` (String): The ID of the auction round.
- `userId` (String): The ID of the user.
- `code` (String): The transaction code.
- `amount` (Float): The amount of the transaction.
- `cryptoAmount` (Float): The amount in cryptocurrency.
- `cryptoType` (String): The type of cryptocurrency.
- `status` (Int): The status of the transaction.
- `createdAt` (String): The timestamp when the transaction was created.
- `updatedAt` (String): The timestamp when the transaction was last updated.

### CryptoPayload
Represents the payload for a cryptocurrency transaction.

```graphql
type CryptoPayload {
  addresses: [AddressList],
  pricing: [PricingList]
}
```

- `addresses` ([AddressList]): A list of addresses for the transaction.
- `pricing` ([PricingList]): A list of pricing details for the transaction.

### AddressList
Represents a list of addresses for a cryptocurrency transaction.

```graphql
type AddressList {
  key: String!,
  value: String!
}
```

- `key` (String): The key for the address.
- `value` (String): The value of the address.

### PricingList
Represents a list of pricing details for a cryptocurrency transaction.

```graphql
type PricingList {
  key: String!,
  value: CoinbasePricing!
}
```

- `key` (String): The key for the pricing detail.
- `value` (CoinbasePricing): The pricing detail.

### CoinbasePricing
Represents pricing details from Coinbase.

```graphql
type CoinbasePricing {
  amount: String!,
  currency: String!
}
```

- `amount` (String): The amount of the cryptocurrency.
- `currency` (String): The currency of the pricing.
```