const Cryptr = require('cryptr');
const cryptr = new Cryptr('sparkoutBlockChain');

class Block {

    constructor(index,timestamp,data,previousHash=''){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.createHash();
    }

    createHash(){
        return cryptr.encrypt(this.index + this.timestamp + this.previousHash + JSON.stringify(this.data).toString());
    }
}

module.exports = Block;