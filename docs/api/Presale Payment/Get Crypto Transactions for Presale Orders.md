The `getCryptoTransactions` query is used to retrieve all cryptocurrency transactions for presale orders.

### Query: `getCryptoTransactions`

#### Schema:
```graphql
getCryptoTransactions: [CryptoTransaction]
```

#### Parameters

- None

#### Return

The query returns a list of `CryptoTransaction` objects that represent the transactions made through cryptocurrency for presale orders.

### Example Query

The following is an example of how to use the `getCryptoTransactions` query to retrieve all cryptocurrency transactions for presale orders:

```graphql
query {
  getCryptoTransactions {
    txnId,
    roundId,
    userId,
    code,
    amount,
    cryptoAmount,
    cryptoType,
    status,
    createdAt,
    updatedAt
  }
}
```

In this example, the query retrieves all cryptocurrency transactions for presale orders. Each `CryptoTransaction` object in the returned list includes details such as `txnId`, `roundId`, `userId`, `code`, `amount`, `cryptoAmount`, `cryptoType`, `status`, `createdAt`, and `updatedAt`.