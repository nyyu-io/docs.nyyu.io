The `payStripeForPreSale` mutation allows a user to pay for a presale order using Stripe. Please refer to the [Stripe API documentation](https://stripe.com/docs/api) for details on `paymentIntentId` and `paymentMethodId`.

### Mutation: `payStripeForPreSale`

#### Schema:
```graphql
payStripeForPreSale(
  id: Int,
  presaleId: Int!,
  orderId: Int!,
  amount: Float!,
  fiatAmount: Float!,
  fiatType: String!,
  paymentIntentId: String!,
  paymentMethodId: String!,
  isSaveCard: Boolean
): PayResponse
```

#### Parameters

- `id` (Int): The payment ID. This is `null` for the first call.
- `presaleId` (Int): The ID of the presale. This field is mandatory.
- `orderId` (Int): The ID of the order to pay for. This field is mandatory.
- `amount` (Float): The amount to pay. This field is mandatory.
- `fiatAmount` (Float): The amount to pay in the specified currency. This field is mandatory.
- `fiatType` (String): The currency type to pay in. This field is mandatory.
- `paymentIntentId` (String): The payment intent ID from Stripe. This field is mandatory.
- `paymentMethodId` (String): The payment method ID from Stripe. This field is mandatory.
- `isSaveCard` (Boolean): `false` for a new card, `true` for a saved card.

#### Return

The mutation returns a `PayResponse` object.

### Example Mutation

The following is an example of how to use the `payStripeForPreSale` mutation to pay for a presale order using Stripe:

```graphql
mutation {
  payStripeForPreSale(
    id: null,
    presaleId: 1,
    orderId: 123,
    amount: 500.0,
    fiatAmount: 500.0,
    fiatType: "USD",
    paymentIntentId: "pi_1Fxxxxx",
    paymentMethodId: "pm_1Fxxxxx",
    isSaveCard: false
  ) {
    clientSecret,
    paymentIntentId,
    requiresAction,
    error
  }
}
```

In this example, the mutation initiates a payment for the presale order with ID `123` in the presale with ID `1`. The amount to pay is `500.0` in USD. The `paymentIntentId` and `paymentMethodId` are obtained from Stripe, and `isSaveCard` is set to `false` for a new card. The return value includes the `PayResponse` details such as `clientSecret`, `paymentIntentId`, `requiresAction`, and `error`.