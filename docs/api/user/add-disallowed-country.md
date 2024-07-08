---
id: add-disallowed-country
title: Add Disallowed Country
sidebar_label: Add Disallowed Country
sidebar_position: 15
---

:::note
The functions described is accessible only to users with ADMIN privileges.
:::

The `addDisallowed` mutation allows an admin to add a new country to the disallowed list, preventing users from that country from accessing the system.

### Mutation: `addDisallowed`

#### Schema:
```graphql
addDisallowed(
  country: String!,
  countryCode: String!
): GeoLocation
```

#### Parameters

- `country` (String): The name of the country to be disallowed. This field is mandatory.
- `countryCode` (String): The country code (e.g., ISO 3166-1 alpha-3) of the country to be disallowed. This field is mandatory.

#### Return

The mutation returns a `GeoLocation` object indicating the result of the operation.

### Example Mutation

The following is an example of how to use the `addDisallowed` mutation to add a country to the disallowed list:

```graphql
mutation {
  addDisallowed(
    country: "Exampleland",
    countryCode: "EXL"
  ) {
    country,
    countryCode
  }
}
```

In this example, the mutation adds the country "Exampleland" with the country code "EXL" to the disallowed list. The return value includes the country and country code of the newly added disallowed country.