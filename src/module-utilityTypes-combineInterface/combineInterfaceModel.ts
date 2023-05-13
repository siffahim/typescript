interface Model<TData, TMethods> {
    data: TData;
    methods: TMethods;
}

// properties
interface IUser {
    firstName: string;
    lastName: string;
}

//methods
interface IMethods {
    fullName(): string;
}

type model = Model<IUser, IMethods>;

class User implements model {
    data: IUser;
    methods: IMethods;

    constructor(firstName: string, lastName: string) {
        this.data = { firstName, lastName };
        this.methods = {
            fullName: () => {
                return `${firstName} ${lastName}`
            }
        }
    }
}

const user1 = new User("Alison", "Parker");
console.log(user1.methods.fullName())