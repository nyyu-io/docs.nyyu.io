---
id: sign-in-2fa-check
title: Sign in 2FA Check
sidebar_label: Sign in 2FA Check
sidebar_position: 7
---

The `confirm2FA` mutation is used to confirm the second factor of authentication for a user who has successfully completed the initial sign-in stage. This step verifies the 2FA code provided by the user.

### Mutation: `confirm2FA`

#### Schema:
```graphql
confirm2FA(
  email: String!,
  token: String!,
  code: [TwoFAEntry]!
): Credentials!
```

#### Input: `TwoFAEntry`
```graphql
input TwoFAEntry {
  key: String!
  value: String!
}
```
- `key` (String): The 2FA method, such as `"app"` or `"email"`.
- `value` (String): The 2FA code from the chosen method.

#### Type: `Credentials`
```graphql
type Credentials {
  status: String
  token: String
}
```
- `status` (String): The status of the 2FA confirmation attempt.
- `token` (String): The JWT token for authorization if the 2FA confirmation is successful.

#### Parameters

- `email` (String): The user's email address. This field is mandatory.
- `token` (String): The token received from the previous sign-in stage. This field is mandatory.
- `code` ([TwoFAEntry]): A list of 2FA entries containing the method and corresponding 2FA code. This field is mandatory.

#### Return

The mutation returns an object containing the status and token.

- If successful:
  - `status`: `"Success"`
  - `token`: The JWT token for authorization.
- If failed:
  - `status`: `"failed"`
  - `token`: An error message indicating the reason for the failure:
    - `"Password expired"`
    - `"2FA code mismatch"`

### Example Mutation

The following is an example of how to use the `confirm2FA` mutation to confirm 2FA for a user:

```graphql
mutation {
  confirm2FA(
    email: "demouser@nyyu.io",
    token: "prevSignInToken",
    code: [
      { key: "app", value: "123456" }
    ]
  ) {
    status,
    token
  }
}
```

In this example, the mutation attempts to confirm the 2FA for the user with the email address `arthurclark655@gmail.com`, using the token `prevSignInToken` from the previous sign-in stage, and the 2FA code `123456` for the method `app`. The return value will indicate whether the confirmation was successful and provide the JWT token for authorization, or if there was an error such as a code mismatch or expired password.