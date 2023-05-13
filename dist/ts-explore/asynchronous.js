"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//mocking
const makePromise = () => {
    return new Promise((resolve, reject) => {
        const data = "Data is Fetching...";
        data ? resolve(data) : reject("Failed to fetch data");
    });
};
const getPromiseData = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromise();
    return data;
});
//Boolean
const makePromiseBoolean = () => {
    return new Promise((resolve, reject) => {
        const data = false;
        if (data) {
            resolve(data);
        }
        else {
            reject("Failed to fetch");
        }
    });
};
const getPromiseBoolean = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromiseBoolean();
    return data;
});
const makePromiseObject = () => {
    return new Promise((resolve, reject) => {
        const data = { data: "Data is Fetching" };
        if (data) {
            resolve(data);
        }
        else {
            reject("Failed to fetch");
        }
    });
};
const getPromiseObject = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromiseObject();
    return data;
});
const getTodo = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = yield response.json();
    return data;
});
const getTodoData = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield getTodo();
    console.log(result);
});
getTodoData();
