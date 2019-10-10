console.log("We're learning about objects!");

const food1 = {
    type: "Hamburger",
    size: "Small",
    temperature: "Medium rare"
}

console.log("food", food1)

// const food2 = {
//   type: "Hot dog",
//   size: "Small",
//   temperature: "Well done"
// }

// const menu = [food1, food2]

// console.log("menu", menu)

// // Lightning Exercise 1: Given two options of data structures - array or object - which should you use? You need to represent a red 2015 Ford Mustang in your code.

const car = {
    color: "Red",
    make: "Ford",
    model: "Mustang",
    year: 2015
}

// Lightning Exercise 2: Given two options of data structures - array or object - which should you use? You need to store list of animal names in a shelter. The names are "Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", and "Sharky".

const animals = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"]

// // Lightning Exercise 3: Define an object for four family members, and put each object in an array named familyMembers. Each family member object that you create should have the same keys on them, but the values will be different.

const parentOne = {
    name: "Bob",
    gender: "Non-binary",
    age: "82"
}

const parentTwo = {
    name: "Chad",
    gender: "Male",
    age: "100"
}

const parentThree = {
    name: "Madonna",
    gender: "Non-binary Cat",
    age: "257"
}

const child = {
    name: "Child",
    gender: "undecided",
    age: "62"
}

const familyMembers = [parentOne, parentTwo, parentThree, child]

console.log("familyMembers", familyMembers)

// Setting and Accessing Values on Objects
// Dot Notation

// const lassie = {
//   age: 7,
//   breed: "Collie",
//   color: "White and Brown"
// }

// // String concatenation
// console.log(lassie.color + " " + lassie.breed)
// console.log("Lassie's breed is " + lassie.breed)

// // String interpolation
// console.log(`${lassie.color} ${lassie.breed}`)
// console.log(`Lassie's breed is ${lassie.breed}`)

// // Lightning Exercise: Given the object below, output each of the values to the console using dot notation.
const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}

console.log("The Wardrobe")
console.log("wardrobe height", wardrobe.height)
console.log("Wardrobe Manufacturer", wardrobe.manufacturer)
console.log("Wardrobe Contents", wardrobe.contents)  
console.log(wardrobe.contents[0],wardrobe.contents[1], wardrobe.contents[2], wardrobe.contents[3], wardrobe.contents[4])
console.log("Wardrobe depth", wardrobe.depth)
console.log("Wardrobe width", wardrobe.width)

// // A different way to approach the lightning exercise
// let wardrobeContents = ""

// for (let i = 0; i < wardrobe.contents.length; i++) {
//   // wardrobeContents = wardrobeContents + `${wardrobe.contents[i]} `
//   wardrobeContents += `${wardrobe.contents[i]} `
// }

// const wardrobeDesc = `
//   I own a wardrobe made by ${wardrobe.manufacturer} and its dimensions are ${wardrobe.height} x ${wardrobe.width} x ${wardrobe.depth} (h x w x d). My wardrobe contains ${wardrobeContents}.
// `
// console.log(wardrobeDesc)

// Square bracket notation
const lassie = {
    age: 7,
    breed: "Collie",
    "hair color": "White and Brown"
  }
  
  console.log("Dot notation", lassie.breed)
  console.log("Square bracket notation", lassie["breed"], lassie["hair color"])
  
  // Breed is the key you want to get the value of in the object below
  const keyToLookup = "breed"
  
  // First, make JavaScript evaluate the variable and give us its value
  console.log(keyToLookup)
  
  // You have to use square brackets here because you want to evaluate the value in the variable keyToLookup
  console.log(lassie[keyToLookup])
  
  // Adding new key value pairs to object using dot notation and square bracket notation
  
  lassie.favoriteToy = "Frisbee"
  
  console.log("Lassie with fav toy", lassie)
  
  lassie["well"] = "Real deep..."
  
  console.log("Lassie with well", lassie)

  const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

console.log("Empire State Building", empireStateBuilding.height)
console.log("Empire State Building", empireStateBuilding.stories)
console.log("Empire State Building", empireStateBuilding.squareFeet)
console.log("Empire State Building", empireStateBuilding.eastWestLength)
console.log("Empire State Building", empireStateBuilding.northSouthLength)

console.log("square bracket notation", empireStateBuilding["address"])
console.log("square bracket notation", empireStateBuilding["constructionDate"])
console.log("square bracket notation", empireStateBuilding["cost"])
console.log("square bracket notation", empireStateBuilding["owner"])
console.log("square bracket notation", empireStateBuilding["architect"])

const addressKey = "address"    
const constructionKey = "constructionDate"
const ownerKey = "owner"
const costKey = "cost"
const architectKey = "architect"

console.log(`The empire state building us at ${empireStateBuilding[addressKey]}.
It was built in ${empireStateBuilding[constructionKey]} by ${empireStateBuilding[architectKey]}. It cost ${empireStateBuilding[costKey]} and is owned by ${empireStateBuilding[ownerKey]}.`)

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}
console.log("All Instructors")

const partTimeInstructors =nashvilleSoftwareSchool.instructors.partTime

for(let i = 0; i < partTimeInstructors.length; i++) {
    console.log(partTimeInstructors[i])
}

console.log("full time instructors", nashvilleSoftwareSchool.instructors.fullTime)

const fullTimeInstructors = nashvilleSoftwareSchool.instructors.fullTime

for(let i = 0; i < fullTimeInstructors.length; i++) {
    console.log(fullTimeInstructors[i])
}

console.log("Andy", nashvilleSoftwareSchool.instructors.fullTime[4])

// how Jisie did it (it refers to a variable we made above)://
console.log("Andy: ", fullTimeInstructors[fullTimeInstructors.length - 1])

console.log("Andy: ", fullTimeInstructors[4])

console.log("Zoe", nashvilleSoftwareSchool.instructors.partTime[0])