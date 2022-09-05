function weightedUniformString(stringInput: string, query: number[]): string[] {
  const uniformString: string[] = [];
  let substring = "";
  // determine each uniform string
  for (let i = 0; i <= stringInput.length; i++) {
    if (!substring) {
      substring += stringInput[i];
      continue;
    }
    if (substring.includes(stringInput[i])) {
      substring += stringInput[i];
      continue;
    }
    uniformString.push(substring);
    substring = "" + stringInput[i];
  }
  // a char code = 97
  // determine each weight of substring
  const weightSubstring: number[] = [];
  uniformString.forEach((substr) => {
    let weight = 0;
    for (let char of substr) {
      weight += char.charCodeAt(0) - 96;
      weightSubstring.push(weight);
    }
  });
  // process query
  return query.map((key) => (weightSubstring.includes(key) ? "YES" : "NO"));
}

console.log(weightedUniformString("abbcccdddd", [1, 7, 5, 4, 15]));
console.log(weightedUniformString("abccddde", [1, 3, 12, 5, 9, 10]));
console.log(weightedUniformString("aaabbbbcccddd", [9, 7, 8, 12, 5]));
