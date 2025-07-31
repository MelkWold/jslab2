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
    console.log (weeklyPlantNumber) 
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


// Part 2: 


// Part 3: 

// git add . git commit -m "" git push origin main