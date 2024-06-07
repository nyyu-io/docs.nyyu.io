The `verifyAccount` mutation is used to verify a user's email address using a code sent to the email. This is a crucial step in the user registration process to ensure the email address is valid and belongs to the user.

### Mutation: `verifyAccount`

#### Schema:
```graphql
verifyAccount(
  email: String!,
  code: String!
): String!
```

#### Parameters

- `email` (String): The email address that needs to be verified. This field is mandatory.
- `code` (String): The 6-digit verification code that was sent to the user's email address. This field is mandatory.

#### Return

The mutation returns a string indicating the result of the verification attempt. The possible return values are:

- `"Success"`: Indicates that the email address has been successfully verified.
- `"Failed"`: Indicates that the verification code is incorrect or has expired. The code is valid for 10 minutes from the time it was sent.
- Exception (data: null): Indicates an error in the verification process with specific messages:
  - `"Cannot find user by  + ${email}"`: The email address is not registered in the system.
  - `"Your account is not verified"`: The account could not be verified due to an issue, such as an incorrect verification code.

### Example Mutation

The following is an example of how to use the `verifyAccount` mutation to verify a user's email address:

```graphql
mutation {
  verifyAccount(
    email: "demouser@nyyu.io",
    code: "794221"
  )
}
```

In this example, the mutation attempts to verify the account associated with the email address `demouser@nyyu.io` using the verification code `794221`. The return value will indicate whether the verification was successful or if there was an error, such as an incorrect or expired code.