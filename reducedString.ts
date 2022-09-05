function reduceString(stringInput: string): string {
  let stringToDelete = "";
  for (let idx = 0; idx < stringInput.length; idx++) {
    if (stringInput[idx] === stringInput[idx + 1]) {
      stringToDelete = stringInput[idx] + stringInput[idx + 1];
      break;
    }
  }
  if (!stringToDelete.length) return stringInput || "Empty String";
  const newString = stringInput.replace(stringToDelete, "");
  return reduceString(newString);
}

console.log(reduceString("aab"));
console.log(reduceString("aaabccddd"));
console.log(reduceString("abba"));
