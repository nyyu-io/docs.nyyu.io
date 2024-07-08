:::note
The functions described is accessible only to users with ADMIN privileges.
:::

The `addOAuth2Registration` mutation allows an admin to add or update OAuth2 registration details for social login providers into the database.

### Mutation: `addOAuth2Registration`

#### Schema:
```graphql
addOAuth2Registration(
  registrationId: String!,
  clientId: String,
  clientSecret: String,
  clientAuthenticationMethod: String,
  authorizationGrantType: String,
  redirectUriTemplate: String,
  scope: [String],
  authorizationUri: String,
  tokenUri: String,
  userInfoUri: String,
  userNameAttributeName: String,
  jwkSetUri: String,
  clientName: String
): OAuth2Registration
```

#### Parameters

- `registrationId` (String!): Unique identifier for the OAuth2 provider. This field is mandatory.
- `clientId` (String): The client ID assigned to the application by the OAuth2 provider.
- `clientSecret` (String): The client secret assigned to the application by the OAuth2 provider.
- `clientAuthenticationMethod` (String): Method used to authenticate the client (e.g., "BASIC").
- `authorizationGrantType` (String): Type of grant used for authorization (e.g., "authorization_code").
- `redirectUriTemplate` (String): Template for the redirect URI, often including placeholders such as `{baseUrl}/oauth2/callback/{registrationId}`.
- `scope` ([String]): List of scopes requested from the OAuth2 provider (e.g., ["openid", "profile", "email"]).
- `authorizationUri` (String): URI for the authorization endpoint.
- `tokenUri` (String): URI for the token endpoint.
- `userInfoUri` (String): URI for the user info endpoint.
- `userNameAttributeName` (String): Attribute name in the user info endpoint response used as the username.
- `jwkSetUri` (String): URI for the JSON Web Key Set.
- `clientName` (String): Name of the OAuth2 provider.

#### Return

The mutation returns the newly created or updated `OAuth2Registration` object.

### Example Mutation

The following is an example of how to use the `addOAuth2Registration` mutation to add or update OAuth2 registration details for a social login provider:

```graphql
mutation {
  addOAuth2Registration(
    registrationId: "google",
    clientId: "217015743019-arfgls5skjg3tehl67gf8sitbf0rq9k9.apps.googleusercontent.com",
    clientSecret: "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",
    clientAuthenticationMethod: "BASIC",
    authorizationGrantType: "authorization_code",
    redirectUriTemplate: "{baseUrl}/oauth2/callback/google",
    scope: ["openid", "profile", "email"],
    authorizationUri: "https://accounts.google.com/o/oauth2/v2/auth",
    tokenUri: "https://www.googleapis.com/oauth2/v4/token",
    userInfoUri: "https://www.googleapis.com/oauth2/v3/userinfo",
    userNameAttributeName: "sub",
    jwkSetUri: "https://www.googleapis.com/oauth2/v3/certs",
    clientName: "Google"
  ) {
    registrationId,
    clientId,
    clientSecret,
    clientAuthenticationMethod,
    authorizationGrantType,
    redirectUriTemplate,
    scope,
    authorizationUri,
    tokenUri,
    userInfoUri,
    userNameAttributeName,
    jwkSetUri,
    clientName
  }
}
```

### Return

The example returns the `OAuth2Registration` object with details such as `registrationId`, `clientId`, `clientSecret`, `clientAuthenticationMethod`, `authorizationGrantType`, `redirectUriTemplate`, `scope`, `authorizationUri`, `tokenUri`, `userInfoUri`, `userNameAttributeName`, `jwkSetUri`, and `clientName`.

In this example, the mutation adds or updates the OAuth2 registration details for the Google OAuth2 provider. The return value includes the details of the created or updated `OAuth2Registration`.