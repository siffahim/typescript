"use strict";
const personAge = 22;
if (personAge > 18) {
    console.log("You are up");
}
else {
    console.log("You are down");
}
const isAdult = personAge > 18 ? "You are up!" : "You are down";
//nullish coalescing
const isAuthenticatedUser = null;
const useName = isAuthenticatedUser !== null && isAuthenticatedUser !== void 0 ? isAuthenticatedUser : "Guest";
