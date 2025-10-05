---
id: faqs
title: API FAQs
sidebar_label: API FAQs
sidebar_position: 3
---

## Frequently Asked Questions

### How do I get started with the NYYU API?
Refer to our [Getting Started](/docs/api/getting-started) guide for detailed instructions on how to use our APIs.

### What authentication method do you use?
We use OAuth2 for authentication across all our APIs.

### What is the difference between NYYU API, NYYU PAY, and NYYU NODE?
NYYU API is the core system API based on Java Spring Boot and GraphQL. NYYU PAY is a Node.js-based payment service using WebSocket, and NYYU NODE is a Node.js-based service supporting multiple cryptocurrencies via WebSocket.

### How do I authenticate with NYYU APIs?
Obtain an OAuth2 token and include it in the `Authorization` header of your requests. See the [Authentication and Authorization](/docs/api/getting-started#authentication-and-authorization) section for details.

### What are the endpoints for NYYU PAY and NYYU NODE?
- NYYU PAY endpoint: `wss://api.pay.nyyu.io`
- NYYU NODE endpoint: `wss://api.node.nyyu.io`

### How do I initiate a payment using NYYU PAY?
Connect to the WebSocket endpoint and send a message with the payment details. See [Using NYYU PAY](/) for an example.

### How do I get the balance of a cryptocurrency using NYYU NODE?
Connect to the WebSocket endpoint and send a message requesting the balance. See [Using NYYU NODE](/) for an example.

### What scopes are required for accessing NYYU APIs?
Scopes depend on the specific API being accessed. Common scopes include "openid", "profile", and "email".

### Can I use NYYU APIs for commercial applications?
Yes, NYYU APIs are designed to support both personal and commercial applications.

### How do I handle errors returned by NYYU APIs?
Errors are returned with appropriate HTTP status codes and error messages. Refer to the [Error Handling](/) section for details.

### What is the rate limit for NYYU APIs?
Rate limits vary by endpoint. Refer to the [Rate Limits](/) section for specific details.

### How do I update my user profile using NYYU API?
Use the appropriate mutation in the GraphQL API to update user profile details. See [User Profile](/docs/api/user/user-summary) for examples.

### How do I manage my avatar using NYYU API?
Use the provided mutations for setting and updating avatar components. See [Avatar Management](/docs/api/avatar/avatar-summary) for details.

### How do I participate in an auction using NYYU API?
Use the provided mutations for placing and increasing bids. See [Auction Participation](/docs/api/auction/auction-summary) for examples.

### What is the process for verifying my account?
Follow the steps outlined in the [Account Verification](/docs/api/registration/verify-account) section, which includes sending and confirming verification codes.

### How do I handle two-factor authentication (2FA) with NYYU API?
Use the mutations for requesting and confirming 2FA setup. See [Two-Factor Authentication](/docs/api/registration/request-2fa) for details.

### How do I retrieve notifications using NYYU API?
Use the queries provided to fetch notifications. See [Notifications](/docs/api/notification/notification-summary) for more information.

### What should I do if I encounter a problem with the NYYU API?
Check the [Troubleshooting](/) section for common issues and solutions, or contact support for further assistance.

### How do I get the latest updates and changes to NYYU APIs?
Refer to the [Changelog](/docs/changelog/changelog) section for the latest updates and changes to our APIs.
