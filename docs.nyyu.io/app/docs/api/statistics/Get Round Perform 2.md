The `getRoundPerform2` query is used to retrieve additional performance metrics for all rounds, including minimum value, maximum value, and standard deviation.

### Query: `getRoundPerform2`

#### Schema:
```graphql
getRoundPerform2: [RoundPerform2]
```

#### Parameters

- None

#### Return

The query returns a list of `RoundPerform2` objects representing additional performance metrics for all rounds.

### Example Query

The following is an example of how to use the `getRoundPerform2` query to retrieve additional performance metrics:

```graphql
query {
  getRoundPerform2 {
    roundNumber,
    min,
    max,
    std
  }
}
```

### Return

The example returns a list of `RoundPerform2` objects with details such as `roundNumber`, `min`, `max`, and `std`.

In this example, the query retrieves additional performance metrics for all rounds, including the round number, minimum value, maximum value, and standard deviation for each round.