// const Block = require('./Block');
import Block from './Block';
const BlockChain = require('./BlockChain');

const myCoin = new BlockChain();
myCoin.insertBlock(new Block(0, '21-01-2019',{'name': 'siva'}))
myCoin.insertBlock(new Block(0, '20-01-2019',{'name': 'bharathy'}))

console.log(JSON.stringify(myCoin));
console.log(myCoin.validateChain())

