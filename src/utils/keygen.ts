import { Keypair } from '@solana/web3.js';
import * as fs from 'fs';
import * as path from 'path';

export const generateKeypair = (): void => {
  const keypair = Keypair.generate();
  const filePath = path.resolve(__dirname, '../../wallet.json');
  fs.writeFileSync(filePath, JSON.stringify(Array.from(keypair.secretKey)));
  console.log('Wallet created successfully!');
  console.log('Public Key:', keypair.publicKey.toBase58());
};
