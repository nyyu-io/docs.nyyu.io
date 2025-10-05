---
id: sign-up
title: Signup
sidebar_label: Signup
sidebar_position: 1
---


sign-up

The `signup` mutation allows a new user to register an account. The process involves providing an email address, password, and country code. Depending on the current status of the email in the system, different responses will be returned.

### Mutation: `signup`

#### Schema:
```graphql
signup(
  email: String!,
  password: String!,
  country: String!
): String!
```

#### Parameters

- `email` (String): The email address of the user. This field is mandatory and will be used for account verification.
- `password` (String): The password chosen by the user for their account. This field is mandatory and should follow the application's password strength guidelines.
- `country` (String): The 3-letter country code representing the user's country. This field is mandatory and should follow the ISO 3166-1 alpha-3 standard (e.g., "USA" for the United States).

#### Return

The mutation returns a string that describes the outcome of the signup attempt. The possible return values are:

- `"Success"`: Indicates that a new user account has been successfully created. The account is not yet verified, and two-factor authentication (2FA) is not set up. A verification code will be sent to the provided email address to complete the verification process.
- `"Already exists, sent verify code"`: Indicates that the email address is already registered in the system, but the account has not been verified. A new verification code will be sent to the email address to prompt the user to complete the verification process.
- `"Already verified"`: Indicates that the email address is already registered and verified in the system. No further action is required from the user.

### Example Mutation

The following is an example of how to use the `signup` mutation to register a new user:

```graphql
mutation {
  signup(
    email: "demouser@nyyu.io",
    password: "38f@3n102du/qA!",
    country: "USA"
  )
}
```

In this example, the mutation attempts to create a new account for the user with the email address `arthurclark655@gmail.com`, the password `123`, and the country code `USA`. The return value will indicate whether the account was successfully created, if the user needs to verify their email, or if the email is already verified.