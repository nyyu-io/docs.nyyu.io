---
id: create-stripe-payment-with-saved-card-for-deposit
title: Create Stripe payment with Saved Card for Deposit
sidebar_label: Create Stripe payment with Saved Card for Deposit
sidebar_position: 1
---

The `stripeForDepositWithSavedCard` mutation allows a user to create a Stripe payment for a deposit into their wallet using a saved card.

### Mutation: `stripeForDepositWithSavedCard`

#### Schema:
```graphql
stripeForDepositWithSavedCard(
  amount: Float!,
  fiatAmount: Float!,
  fiatType: String!,
  cryptoType: String!,
  cardId: Int!,
  paymentIntentId: String!
): PayResponse
```

#### Parameters

- `amount` (Float): The amount to deposit in USD. This field is mandatory.
- `fiatAmount` (Float): The amount in the paid currency. This field is mandatory.
- `fiatType` (String): The type of currency to pay in. This field is mandatory.
- `cryptoType` (String): The type of cryptocurrency (e.g., USDT) as a default value (currently not functional). This field is mandatory.
- `cardId` (Int): The ID of the saved card to use for the payment. This field is mandatory.
- `paymentIntentId` (String): The payment intent ID from Stripe. This field is mandatory.

#### Return

The mutation returns a `PayResponse` object, which includes details needed to complete the Stripe payment.

### Example Mutation

The following is an example of how to use the `stripeForDepositWithSavedCard` mutation to create a Stripe payment for a deposit into the wallet using a saved card:

```graphql
mutation {
  stripeForDepositWithSavedCard(
    amount: 100.0,
    fiatAmount: 100.0,
    fiatType: "USD",
    cryptoType: "USDT",
    cardId: 456,
    paymentIntentId: "pi_1Fxxxxx"
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

In this example, the mutation initiates a Stripe payment for a deposit of `100.0` USD. The `cardId` is used to specify the saved card, and the `paymentIntentId` is obtained from Stripe. The return value includes the `PayResponse` details needed to complete the Stripe payment.