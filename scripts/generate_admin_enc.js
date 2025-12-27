// Usage: node generate_admin_enc.js <password>
// Generates base64 of ciphertext where ciphertext = plaintext XOR password (repeated)
// Plaintext marker is ACCESS_GRANTED

const fs = require('fs');
const path = require('path');

const marker = 'ACCESS_GRANTED';
const outPath = path.join(__dirname, '..', 'private', 'admin.enc');

const pwd = process.argv[2] || 'admin';

function xorBytes(a, b){
    const out = Buffer.alloc(a.length);
    for(let i=0;i<a.length;i++){
        out[i] = a[i] ^ b[i % b.length];
    }
    return out;
}

const markerBuf = Buffer.from(marker, 'utf8');
const pwdBuf = Buffer.from(pwd, 'utf8');
const cipher = xorBytes(markerBuf, pwdBuf);
const b64 = cipher.toString('base64');
fs.writeFileSync(outPath, b64);
console.log('Wrote', outPath);
console.log('Base64:', b64);