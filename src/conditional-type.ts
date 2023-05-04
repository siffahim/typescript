// conditional type

type aOne = string;
type aTwo = number;
type aThree = undefined



type b = aOne extends number ? number : null;

//nested condition type
type c = aOne extends null ? null : aTwo extends string ? string : aThree extends undefined ? undefined : null

//check sheikh wife

type Sheikh = {
    wife1: string;
    wife2: string;
}


type CheckProperty<T, K> = K extends keyof Sheikh ? true : false;

type CheckWife = CheckProperty<Sheikh, 'wife1'>


//--------->it's static checker
// type CheckProperty<T> = T extends { wife2: string } ? true : false;

// type CheckWife1 = CheckProperty<Sheikh>


//another example  


type GirlFriends = "Monica" | "Rachel" | "Alison";

type RemoveGirlFriend<T, N> = T extends N ? never : T;

type currentGirlFriend = RemoveGirlFriend<GirlFriends, "Monica">