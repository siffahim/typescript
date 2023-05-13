//variant kind of import here:

//import * as methods from "./module"; //wildcard import
//import divide,{subtraction,addNumber as addNumTwo,multiply} from "./module";

//here is massive import, it's looking bad.

/* import addNumTwo from "./utils/add";
import multiply from "./utils/multiply";
import divide from "./utils/divide";
import subtract from "./utils/subtract"; */

import methods from "./utils/index";

const addNumber = (param1: number, param2: number) => {
    return param1 + param2;
}

const res = methods.addNumTWo(5, 2, 3)

const subtract = methods.divide(20, 10)

