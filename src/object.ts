const student: {
    readonly company: string;
    name: string;
    age: number;
    isMarried: boolean;
    wife?: string;
} = {
    company: "PH",
    name: "Berlin",
    age: 20,
    isMarried: true,
    wife: "Alison"
}

//student.company = "PH"


const studentTwo: {
    institute: "DPI"; //it's call literal type. it will be same name on each object value;
    name: string;
    id: number;
} = {
    institute: "DPI",
    name: "Halsey",
    id: 201
}