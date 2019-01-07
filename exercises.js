/* #doubleArray
 *
 * Takes in an array of numbers and returns an array with each element doubled
 *
 * @param {Array} // [1,2,3]
 * @return {Array} // [2,4,6]
 */
var doubleArray = function(array){
  var doubled = [];
  for(var i = 0; i<array.length; i++){
    doubled.push(array[i]*2)
  }
  return doubled;
}


/* #sumArrays
 *
 * Takes in two arrays of numbers and returns the sum of both arrays.
 *
 * @param {Array}
 * @param {Array}
 * @return {Number}
 */
var sumArrays = function(arr1, arr2){
  newNum = 0;
  for(var i = 0; i<arr1.length; i++){
    newNum+=arr1[i]+arr2[i]
  }
  return newNum;
}

/* #stringCount
 *
 * Takes in a string and returns the length of the string.
 *
 * @param {String}
 * @return {Number}
 */
var stringCount = function(string){
  newNum = 0;
  var newNum = string.length;
  return newNum;
}

/* #arrayLength
 *
 * Takes in an array and returns the length of the array.
 *
 * @param {Array}
 * @return {Number}
 */
var arrayLength = function(array){
  newTotal = 0;
  return array.length;
}

/* #countAll
 *
 * Takes in an array and returns the sum of all numbers in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countAll = function(array){
 function getSum(total, num){
   return total + num;
 }
 return array.reduce(getSum)
}

/* #countStrings
 *
 * Takes in an array of strings and returns an array of string lengths.
 *
 * @param {Array}
 * @return {Array}
 */
var countStrings = function(array){
  var arrayOfStrings = [];
  for(var i = 0; i<array.length; i++){
    arrayOfStrings.push(array[i].length)
  }
  return arrayOfStrings;
}

/* #countAllStrings
 *
 * Takes in an array of strings and returns the sum of all string lengths.
 *
 * @param {Array}
 * @return {Number}
 */
var countAllStrings = function(string){
  newNum = 0;
  for(var i = 0; i<string.length; i++){
    newNum+=string[i].length
  }
  return newNum
}

/* #convertToArray
 *
 * Takes in an object and returns all the values of the object in an array.
 *
 * @param {Object}
 * @return {Array}
 */
var convertToArray = function(obj){
  return Object.values(obj)
}


/* #objectSize
 *
 * Takes in an object and returns the number of key value pairs in the object.
 *
 * @param {Object}
 * @return {Number}
 */
var objectSize = function(obj){
var count = 0
for(var key in obj){
  count++
}
return count;
}

/* #createZeroFilledArray
 *
 * Takes in a number and fills an array with that number of zeroes.
 *
 * @param {Number}
 * @return {Array}
 */
var createZeroFilledArray = function(num){
  var zero = [];
  for(var i = 0; i<num; i++){
    zero.push(0)
  }
  return zero;
}

/* #poppedArray
 *
 * Takes in an array of numbers and returns an array of all but the last element of the array.
 *
 * @param {Array}
 * @return {Array}
 */
var poppedArray = function(array){
  array.pop()
  return array
}

/* #splitString
 *
 * Takes in a string and returns an array of each individual character in the string.
 *
 * @param {String}
 * @return {Array}
 */
var splitString = function(string){
  let array = string.split("")
  return array
}

/* #lengthOfLast
 *
 * Takes in an array of strings and returns the length of the last string.
 *
 * @param {Array}
 * @return {Number}
 */
var lengthOfLast = function(array){
let num = array.pop().length
return num
}

/* #sumBelowTen
 *
 * Takes in an array of numbers and returns the sum of all numbers below 10.
 *
 * @param {Array}
 * @return {Number}
 */
var sumBelowTen = function(array){
  let sum = 0;
  for(var i = 0; i<array.length; i++){
    if(array[i]<10){
      sum+=array[i]
    }
  }
  return sum
}

/* #moreThanTenLetters
 *
 * Takes in an array of strings and returns the amount of elements that have more than ten letters.
 *
 * @param {Array}
 * @return {Number}
 */
var moreThanTenLetters = function(array){
let sum = 0; 
for(var i = 0; i<array.length; i ++){
  if(array[i].length>10){
    sum =+ 1
  }
}
return sum
}

