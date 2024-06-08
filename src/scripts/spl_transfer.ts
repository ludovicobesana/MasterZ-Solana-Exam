import { transferTokens } from '../utils/transfer';
import { PublicKey } from '@solana/web3.js';
import * as fs from 'fs';
import * as path from 'path';

const recipientAddress = process.argv[2];
const amount = process.argv[3];

if (!recipientAddress || !amount) {
  console.error('Usage: ts-node spl_transfer.ts <recipient_address> <amount>');
  process.exit(1);
}

const main = async () => {
  try {
    const recipient = new PublicKey(recipientAddress);
    const mintAddress = new PublicKey(
      JSON.parse(
        fs.readFileSync(path.resolve(__dirname, '../../mint.json'), 'utf8'),
      ),
    );
    await transferTokens(mintAddress, recipient, parseInt(amount));
    console.log('Tokens transferred successfully!');
  } catch (error) {
    console.error('Error:', error);
  }
};

main();
