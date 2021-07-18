require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid problem oppose venture strong riot six pumpkin harvest dry frame system'; 
let testAccounts = [
"0xda0a9ce40136b7a18595871dba3d91b35204accd3683e0b1597dfb1de84ee7af",
"0xa0049ed55fb4afa1e6ca7e264c837587bb4ee45afd607f8d902238ffb12b2106",
"0x770d387aaecc77de4562fc78d9dfab68cf0292d3dfd0258250f48d22b48825c6",
"0x46a1be24c21532666e204dd307c71149ba211d739082a8fe9b9ab4aa2bbfa5b1",
"0x81ba6ffbfa7f97c268572d51d7ba532262f914a9a07d2929915d276a514c9ceb",
"0x1eb5ab8b59f97c8436bd73d93c40eeac078e198f6fb15b1efe3b52614b4d449b",
"0x5684f7fd68238eb1ba2c6ec9391f3cffdc58d43c66e7da13991dba4655fde0ff",
"0x208230a70f251d423842d979112ca3047deeb30097a2d1c6180824c0dae51705",
"0xd1cabddcf89927e9201174effac6113d20665fc0c5e529ba516a85c917f65075",
"0x207e12f5dcff00e155c1464dca452795d1d08fc010f139d251223656d89c3b52"
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

