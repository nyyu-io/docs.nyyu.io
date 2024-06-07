The `generateWithdraw` mutation allows a user to generate a verification code for withdrawing assets. When a user initiates a withdrawal, this mutation sends an email with a verification code to the user. This code is required for all types of withdrawal requests.

### Mutation: `generateWithdraw`

#### Schema:
```graphql
generateWithdraw: String
```

#### Parameters

- None

#### Return

The mutation returns a string indicating the result of the verification code generation. It returns "Success" if no error occurs.

### Example Mutation

The following is an example of how to use the `generateWithdraw` mutation to generate a withdrawal verification code:

```graphql
mutation {
  generateWithdraw
}
```

### Return

The example returns "Success" if the email with the verification code was successfully sent.

In this example, the mutation generates a verification code for withdrawing assets. The backend sends an email with the verification code to the user. The return value indicates whether the operation was successful.