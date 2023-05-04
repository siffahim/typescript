//default parameter:

const wishMan = (name: string, quote: string = "Welcome"): void => {
    console.log(`${quote} ${name}`)
}

//wishMan("Alison", "Congratulation!")

//spread operator:

const myFriends: string[] = ["Alison", "Berlin", "Rio"]
const newFriends: string[] = ["Tokio", "Denver", "Moscow"]

myFriends.push(...newFriends)


console.log(myFriends)

//rest parameter:
const friendsMeet = (...friends: string[]): void => {
    friends.forEach(friend => console.log("HI", friend))
}

friendsMeet("Kashem", "Hashem", "Lashem", "Jashim", "Alamgir")