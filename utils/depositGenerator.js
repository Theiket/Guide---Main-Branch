// Define a function that generates a deposit
function generateDeposit(minerals, minCount) {
  // Initialize an empty deposit object
  const deposit = { minerals: [] };
  // Initialize a variable to keep track of the total count of minerals
  let totalCount = 0;

  // Iterate over each mineral type in the given array
  minerals.forEach(({ name, probability, exponent, minPercentage, maxPercentage }) => {
    // Initialize a variable to keep track of the count of the current mineral type
    let count = 0;

    // If a minimum count is specified and the total count of minerals is less than the minimum count
    if (minCount && totalCount < minCount) {
      // Calculate the count of the current mineral type based on its minimum percentage
      count = ceil((minCount * minPercentage) / 100);
      // Increment the total count of minerals
      totalCount += count;
    }
    // If the total count of minerals is still less than the minimum count and this mineral type hasn't been added yet
    else if (totalCount < minCount) {
      // Calculate a random value between 0 and 1
      const randValue = random();
      // If the random value is less than the mineral's probability
      if (randValue / probability < 1) {
        // Calculate the count of the current mineral type based on the exponential distribution
        count = ceil(
          (-exponent * log(random())) * ((maxPercentage - minPercentage) / exponent) + minPercentage
        );
        // Increment the total count of minerals
        totalCount += count;
      }
    }
    // If the count of the current mineral type is greater than 0
    if (count > 0) {
      // Add the current mineral type to the deposit object
      deposit.minerals.push({ name, count, percentage: 0 });
    }
  });

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

// Export the generateDeposit function
export { generateDeposit };