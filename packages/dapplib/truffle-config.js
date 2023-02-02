require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney clog tackle venture street cost situate coin hundred light army gather'; 
let testAccounts = [
"0x29b80ff4ca1112208f3b8d65659c7488a2f4176413a67e06e8fc6d915ed4f388",
"0xbab9168ad1102ba783b089bdabaf54c95699bdbfc876cb4d76c9667a1087e415",
"0x2b354d348a9ea775c2f8bb23283417aeea520b3b49ed8f6c8c6c5ac92764dcf4",
"0x10fc2f1b2a6336ba22f4d5470a459b8d7cf34eb4f606fcd7a14362ec42c08ca2",
"0x98a969d4abe5e51c6791a50324399bf0f4a3a891b5b1ad5e0ed25d99c20fb534",
"0xc56d1a94e6525318bc6082568bbd8de0af23be2cd641a7476f5378e5bd7fde82",
"0x96f41af6fac2512ac1f69e6c45e672e4a24184198e990597acfe75016df08cf0",
"0x63908c981ae1ecc8dffcbd9a2ceae54293c77b0fddadadceca1705a630c8c18e",
"0x62eb5174466cc9f813f9f509cfb93182c8bea64ea042d15b78fbdd008668fe1c",
"0x8fd45e38b4e7881d9651e6afde78293d9251cc93ae6274e9f5c2bc12fabadad0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

