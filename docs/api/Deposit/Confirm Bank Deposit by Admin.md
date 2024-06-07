:::note
The functions described is accessible only to users with ADMIN privileges.
:::

```markdown
## Confirm Bank Deposit by Admin (Admin Role)

The `confirmBankDeposit` mutation allows an admin to confirm a bank deposit transaction. This involves verifying the deposit details and updating the transaction status.

### Mutation: `confirmBankDeposit`

#### Schema:
```graphql
confirmBankDeposit(
  id: Int!,
  currencyCode: String!,
  amount: Float!,
  cryptoType: String!,
  code: String!
): BankDepositTransaction
```

#### Parameters

- `id` (Int): The ID of the bank deposit transaction to confirm. This field is mandatory.
- `currencyCode` (String): The currency that the user paid in. This field is mandatory.
- `amount` (Float): The amount to be paid. This field is mandatory.
- `cryptoType` (String): The type of cryptocurrency (e.g., USDT) as a default value (currently not functional). This field is mandatory.
- `code` (String): The admin SMS verification code. This field is mandatory.

#### Return

The mutation returns a `BankDepositTransaction` object representing the confirmed bank deposit transaction.

### Example Mutation

The following is an example of how to use the `confirmBankDeposit` mutation to confirm a bank deposit transaction:

```graphql
mutation {
  confirmBankDeposit(
    id: 123,
    currencyCode: "USD",
    amount: 1000.0,
    cryptoType: "USDT",
    code: "123456"
  ) {
    transactionId,
    userId,
    currencyCode,
    amount,
    cryptoType,
    status,
    createdAt,
    updatedAt
  }
}
```

### Return

The example returns the `BankDepositTransaction` object with details such as `transactionId`, `userId`, `currencyCode`, `amount`, `cryptoType`, `status`, `createdAt`, and `updatedAt`.

In this example, the mutation confirms the bank deposit transaction with ID `123`, specifying the currency code as USD, the amount as `1000.0`, and using USDT as the default crypto type. The admin verification code is provided as `123456`. The return value includes the details of the confirmed `BankDepositTransaction`.