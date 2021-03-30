const removeDuplicates = (arrayOfStrings) => {
  return [...new Set(arrayOfStrings.sort())];
};

// Array of strings
const arrayOfStrings = [12, 11, 12, 21, 41, 43, 21];
const removedDuplicates = removeDuplicates(arrayOfStrings);
console.log("Only unique Numbers are: ", removedDuplicates);
