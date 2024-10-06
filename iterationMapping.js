// Prompt the user to enter the Max Limit of the Loops
let maxLimit = prompt("Enter the Limit of the Double Loop:");

// Convert the input to a number
maxLimit = parseInt(maxLimit);

// Initialize all counters to zero
let counter1 = 0;
let counter2 = 0;

// Iterate through the double loop
for (let i = 0; i < maxLimit; i++) {
  counter1 = i;
  for (let j = 0; j < maxLimit; j++) {
    counter2 = j;

    // Calculate the added value
    let addedValue = counter1 + counter2;

    // Log the loop points and added value
    console.log(`[${counter1}][${counter2}] Added value is ${addedValue}`);
  }
}
