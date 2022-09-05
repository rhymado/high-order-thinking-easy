function twoCharacter(stringInput: string): any {
  let maximumLength = 0;
  const uniqueLetter = stringInput
    .split("")
    .filter(
      (str, idx) => idx === stringInput.split("").findIndex((el) => el === str)
    );
  const twoCharacterString: string[] = [];
  for (let i = 0; i < uniqueLetter.length - 1; i++) {
    for (let j = i + 1; j < uniqueLetter.length; j++) {
      twoCharacterString.push(
        stringInput
          .split("")
          .filter((str) => str === uniqueLetter[i] || str === uniqueLetter[j])
          .join("")
      );
    }
  }
  for (let str of twoCharacterString) {
    for (let i = 0; i < str.length - 2; i++) {
      if (str[i] === str[i + 1]) break;
      if (str[i] !== str[i + 2]) break;
      if (i === str.length - 3 && str.length > maximumLength)
        maximumLength = str.length;
    }
  }
  return maximumLength;
}

console.log(twoCharacter("abaacdabd"));
console.log(twoCharacter("beabeefeab"));
