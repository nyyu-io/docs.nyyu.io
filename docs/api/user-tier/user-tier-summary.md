---
id: user-tier-summary
title: User Tier API Intro
sidebar_label: User Tier API Intro
sidebar_position: 1
---

## Types

### Tier
Represents a user tier level.

```graphql
type Tier {
  level: Int!,
  name: String,
  point: Float,
  svg: String
}
```

#### Fields
- `level` (Int): Unique value to identify the tier level.
- `name` (String): The name of the user tier, for example, Bronze, Diamond.
- `point` (Float): The points required to reach that tier level.
- `svg` (String): The content of the tier SVG.

### WalletTask
Represents a task related to the wallet.

```graphql
type WalletTask {
  amount: Int!,
  point: Float!
}
```

#### Fields
- `amount` (Int): The amount associated with the wallet task.
- `point` (Float): The points awarded for completing the wallet task.

### WalletTaskInput
Input type for wallet tasks.

```graphql
input WalletTaskInput {
  amount: Int!,
  point: Float!
}
```

#### Fields
- `amount` (Int): The amount associated with the wallet task.
- `point` (Float): The points awarded for completing the wallet task.

### StakeTask
Represents a task related to staking.

```graphql
type StakeTask {
  expiredTime: Int!,
  ratio: Float!
}
```

#### Fields
- `expiredTime` (Int): The time after which the staking task expires.
- `ratio` (Float): The ratio associated with the staking task.

### StakeTaskInput
Input type for staking tasks.

```graphql
input StakeTaskInput {
  expiredTime: Int!,
  ratio: Float!
}
```

#### Fields
- `expiredTime` (Int): The time after which the staking task expires.
- `ratio` (Float): The ratio associated with the staking task.

### TaskSetting
Represents the settings for various tasks.

```graphql
type TaskSetting {
  id: Int!,
  verification: Float,
  wallet: [WalletTask],
  auction: Float,
  direct: Float,
  staking: [StakeTask]
}
```

#### Fields
- `id` (Int): The ID of the task setting.
- `verification` (Float): The verification points associated with the task setting.
- `wallet` ([WalletTask]): A list of wallet tasks associated with the task setting.
- `auction` (Float): The auction points associated with the task setting.
- `direct` (Float): The direct points associated with the task setting.
- `staking` ([StakeTask]): A list of staking tasks associated with the task setting.

### TaskSettingInput
Input type for task settings.

```graphql
input TaskSettingInput {
  verification: Float!,
  wallet: [WalletTaskInput]!,
  auction: Float!,
  direct: Float!,
  staking: [StakeTaskInput]!
}
```

#### Fields
- `verification` (Float): The verification points associated with the task setting.
- `wallet` ([WalletTaskInput]): A list of wallet tasks associated with the task setting.
- `auction` (Float): The auction points associated with the task setting.
- `direct` (Float): The direct points associated with the task setting.
- `staking` ([StakeTaskInput]): A list of staking tasks associated with the task setting.