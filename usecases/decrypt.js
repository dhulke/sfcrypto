const { Crypto } = require('../lib/crypto');

class Decrypt {

    constructor(encryptionKey = 'a'.repeat(32)) {
        this.encryptionKey = encryptionKey;
    }

    run(cipherText) {
        const crypto = new Crypto(this.encryptionKey);
        return crypto.decrypt(cipherText);
    }
}

module.exports = { Decrypt };