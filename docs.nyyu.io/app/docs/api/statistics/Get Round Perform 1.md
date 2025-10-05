The `getRoundPerform1` query is used to retrieve performance metrics for all rounds, including token price and sold amount.

### Query: `getRoundPerform1`

#### Schema:
```graphql
getRoundPerform1: [RoundPerform1]
```

#### Parameters

- None

#### Return

The query returns a list of `RoundPerform1` objects representing the performance metrics for all rounds.

### Example Query

The following is an example of how to use the `getRoundPerform1` query to retrieve performance metrics:

```graphql
query {
  getRoundPerform1 {
    roundNumber,
    tokenPrice,
    soldAmount
  }
}
```

### Return

The example returns a list of `RoundPerform1` objects with details such as `roundNumber`, `tokenPrice`, and `soldAmount`.

In this example, the query retrieves the performance metrics for all rounds, including the round number, token price, and sold amount for each round.