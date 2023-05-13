//readonly | private | public | protected

class BankAccount {
    public readonly id: number;
    public name: string;
    private _balance: number;

    constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }

    checkBalance() {
        console.log(`Your current balance is ${this._balance}`)
    }

    depositBalance(amount: number) {
        this._balance = this._balance + amount;
    }
}


const myAccount = new BankAccount(404, "Emma", 500);

myAccount.depositBalance(500)
myAccount.checkBalance()

console.log(myAccount)