import * as math from 'mathjs';

function generateDeposit(selectedDeposit) {
  let includedMinerals = [];
  let totalPercentage = 0;

  // select minerals for the deposit based on their probabilities
  for (let mineral of minerals) {
    if (selectedDeposit.minerals.includes(mineral.name)) {
      const randomValueOverProbability = Math.random() / mineral.probability;
      if (randomValueOverProbability <= 1) {
        includedMinerals.push(mineral);
        if (includedMinerals.length >= selectedDeposit.minCount) {
          break;
        }
      }
    }
  }

  // if minimum number of minerals is not reached, push the mineral with the closest value to 1 but exceeding 1
  while (includedMinerals.length < selectedDeposit.minCount) {
    let closestMineral = null;
    let closestValue = Infinity;
    for (let mineral of minerals) {
      if (selectedDeposit.minerals.includes(mineral.name) && !includedMinerals.includes(mineral)) {
        const randomValueOverProbability = Math.random() / mineral.probability;
        const value = Math.abs(randomValueOverProbability - 1);
        if (value < closestValue) {
          closestValue = value;
          closestMineral = mineral;
        }
      }
    }
    includedMinerals.push(closestMineral);
  }

  // calculate percentage of each included mineral in the deposit
  for (let mineral of includedMinerals) {
    mineral.percentage = calculatePercentage(mineral);
    totalPercentage += mineral.percentage;
  }

  // if total percentage is over 100, regenerate percentages for included minerals
  if (totalPercentage > 100) {
    for (let mineral of includedMinerals) {
      mineral.percentage = null;
    }
    return generateDeposit(selectedDeposit);
  }

  // if total percentage is less than 100, add inert material to the deposit
  if (totalPercentage < 100) {
    const inertPercentage = 100 - totalPercentage;
    includedMinerals.push({ name: 'inert', percentage: inertPercentage });
  }

  return includedMinerals;
}

function calculatePercentage(mineral) {
  return Math.ceil((-mineral.exponent * Math.log(Math.random())) * (mineral.maxPercentage - mineral.minPercentage) / mineral.exponent + mineral.minPercentage);
}
