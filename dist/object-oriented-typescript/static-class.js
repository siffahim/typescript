"use strict";
class Counter {
    // constructor(count: number) {
    //     this.count = count;
    // }
    static increment() {
        return Counter.count = Counter.count + 1;
    }
    static decrement() {
        return Counter.count = Counter.count - 1;
    }
}
Counter.count = 0; //static meaning: now count is own fixed properties of Counter Class 
// const instance1 = new Counter(); //when i use static modifier. i don't need instance
// const instance2 = new Counter();
console.log(Counter.increment()); //you can access direct from Class don't need any instance
console.log(Counter.increment());
