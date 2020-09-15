// Converts the subject to lower case
function lowerCase(str = ' ') {
  return str.toLowerCase();
}

console.log(lowerCase('Chopper'));

// Converts the subject to upper case
function upperCase(str = '') {
  return str.toUpperCase();
}

console.log(upperCase('Chopper'));

 // Return the string length
function length(str = '') {
  return str.length;
}

console.log(length('Chopper'));

// Converts the first character to upper case
function capitalize (str = '', restToLower = false) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

console.log(capitalize('woonan'));

// Converts the first character of subject to lower case
function decapitalize (str = '') {
  return str.charAt(0).toLowerCase() + str.slice(1)
}

console.log(decapitalize('Woonan'));

// Converts the subject to kebab case, also called spinal case or lisp case
function kebabCase(str = '') {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

console.log(kebabCase('round trip'))
