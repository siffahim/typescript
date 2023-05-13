class Counter {
    static count: number = 0; //static meaning: now count is own fixed properties of Counter Class 

    // constructor(count: number) {
    //     this.count = count;
    // }

    static increment(): number {//static meaning: now increment is own fixed properties of Counter Class 
        return Counter.count = Counter.count + 1;
    }

    static decrement(): number {
        return Counter.count = Counter.count - 1;
    }
}

// const instance1 = new Counter(); //when i use static modifier. i don't need instance
// const instance2 = new Counter();

console.log(Counter.increment()) //you can access direct from Class don't need any instance
console.log(Counter.increment())