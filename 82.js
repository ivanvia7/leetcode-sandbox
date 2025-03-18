let test1 = [1, 2, 3, 3, 4, 4, 5];
let test2 = [1, 1, 1, 2, 3];

function deleteDuplicates(head) {
  if (head.length <= 1) {
    return head;
  }

  let hashMap = {};
  let uniqueArr = [];

  for (let i = 0; i < head.length; i++) {
    if (hashMap[head[i]]) {
      hashMap[head[i]] += 1;
    } else {
      hashMap[head[i]] = 1;
    }
  }

  for (const el in hashMap) {
    if (hashMap[el] === 1) {
      uniqueArr.push(Number(el));
    }
  }

  return uniqueArr;
}

console.log(deleteDuplicates(test2));
