The `forgotPassword` mutation is used to initiate the password reset process for a user. It verifies the user's email and sends a reset code to the specified email address.

### Mutation: `forgotPassword`

#### Schema:
```graphql
forgotPassword(
  email: String!
): String!
```

#### Parameters

- `email` (String): The user's email address. This field is mandatory.

#### Return

The mutation returns a string indicating the result of the password reset request.

- `"Success"`: Indicates that the reset code has been successfully sent to the user's email address.
- `"failed"`: Indicates that there was an error in processing the request, such as the email not being registered.

### Example Mutation

The following is an example of how to use the `forgotPassword` mutation to request a password reset:

```graphql
mutation {
  forgotPassword(
    email: "demouser@nyyu.io"
  )
}
```

In this example, the mutation attempts to initiate the password reset process for the user with the email address `demouser@nyyu.io`. The return value will indicate whether the reset code was successfully sent or if there was an error.