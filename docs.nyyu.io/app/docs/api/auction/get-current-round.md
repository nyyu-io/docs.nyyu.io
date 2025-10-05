---
id: get-current-round
title: Get Current Round
sidebar_label: Get Current Round
sidebar_position: 1
---

The `getCurrentRound` query is used to retrieve information about the current round, which could be an auction or presale. At any given time, there must be only one opened or countdown round. This query can be used to determine the appropriate landing page based on the round status.

### Query: `getCurrentRound`

#### Schema:
```graphql
getCurrentRound: CurrentRound
```

#### Parameters

- None

#### Return

The query returns a `CurrentRound` object which indicates the status of the current round. There are five possible cases:
- No any opened or countdown rounds
- Opened auction round
- Countdown auction round
- Opened presale round
- Countdown presale round

### Example Query

The following is an example of how to use the `getCurrentRound` query to retrieve the current round information:

```graphql
query {
  getCurrentRound {
    status,
    type,
    startTime,
    endTime
  }
}
```

In this example, the query retrieves the current round's status, type, start time, and end time. The returned `CurrentRound` object will help determine the appropriate landing page based on the round status. 

Possible values for `status` and `type`:
- `status`: "opened", "countdown", or "none"
- `type`: "auction" or "presale"