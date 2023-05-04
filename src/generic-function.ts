const square = <T>(n: T): T => {
    return n;
}

function squareNormal<T>(n: T): T {
    return n;
}

const squareOne = square<string>("One")
const squareTwo = square<number>(5)


//tuples in generic function

const createArr = <X, Y>(paramOne: X, paramTwo: Y): [X, Y] => {
    return [paramOne, paramTwo];
}


const resultOne = createArr<string, boolean>("Bangladesh", true);

const resultTwo = createArr<boolean, Array<string>>(false, ["USA"]);

const resultThree = createArr<string, object>("Miami", { name: "Bangladesh" })



//spread operator:


const flowerDetails = {
    color: "Red",
    cultivation: "Canada"
}


const flowerTest = <T>(flowerDetails: T) => {
    const flower = "China Rose";
    const newFlowerInfo = { flower, ...flowerDetails };
    return newFlowerInfo;
}

const flowerCustomer = flowerTest(flowerDetails);


flowerCustomer