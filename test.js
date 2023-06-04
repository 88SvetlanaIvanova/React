const SHA256 = require('crypto-js/sha256');
const mysql = require('mysql');
class Block {
  constructor(id_index, timestamp, transactions, previousBlockHash, nonce, currentHash) {
    this.id_index = id_index;
    this.timestamp = timestamp;
    this.transactions = transactions;
    this.nonce = nonce;
    this.previousBlockHash = previousBlockHash;
    this.currentHash = this.calculateHash();
  }

  get previousHash() {
    return this.previousBlockHash;
  }

  calculateHash() {
    return SHA256(this.nonce + this.previousBlockHash + this.timestamp + JSON.stringify(this.transactions)).toString();
  }
}

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
  }

  createGenesisBlock() {
    return new Block(1, new Date().toISOString().substr(0, 10), [], "0", 0, "0");
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlockData) {
    const latestBlock = this.getLatestBlock();
    const newNonce = latestBlock.nonce + 1;
    const newBlock = new Block(
      newNonce, 
      new Date().toISOString().substr(0, 10), 
      newBlockData.transactions, 
      latestBlock.currentHash, 
      newBlockData.nonce
    );      
    newBlock.currentHash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }

  isChainValid() {
    for (let i = 0; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.currentHash !== currentBlock.calculateHash()) {
        return false;
      }

      if (currentBlock.previousHash !== previousBlock.currentHash) {
        return false;
      }
    }
    return true;
  }
}
let js = new Blockchain();
js.addBlock({transactions: [{sender: 'Alice', recipient: 'Bob', amount: 50}, {sender: 'Bob', recipient: 'Charlie', amount: 25}]});
js.addBlock(new Block(js.chain.length, "17/02/2022", {sender: 'Alice',recipient: 'Bob',amount: 50,}, "45",2));
js.addBlock(new Block(js.chain.length + 1, "06/02/2023", {amount: 10}));
js.addBlock(new Block(js.chain.length + 1, "10/03/2023", {amount: 6}));
js.addBlock(new Block(js.chain.length + 1, "11/03/2023", {amount: 3}));
js.addBlock(new Block(js.chain.length + 1, "10/04/2023", {amount: 1}));
console.log(JSON.stringify(js, null, 4));
