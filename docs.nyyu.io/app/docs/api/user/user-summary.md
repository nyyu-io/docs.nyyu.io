---
id: user-summary
title: User API Intro
sidebar_label: User API Intro
sidebar_position: 1
---

The `User` type represents a user in the system, including details such as registration date, email, name, role, and various verification statuses.

### Type: `User`

#### Schema:
```graphql
type User {
  id: Int,
  regDate: Float,
  updateDate: Float,
  deleted: Int,
  email: String,
  name: String,
  country: String,
  phone: String,
  birthday: Float,
  lastLoginDate: Float,
  role: [String],
  tierLevel: Int,
  tierPoint: Float,
  provider: String,
  providerId: String,
  notifySetting: Int,
  avatar: UserAvatar,
  security: [UserSecurity],
  verify: UserVerify
}
```

#### Fields

- `id` (Int): The unique identifier for the user.
- `regDate` (Float): The registration date of the user as a Unix timestamp.
- `updateDate` (Float): The last update date of the user's information as a Unix timestamp.
- `deleted` (Int): Indicates if the user is deleted (0 for not deleted, 1 for deleted).
- `email` (String): The user's email address.
- `name` (String): The user's name.
- `country` (String): The user's country.
- `phone` (String): The user's phone number.
- `birthday` (Float): The user's birthday as a Unix timestamp.
- `lastLoginDate` (Float): The date of the user's last login as a Unix timestamp.
- `role` ([String]): The roles assigned to the user, e.g., ["ROLE_USER", "ROLE_ADMIN"].
- `tierLevel` (Int): The user's tier level.
- `tierPoint` (Float): The points accumulated by the user for their tier level.
- `provider` (String): The OAuth2 provider used for registration, e.g., "google".
- `providerId` (String): The provider-specific ID for the user.
- `notifySetting` (Int): The notification settings represented as a bitfield.
- `avatar` (UserAvatar): The user's avatar details.
- `security` ([UserSecurity]): The user's security settings.
- `verify` (UserVerify): The user's verification statuses.

### Type: `UserAvatar`

Represents the avatar information associated with a user.

#### Schema:
```graphql
type UserAvatar {
  id: Int,
  regDate: Float,
  updateDate: Float,
  deleted: Int,
  purchased: String,
  selected: String,
  prefix: String,
  name: String
}
```

#### Fields

- `id` (Int): The unique identifier for the user's avatar.
- `regDate` (Float): The registration date of the avatar as a Unix timestamp.
- `updateDate` (Float): The last update date of the avatar's information as a Unix timestamp.
- `deleted` (Int): Indicates if the avatar is deleted (0 for not deleted, 1 for deleted).
- `purchased` (String): JSON string representing the purchased avatar components.
- `selected` (String): JSON string representing the selected avatar components.
- `prefix` (String): Prefix for the avatar, e.g., "Tesla".
- `name` (String): Name for the avatar, e.g., "12".

### Type: `UserSecurity`

Represents the security settings associated with a user.

#### Schema:
```graphql
type UserSecurity {
  id: Int,
  regDate: Float,
  updateDate: Float,
  deleted: Int,
  authType: String,
  tfaEnabled: Boolean
}
```

#### Fields

- `id` (Int): The unique identifier for the security settings.
- `regDate` (Float): The registration date of the security settings as a Unix timestamp.
- `updateDate` (Float): The last update date of the security settings as a Unix timestamp.
- `deleted` (Int): Indicates if the security settings are deleted (0 for not deleted, 1 for deleted).
- `authType` (String): The authentication type, e.g., "password", "oauth2".
- `tfaEnabled` (Boolean): Indicates if two-factor authentication is enabled.

### Type: `UserVerify`

Represents the verification statuses associated with a user.

#### Schema:
```graphql
type UserVerify {
  id: Int,
  regDate: Float,
  updateDate: Float,
  deleted: Int,
  emailVerified: Boolean,
  phoneVerified: Boolean,
  kycVerified: Boolean,
  amlVerified: Boolean,
  kybVerified: Boolean
}
```

#### Fields

- `id` (Int): The unique identifier for the verification statuses.
- `regDate` (Float): The registration date of the verification statuses as a Unix timestamp.
- `updateDate` (Float): The last update date of the verification statuses as a Unix timestamp.
- `deleted` (Int): Indicates if the verification statuses are deleted (0 for not deleted, 1 for deleted).
- `emailVerified` (Boolean): Indicates if the email is verified.
- `phoneVerified` (Boolean): Indicates if the phone number is verified.
- `kycVerified` (Boolean): Indicates if the KYC (Know Your Customer) verification is completed.
- `amlVerified` (Boolean): Indicates if the AML (Anti-Money Laundering) verification is completed.
- `kybVerified` (Boolean): Indicates if the KYB (Know Your Business) verification is completed.