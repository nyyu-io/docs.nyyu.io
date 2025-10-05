---
id: update-avatar-profile
title: Update Avatar Profile
sidebar_label: Update Avatar Profile
sidebar_position: 1
---

:::note
The functions described is accessible only to users with ADMIN privileges.
:::

The `updateAvatarProfile` mutation allows an admin to update the details of an avatar profile.

### Mutation: `updateAvatarProfile`

#### Schema:
```graphql
updateAvatarProfile(
  id: Int!,
  fname: String,
  surname: String,
  skillSet: [SkillSetInput],
  avatarSet: [AvatarSetInput],
  factsSet: [FactsInput],
  hairColor: String,
  details: String
): Boolean
```

#### Parameters

- `id` (Int): The unique ID of the avatar profile to update. This field is mandatory.
- `fname` (String): The first name of the avatar. This field is optional.
- `surname` (String): The surname of the avatar. This field is optional.
- `skillSet` ([SkillSetInput]): The skill set of the avatar. This field is optional.
- `avatarSet` ([AvatarSetInput]): The avatar set details. This field is optional.
- `factsSet` ([FactsInput]): The facts set related to the avatar. This field is optional.
- `hairColor` (String): The hair color of the avatar. This field is optional.
- `details` (String): Additional details about the avatar. This field is optional.

#### Return

The mutation returns a boolean value:

- `true`: Indicates that the update was successful.
- `false`: Indicates that the update failed.

### Example Mutation

The following is an example of how to use the `updateAvatarProfile` mutation to update an avatar profile:

```graphql
mutation {
  updateAvatarProfile(
    id: 123,
    fname: "John",
    surname: "Doe",
    skillSet: [{ name: "Coding", level: "Expert" }],
    avatarSet: [{ type: "Warrior", level: 10 }],
    factsSet: [{ fact: "Loves coding" }],
    hairColor: "Brown",
    details: "A skilled coder with a passion for technology."
  )
}
```

In this example, the mutation updates the avatar profile with the ID `123`, setting the first name to "John", surname to "Doe", and updating the skill set, avatar set, facts set, hair color, and additional details. The return value will indicate whether the update was successful (`true`) or not (`false`).