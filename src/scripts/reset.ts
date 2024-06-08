import * as fs from 'fs';
import * as path from 'path';

const filesToDelete = [
  path.resolve(__dirname, '../../wallet.json'),
  path.resolve(__dirname, '../../mint.json'),
  path.resolve(__dirname, '../../recipient_wallet.json'),
];

filesToDelete.forEach((filePath) => {
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`Deleted: ${filePath}`);
  } else {
    console.log(`File not found, skipping: ${filePath}`);
  }
});

console.log(
  'Project has been reset. You can now start from npm run generate:wallet',
);
