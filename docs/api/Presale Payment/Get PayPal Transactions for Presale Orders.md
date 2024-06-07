The `getPayPalTransactions` query is used to retrieve all PayPal transactions for presale orders.

### Query: `getPayPalTransactions`

#### Schema:
```graphql
getPayPalTransactions: [PayPalTransaction]
```

#### Parameters

- None

#### Return

The query returns a list of `PayPalTransaction` objects that represent the transactions made through PayPal for presale orders.

### Example Query

The following is an example of how to use the `getPayPalTransactions` query to retrieve all PayPal transactions for presale orders:

```graphql
query {
  getPayPalTransactions {
    orderId,
    userId,
    amount,
    currency,
    status,
    createdAt,
    updatedAt
  }
}
```

In this example, the query retrieves all PayPal transactions for presale orders. Each `PayPalTransaction` object in the returned list includes details such as `orderId`, `userId`, `amount`, `currency`, `status`, `createdAt`, and `updatedAt`.