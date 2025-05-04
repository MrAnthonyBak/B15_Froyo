// prompt user to enter flavors
const userFlavors =  prompt ("Enter the flavor(s) you would like to order: ",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);
console.log(userFlavors);



// user's input string is split into an array of strings
const orderedFlavors = userFlavors.split(",");
console.log(orderedFlavors);



// A loop is used to iterate through the array of flavors.
// An object is used to keep count of how many orders there are of each flavor.
// The program correctly counts the number of each flavor in the user's input.
for (let i=0; i<orderedFlavors.length; i++) {
    console.log(orderedFlavors[i])
}
