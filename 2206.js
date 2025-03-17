var divideArray = function (nums) {
  let pairsAmount = nums.length / 2;
  let pairsCounter = 0;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1]) {
      pairsCounter++;
      i++;
    } else {
      continue;
    }
  }

  if (pairsCounter === pairsAmount) {
    return true;
  } else {
    return false;
  }
};
