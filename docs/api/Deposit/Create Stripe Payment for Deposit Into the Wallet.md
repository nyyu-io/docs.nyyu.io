The `stripeForDeposit` mutation allows a user to create a Stripe payment for a deposit into their wallet.

### Mutation: `stripeForDeposit`

#### Schema:
```graphql
stripeForDeposit(
  amount: Float!,
  fiatAmount: Float!,
  fiatType: String!,
  cryptoType: String!,
  paymentIntentId: String!,
  paymentMethodId: String!,
  isSaveCard: Boolean
): PayResponse
```

#### Parameters

- `amount` (Float): The amount to deposit in USD. This field is mandatory.
- `fiatAmount` (Float): The amount in the paid currency. This field is mandatory.
- `fiatType` (String): The type of currency to pay in. This field is mandatory.
- `cryptoType` (String): The type of cryptocurrency (e.g., USDT) as a default value (currently not functional). This field is mandatory.
- `paymentIntentId` (String): The payment intent ID from Stripe. This field is mandatory.
- `paymentMethodId` (String): The payment method ID from Stripe. This field is mandatory.
- `isSaveCard` (Boolean): If true, the card information will be saved for future payments.

#### Return

The mutation returns a `PayResponse` object, which includes details needed to complete the Stripe payment.

### Example Mutation

The following is an example of how to use the `stripeForDeposit` mutation to create a Stripe payment for a deposit into the wallet:

```graphql
mutation {
  stripeForDeposit(
    amount: 100.0,
    fiatAmount: 100.0,
    fiatType: "USD",
    cryptoType: "USDT",
    paymentIntentId: "pi_1Fxxxxx",
    paymentMethodId: "pm_1Fxxxxx",
    isSaveCard: true
  ) {
    clientSecret,
    paymentIntentId,
    requiresAction,
    error
  }
}
```

### Return

The example returns the `PayResponse` object with details such as `clientSecret`, `paymentIntentId`, `requiresAction`, and `error`.

In this example, the mutation initiates a Stripe payment for a deposit of `100.0` USD. The `paymentIntentId` and `paymentMethodId` are obtained from Stripe, and `isSaveCard` is set to `true` to save the card information for future payments. The return value includes the `PayResponse` details needed to complete the Stripe payment.