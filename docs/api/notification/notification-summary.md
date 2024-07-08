---
id: notification-summary
title: Notification API Introduction
sidebar_label: Notification API Introduction
sidebar_position: 1
---

### Notification Type
Represents a type of notification.

```graphql
type NotificationType {
  type: String,
  index: Int
}
```

#### Fields
- `type` (String): The name of the notification type.
- `index` (Int): The index of the notification type.

### Notification
Represents a notification sent to a user.

```graphql
type Notification {
  id: Int,
  userId: Int,
  timeStamp: Float,
  nType: Int,
  read: Boolean,
  title: String,
  msg: String
}
```

#### Fields
- `id` (Int): The ID of the notification.
- `userId` (Int): The ID of the user receiving the notification.
- `timeStamp` (Float): The timestamp of when the notification was sent.
- `nType` (Int): The type of notification (as an integer value).
- `read` (Boolean): Whether the notification has been read.
- `title` (String): The title of the notification.
- `msg` (String): The message content of the notification.

### Notification Settings

To speed up sending notifications, there is an integer value for notification settings in the user table. All notification settings are stored as bits of a binary value.

#### Binary Value Mapping

| Binary Value         | Notification Type Name   | Notification Type Value |
|----------------------|--------------------------|-------------------------|
| 0000,0000,0000,0001b | NEW ROUND STARTED        | 0                       |
| 0000,0000,0000,0010b | BID RANKING UPDATED      | 1                       |
| 0000,0000,0000,0100b | ROUND FINISHED           | 2                       |
| 0000,0000,0000,1000b | PAYMENT RESULT           | 3                       |
| 0000,0000,0001,0000b | VERIFICATION RESULT      | 4                       |
| ...                  | ...                      | ...                     |

If a user has enabled `BID RANKING UPDATED`, `PAYMENT RESULT`, and `VERIFICATION RESULT`, their setting value will be `0001,1010b`.

### Example Usage

If you want to check a user's notification settings, you can decode the integer value stored in their profile to determine which notifications are enabled. For instance:

- Binary value `0001,1010b` corresponds to decimal `26`.
- This means the user has enabled notifications for:
  - `BID RANKING UPDATED` (bit 1)
  - `PAYMENT RESULT` (bit 3)
  - `VERIFICATION RESULT` (bit 4)

These bits are set to `1` in the user's notification settings integer value.