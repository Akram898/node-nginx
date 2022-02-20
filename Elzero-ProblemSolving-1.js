function findMissigLetterIn(givenLetters) {
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  let start = alpha.indexOf(givenLetters[0]);

  for (let i = 0; i < givenLetters.length; i++) {
    // console.log(alpha[start + i]);
    // console.log(givenLetters[i]);
    // console.log("###");

    if (givenLetters[1] !== alpha[start + i]) {
      return alpha[start + i];
    } else {
      return "No missing letter in sequence";
    }
  }

  //   console.log(start);
}
console.log(findMissigLetterIn("defgi")); // h
// console.log(findMissigLetterIn("abcdeghi")); // f
// console.log(findMissigLetterIn("xyz")); // No Missing Letter In Sequence
