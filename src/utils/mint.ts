import { Keypair, PublicKey } from '@solana/web3.js';
import {
  createMint,
  getOrCreateAssociatedTokenAccount,
  mintTo,
} from '@solana/spl-token';
import { connection } from '../config/solanaConfig';
import * as fs from 'fs';
import * as path from 'path';

export const createMintAccount = async (): Promise<PublicKey> => {
  const secretKey = Uint8Array.from(
    JSON.parse(
      fs.readFileSync(path.resolve(__dirname, '../../wallet.json'), 'utf8'),
    ),
  );
  const wallet = Keypair.fromSecretKey(secretKey);
  const mint = await createMint(connection, wallet, wallet.publicKey, null, 9);
  fs.writeFileSync(
    path.resolve(__dirname, '../../mint.json'),
    JSON.stringify(mint.toBase58()),
  );
  console.log('Mint created successfully!');
  return mint;
};

export const mintTokens = async (mintAddress: PublicKey): Promise<void> => {
  const secretKey = Uint8Array.from(
    JSON.parse(
      fs.readFileSync(path.resolve(__dirname, '../../wallet.json'), 'utf8'),
    ),
  );
  const wallet = Keypair.fromSecretKey(secretKey);
  const tokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    wallet,
    mintAddress,
    wallet.publicKey,
  );
  await mintTo(
    connection,
    wallet,
    mintAddress,
    tokenAccount.address,
    wallet.publicKey,
    1e9,
  ); // 1 billion tokens
  console.log('Tokens minted successfully!');
};
