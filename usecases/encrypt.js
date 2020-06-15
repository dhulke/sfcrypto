const { Crypto } = require('../lib/crypto');

class Encrypt {

    constructor(encryptionKey = 'a'.repeat(32)) {
        this.encryptionKey = encryptionKey;
    }

    run(plainText) {
        const crypto = new Crypto(this.encryptionKey);
        return crypto.encrypt(plainText);
    }
}

module.exports = { Encrypt };