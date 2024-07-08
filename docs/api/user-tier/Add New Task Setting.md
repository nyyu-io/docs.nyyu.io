:::note
The functions described is accessible only to users with ADMIN privileges.
:::

The `addNewSetting` mutation allows an admin to add a new task setting to the system.

### Mutation: `addNewSetting`

#### Schema:
```graphql
addNewSetting(
  setting: TaskSettingInput!
): TaskSetting
```

#### Parameters

- `setting` (TaskSettingInput): The new task setting to add. This field is mandatory and includes the following fields:
  - `verification` (Float!): The verification points associated with the task setting.
  - `wallet` ([WalletTaskInput]!): A list of wallet tasks associated with the task setting.
  - `auction` (Float!): The auction points associated with the task setting.
  - `direct` (Float!): The direct points associated with the task setting.
  - `staking` ([StakeTaskInput]!): A list of staking tasks associated with the task setting.

#### Return

The mutation returns the created `TaskSetting` object if successful.

### Example Mutation

The following is an example of how to use the `addNewSetting` mutation to add a new task setting:

```graphql
mutation {
  addNewSetting(
    setting: {
      verification: 10.0,
      wallet: [
        { amount: 100, point: 10.0 }
      ],
      auction: 5.0,
      direct: 2.0,
      staking: [
        { expiredTime: 30, ratio: 1.5 }
      ]
    }
  ) {
    id,
    verification,
    wallet {
      amount,
      point
    },
    auction,
    direct,
    staking {
      expiredTime,
      ratio
    }
  }
}
```

### Return

The example returns the created `TaskSetting` object with details such as `id`, `verification`, `wallet`, `auction`, `direct`, and `staking`.

In this example, the mutation adds a new task setting with `10.0` verification points, a wallet task for `100` amount and `10.0` points, `5.0` auction points, `2.0` direct points, and a staking task with `30` expired time and `1.5` ratio. The return value includes the details of the created `TaskSetting`.