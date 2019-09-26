/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const crypto = require('crypto');

const inputdir = './resources/flags';
const outputdir = './public/flags';

const files = fs.readdirSync(inputdir);
for (const file of files) {
  const name = crypto
    .createHash('sha256')
    .update(`${file}`)
    .digest('hex');
  if (!fs.existsSync(outputdir)) {
    fs.mkdirSync(outputdir);
  }
  fs.copyFileSync(`${inputdir}/${file}`, `${outputdir}/${name}.svg`);
}
