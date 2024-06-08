import { Keypair } from '@solana/web3.js';
import { connection } from '../config/solanaConfig';
import * as fs from 'fs';
import * as path from 'path';

export const requestAirdrop = async (): Promise<void> => {
  const secretKey = Uint8Array.from(
    JSON.parse(
      fs.readFileSync(path.resolve(__dirname, '../../wallet.json'), 'utf8'),
    ),
  );
  const wallet = Keypair.fromSecretKey(secretKey);
  const airdropSignature = await connection.requestAirdrop(
    wallet.publicKey,
    1e9,
  ); // 1 SOL
  await connection.confirmTransaction(airdropSignature);
  console.log('Airdrop completed successfully!');
};
