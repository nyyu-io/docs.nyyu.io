---
id: get-avatar-profiles
title: Get Avatar Profiles
sidebar_label: Get Avatar Profiles
sidebar_position: 1
---

The `getAvatars` query is used to retrieve all avatar profiles available in the system.

### Query: `getAvatars`

#### Schema:
```graphql
getAvatars: [AvatarProfile]
```

#### Parameters

- None

#### Return

The query returns a list of all `AvatarProfile` objects.

### Example Query

The following is an example of how to use the `getAvatars` query to retrieve all avatar profiles:

```graphql
query {
  getAvatars {
    id,
    name,
    imageUrl,
    description
  }
}
```

In this example, the query retrieves all avatar profiles. Each `AvatarProfile` object in the returned list includes the `id`, `name`, `imageUrl`, and `description` of the avatar.