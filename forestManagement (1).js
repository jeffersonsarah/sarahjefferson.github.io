let cityName = "Techville";
let parkCount = 5;
let parks = [
    {
        name: "Central Park",
        trees: [
            { species: "Maple", age: 5, health: "Good", height: 20 },
            { species: "Birch", age: 7, health: "Good", height: 18 }
        ],
        facilities: ["playground", "swimming pool"]
    },
    {
        name: "Riverside Park",
        trees: [
            { species: "Oak", age: 30, health: "Excellent", height: 25 },
            { species: "Redwood", age: 50, health: "Good", height: 100 }
        ],
        facilities: ["boating", "fishing"]
    },
    {
        name: "Hilltop Park",
        trees: [
            { species: "Pine", age: 10, health: "Fair", height: 15 }
        ],
        facilities: ["hiking trails"]
    }
];

// Task 1: Change the name of "Riverside Park" to "Riverside Greenspace"
let riversidePark = parks.find(park => park.name === "Riverside Park");
riversidePark.name = "Riverside Greenspace";

// Task 2: Change the name of the tree species "Maple" to "Sugar Maple" in "Central Park"
let centralPark = parks.find(park => park.name === "Central Park");
let mapleTree = centralPark.trees.find(tree => tree.species === "Maple");
mapleTree.species = "Sugar Maple";

// Task 3: Add a new tree to "Central Park"
centralPark.trees.push({ species: "Birch", age: 7, health: "Good", height: 18 });

// Task 4: Retrieve a list of all tree species in "Central Park"
let centralParkTrees = centralPark.trees.map(tree => tree.species);

// Task 5: Calculate the average age of all trees
let totalAge = parks.reduce((acc, park) => acc + park.trees.reduce((acc, tree) => acc + tree.age, 0), 0);
let averageTreeAge = totalAge / parkCount;

// Task 6: Determine the tallest tree among all parks
let tallestTree = parks.reduce((tallest, park) => {
    let tallestInPark = park.trees.reduce((tallest, tree) => tree.height > tallest ? tree.height : tallest, 0);
    return tallestInPark > tallest ? tallestInPark : tallest;
}, 0);

// Task 7: Remove the facility "playground" from "Central Park"
let centralParkFacilitiesIndex = centralPark.facilities.indexOf("playground");
centralPark.facilities.splice(centralParkFacilitiesIndex, 1);

// Task 8: Convert parks array to a JSON Object
let parksJSON = JSON.stringify(parks);

// Task 9: Display name and facilities of the first park
console.log("Name:", parks[0].name);
console.log("Facilities:", parks[0].facilities);

// Task 10: Display species of the third park
console.log("Species:", parks[2].trees[0].species);
