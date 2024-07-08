---
id: avatar-summary
title: Avatar API Introduction
sidebar_label: Avatar API Introduction
sidebar_position: 1
---

The Avatar system includes various components and profiles to represent users' avatars. These include components (such as accessories), profiles (combinations of components), and avatar sets (groups of components).

### Concepts

- **Component**: An accessory for avatars, such as hats or facial features. Each component has a `groupId` (kind) and a `compId` (unique ID).
- **GroupId**: The category of components (e.g., hats, hairColor).
- **CompId**: A unique ID for each component (auto-generated as an integer).
- **Profile**: A combination of multiple components.
- **AvatarSet**: A model representing a set of components with `groupId` and `compId`.

### Authority

- **Admin Role**: Required for creating and updating components and profiles.
- **User Role**: Sufficient for retrieving avatars.

### Types

#### AvatarComponent
Represents an individual component of an avatar.

```graphql
type AvatarComponent {
  groupId: String!,
  compId: Int!,
  tierLevel: Int,
  price: Float,
  limited: Int,
  purchased: Int,
  svg: String,
  width: Int,
  top: Int,
  left: Int
}
```

##### Fields
- `groupId` (String!): The category of the component (e.g., "hats").
- `compId` (Int!): The unique ID of the component.
- `tierLevel` (Int): The tier level required to use the component.
- `price` (Float): The price of the component.
- `limited` (Int): The maximum number of components that can be sold.
- `purchased` (Int): The number of components purchased.
- `svg` (String): The SVG content of the component.
- `width` (Int): The width of the component as a percentage.
- `top` (Int): The top margin of the component.
- `left` (Int): The left margin of the component.

#### AvatarProfile
Represents a combination of avatar components, forming a profile.

```graphql
type AvatarProfile {
  id: Int!,
  regDate: Float,
  updateDate: Float,
  deleted: Int,
  fname: String!,
  surname: String,
  skillSet: [SkillSet],
  avatarSet: [AvatarSet],
  hairColor: String,
  factsSet: [AvatarFacts],
  details: String
}
```

##### Fields
- `id` (Int!): The unique identifier for the avatar profile.
- `regDate` (Float): The registration date of the avatar profile.
- `updateDate` (Float): The last update date of the avatar profile.
- `deleted` (Int): Indicates if the profile is deleted (0 for not deleted, 1 for deleted).
- `fname` (String!): The first name associated with the avatar profile.
- `surname` (String): The surname associated with the avatar profile.
- `skillSet` ([SkillSet]): A list of skills associated with the avatar profile.
- `avatarSet` ([AvatarSet]): A list of avatar sets associated with the profile.
- `hairColor` (String): The hair color of the avatar profile.
- `factsSet` ([AvatarFacts]): A list of facts associated with the avatar profile.
- `details` (String): Additional details about the avatar profile.

#### SkillSet
Represents a skill associated with an avatar profile.

```graphql
type SkillSet {
  id: Int,
  name: String!,
  rate: Int
}
```

##### Fields
- `id` (Int): The unique identifier for the skill.
- `name` (String!): The name of the skill.
- `rate` (Int): The rating of the skill (number of stars).

#### AvatarSet
Represents a set of avatar components.

```graphql
type AvatarSet {
  id: Int!,
  regDate: Float,
  updateDate: Float,
  deleted: Int,
  groupId: String,
  compId: Int
}
```

##### Fields
- `id` (Int!): The unique identifier for the avatar set.
- `regDate` (Float): The registration date of the avatar set.
- `updateDate` (Float): The last update date of the avatar set.
- `deleted` (Int): Indicates if the set is deleted (0 for not deleted, 1 for deleted).
- `groupId` (String): The category of the component.
- `compId` (Int): The unique ID of the component.

#### AvatarSetInput
Input type for setting avatar components.

```graphql
input AvatarSetInput {
  groupId: String,
  compId: Int
}
```

##### Fields
- `groupId` (String): The category of the component.
- `compId` (Int): The unique ID of the component.

#### AvatarFacts
Represents a fact associated with an avatar profile.

```graphql
type AvatarFacts {
  id: Int!,
  regDate: Float,
  updateDate: Float,
  deleted: Int,
  topic: String,
  detail: String
}
```

##### Fields
- `id` (Int!): The unique identifier for the fact.
- `regDate` (Float): The registration date of the fact.
- `updateDate` (Float): The last update date of the fact.
- `deleted` (Int): Indicates if the fact is deleted (0 for not deleted, 1 for deleted).
- `topic` (String): The topic of the fact.
- `detail` (String): The detail content of the fact.

#### FactsInput
Input type for setting avatar facts.

```graphql
input FactsInput {
  topic: String,
  detail: String
}
```

##### Fields
- `topic` (String): The topic of the fact.
- `detail` (String): The detail content of the fact.