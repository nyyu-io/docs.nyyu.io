:::note
The functions described is accessible only to users with ADMIN privileges.
:::

The `createNewAvatar` mutation allows an admin to create a new avatar profile with specified attributes.

### Mutation: `createNewAvatar`

#### Schema:
```graphql
createNewAvatar(
  fname: String!,
  surname: String!,
  skillSet: [SkillSetInput]!,
  avatarSet: [AvatarSetInput],
  factsSet: [FactsInput],
  hairColor: String,
  details: String
): AvatarProfile
```

#### Parameters

- `fname` (String): The first name of the avatar profile. This field is mandatory.
- `surname` (String): The surname of the avatar profile. This field is mandatory.
- `skillSet` ([SkillSetInput]): A list of skills for the avatar profile. Each skill includes:
  - `name` (String): The name of the skill.
  - `rate` (Int): The number of stars rating the skill.
- `avatarSet` ([AvatarSetInput]): A list of avatar components. Each component includes:
  - `groupId` (String): The group ID of the component.
  - `compId` (Int): The component ID.
- `factsSet` ([FactsInput]): A list of facts about the avatar. Each fact includes:
  - `topic` (String): The topic of the fact.
  - `detail` (String): The detailed content of the topic.
- `hairColor` (String): The hair color of the avatar. This field is optional.
- `details` (String): Additional details about the avatar. This field is optional.

#### Return

The mutation returns the created `AvatarProfile` if successful, otherwise it returns `null`.

### Example Mutation

The following is an example of how to use the `createNewAvatar` mutation to create a new avatar profile:

```graphql
mutation {
  createNewAvatar(
    fname: "Nicola",
    surname: "Tesla",
    skillSet: [
      { name: "Inventing", rate: 5 },
      { name: "Electrical Engineering", rate: 5 }
    ],
    avatarSet: [
      { groupId: "engineers", compId: 101 }
    ],
    factsSet: [
      { topic: "Achievements", detail: "Developed the modern AC electricity supply system" }
    ],
    hairColor: "Black",
    details: "A visionary inventor known for his contributions to the development of alternating current (AC) power systems."
  ) {
    id,
    fname,
    surname,
    skillSet {
      name,
      rate
    },
    avatarSet {
      groupId,
      compId
    },
    factsSet {
      topic,
      detail
    },
    hairColor,
    details
  }
}
```

In this example, the mutation creates a new avatar profile with the first name "Nicola" and surname "Tesla", along with specified skills, avatar components, facts, hair color, and additional details. The return value includes the created `AvatarProfile` with all specified attributes.