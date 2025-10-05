The `setNotificationReadFlag` mutation allows a user to mark a notification as read.

### Mutation: `setNotificationReadFlag`

#### Schema:
```graphql
setNotificationReadFlag(
  id: Int!
): Notification
```

#### Parameters

- `id` (Int): The ID of the notification to mark as read. This field is mandatory.

#### Return

The mutation returns the updated `Notification` object.

### Example Mutation

The following is an example of how to use the `setNotificationReadFlag` mutation to mark a notification as read:

```graphql
mutation {
  setNotificationReadFlag(
    id: 123
  ) {
    id,
    userId,
    timeStamp,
    nType,
    read,
    title,
    msg
  }
}
```

### Return

The example returns the updated `Notification` object with details such as `id`, `userId`, `timeStamp`, `nType`, `read`, `title`, and `msg`.

In this example, the mutation marks the notification with ID `123` as read. The return value includes the updated details of the `Notification`, showing that the `read` flag has been set.