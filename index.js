// IPv4 Validator
// Given a string, determine if it is a valid IPv4 Address. A valid IPv4 address consists of four integer numbers separated by dots (.). Each number must satisfy the following conditions:

// It is between 0 and 255 inclusive.
// It does not have leading zeros (e.g. 0 is allowed, 01 is not).
// Only numeric characters are allowed.

function isValidIPv4(ipv4) {
  console.log(ipv4);
  // between 0 - 255
  // NO leading 0s (!01)
  // only numeric
  // regex
  // regex not so good for numeric!
  // const regex = /[0-255+]\.[0-255+]\.[0-255+]\.[0-255+]/;
  // console.log(regex.test(ipv4));

  // better to split into arr
  const arr = ipv4.split('.');
  if (arr.length !== 4) {
    return false;
  }

  console.log(arr);

  function numChecker(num) {
    const regex = /^\d+$/;
    if (regex.test(num)) {
      const value = Number(num);
      // console.log(number)
      return value >= 0 && value <= 255;
    }
    return false;
  }

  function strChecker(str) {
    if (str.length > 1 && str.startsWith('0')) {
      return false;
    }
    return true;
  }

  for (let i = 0; i < arr.length; i++) {
    if (!strChecker(arr[i]) || !numChecker(arr[i])) {
      return false;
    }
  }
  return true;

  //arr.forEach((x) => {
  //  console.log(arr[x])

  //  }
  // }
  // )

  console.log(strChecker(arr[0]));

  console.log(numChecker(arr[0]));

  // return ipv4;
}
