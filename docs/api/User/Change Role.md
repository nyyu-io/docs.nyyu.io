:::note
The functions described is accessible only to users with ADMIN privileges.
:::

The `changeRole` mutation allows an admin to change the role of an existing user.

### Mutation: `changeRole`

#### Schema:
```graphql
changeRole(
  email: String!,
  role: String!
): String
```

#### Parameters

- `email` (String): The user's email address. This field is mandatory.
- `role` (String): The new role for the user. This field is mandatory and can be one of the predefined roles such as `"ROLE_ADMIN"` or `"ROLE_USER"`.

#### Return

The mutation returns a string indicating the result of the role change attempt.

### Example Mutation

The following is an example of how to use the `changeRole` mutation to change a user's role:

```graphql
mutation {
  changeRole(
    email: "user@example.com",
    role: "ROLE_ADMIN"
  )
}
```

In this example, the mutation changes the role of the user with the email address `user@example.com` to `ROLE_ADMIN`. The return value will indicate whether the role change was successful.