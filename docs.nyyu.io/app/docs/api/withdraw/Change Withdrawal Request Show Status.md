These mutations allow a user to change the show status of different types of withdrawal transactions (PayPal, Crypto, Bank) to either hide or show them on the wallet page.

### Change PayPal Withdrawal Show Status

#### Mutation: `changePayPalWithdrawShowStatus`

##### Schema:
```graphql
changePayPalWithdrawShowStatus(
  id: Int!,
  showStatus: Int!
): Int
```

##### Parameters

- `id` (Int): The ID of the PayPal withdrawal transaction. This field is mandatory.
- `showStatus` (Int): The new show status (e.g., 0 for hide, 1 for show). This field is mandatory.

##### Return

The mutation returns an integer indicating the updated show status.

##### Example Mutation

```graphql
mutation {
  changePayPalWithdrawShowStatus(
    id: 123,
    showStatus: 1
  )
}
```

### Change Crypto Withdrawal Show Status

#### Mutation: `changeCryptoWithdrawShowStatus`

##### Schema:
```graphql
changeCryptoWithdrawShowStatus(
  id: Int!,
  showStatus: Int!
): Int
```

##### Parameters

- `id` (Int): The ID of the crypto withdrawal transaction. This field is mandatory.
- `showStatus` (Int): The new show status (e.g., 0 for hide, 1 for show). This field is mandatory.

##### Return

The mutation returns an integer indicating the updated show status.

##### Example Mutation

```graphql
mutation {
  changeCryptoWithdrawShowStatus(
    id: 456,
    showStatus: 0
  )
}
```

### Change Bank Withdrawal Show Status

#### Mutation: `changeBankWithdrawShowStatus`

##### Schema:
```graphql
changeBankWithdrawShowStatus(
  id: Int!,
  showStatus: Int!
): Int
```

##### Parameters

- `id` (Int): The ID of the bank withdrawal transaction. This field is mandatory.
- `showStatus` (Int): The new show status (e.g., 0 for hide, 1 for show). This field is mandatory.

##### Return

The mutation returns an integer indicating the updated show status.

##### Example Mutation

```graphql
mutation {
  changeBankWithdrawShowStatus(
    id: 789,
    showStatus: 1
  )
}
```

### Note

In each example, the mutation changes the show status of the specified withdrawal transaction. The return value indicates the updated show status.