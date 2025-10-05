---
id: getting-started
title: Getting Started
sidebar_label: Getting Starteds
sidebar_position: 1
---

## Welcome to NYYU API Documentation

Our comprehensive APIs provide a wide range of functionalities to support your application development. This documentation will guide you through the essentials to get started with our APIs, system architecture, and integration process.

Our system consists of three main APIs:

- **NYYU API**: Core system APIs based on Java Spring Boot and GraphQL.
- **NYYU PAY**: Payment service APIs based on Node.js and WebSocket, similar to CoinPayments.
- **NYYU NODE**: Node service APIs based on Node.js and WebSocket, supporting multiple cryptocurrencies like ETH, BTC, BNB, SOLANA, and Polygon.

Let's dive in!

## System Architecture

### System Architecture Overview

Our architecture is designed to be modular and scalable, with a focus on microservices. Here’s an overview of our architecture:

#### NYYU Core System
The core system is based on Java Spring Boot and GraphQL. It handles the main functionalities of our platform.

<iframe width="768" height="432" src="https://miro.com/app/live-embed/uXjVMDMnXHk=/?moveToViewport=-1462,-286,2144,1178&embedId=615495750250" frameborder="0" scrolling="no" allow="fullscreen; clipboard-read; clipboard-write" allowfullscreen></iframe>

#### NYYU PAY
NYYU PAY is our payment service for cryptocurrencies, similar to CoinPayments. It is based on Node.js and uses WebSocket for communication.

#### NYYU NODE
NYYU NODE supports various cryptocurrencies and is also based on Node.js with WebSocket communication.

### Business Architecture of Real-Estate Marketplace

<iframe width="768" height="432" src="https://miro.com/app/live-embed/uXjVK0lo6DM=/?moveToViewport=-5582,-3561,13274,7294&embedId=662295510528" frameborder="0" scrolling="no" allow="fullscreen; clipboard-read; clipboard-write" allowfullscreen></iframe>

### Listing Process of Real-Estate Marketplace

<iframe width="768" height="432" src="https://miro.com/app/live-embed/uXjVK0lpg4Q=/?moveToViewport=-8428,-4602,11556,6350&embedId=851756319324" frameborder="0" scrolling="no" allow="fullscreen; clipboard-read; clipboard-write" allowfullscreen></iframe>

### APIs of the Real-Estate Marketplace

<iframe width="768" height="432" src="https://miro.com/app/live-embed/uXjVK0l2Rhw=/?moveToViewport=-14566,-8349,14288,7851&embedId=590741749731" frameborder="0" scrolling="no" allow="fullscreen; clipboard-read; clipboard-write" allowfullscreen></iframe>

## Using Our APIs

### Using NYYU API

The NYYU API is built using Java Spring Boot and GraphQL, offering a robust and flexible interface for interacting with our core system.

#### Endpoint
`/graphql`

#### Example Query

```graphql
query {
  getUser(id: 1) {
    id
    name
    email
  }
}
```

### Using NYYU PAY

NYYU PAY is a Node.js-based payment service using WebSocket for communication.

#### Endpoint
wss://api.pay.nyyu.com

#### Example

```javascript
const WebSocket = require('ws');
const ws = new WebSocket('wss://api.pay.nyyu.com');

ws.on('open', function open() {
  ws.send(JSON.stringify({ action: 'initiatePayment', amount: 1.0, currency: 'BTC' }));
});

ws.on('message', function incoming(data) {
  console.log(data);
});
```

### Using NYYU NODE

NYYU NODE is a Node.js-based service supporting multiple cryptocurrencies via WebSocket.

#### Endpoint
wss://api.node.nyyu.com

#### Example

```javascript
const WebSocket = require('ws');
const ws = new WebSocket('wss://api.node.nyyu.com');

ws.on('open', function open() {
  ws.send(JSON.stringify({ action: 'getBalance', currency: 'ETH' }));
});

ws.on('message', function incoming(data) {
  console.log(data);
});
```

## Authentication and Authorization

Our APIs use OAuth2 for authentication and authorization.

### NYYU API

To authenticate with the NYYU API, obtain an OAuth2 token and include it in the `Authorization` header of your requests.

### Example

```graphql
{
  "Authorization": "Bearer YOUR_ACCESS_TOKEN"
}
```

### NYYU PAY and NYYU NODE

These services also use OAuth2 tokens for authentication.

```javascript
ws.on('open', function open() {
  ws.send(JSON.stringify({ token: 'YOUR_ACCESS_TOKEN', action: 'initiatePayment', amount: 1.0, currency: 'BTC' }));
});

## NYYU API Examples

### Query User

```graphql
query {
  getUser(id: 1) {
    id
    name
    email
  }
}
```

## NYYU PAY Examples

### Initiate Payment

```javascript
ws.on('open', function open() {
  ws.send(JSON.stringify({ action: 'initiatePayment', amount: 1.0, currency: 'BTC' }));
});
```

## NYYU NODE Examples

### Get Balance

```javascript
ws.on('open', function open() {
  ws.send(JSON.stringify({ action: 'getBalance', currency: 'ETH' }));
});
```