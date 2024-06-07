The `confirmEmailChange` mutation is used to confirm a change of the user's email address. After receiving a verification code from the backend, this mutation finalizes the email change request.

### Mutation: `confirmEmailChange`

#### Schema:
```graphql
confirmEmailChange(
  code: String!,
  newEmail: String!
): String!
```

#### Parameters

- `code` (String): The verification code sent to the current email address. This field is mandatory.
- `newEmail` (String): The new email address to be set. This field is mandatory.

#### Return

The mutation returns a string indicating the result of the email change confirmation.

- `"Success"`: Indicates that the email address has been successfully changed.
- `"Failed"`: Indicates that there was an error in processing the request, such as an incorrect verification code.

### Example Mutation

The following is an example of how to use the `confirmEmailChange` mutation to confirm an email change:

```graphql
mutation {
  confirmEmailChange(
    code: "123456",
    newEmail: "newemail@example.com"
  )
}
```

In this example, the mutation confirms the email change for the user, using the verification code `123456` and setting the new email address to `newemail@example.com`. The return value will indicate whether the email change was successful.