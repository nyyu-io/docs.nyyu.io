The `payWalletForPresale` mutation allows a user to pay for a presale order using their Nyyu wallet balance.

### Mutation: `payWalletForPresale`

#### Schema:
```graphql
payWalletForPresale(
  presaleId: Int!,
  orderId: Int!,
  cryptoType: String!
): String
```

#### Parameters

- `presaleId` (Int): The ID of the presale. This field is mandatory.
- `orderId` (Int): The ID of the order to pay for. This field is mandatory.
- `cryptoType` (String): The type of cryptocurrency to use from the Nyyu wallet. This field is mandatory.

#### Return

The mutation returns a string indicating the result of the payment process.

### Example Mutation

The following is an example of how to use the `payWalletForPresale` mutation to pay for a presale order using the Nyyu wallet:

```graphql
mutation {
  payWalletForPresale(
    presaleId: 1,
    orderId: 123,
    cryptoType: "BTC"
  )
}
```

### Note

- Each user has internal balances in their Nyyu wallet that can be used for payments.

In this example, the mutation initiates a payment for the presale order with ID `123` in the presale with ID `1`, using Bitcoin (BTC) from the user's Nyyu wallet. The return value will indicate the result of the payment process.