The `captureOrderForPresale` mutation allows a user to confirm a PayPal payment for a presale order. The backend will verify the payment and update the presale order status accordingly.

### Mutation: `captureOrderForPresale`

#### Schema:
```graphql
captureOrderForPresale(
  orderId: String!
): Boolean
```

#### Parameters

- `orderId` (String): The PayPal order ID to capture. This field is mandatory.

#### Return

The mutation returns a `Boolean` indicating whether the PayPal order was successfully captured and the presale order was updated.

### Example Mutation

The following is an example of how to use the `captureOrderForPresale` mutation to confirm a PayPal payment for a presale order:

```graphql
mutation {
  captureOrderForPresale(
    orderId: "PAYPAL_ORDER_ID"
  )
}
```

### Note

- Once the payment is confirmed, this mutation should be called to notify the backend.
- The backend will check the payment order ID to verify if the payment was successful. If paid, the presale order will be updated.

In this example, the mutation captures the PayPal order with the ID `PAYPAL_ORDER_ID`. The return value will be `true` if the PayPal order was successfully captured and the presale order was updated, or `false` otherwise.