/* #multiplyAll
 *
 * Takes in an array of numbers and returns the product of all elements.
 *
 * @param {Array}
 * @return {Number}
 */
var multiplyAll = function(array){
  var productOfAllElements = 1;
  for(var i = 0; i<array.length; i++){
    productOfAllElements = array[i]*productOfAllElements
  }
  return productOfAllElements
}

/* #sumAllPositive
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {Array}
 * @return {Number}
 */
var sumAllPositive = function(array){
  var sumOfAllPosNums = 0;
  for(var i = 0; i<array.length; i++){
    if(array[i]>=1){
      sumOfAllPosNums+=array[i];
    }
  }
  return sumOfAllPosNums;
}

/* #stringCountBelowThree
 *
 * Takes in an array of strings and returns the amount of strings that have three characters or less.
 *
 * @param {Array}
 * @return {Number}
 */
var stringCountBelowThree = function(array){
  var sumOfStrings = 0;
  for(var i =0; i<array.length; i++){
    if(array[i].length<=3){
      sumOfStrings++;
    }
  }
  return sumOfStrings;
}

/* #countObjects
 *
 * Takes in an array of objects and returns the amount of objects in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countObjects = function(array){
  var totalOfObjectsInArray = 0;
  for(var objects in array){
    totalOfObjectsInArray++
  }
  return totalOfObjectsInArray;
}

/* #getObjectKeys
 *
 * Takes in an object and returns an array of all the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectKeys = function(object){
  var arrayOfObjectKeys = [];
  for(var key in object){
    arrayOfObjectKeys.push(key)
  }
  return arrayOfObjectKeys;
}

/* #getObjectValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectValues = function(object){
  var arrayOfObjectValues = [];
  for(var key in object){
    arrayOfObjectValues.push(object[key])
  }
  return arrayOfObjectValues
}

/* #makeObject
 *
 * Takes in two arguments 'key' and 'value' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
var makeObject = function(string1, string2){
  var newObject = {
    [string1]: string2
  }
  return newObject
}

/* #makeObjectReverse
 *
 * Takes in two arguments 'value' and 'key' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
var makeObjectReverse = function(key, value){
  var newObject = {
    "a": 1
  }
  return newObject
}

/* #tupleToObject
 *
 * Takes in a tuple (an array with two elements) and returns it into a single key-value pair in an object.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObject= function(arr){
  var newObject = {
    [arr[0]]: arr[1]
  }
  return newObject
}

/* #tupleToObjectReverse
 *
 * Takes in a tuple and returns it into a single key-value pair with second tuple element as key and first tuple element as value.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObjectReverse = function(arr){
  var newObject = {
    [arr[1]]: arr[0]
  }
  return newObject
}

/* #strToKeys
 *
 * Takes in an array of strings and returns an object with all string elements as the object's keys and all values set to 0.
 *
 * @param {Array}
 * @return {Object}
 */
var strToKeys = function(){
  var newObject = {};
  for(var i = 0; i<arr.length; i++){
    newObject[arr[i]]=0
  }
  return newObject
}

/* #getValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getValues = function(obj){
  return Object.values(obj)
}

/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getKeys = function(obj){
return object.keys(obj)
}

/* #objectToArray
 *
 * Takes in an object and returns an array of tuples where each tuple has 
 * the object's key as element 0 and object's value as element 1.
 *
 * @param {Object}
 * @return {Array}
 */
var objectToArray = function(obj){
  var newArray = [];
  for (var key in obj){
    var tuple = [];
    tuple.push(key);
    tuple.push(obj[key]);
    newArray.push(tuple);
  }
  return newArray;
}

/* #arrayToObject
 *
 * takes in an array and returns an object with keys set to the elements in the array and
 * all values set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObject = function(array){
  var newObj = {};
  for(var i = 0; i<array.length; i++){
    newObj[array[i]]=false;
  }
  return newObj
}

/* #arraysToObject
 *
 * takes in two arrays, the first array elements will be keys of an object and second array elements 
 * will be values of an object.
 *
 * @param {Array}
 * @param {Array}
 * @return {Object}
 */
