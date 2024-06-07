:::note
The functions described is accessible only to users with ADMIN privileges.
:::

The `getPaginatedUsers` query is used to retrieve a paginated list of users. This query supports pagination through a key and limit system, allowing efficient retrieval of user data in chunks.

### Query: `getPaginatedUsers`

#### Schema:
```graphql
getPaginatedUsers(
  key: String,
  limit: Int!
): [User]
```

#### Parameters

- `key` (String): The exclusive start key, representing the last ID of the previous page. For the first page, this should be set to `null`. This field is optional.
- `limit` (Int): The number of users to retrieve per page. This field is mandatory.

#### Return

The query returns a list of users up to the specified limit.

### Example Query

The following is an example of how to use the `getPaginatedUsers` query to retrieve a paginated list of users:

```graphql
query {
  getPaginatedUsers(
    key: "93ccfa0f-3bc8-4cb9-b40b-d68cbc3b8c26",
    limit: 3
  ) {
    id,
    email
  }
}
```

In this example, the query retrieves up to 3 users starting after the user with the ID `93ccfa0f-3bc8-4cb9-b40b-d68cbc3b8c26`. The returned user objects include their `id` and `email`.