// Ex.1 Converts the subject to lower case
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

// console.log(lowerCase('Chopper'))
// console.log(lowerCase('TONY TONY'))





// Ex.2 Converts the subject to upper case
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

// console.log(upperCase('Chopper'));
// console.log(upperCase('Tony Tony'));





 // Ex.3 Return the string length

 const length = (string = '') => {
     let result = 0;
     for(let i in string)
         result++;
     return result;
 }

// console.log(length('Chopper'));

// function length(str = '') {
//   let i = 0
//
//   for (let i in str) {
//     i = i + 1
//   }
//   return i
// }






// Ex 4. Converts the first character to upper case.
// If restToLower is true, convert the rest of subject to lower case.
function isLowerCase(char) {
  return (char >= 97 && char <= 122)
}

function capitalize(str = '', restToLower = false) {
  const result = []
  const firstCharCode = str.charCodeAt(0)

  if (isLowerCase(firstCharCode)) {
    result[0] = String.fromCharCode(firstCharCode - 32)
  }

  for (let i = 1; i < str.length; i++) {
    result[i] = str[i]
    var restCharCode = str.charCodeAt(i)
    if (restCharCode >= 65 && restCharCode <= 90) {
      result[i] = String.fromCharCode(restCharCode + 32)
    }
  }

  return result.join('')
}

// const capitalizedString = capitalize('hello EvelYne')
// console.log(capitalizedString)







// Ex.5 Converts the first character of subject to lower case
function isUpperCase(firstChar) {
  return (firstChar >= 65 && firstChar <= 90)
}

function decapitalize (str = '') {
  var result = []
  var firstCharCode = str.charCodeAt(0)

  if (isUpperCase(firstCharCode)) {
    result[0] = String.fromCharCode(firstCharCode + 32)
  }

  for (let i = 1; i < str.length; i++) {
    result[i] = str[i]
    var restCharCode = str.charCodeAt(i)
    if (restCharCode >= 65 && restCharCode <= 90) {
      result[i] = String.fromCharCode(restCharCode + 32)
    }
  }
  return result.join('')
}

// console.log(decapitalize('Woonan'));
// console.log(decapitalize('El Drago'));









// Ex. 6 Converts the subject to kebab case, also called spinal case or lisp case
function kebabCase(str = '') {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2")     // get all lowercase letters that are near to uppercase ones
            .replace(/([A-Z])([A-Z])/g, '$1-$2')
            .replace(/\s+/g, '-')                   // replace all spaces to dash
            .toLowerCase();                         // convert to lower case
};

// console.log(kebabCase('this is a test'));
// console.log(kebabCase('thisIsATest'));







// Ex. 7 Converts the subject to snake case.
function snakeCase(str = '') {
  return str.replace(/([a-z])([A-Z])/g, "$1_$2")     // get all lowercase letters that are near to uppercase ones
            .replace(/([A-Z])([A-Z])/g, '$1_$2')
            .replace(/\s+/g, '_')                   // replace all spaces to low dash
            .toLowerCase();                         // convert to lower case
};

// console.log(snakeCase('this is a test'));
// console.log(snakeCase('thisIsATest'));







// Ex. 8 Converts the uppercase alpha caracters of str to lowercase and lowercase characters to uppercase.
function swapCase (str = '') {
  var result = []
  for (let i = 0; i < str.length; i++) {
    result[i] = str[i]
    var charCode = str.charCodeAt(i)
    if (charCode >= 65 && charCode <= 90) {
      result[i] = String.fromCharCode(charCode + 32)
    }
    else if (charCode >= 97 && charCode <= 122) {
      result[i] = String.fromCharCode(charCode - 32)
    }
  }
  return result.join('')
}

// console.log(swapCase('One Code'));
// console.log(swapCase('1337 Fruits'));
// de.sousa.dylan@outlook.fr





// Ex. 9 Access a character from str at specified position.
function charAt (str='', position) {
  // var strArray = str.split('')
  return str[position]
}

// console.log(charAt('one code', 4));






// Ex. 10 Extracts the first length characters from str.
function first (str='', len) {
  var result = ''
  for (i = 0; i < len; i++) {
    result = result + str[i]
  }
  return result
}

// console.log(first('chopper', 3))






// Ex 11 Extracts the last length characters from str.
function last (str='', len) {
  var result = ''
  for (i = str.length - len; i < str.length; i++) {
    result = result + str[i]
  }
  return result
}

console.log(last('chopper', 2))
console.log(last('increment', 4))
