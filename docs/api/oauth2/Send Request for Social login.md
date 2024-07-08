To initiate a social login request, construct the authorization URL using the base API URL, OAuth2 provider, and redirect URI. This URL will direct the user to the OAuth2 provider's authorization page.

### Example Authorization URL

To create an authorization URL for Google OAuth2:

```plaintext
http://localhost:8080/oauth2/authorize/google?redirect_uri=http://localhost:3000/oauth2/redirect
```

### Parameters

- `API_BASE_URL`: The base URL for the API.
- `OAUTH2_REDIRECT_URI`: The redirect URI where the OAuth2 provider will send the user after authorization.

### Example Authorization URL for Production

Replace `localhost:8080` and `localhost:3000` with the production API and frontend addresses:

```plaintext
https://api.yourdomain.com/oauth2/authorize/google?redirect_uri=https://app.yourdomain.com/oauth2/redirect
```

### URL Breakdown

- **API_BASE_URL**: `https://api.yourdomain.com`
  - This is the production base URL for your API.
- **/oauth2/authorize/google**: This path specifies the OAuth2 provider (Google in this case) for authorization.
- **?redirect_uri=**: This query parameter specifies where the OAuth2 provider should redirect after successful authorization.
- **OAUTH2_REDIRECT_URI**: `https://app.yourdomain.com/oauth2/redirect`
  - This is the production URL for your frontend application where users will be redirected after completing the authorization.

### Example Authorization URL with Replacement

```plaintext
https://api.yourdomain.com/oauth2/authorize/google?redirect_uri=https://app.yourdomain.com/oauth2/redirect
```

### Steps to Initiate Social Login

1. **Construct the Authorization URL**: Use the provided template and replace `API_BASE_URL` and `OAUTH2_REDIRECT_URI` with the appropriate production URLs.
2. **Redirect the User**: When the user clicks the social login button, redirect them to the constructed URL.
3. **Handle the Redirect**: The OAuth2 provider will redirect the user to `OAUTH2_REDIRECT_URI` with an authorization code or error response.
4. **Complete the Login**: Use the authorization code to exchange for an access token on the server side and complete the login process.

This ensures the correct flow for social login using OAuth2 with the provided API and frontend URLs.