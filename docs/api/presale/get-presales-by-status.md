---
id: get-presales-by-status
title: Get Presales by Status
sidebar_label: Get Presales by Status
sidebar_position: 1
---

:::note
The functions described is accessible only to users with ADMIN privileges.
:::

The `getPreSaleByStatus` query is used to retrieve presale rounds with a specified status.

### Query: `getPreSaleByStatus`

#### Schema:
```graphql
getPreSaleByStatus(
  status: Int!
): [PreSale]
```

#### Parameters

- `status` (Int): The status of the presale rounds to retrieve. This field is mandatory and can have the following values:
  - `1`: Pending
  - `2`: Started
  - `3`: Ended

#### Return

The query returns a list of `PreSale` objects that have the specified status.

### Example Query

The following is an example of how to use the `getPreSaleByStatus` query to retrieve presale rounds by status:

```graphql
query {
  getPreSaleByStatus(
    status: 2
  ) {
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

In this example, the query retrieves presale rounds with the status `2` (Started). Each `PreSale` object in the returned list includes details such as `id`, `startedAt`, `endedAt`, `tokenAmount`, `tokenPrice`, and `conditions`.
```