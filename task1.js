function commonPrefixLength(s1, s2) {
  let length = 0;
  for (let i = 0; i < s1.length && i < s2.length; i++) {
    if (s1[i] === s2[i]) {
      length++;
    } else {
      break;
    }
  }
  return length;
}

function sumOfCommonPrefixes(string) {
  let totalSum = 0;
  for (let i = 0; i < string.length; i++) {
    let suffix = string.slice(i);
    totalSum += commonPrefixLength(string, suffix);
  }
  return totalSum;
}

function processInput(input) {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10); // number of test cases
  const results = [];

  for (let i = 1; i <= n; i++) {
    const currentString = lines[i];
    results.push(sumOfCommonPrefixes(currentString));
  }

  return results;
}

// Example usage with custom input format:
const customInput = `2
ababaa
aa`;

const output = processInput(customInput);
console.log(output);