interface IPerson {
    name: string;
    email: string;
    contactNo: number;
}

//Pick
type Contact = Pick<IPerson, "email" | "contactNo">

const kateContactInfo: Contact = {
    email: 's',
    contactNo: 5
}

//Omit (it will be remove properties from types)
type NameOnlyType = Omit<IPerson, "email" | "contactNo">



//Partial (it will be optional all properties from types)
type Optional = Partial<IPerson> //now all value are optional


//Require
type RequiredProps = Required<IPerson> // now all value are required


//Readonly
const rioInfo: Readonly<IPerson> = {
    name: "Rio",
    email: "rio12@gmail.com",
    contactNo: +880
}

//rioInfo.name = "Mr. Rio";


//Record
/* type MyObj = {
    a: string;
    b: string;
    c: string;
} */

//using index signature
/* type MyObj = {
    [key: 'a'|'b'|'c']: string //we can't full our requirement with the help of index signature.this error telling using 
} */

type MyObj = Record<'a' | 'b' | 'c', string>

const obj: MyObj = {
    a: "1",
    b: "23",
    c: "5",
}