var arraysToObject = function(array1, array2){
  var newObj = {};
  for(var i = 0; i<array.length; i++){
    newObj[array1[i]] = array2[i];
  }
  return newObj
}

/* #objectsToTuples
 *
 * takes in two objects and returns an array of tuples of the key value pairs of all objects in both arrays.
 *
 * @param {Object}
 * @param {Object}
 * @return {Array}
 */
var objectsToTuples = function(obj1, obj2){
  var newArray = [];

for (var key in obj1){
  tuple1.push(key);
  tuple1.push(obj1[key]);
  newArray.push(tuple1);
}

for (var key in obj2){
  var tuple2 = [];
  tuple2.push(key);
  tuple2.push(obj2[key]);
  newArray.push(tuple2);
}
return newArray;
}

/* #mapArrayValues
 *
 * takes in an array of strings and returns an object with keys of the array elements and values all set to True.
 *
 * @param {Array}
 * @return {Object}
 */
var mapArrayValues = function(array){
  var newObj = {};
  for(var i = 0; i<array.length; i++){
    newObj[array[i]] = true
  }
  return newObj
}

/* #mapStringCounts
 *
 * takes in an array of strings and returns an object with key names set to the elements in the array.
 * If the character count of the key name is greater than or equal to 5 set the value to true,
 * otherwise set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var mapStringCounts = function(array){
  var newObj = {};
  for(var i = 0; i<array.length; i++){
    if(array[i].length>=5){
    newObj[array[i]] = true
  }else{
    newObj[array[i]] = false
   }
  }
  return newObj;
}

/* #arrayToObjectNums
 *
 * takes in an array of numbers and returns an object with keys set to 
 * each element of the array and all values set to true.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObjectNums = function(array){
  var newObj = {};
}

/* #stringToKeys
 *
 * takes in a string and returns an object whos keys are each letter of the string and all values set to true.
 * 
 * @param {String}
 * @return {Object}
 */
var stringToKeys;

/* #charCountMap
 *
 * takes in an array of strings and returns an object with keys set to each element of the array 
 * and values set to the character count of each key name.
 *
 * @param {Array}
 * @return {Object}
 */
var charCountMap;

/* #frequencyMap
 *
 * takes in an array of strings and returns an object with the string as the key and the number of occurences as the value.
 *
 * @param {String}
 * @return {Object}
 */
var frequencyMap;

/* #tupleConvertToObject
 *
 * takes in an array of tuples and and returns an object whos keys are 
 * the first element of the tuples and values are second element of the tuples.
 *
 * @param {String}
 * @return {Object}
 */
var tupleConvertToObject;


module.exports = {
  doubleArray: doubleArray,
  sumArrays: sumArrays,
  stringCount: stringCount,
  arrayLength: arrayLength,
  countAll: countAll,
  countStrings: countStrings,
  countAllStrings: countAllStrings,
  convertToArray: convertToArray,
  objectSize: objectSize,
  createZeroFilledArray: createZeroFilledArray,
  poppedArray: poppedArray,
  splitString: splitString,
  lengthOfLast: lengthOfLast,
  sumBelowTen: sumBelowTen,
  moreThanTenLetters: moreThanTenLetters,
  multiplyAll: multiplyAll,
  sumAllPositive: sumAllPositive,
  stringCountBelowThree: stringCountBelowThree,
  countObjects: countObjects,
  getObjectKeys: getObjectKeys,
  getObjectValues: getObjectValues,
  makeObject: makeObject,
  makeObjectReverse: makeObjectReverse,
  tupleToObject: tupleToObject,
  tupleToObjectReverse: tupleToObjectReverse,
  strToKeys: strToKeys,
  getValues: getValues,
  getKeys: getKeys,
  objectToArray: objectToArray,
  arrayToObject: arrayToObject,
  arraysToObject: arraysToObject,
  objectsToTuples: objectsToTuples,
  mapArrayValues: mapArrayValues,
  mapStringCounts: mapStringCounts,
  arrayToObjectNums: null,
  stringToKeys: null,
  charCountMap: null,
  frequencyMap: null,
  tupleConvertToObject: null
}
