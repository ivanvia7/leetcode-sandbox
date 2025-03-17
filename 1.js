var twoSum = function (nums, target) {
  let hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    hashMap[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    let numberLeft = target - nums[i];
    if (hashMap[numberLeft] !== undefined && hashMap[numberLeft] !== i) {
      return [i, hashMap[numberLeft]];
    }
  }

  return [];
};
