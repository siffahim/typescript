"use strict";
//default parameter:
const wishMan = (name, quote = "Welcome") => {
    console.log(`${quote} ${name}`);
};
//wishMan("Alison", "Congratulation!")
//spread operator:
const myFriends = ["Alison", "Berlin", "Rio"];
const newFriends = ["Tokio", "Denver", "Moscow"];
myFriends.push(...newFriends);
console.log(myFriends);
//rest parameter:
const friendsMeet = (...friends) => {
    friends.forEach(friend => console.log("HI", friend));
};
friendsMeet("Kashem", "Hashem", "Lashem", "Jashim", "Alamgir");
