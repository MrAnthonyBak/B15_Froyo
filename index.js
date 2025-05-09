// prompt user to enter flavors
const userFlavors =  prompt ("Enter the flavor(s) you would like to order: ",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);
console.log(userFlavors);



// user's input string is split into an array of strings
const orderedFlavors = userFlavors.split(",");
console.log(orderedFlavors);



// A loop is used to iterate through the array of flavors.
const orderedIceCream = orderedFlavors.map((string) => string.trim());


// An object is used to keep count of how many orders there are of each flavor.
const count = {};


// The program correctly counts the number of each flavor in the user's input.
let flavor;
for (const flavor of orderedFlavors) {
    if (count[flavor]) {
        count[flavor] += 1;
    } else {
        count[flavor] = 1;
    }
}
console.log(count);