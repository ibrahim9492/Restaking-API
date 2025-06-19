This project is a backend REST API service built using **Node.js** (with optional Python support) that aggregates and exposes **EigenLayer restaking data**. It fetches data from **onchain sources and subgraphs**, stores it in **MongoDB**, and provides endpoints to access:

- Restakers and their stETH restake info
- Validator metadata and slashing events
- Reward breakdown for user addresses

To build a functional REST API service that surfaces key data related to **EigenLayer restaking**, including:

1. Who restaked their stETH, how much, and to which validator
2. Validator performance and metadata
3. Individual wallet’s restaking rewards
PI Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/restakers` | List all restakers with amount and validator address |
| `GET` | `/validators` | List all validators with metadata, status, and slash history |
| `GET` | `/rewards/:address` | Return restaking rewards for a specific user wallet |

Tech Stack

- **Node.js + Express** – REST API
- **MongoDB** – Data persistence
- **dotenv** – Secure configuration
