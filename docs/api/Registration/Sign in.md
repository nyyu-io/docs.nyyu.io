The `signin` mutation is used to authenticate a user using their email and password. If the account is verified and 2FA is set up, the appropriate 2FA code will be sent.

### Mutation: `signin`

#### Schema:
```graphql
signin(
  email: String!,
  password: String!
): Credentials!
```

#### Type: `Credentials`
```graphql
type Credentials {
  status: String
  token: String
  twoStep: [String]
}
```
- `status` (String): The status of the sign-in attempt.
- `token` (String): A token for the next 2FA step (not a JWT token for authorization).
- `twoStep` ([String]): A list of the set 2FA methods, e.g., `['app', 'email']` or `['email', 'phone']`.

#### Parameters

- `email` (String): The user's email address. This field is mandatory.
- `password` (String): The user's password. This field is mandatory.

#### Return

The mutation returns an object containing the status, token, and 2FA methods if applicable.

- If successful:
  - `status`: `"Success"`
  - `token`: A token for the next 2FA step (not a JWT token for authorization).
- If failed:
  - `status`: `"Failed"`
  - `token`: An error message indicating the reason for the failure:
    - `"password mismatch"`
    - `"please verify"`
    - `"Please set 2FA"`
    - `"2FA Error"`

### Example Mutation

The following is an example of how to use the `signin` mutation to authenticate a user:

```graphql
mutation {
  signin(
    email: "arthurclark655@gmail.com",
    password: "38f@3n102du/qA!"
  ) {
    status,
    token
  }
}
```

In this example, the mutation attempts to sign in the user with the email address `arthurclark655@gmail.com` and password `38f@3n102du/qA!`. The return value will indicate whether the sign-in was successful or if there was an error, such as a password mismatch or the need to verify the account or set up 2FA.