# MasterZxSolana Bootcamp Exam

## Objective

Create a native token on Solana using the tools and methods covered in the Bootcamp.

Steps to complete the MasterZxSolana Bootcamp exam:

1. **Create a new wallet**: `keygen.ts`
2. **Perform an airdrop to interact with Solana**: `airdrop.ts`
3. **Create a mint and mint fungible tokens**: `spl_init.ts & spl_mint.ts`
4. **Transfer these tokens to a new wallet**: `spl_transfer.ts`

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)
- [Solana CLI](https://docs.solana.com/cli/install-solana-cli-tools)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ludovicobesana/MasterZ-Solana-Exam.git
   cd MasterZ-Solana-Exam
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

Ensure you have the Solana CLI configured to use the devnet:

```bash
solana config set --url https://api.devnet.solana.com
```

## Step 1: Create a New Wallet

Run `keygen.ts` to create a new keypair and save it in `wallet.json`:

```bash
npm run generate:wallet
```

## Step 2: Perform an Airdrop

Run `airdrop.ts` to request an airdrop of 1 SOL to the created wallet:

```bash
npm run request:airdrop
```

## Step 3: Create a Mint and Mint Fungible Tokens

1. Run `spl_init.ts` to create a mint account and save it in `mint.json`:

   ```bash
   npm run create:mint
   ```

2. Run `spl_mint.ts` to mint fungible tokens to the associated token account:
   ```bash
   npm run mint:tokens
   ```

## Step 4: Transfer Tokens to a New Wallet

Run `spl_transfer.ts` to transfer the minted tokens to a new wallet:

```bash
npm run transfer:tokens <recipient_address> <amount>
```

Example

```bash
npm run transfer:tokens FEdxTQnAzmXmSLfp3W2sfwYP8f3fJhdQxYfBQ3aVZAwQ 1000
```

## Step 5: Reset the project

Run `reset.ts` to reset the project status:

```bash
npm run reset:project
```

## Verifying Wallet Balance

To verify the balance of a wallet, use the following command:

```bash
solana balance <Public Key>
```

Replace `<Public Key>` with the actual public key of the wallet you want to check. The output should be something like:

```bash
0.99647912 SOL
```


## Notes

- Ensure the `wallet.json` file contains the generated keypair.
- Verify the wallet balance using the provided command to ensure the airdrop and transactions were successful.

## License

[MIT](LICENSE)
