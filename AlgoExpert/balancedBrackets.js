function balancedBrackets(string) {
  let stringArray = string.split("");
  let balancedStack = [];

  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === "{" || stringArray[i] === "[" || stringArray[i] === "(" || stringArray[i] === ")" || stringArray[i] === "]" || stringArray[i] === "}") {
      if (balancedStack.length === 0 && (stringArray[i] === "}" || stringArray[i] === "]" || stringArray[i] === ")")) {
        return false;
      } else if (
        stringArray[i] === "}" && balancedStack[balancedStack.length - 1] === "{" ||
        stringArray[i] === "]" && balancedStack[balancedStack.length - 1] === "[" ||
        stringArray[i] === ")" && balancedStack[balancedStack.length - 1] === "("
      ) {
        balancedStack.pop();
      } else if (stringArray[i] === "{" || "[" || "(") {
        balancedStack.push(stringArray[i])
      }
      else {
        return false;
      }
    } else {
      continue;
    }
  }
  return balancedStack.length === 0 ? true : false;
}

var test = balancedBrackets("(a)");