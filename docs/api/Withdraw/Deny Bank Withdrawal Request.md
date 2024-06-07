The `denyBankWithdrawRequest` mutation allows an admin to deny a bank withdrawal request. The admin can provide a reason for the denial.

### Mutation: `denyBankWithdrawRequest`

#### Schema:
```graphql
denyBankWithdrawRequest(
  id: Int!,
  reason: String!
): Int
```

#### Parameters

- `id` (Int): The ID of the withdrawal request to deny. This field is mandatory.
- `reason` (String): The reason for denying the request. This field is mandatory.

#### Return

The mutation returns an integer indicating the updated status of the withdrawal request.

### Example Mutation

The following is an example of how to use the `denyBankWithdrawRequest` mutation to deny a bank withdrawal request:

```graphql
mutation {
  denyBankWithdrawRequest(
    id: 123,
    reason: "Insufficient funds"
  )
}
```

### Note

- The `reason` parameter is mandatory and should provide a clear explanation for the denial.

In this example, the mutation denies the bank withdrawal request with ID `123` due to insufficient funds. The return value indicates the updated status of the withdrawal request after the denial.