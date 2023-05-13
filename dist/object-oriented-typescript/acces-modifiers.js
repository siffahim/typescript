"use strict";
//readonly | private | public | protected
class BankAccount {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    checkBalance() {
        console.log(`Your current balance is ${this._balance}`);
    }
    depositBalance(amount) {
        this._balance = this._balance + amount;
    }
}
const myAccount = new BankAccount(404, "Emma", 500);
myAccount.depositBalance(500);
myAccount.checkBalance();
console.log(myAccount);
