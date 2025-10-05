The `getStripeTransactions` query is used to retrieve all Stripe transactions for presale orders.

### Query: `getStripeTransactions`

#### Schema:
```graphql
getStripeTransactions: [StripeTransaction]
```

#### Parameters

- None

#### Return

The query returns a list of `StripeTransaction` objects that represent the transactions made through Stripe for presale orders.

### Example Query

The following is an example of how to use the `getStripeTransactions` query to retrieve all Stripe transactions for presale orders:

```graphql
query {
  getStripeTransactions {
    roundId,
    userId,
    paymentIntentId,
    amount,
    status,
    createdAt
  }
}
```

In this example, the query retrieves all Stripe transactions for presale orders. Each `StripeTransaction` object in the returned list includes details such as `roundId`, `userId`, `paymentIntentId`, `amount`, `status`, and `createdAt`.