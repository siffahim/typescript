
//Encapsulation
class Bank {
    //using parameter properties for defined variable
    constructor(public bankId: number, private _balance: number) {
    }
    set deposit(amount: number) {
        this._balance = this._balance + amount;
    }
    private getTestBalance() {
        return this._balance;
    }
    get checkBalance() {
        return `Your current balance is ${this._balance}`
    }
}

const bankUser = new Bank(402, 1000);
console.log(bankUser.checkBalance)

