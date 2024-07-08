:::note
The functions described is accessible only to users with ADMIN privileges.
:::

The `getPresaleOrdersByUser` query is used to retrieve all presale orders placed by the current user.

### Query: `getPresaleOrdersByUser`

#### Schema:
```graphql
getPresaleOrdersByUser: [PreSaleOrder]
```

#### Parameters

- None

#### Return

The query returns a list of `PreSaleOrder` objects that belong to the current user.

### Example Query

The following is an example of how to use the `getPresaleOrdersByUser` query to retrieve all presale orders placed by the current user:

```graphql
query {
  getPresaleOrdersByUser {
    id,
    presaleId,
    userId,
    ndbAmount,
    destination,
    extAddr,
    status,
    createdAt,
    updatedAt
  }
}
```

In this example, the query retrieves all presale orders placed by the current user. Each `PreSaleOrder` object in the returned list includes details such as `id`, `presaleId`, `userId`, `ndbAmount`, `destination`, `extAddr`, `status`, `createdAt`, and `updatedAt`.