"use strict";
//Encapsulation
class Bank {
    //using parameter properties for defined variable
    constructor(bankId, _balance) {
        this.bankId = bankId;
        this._balance = _balance;
    }
    set deposit(amount) {
        this._balance = this._balance + amount;
    }
    getTestBalance() {
        return this._balance;
    }
    get checkBalance() {
        return `Your current balance is ${this._balance}`;
    }
}
const bankUser = new Bank(402, 1000);
console.log(bankUser.checkBalance);
