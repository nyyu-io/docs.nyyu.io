:::note
The functions described is accessible only to users with ADMIN privileges.
:::

The `addNewNotificationType2` mutation allows an admin to add a new notification type to the system.

### Mutation: `addNewNotificationType2`

#### Schema:
```graphql
addNewNotificationType2(
  nType: Int!,
  tName: String!,
  broadcast: Boolean!
): NotificationType2
```

#### Parameters

- `nType` (Int): Unique value to identify the notification type. This field is mandatory.
- `tName` (String): The name of the notification type (e.g., BID RANKING UPDATED). This field is mandatory.
- `broadcast` (Boolean): Indicates if the notification is broadcast or unicast. Currently not supported. This field is mandatory.

#### Return

The mutation returns a `NotificationType2` object representing the created notification type if successful. If the notification type is successfully created, it returns the message: `"Notification Type created successfully!"`.

### Example Mutation

The following is an example of how to use the `addNewNotificationType2` mutation to add a new notification type:

```graphql
mutation {
  addNewNotificationType2(
    nType: 4,
    tName: "VERIFICATION RESULT",
    broadcast: false
  ) {
    nType,
    tName,
    broadcast
  }
}
```

### Return

The example returns the `NotificationType2` object with details such as `nType`, `tName`, and `broadcast`. If the operation is successful, it also returns the message `"Notification Type created successfully!"`.

In this example, the mutation adds a new notification type with `nType` set to `4`, `tName` set to `"VERIFICATION RESULT"`, and `broadcast` set to `false`. The return value includes the details of the created `NotificationType2` and a success message.