const ethers = require('ethers');
var fs = require('fs');

// uncomment to implement in other func
// let pkeys = []

let mnemonics = fs.readFileSync('mnemonics.txt').toString().replace(/\r\n/g, '\n').split("\n")

const mnemonicToPkey = (mnemonic) => { 
   return ethers.Wallet.fromPhrase(mnemonic).privateKey;
}

var file = fs.createWriteStream('pkeys.txt')
mnemonics.forEach(mnemonic => {
   file.write(mnemonicToPkey(mnemonic) + '\n')
   // uncomment to implement in other func
   // pkeys.push(mnemonicToPkey(mnemonic))
})
file.end();