const { Crypto } = require('../lib/crypto');
var debug = require('debug')('18sfcrypto:script');

(() => {
    const encryptionKey = 'a'.repeat(32);
    debug('encryptionKey:', encryptionKey, encryptionKey.length);

    const crypto = new Crypto(encryptionKey);

    const cipherText = crypto.encrypt('macacos me mordam');
    debug('cipherText', cipherText);

    debug('cipherText', crypto.encrypt('macacos me morda').length);
    debug('cipherText', crypto.encrypt('macacos me mord').length);
    debug('cipherText', crypto.encrypt('macacos me mor').length);
    debug('cipherText', crypto.encrypt('macacos me mo').length);
    debug('cipherText', crypto.encrypt('macacos me m').length);
    debug('cipherText', crypto.encrypt('macacos me ').length);

    const plainText = crypto.decrypt(cipherText);
    debug('plaintext', plainText);

})(...process.argv.slice(2));