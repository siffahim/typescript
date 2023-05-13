function add(num1: number, num2: number): number {
    return num1 + num2;
}


const addArrow = (num1: number, num2: number): number => {
    return num1 + num2
}

const arr = [2, 4, 6, 8];

const newArr = arr.map((element: number) => element * element);

const person: {
    name: string;
    balance: number;
    getBalance(money: number): void;
} = {
    name: "Sif",
    balance: 5,
    getBalance(money) {
        console.log(`New balance is ${this.balance + money}`)
    }
}

person.getBalance(5)