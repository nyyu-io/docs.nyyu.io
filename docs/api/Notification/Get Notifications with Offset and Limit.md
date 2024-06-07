The `getNotifications` query is used to retrieve a paginated list of notifications for the current user.

### Query: `getNotifications`

#### Schema:
```graphql
getNotifications(
  offset: Int,
  limit: Int
): [Notification]
```

#### Parameters

- `offset` (Int): The number of notifications to skip from the start. This field is optional.
- `limit` (Int): The number of notifications to retrieve. This field is optional but should be specified to limit the results.

#### Return

The query returns a list of `Notification` objects representing the paginated notifications.

### Example Query

The following is an example of how to use the `getNotifications` query to retrieve a paginated list of notifications:

```graphql
query {
  getNotifications(
    offset: 0,
    limit: 10
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

The example returns a list of `Notification` objects with details such as `id`, `userId`, `timeStamp`, `nType`, `read`, `title`, and `msg`.

In this example, the query retrieves the first 10 notifications (`offset` is set to `0` and `limit` is set to `10`) for the current user. Each `Notification` object in the returned list includes details like `id`, `userId`, `timeStamp`, `nType`, `read`, `title`, and `msg`.