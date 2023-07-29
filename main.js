const SHA256 = require('crypto-js/sha256')
const mysql_db = require('mysql');
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
        for (let i = 1; i < this.chain.length; i++) {
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
const newBlockData = {
    transactions: [
        {
            sender: 'Alice',
            recipient: 'Bob',
            amount: 50,
        },
        {
            sender: 'Bob',
            recipient: 'Charlie',
            amount: 25,
        },
    ],
};

// get the client
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Constituencies!14',
    database: 'mydatabase',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

pool.execute('CREATE TABLE IF NOT EXISTS blocks (id INT AUTO_INCREMENT PRIMARY KEY, id_index INT, timestamp DATETIME, nonce INT)', (err, rows, fields) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Blocks table created');
});

pool.execute('CREATE TABLE IF NOT EXISTS transactions (id INT AUTO_INCREMENT PRIMARY KEY, amount FLOAT, recipient VARCHAR(255))', (err, rows, fields) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Transactions table created');
});

async function saveBlockToDatabase(block) {
    const sql = 'INSERT INTO blocks (id_index, timestamp, nonce, hash) VALUES (?, ?, ?, ?)';
    pool.execute(sql, [block.id_index || null, block.timestamp || null, block.nonce || null, block.calculateHash() || null], (err, result, fields) => {
        if (err) {
            console.error(err);
            return;
        }

        if (result && result.affectedRows > 0) {
            const blockId = result.insertId;
            console.log(`Block saved with ID: ${blockId}`);
        } else {
            console.log('Error: No result returned from query');
            return;
        }

        const transactionSql = 'INSERT INTO transactions (amount, recipient) VALUES (?, ?)';
        if (Array.isArray(block.transactions)) {
            for (const transaction of block.transactions) {
                pool.execute(transactionSql, [transaction.amount || null, transaction.recipient || null], (err, result, fields) => {
                    if (err) {
                        console.error(err);
                        return;
                    }

                    if (result && result.affectedRows > 0) {
                        console.log(`Transaction saved with ID: ${result.insertId}`);
                    } else {
                        console.log('Error: No result returned from query');
                        return;
                    }
                });
            }
        }
    });

}


js.chain.forEach((block, id_index) => {
    if (id_index > 0) {
        saveBlockToDatabase(block, (err, result) => {
          if (err) {
            console.error(err);
          } else {
            console.log(result);
          }
        });
    }
});




js.addBlock(newBlockData);


js.addBlock(new Block(js.chain.length, "17/02/2022", { sender: 'Alice', recipient: 'Bob', amount: 50, }, "45", 2));
js.addBlock(new Block(js.chain.length + 1, "06/02/2023", { amount: 10 }));
js.addBlock(new Block(js.chain.length + 1, "10/03/2023", { amount: 6 }));
js.addBlock(new Block(js.chain.length + 1, "11/03/2023", { amount: 3 }));
js.addBlock(new Block(js.chain.length + 1, "10/04/2023", { amount: 1 }));
console.log(JSON.stringify(js, null, 4));
console.log('Is blockchain valid? ' + js.isChainValid());

saveBlockToDatabase(js.chain[0]);
js.chain.forEach((block, id) => {
    if (id > 0) {
        saveBlockToDatabase(block);
    }
});


//js.chain[1].data = { amount: 100 };
//js.chain[1].hash = js.chain[1].calculateHash();
//console.log('Is blockchain valid? '+ js.isChainValid());