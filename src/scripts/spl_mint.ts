import { mintTokens } from '../utils/mint';
import * as fs from 'fs';
import * as path from 'path';
import { PublicKey } from '@solana/web3.js';

const mintAddress = new PublicKey(
  JSON.parse(
    fs.readFileSync(path.resolve(__dirname, '../../mint.json'), 'utf8'),
  ),
);
mintTokens(mintAddress).catch(console.error);
