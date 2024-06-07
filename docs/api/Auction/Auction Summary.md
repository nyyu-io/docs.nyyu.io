The `Auction` type represents an auction round within the system, including details about the auction's timing, tokens, status, and associated avatars.

### Types

#### Auction
Represents an auction round with details on timing, tokens, avatars, and status.

```graphql
type Auction {
  id: Int!,
  regDate: Float,
  updateDate: Float,
  deleted: Int,
  round: Int,
  startedAt: Float,
  endedAt: Float,
  totalToken: Float,
  minPrice: Float,
  avatar: [AvatarSet],
  token: Float,
  sold: Float,
  stats: AuctionStats,
  status: Int
}
```

##### Fields
- `id` (Int!): The unique identifier for the auction.
- `regDate` (Float): The registration date of the auction as a Unix timestamp.
- `updateDate` (Float): The last update date of the auction as a Unix timestamp.
- `deleted` (Int): Indicates if the auction is deleted (0 for not deleted, 1 for deleted).
- `round` (Int): The round number of the auction.
- `startedAt` (Float): The start time of the auction as a Unix timestamp.
- `endedAt` (Float): The end time of the auction as a Unix timestamp.
- `totalToken` (Float): The total number of tokens available in the auction.
- `minPrice` (Float): The minimum price per token in the auction.
- `avatar` ([AvatarSet]): A list of avatar sets associated with the auction.
- `token` (Float): Additional tokens allocated for avatar matching users.
- `sold` (Float): The amount of tokens sold in the auction.
- `stats` (AuctionStats): Statistics about the auction.
- `status` (Int): The status of the auction. Possible values:
  - `0`: PENDING
  - `1`: COUNTDOWN
  - `2`: STARTED
  - `3`: ENDED

#### AvatarSet
Represents a set of avatar components associated with an auction.

```graphql
type AvatarSet {
  id: Int!,
  regDate: Float,
  updateDate: Float,
  deleted: Int,
  groupId: String,
  compId: Int
}
```

##### Fields
- `id` (Int!): The unique identifier for the avatar set.
- `regDate` (Float): The registration date of the avatar set as a Unix timestamp.
- `updateDate` (Float): The last update date of the avatar set as a Unix timestamp.
- `deleted` (Int): Indicates if the set is deleted (0 for not deleted, 1 for deleted).
- `groupId` (String): The category of the component.
- `compId` (Int): The unique ID of the component.

#### AvatarSetInput
Input type for setting avatar components in an auction.

```graphql
input AvatarSetInput {
  groupId: String,
  compId: Int
}
```

##### Fields
- `groupId` (String): The category of the component.
- `compId` (Int): The unique ID of the component.

#### AuctionStats
Represents statistics for an auction.

```graphql
type AuctionStats {
  qty: Float,
  win: Float,
  fail: Float
}
```

##### Fields
- `qty` (Float): Quantity of tokens in the auction.
- `win` (Float): Amount of winning bids.
- `fail` (Float): Amount of failed bids.

#### CurrentRound
Represents the current auction or presale round.

```graphql
type CurrentRound {
  status: String,
  auction: Auction,
  presale: PreSale
}
```

##### Fields
- `status` (String): Status of the current round.
- `auction` (Auction): The current auction.
- `presale` (PreSale): The current presale.

### Auction Status Constants

- `PENDING` (0): Auction has been created but not yet started.
- `COUNTDOWN` (1): Auction is counting down and will start automatically when the counter reaches zero.
- `STARTED` (2): Auction is currently ongoing.
- `ENDED` (3): Auction has ended.

### Status Definitions

- **PENDING**: The auction round has been created and is awaiting start.
- **COUNTDOWN**: The auction round is in a countdown phase and will start automatically once the countdown completes.
- **STARTED**: The auction round is currently active and accepting bids.
- **ENDED**: The auction round has concluded and is no longer accepting bids.

This system allows for detailed tracking and management of auction rounds, including associated avatar components and real-time status updates.