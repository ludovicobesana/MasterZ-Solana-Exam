import { Keypair, PublicKey } from '@solana/web3.js';
import {
  getOrCreateAssociatedTokenAccount,
  transfer,
  TokenAccountNotFoundError,
} from '@solana/spl-token';
import { connection } from '../config/solanaConfig';
import * as fs from 'fs';
import * as path from 'path';

export const transferTokens = async (
  mintAddress: PublicKey,
  recipient: PublicKey,
  amount: number,
): Promise<void> => {
  try {
    const secretKey = Uint8Array.from(
      JSON.parse(
        fs.readFileSync(path.resolve(__dirname, '../../wallet.json'), 'utf8'),
      ),
    );
    const wallet = Keypair.fromSecretKey(secretKey);
    const senderTokenAccount = await getOrCreateAssociatedTokenAccount(
      connection,
      wallet,
      mintAddress,
      wallet.publicKey,
    );

    try {
      const recipientTokenAccount = await getOrCreateAssociatedTokenAccount(
        connection,
        wallet,
        mintAddress,
        recipient,
      );
      await transfer(
        connection,
        wallet,
        senderTokenAccount.address,
        recipientTokenAccount.address,
        wallet.publicKey,
        amount,
      );
      console.log('Tokens transferred successfully!');
    } catch (error) {
      if (error instanceof TokenAccountNotFoundError) {
        console.error(
          'Error: Token account not found. Please ensure the recipient has a token account for the specified mint.',
        );
      } else {
        console.error('Error:', error);
      }
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
