const user = {
    userName: "vk",
    "first Name": "Ankit",
    name: "Vikram",
    email: "vk@hc.com",
    age: 19,
    isAdmin: false,
    isLoggedIn: true,
    tea: ["lemon", "peach", "ginger"],
    address: {
        city: "Patna",
        state: "Bihar"
    }
}

const anotherUser = user;

console.log(user.age);
console.log(user['age']);
console.log(user.tea[0]);
console.log(user.address.state);
console.log(user["address"] ["state"]);

user.email = "vikram@pw.live"
console.log(user.email)

console.log(user)
console.log(anotherUser)

delete user.isAdmin
console.log(user)
console.log(anotherUser)

console.log(user["first Name"])

console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

console.log(user.keyboard)  //undefined
console.log(user.hasOwnProperty('keyboard'))  //false
console.log(user.hasOwnProperty('tea'))    //true