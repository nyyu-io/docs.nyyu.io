:::note
The functions described is accessible only to users with ADMIN privileges.
:::

The `createNewComponent` mutation allows an admin to create a new avatar component with specified attributes.

### Mutation: `createNewComponent`

#### Schema:
```graphql
mutation createNewComponent(
  groupId: String!,
  tierLevel: Int!,
  price: Float!,
  limited: Int!,
  svg: String!,
  width: Int!,
  top: Int!,
  left: Int!
): AvatarComponent
```

#### Parameters

- `groupId` (String): The kind name of each component, for example, "hats". This field is mandatory.
- `tierLevel` (Int): The level that the user must reach to purchase the component. This field is mandatory.
- `price` (Float): The amount of NDB token required to purchase the component. This field is mandatory.
- `limited` (Int): The number of components that can be sold. This field is mandatory.
- `svg` (String): The content of the SVG file. This field is mandatory.
- `width` (Int): The width percentage of the avatar. This field is mandatory.
- `top` (Int): The top margin of the component. This field is mandatory.
- `left` (Int): The left margin of the component. This field is mandatory.

#### Return

The mutation returns the created `AvatarComponent` if successful, otherwise it returns `null`.

### Example Mutation

The following is an example of how to use the `createNewComponent` mutation to create a new avatar component:

```graphql
mutation {
  createNewComponent(
    groupId: "hats",
    tierLevel: 3,
    price: 10.0,
    limited: 50,
    svg: "<svg>...</svg>",
    width: 30,
    top: 5,
    left: 10
  ) {
    id,
    groupId,
    tierLevel,
    price,
    limited,
    svg,
    width,
    top,
    left
  }
}
```

In this example, the mutation creates a new avatar component with the specified attributes such as `groupId`, `tierLevel`, `price`, `limited`, `svg`, `width`, `top`, and `left`. The return value includes the created `AvatarComponent` with all specified attributes.