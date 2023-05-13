//interface
interface IVehicle {
    startEngine(): void;
    stopEngine(): void;
    moveEngine(): void;
}

class Vehicle implements IVehicle {
    constructor(
        public name: string,
        public brand: string,
        public model: number
    ) { }
    startEngine(): void {
        console.log("I m starting Engine!!!");
    }
    stopEngine(): void {
        console.log("I m stopping Engine!!")
    }
    moveEngine(): void {
        console.log("I m moving Engine!")
    }
    test() {
        console.log("it's a testing purpose")
    }
}

const vehicleOne = new Vehicle("Car", "Honda", 2015)


//abstract class

abstract class Leader {
    constructor(
        public name: string,
        public age: number,
        public experience: string
    ) { }

    abstract leaderQuote(): void
    abstract leaderExercise(): void
    leaderSleep() {
        console.log("Leader sleeping time at 9am to 4am");
    }
}

class NormalPerson extends Leader {
    leaderQuote(): void {
        console.log("Welcome to Leader")
    }
    leaderExercise(): void {
        console.log("Exercise is running")
    }
}

//const leaderOne = new Leader("Rachel", 30, "Professor") //< here is an error you can't not make instance of abstract class you just follow the class;
