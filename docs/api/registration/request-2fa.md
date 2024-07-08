---
id: request-2fa
title: Request 2FA
sidebar_label: Request 2FA
sidebar_position: 4
---

The `request2FA` mutation is used to request two-factor authentication (2FA) for a registered and verified account. The user can choose from various methods such as Google Authentication app, email code, or SMS code.

### Mutation: `request2FA`

#### Schema:
```graphql
request2FA(
  email: String!,
  method: String!,
  phone: String
): String!
```

#### Parameters

- `email` (String): The user's email address. This field is mandatory.
- `method` (String): The method for 2FA. This field is mandatory and can have the following values:
  - `"app"`: Google Authentication app.
  - `"email"`: Email code.
  - `"phone"`: SMS code.
- `phone` (String): The phone number for SMS code. This field is optional and should be provided only if the method is `"phone"`.

#### Return

The mutation returns a string based on the selected 2FA method:

- `"app"`: A QR code image for setting up Google Authentication.
- `"email"`: Indicates that the verification code has been sent via email.
- `"phone"`: Indicates that the verification code has been sent via SMS.

If there is an error, it will return `"error"` or `"Not verified"` exception.

Exception: Indicates an error in the request process with the specific message:
  - `"Cannot find user by  + ${email}"`: The email address is not registered in the system.

### Example Mutation

The following is an example of how to use the `request2FA` mutation to request 2FA using the phone method:

```graphql
mutation {
  request2FA(
    email: "demouser@nyyu.io",
    method: "phone",
    phone: "+4478911223344"
  )
}
```

In this example, the mutation attempts to request 2FA for the user with the email address `demouser@nyyu.io` using the phone method, with the phone number `+4478911223344`. The return value will indicate whether the QR code image, email code, or SMS code was sent, or if there was an error such as the user not being registered.