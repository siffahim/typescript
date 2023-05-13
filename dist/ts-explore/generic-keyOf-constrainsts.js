"use strict";
const a = "address"; //manually
const b = "address";
function constrainProperty(obj, key) {
    obj[key];
}
const property = constrainProperty({ name: "Mr.", age: 25 }, "age");
