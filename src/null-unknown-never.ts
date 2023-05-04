const searchName = (value: string | null) => {
    if (value === null) {
        console.log("There is nothing to search")
    } else {
        console.log("Searching...")
    }
}

//searchName(null)

const getCarSpeed = (speed: unknown) => {
    if (typeof speed === 'number') {
        const convertedSpeed = (speed * 1000) / 3600;
        console.log(`Car speed ${convertedSpeed}`);
    }
    if (typeof speed === 'string') {
        const [value, unit] = speed.split(" ")
        const convertedSpeed = (parseFloat(value) * 1000) / 3600;
        console.log(`Car speed ${convertedSpeed}`);
    }
    else {
        console.log("There wrong type")
    }
}


getCarSpeed(10)
getCarSpeed("10 kmh^-1")


//never types

const throwError = (message: string): never => {
    throw new Error(message)
}

// throwError("Error find")

function generateAdder(a: number): (b: number) => number {

    return function (b: number) {

        return a + b;

    };

}



const addTwo = generateAdder(2);

console.log(addTwo(3));

console.log(addTwo(5));