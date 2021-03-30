function checkPermutation(firstString, secondString) {
  if (firstString.length !== secondString.length) {
    return false;
  }
  let myHash = [];
  for (let i = 0; i < firstString.length; i++) {
    if (myHash[firstString[i]]) {
      myHash[firstString.charAt(i)]++;
    } else {
      myHash[firstString.charAt(i)] = 1;
    }
  }
  for (i = 0; i < secondString.length; i++) {
    myHash[secondString.charAt(i)]--;
  }
  for (i in myHash) {
    if (myHash[i] !== 0) {
      return false;
    }
  }
  return true;
}

const firstString = "abc";
const secondString = "cbd";

const isStringPermutate = checkPermutation(firstString, secondString);

console.log(
  `Are the two strings ${firstString} and ${secondString} can be permutated?: ${isStringPermutate}`
);
