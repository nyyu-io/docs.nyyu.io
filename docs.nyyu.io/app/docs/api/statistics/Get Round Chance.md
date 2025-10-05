The `getRoundChance` query is used to retrieve the winning and failing rates for all rounds.

### Query: `getRoundChance`

#### Schema:
```graphql
getRoundChance: [RoundChance]
```

#### Parameters

- None

#### Return

The query returns a list of `RoundChance` objects representing the winning and failing rates for all rounds.

### Example Query

The following is an example of how to use the `getRoundChance` query to retrieve the winning and failing rates:

```graphql
query {
  getRoundChance {
    roundNumber,
    winRate,
    failedRate
  }
}
```

### Return

The example returns a list of `RoundChance` objects with details such as `roundNumber`, `winRate`, and `failedRate`.

In this example, the query retrieves the winning and failing rates for all rounds, including the round number, win rate, and failed rate for each round.