---
id: get-presales
title: Get Presales
sidebar_label: Get Presales
sidebar_position: 1
---

:::note
The functions described is accessible only to users with ADMIN privileges.
:::

The `getPreSales` query is used to retrieve all presale rounds that have been created so far.

### Query: `getPreSales`

#### Schema:
```graphql
getPreSales: [PreSale]
```

#### Parameters

- None

#### Return

The query returns a list of `PreSale` objects representing all presale rounds created so far.

### Example Query

The following is an example of how to use the `getPreSales` query to retrieve all presale rounds:

```graphql
query {
  getPreSales {
    id,
    startedAt,
    endedAt,
    tokenAmount,
    tokenPrice,
    conditions {
      name,
      value
    }
  }
}
```

In this example, the query retrieves all presale rounds. Each `PreSale` object in the returned list includes details such as `id`, `startedAt`, `endedAt`, `tokenAmount`, `tokenPrice`, and `conditions`.
```