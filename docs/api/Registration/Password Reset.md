The `resetPassword` mutation is used to reset a user's password using a reset code sent to their email. This process ensures that only the user with access to the registered email can change the password.

### Mutation: `resetPassword`

#### Schema:
```graphql
resetPassword(
  email: String!,
  code: String!,
  newPassword: String!
): String!
```

#### Parameters

- `email` (String): The user's email address. This field is mandatory.
- `code` (String): The 6-digit reset code sent to the user's email. This field is mandatory.
- `newPassword` (String): The new password for the user's account. This field is mandatory.

#### Return

The mutation returns a string indicating the result of the password reset attempt.

- `"Success"`: Indicates that the password has been successfully reset.
- `"Failed"`: Indicates that there was an error in processing the request, such as an incorrect reset code or an issue with the new password.

### Example Mutation

The following is an example of how to use the `resetPassword` mutation to reset a user's password:

```graphql
mutation {
  resetPassword(
    email: "demouser@nyyu.io",
    code: "123456",
    newPassword: "392fj209AL!LA@M"
  )
}
```

In this example, the mutation attempts to reset the password for the user with the email address `demouser@nyyu.io` using the reset code `123456` and the new password `392fj209AL!LA@M`. The return value will indicate whether the password reset was successful or if there was an error.