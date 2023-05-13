"use strict";
var Level;
(function (Level) {
    Level["Junior"] = "Junior";
    Level["Mid"] = "Mid";
    Level["Senior"] = "Senior";
})(Level || (Level = {}));
const newDeveloper = {
    name: "Rok",
    expertise: "Javascript",
    experience: 6
};
const developer = {
    name: "Rio",
    expertise: "Typescript",
    experience: 2,
    leadershipExperience: 1,
    level: Level.Senior
};
