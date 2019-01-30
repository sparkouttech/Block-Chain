
const Block = require('./Block');

class BlockChain {
    
    constructor(){
        this.chain = [this.createDefaultBlock()];
    }

    createDefaultBlock(){
        return new Block(0, '21-01-2019','Genesis',0);
    }

    getLatestBlock(){
        return this.chain[this.chain.length - 1];
    }

    insertBlock(newBlock){
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.createHash();
        this.chain.push(newBlock);
    }

    validateChain(){
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];
            
            if(currentBlock.previousHash !== previousBlock.hash){
                return false;
            }

            return true;
        }
    }
}

module.exports = BlockChain;