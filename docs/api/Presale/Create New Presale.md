:::note
The functions described is accessible only to users with ADMIN privileges.
:::

The `createNewPresale` mutation allows an admin to create a new presale round with specified details.

### Mutation: `createNewPresale`

#### Schema:
```graphql
createNewPresale(
  startedAt: Float!,
  endedAt: Float!,
  tokenAmount: Float!,
  tokenPrice: Float!,
  conditions: [PreSaleConditionInput!]!
): Int
```

#### Parameters

- `startedAt` (Float): The start time of the presale in UNIX timestamp format. This field is mandatory.
- `endedAt` (Float): The end time of the presale in UNIX timestamp format. This field is mandatory.
- `tokenAmount` (Float): The total amount of tokens available for the presale. This field is mandatory.
- `tokenPrice` (Float): The price per token during the presale. This field is mandatory.
- `conditions` ([PreSaleConditionInput!]!): A list of conditions for the presale. Each condition includes:
  - `name` (String): The name of the condition.
  - `value` (String): The value of the condition.

#### Return

The mutation returns an integer representing the ID of the newly created presale round if successful.

### Example Mutation

The following is an example of how to use the `createNewPresale` mutation to create a new presale round:

```graphql
mutation {
  createNewPresale(
    startedAt: 1625247600.0,
    endedAt: 1627849600.0,
    tokenAmount: 10000.0,
    tokenPrice: 0.2,
    conditions: [
      { name: "Minimum Purchase", value: "100 tokens" },
      { name: "Maximum Purchase", value: "1000 tokens" }
    ]
  )
}
```

In this example, the mutation creates a new presale round with the specified start time, end time, token amount, token price, and conditions. The return value will be the ID of the newly created presale round.