class TxOut {
    constructor(address, amount) {
        this.address = address;
        this.amount = amount;
    }
}

class TxIn {

}

class Transaction {

}

class UTxOut {
    constructor(uTxOutId, uTxOutIndex, address, amount) {
        this.uTxOutId = uTxOutId;
        this.uTxOutIndex = uTxOutIndex;
        this.address = address;
        this.amount = amount;
    }
}

const uTxOuts = [];