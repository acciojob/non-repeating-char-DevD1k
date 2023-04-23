//your JS code here. If required.
'use strict';
let out = prompt("Enter A String");
function firstNonRepeatingCharacter(out) {
  for (let i = 0; i < out.length; i++) {
    let char = out[i];
    if (out.indexOf(char) == i && out.indexOf(char, i + 1) == -1) {
      return char;
    }
  }
  return null;
};
let ans = firstNonRepeatingCharacter(out);
alert(ans);