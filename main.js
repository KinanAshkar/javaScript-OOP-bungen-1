// -1-
// Defining Object With Object Literals Part 1:

/* let user = {
    firstName:"Kinan",
    lastName:"Ashkar",
    getFullName: function(){
        return `Full Name Is ${user.firstName} ${user.lastName}`;
    }
}
console.log(user.firstName);
console.log(typeof user.firstName);
console.log(user["lastName"]);
console.log(typeof user["lastName"]);
console.log(user.getFullName()); */

// -2-
// Defining Object With Object Literals Part 2:

/* let user = {
    firstName:"kinan",
    lastName:"ashkar",
    age:37,
    addresses:{
        syria:"damascus",
        jordan:"amman",
        ksa:"riyadh",
        getMainAddress: function(){
            return `Main Address Is In Syria In City ${user.addresses.syria}`
        }
    },
    // getFullName: function(){ return `Full Name Is ${user.firstName} ${user.lastName}`}

    // With Arrow Function:
    getFullName:()=> `Full Name Is ${user.firstName} ${user.lastName}`,
    getAgeInDays:()=> `Your Age In Days Is ${user.age*365}`
};
console.log(user.firstName);
console.log(typeof user.firstName);
console.log(user["lastName"]);
console.log(typeof user["lastName"]);
console.log(user.getFullName());
console.log(user.addresses.syria);
console.log(user["addresses"]["ksa"]);
console.log(user.addresses.getMainAddress());
console.log(user.getAgeInDays()); */

// -3-
// Dot Notation vs Bracket Notation:

/* let myObj = {
    "one": 1,
    "two-": 2
};
console.log(myObj.one); // 1
// console.log(myObj."one"); SyntaxError: Unexpected string.
// console.log(myObj.two-); SyntaxError:
console.log(myObj["two-"]); // 2

let myObj2 = {
    1: "one",
    2: "two"
};
// console.log(myObj2.1); SyntaxError:
console.log(myObj2["1"]);
console.log(myObj2["2"]);


let myVariable = "name";
let myLastObj = {
    name:"kinan"
};
console.log(myLastObj.name); // kinan
console.log(myLastObj["name"]);
console.log(myLastObj.myVariable); // Undefined
console.log(myLastObj[myVariable]); // kinan
*/

// -4-
// Defining Object With New Keyword:

/* let user = new Object();
user.firstName = "kinan";
user.lastName = "ashkar";
user["age"] = 37;
user.getFullName = function(){
    return `Full Name Is ${user.firstName} ${user.lastName}`
};
console.log(user);
console.log(user.firstName);
console.log(user.lastName);
console.log(user["age"]);
console.log(user.getFullName()); */

// -5-
// Defining Object With Object.create:

/* let mainObj = new Object();
mainObj.hasDiscount = false;
mainObj.showMsg = () => `you ${mainObj.hasDiscount ? "" : "dont"} have discount`;
console.log(mainObj.hasDiscount);
console.log(mainObj.showMsg()); */

/* let mainObj = {
    hasDiscount: true,
    showMsg: function(){
        return `you ${this.hasDiscount ? "" : "dont"} have discount`;
    }
};
console.log(mainObj.hasDiscount);
console.log(mainObj.showMsg());

let otherObj = Object.create(mainObj);
otherObj.hasDiscount = false;
console.log(otherObj.hasDiscount);
console.log(otherObj.showMsg());

let lastObj = Object.create(mainObj);
console.log(lastObj.hasDiscount);
console.log(lastObj.showMsg()); */