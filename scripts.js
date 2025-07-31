// Part 1: Growing Pains
// What do we know? Circular area with a radius of 5m; PI = 3.1415 area = Pi * radius * radius; plants double every week
// const radius = 5;
// const area = PI * radius * radius;
// const spaceRequired = 0.8 * 0.8;
// const initialPlantNumber = 20;
// const rateOfGrowth = 2;

// Task 1: Predict the plant growth after a specific number of weeks.

let plantGrowth;
let numberOfWeeks = 2; 
const initialPlantNumber = 20;
const rateOfGrowth = 2;

{
    weeklyPlantNumber = initialPlantNumber * rateOfGrowth * numberOfWeeks;
    console.log (`The total number of plants after ${numberOfWeeks} weeks will be ${weeklyPlantNumber}`) 
}

// Task 2: 
// Implement control flow to make decisions on whether the plants should be:
    // Pruned, to stop them from exceeding the capacity of the garden. This condition should be met if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.
    // Monitored, if they are growing at an acceptable rate. This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.
    // Planted, if there is room to plant more plants. This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.
    
    const PI = 3.1415;
    const radius = 5;
    const gardenCapacity = PI * radius * radius;
    const spaceRequired = 0.8 * 0.8;
    let areaConsumed = weeklyPlantNumber * spaceRequired;


    if (areaConsumed > 0.8 * gardenCapacity) {
        console.log(`The total area consumed is ${areaConsumed}: decision is to PRUNE`)
    } else if (areaConsumed >= 0.8 * gardenCapacity || areaConsumed <= 0.8 * gardenCapacity) {
        console.log(`The total area consumed is ${areaConsumed}: decision is to MONITOR`) 
    } else {
        console.log(`The total area consumed is ${areaConsumed}: decision is to PLANT MORE`)
    }


// Part 2: Think Bigger
// The conservation area in which the garden is located has multiple other gardens. Using the logic you have already created, determine:
// 1. The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
// 2. If the space remained circular, what would be the radius of this expanded garden?

let newInitialPlantNumber = 100;
let additionalSpaceRequired;
let targetNumberofWeeks = 10;
let finalNumberofPlants

{
    finalNumberofPlants = newInitialPlantNumber * rateOfGrowth * targetNumberofWeeks;
        console.log (`The final number of plants after 10 weeks will be ${finalNumberofPlants}`)
    
    finalSpaceRequired = finalNumberofPlants * spaceRequired;
        console.log (`The space required to grow the final number of plants will be ${finalSpaceRequired}`)

    additionalSpaceRequired = finalNumberofPlants - gardenCapacity;
        console.log (`The amount of additional space that would be required is ${additionalSpaceRequired} square meters`)

    newRadius = Math.sqrt(additionalSpaceRequired/PI)
        console.log(`The radius of the expanded region will be ${newRadius} meters`);

}


// Part 3: Errors in Judgement
// The scientists decided not to listen to your recommendations, and have instead started with 100 plants in the original 5-meter-radius garden. //

// Use try and catch to wrap your work in an error-handling block. If the amount of space required to hold the originally provided number of plants exceeds the amount of space available, throw a new error and log an appropriate message. //

try {
    let err = finalSpaceRequired > gardenCapacity;
             console.log("You don't have enough Space")
} catch (err) {
        console.error (err)
    };