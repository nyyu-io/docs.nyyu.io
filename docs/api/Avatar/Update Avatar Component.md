:::note
The functions described is accessible only to users with ADMIN privileges.
:::

The `updateComponent` mutation allows an admin to update the details of an existing avatar component.

### Mutation: `updateComponent`

#### Schema:
```graphql
mutation updateComponent(
  groupId: String!,
  compId: String!,
  tierLevel: Int,
  price: Float,
  limited: Int,
  svg: String,
  width: Int,
  top: Int,
  left: Int
): AvatarComponent
```

#### Parameters

- `groupId` (String): The group ID of the component to update. This field is mandatory.
- `compId` (String): The unique ID of the component to update. This field is mandatory.
- `tierLevel` (Int): The tier level of the component. This field is optional.
- `price` (Float): The price of the component. This field is optional.
- `limited` (Int): The limit on the number of components available. This field is optional.
- `svg` (String): The SVG data of the component. This field is optional.
- `width` (Int): The width of the component. This field is optional.
- `top` (Int): The top position of the component. This field is optional.
- `left` (Int): The left position of the component. This field is optional.

#### Return

The mutation returns the updated `AvatarComponent` if successful, otherwise it returns `null` or an exception.

### Example Mutation

The following is an example of how to use the `updateComponent` mutation to update an avatar component:

```graphql
mutation {
  updateComponent(
    groupId: "engineers",
    compId: "101",
    tierLevel: 2,
    price: 9.99,
    limited: 100,
    svg: "<svg>...</svg>",
    width: 50,
    top: 10,
    left: 20
  ) {
    id,
    groupId,
    compId,
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

In this example, the mutation updates the avatar component with the group ID `engineers` and component ID `101`, setting the tier level, price, limit, SVG data, width, top, and left positions. The return value includes the updated `AvatarComponent` with all specified attributes.