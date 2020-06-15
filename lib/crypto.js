'use strict';

const crypto = require('crypto');

const BLOCK_CIPHER = 'aes-256-cbc';
const IV_LENGTH = 16; // For AES, this is always 16


class Crypto {

    constructor(encryptionKey) {
        this.encryptionKey = encryptionKey;
    }

    encrypt(plainText) {
        const iv = crypto.randomBytes(IV_LENGTH);
        const cipher = crypto.createCipheriv(BLOCK_CIPHER, Buffer.from(this.encryptionKey), iv);
        const cipherText = Buffer.concat([cipher.update(plainText), cipher.final()]);

        const ivHex = iv.toString('base64');
        const cipherTextHex = cipherText.toString('base64');

        return `${ivHex}:${cipherTextHex}`;
    }

    decrypt(ivCipherText) {
        const ivCipherTextParts = ivCipherText.split(':');
        const iv = Buffer.from(ivCipherTextParts.shift(), 'base64');
        const cipherText = Buffer.from(ivCipherTextParts.join(':'), 'base64');
        const decipher = crypto.createDecipheriv(BLOCK_CIPHER, Buffer.from(this.encryptionKey), iv);

        const plainText = Buffer.concat([decipher.update(cipherText), decipher.final()]);

        return plainText.toString();
    }
}


module.exports = { Crypto };