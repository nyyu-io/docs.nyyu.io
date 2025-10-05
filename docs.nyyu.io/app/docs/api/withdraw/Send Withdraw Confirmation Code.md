:::note
The functions described is accessible only to users with ADMIN privileges.
:::

The `sendWithdrawConfirmCode` mutation allows an admin to request a 2FA SMS verification code needed to approve or deny withdrawal requests. The phone number is registered as a property.

### Mutation: `sendWithdrawConfirmCode`

#### Schema:
```graphql
sendWithdrawConfirmCode: Int
```

#### Parameters

- None

#### Return

The mutation returns an integer indicating whether the request for the 2FA SMS verification code was successful.

### Example Mutation

The following is an example of how to use the `sendWithdrawConfirmCode` mutation:

```graphql
mutation {
  sendWithdrawConfirmCode
}
```

### Note

- This mutation is used to request the 2FA SMS verification code that the admin (Nima) needs to approve or deny withdrawal requests.
- The phone number is registered as a property and does not need to be provided with the mutation.

In this example, the mutation sends a request for the 2FA SMS verification code. The return value indicates whether the request was successful.