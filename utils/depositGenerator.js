import { random, ceil, log, reduce, round } from 'mathjs';

// Define a function that generates a deposit
function generateDeposit(minerals, minCount) {
  // Initialize an empty deposit object
  const deposit = { minerals: [] };
  // Initialize a variable to keep track of the total count of minerals
  let totalCount = 0;

  // Check if minerals is an array before calling forEach
  if (Array.isArray(minerals)) {
    minerals.forEach((mineral) => {
      const percentage = calculatePercentage(mineral.minPercentage, mineral.maxPercentage, mineral.probability, mineral.exponent);
      depositMinerals.push({
        name: mineral.name,
        percentage: percentage.toFixed(2),
      });
    });
  } else {
    console.error('minerals is not an array:', minerals);
  }

  // Check if depositMinerals has enough items before returning it
  if (depositMinerals.length >= minCount) {
    return { minerals: depositMinerals };
  } else {
    console.error('Could not generate deposit with enough minerals');
    return null;
  }
  
  // Calculate the total percentage of all the mineral types in the deposit
  const totalPercentage = reduce(deposit.minerals, (sum, { count }) => sum + count, 0);

  // If the total percentage is 0, add an inert material to the deposit
  if (totalPercentage === 0) {
    deposit.minerals.push({ name: 'Inert Material', count: 1, percentage: 100 });
  }
  // If the total percentage is less than 100, calculate the percentage for each mineral type and add the remainder to the first mineral type
  else if (totalPercentage < 100) {
    deposit.minerals.forEach((mineral) => {
      mineral.percentage = round((mineral.count / totalPercentage) * 100);
    });
    const remainder = 100 - reduce(deposit.minerals, (sum, { percentage }) => sum + percentage, 0);
    deposit.minerals[0].percentage += remainder;
  }
  // If the total percentage is greater than 100, generate a new deposit with the same mineral types and minimum count
  else if (totalPercentage > 100) {
    return generateDeposit(minerals, minCount);
  }

  // Return the generated deposit
  return deposit;
}

// Define a function that calculates the percentage of a mineral type in a deposit
function calculatePercentage(minPercentage, maxPercentage, probability, exponent) {
  // Calculate a random value between 0 and 1
  const randValue = random();
  // If the random value is less than the mineral's probability
  if (randValue / probability < 1) {
    // Calculate the percentage of the mineral type based on the exponential distribution
    const percentage = ceil((-exponent * log(random())) * ((maxPercentage - minPercentage) / exponent) + minPercentage);
    return percentage;
  }
  // If the random value is greater than the mineral's probability, return 0
  return 0;
}

// Export the generateDeposit function
export { generateDeposit };