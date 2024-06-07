The `bankForDeposit` mutation allows a user to create an empty bank deposit transaction. This can be used to initiate a bank deposit request.

### Mutation: `bankForDeposit`

#### Schema:
```graphql
bankForDeposit: String
```

#### Parameters

- None

#### Return

The mutation returns a string indicating the result of the bank deposit request creation.

### Example Mutation

The following is an example of how to use the `bankForDeposit` mutation to create an empty bank deposit transaction:

```graphql
mutation {
  bankForDeposit
}
```

### Return

The example returns a string indicating the result of the bank deposit request creation.

In this example, the mutation initiates an empty bank deposit transaction. The return value is a string that indicates whether the bank deposit request was successfully created.