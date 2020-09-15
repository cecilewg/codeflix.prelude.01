// Converts the subject to lower case
function lowerCase(str = '') {
  const result = []

  for (let i = 0; i < str.length; i++) {
    const charCode = str[i].charCodeAt(0)

    if (charCode >= 65 && charCode <= 90) {
      result[i] = charCode + 32
    } else {
      result[i] = charCode
    }

    result[i] = String.fromCharCode(result[i])
  }

  return result.join('')
}

// TESTS
console.log(lowerCase('Chopper'))
console.log(lowerCase('TONY TONY'))


// Converts the subject to upper case
function upperCase(str = ' ') {
  const result = []

  for (let i = 0; i < str.length; i++) {
    const charCode = str[i].charCodeAt(0)

    if (charCode >= 97 && charCode <= 122) {
      result[i] = charCode - 32
    } else {
      result[i] = charCode
    }

    result[i] = String.fromCharCode(result[i])
  }

  return result.join('')
}

console.log(upperCase('Chopper'));
console.log(upperCase('Tony Tony'));

 // Return the string length
 // function length(str = '') {
 //   let i = 0
 //
 //   for (let i in str) {
 //     i = i + 1
 //   }
 //   return i
 // }

 const length = (string = '') => {
     let result = 0;
     for(let i in string)
         result++;
     return result;
 }

console.log(length('Chopper'));

// Converts the first character to upper case
function capitalize (str = '', restToLower = false) {
  const firstChar = str.chartAt(0).toUpperCase();
  console.log(firstChar)

  // for (let i = 1; i < str.length ; i++) {
  //   const charCode =
  //   if (restToLower === true) {
  //     result[i] = charCode - 32
  //   } else {
  //     result[i] = charCode
  //   }
  //
  //   result[i] = String.fromCharCode(result[i])
  // }
  //
  // return result.join('')
}


  // const firstChar = str[0]
  // if (firstChar >= 97 && firstChar <= 122) {
  //   result[i] = firstChar - 32
  // } else {
  //   result[i] = firstChar
  // }
  // result[i] = str.fromCharCode(result[i])
  // return result.join('')


console.log(capitalize('chopper'));

// Converts the first character of subject to lower case
function decapitalize (str = '') {
  return str.charAt(0).toLowerCase() + str.slice(1)
}

console.log(decapitalize('Woonan'));

// Converts the subject to kebab case, also called spinal case or lisp case
function kebabCase(str = '') {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2")     // get all lowercase letters that are near to uppercase ones
            .replace(/([A-Z])([A-Z])/g, '$1-$2')
            .replace(/\s+/g, '-')                   // replace all spaces to dash
            .toLowerCase();                         // convert to lower case
};

console.log(kebabCase('this is a test'));
console.log(kebabCase('thisIsATest'));

// Converts the subject to snake case.
function snakeCase(str = '') {
  return str.replace(/([a-z])([A-Z])/g, "$1_$2")     // get all lowercase letters that are near to uppercase ones
            .replace(/([A-Z])([A-Z])/g, '$1_$2')
            .replace(/\s+/g, '_')                   // replace all spaces to low dash
            .toLowerCase();                         // convert to lower case
};

console.log(snakeCase('this is a test'));
console.log(snakeCase('thisIsATest'));

// Converts the uppercase alpha caracters of str to lowercase and lowercase characters to uppercase.
function swapCase (str = '') {
  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      str[i]  = str[i].toUpperCase();
    }
    else if(str[i] === str[i].toUpperCase()) {
      str[i] = str[i].toLowerCase();
    }
  }
  return str
}

console.log(swapCase('One Code'));
console.log(swapCase('1337 Fruits'));
// de.sousa.dylan@outlook.fr
