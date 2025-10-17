/**
 * Write a function named containsDuplicate that takes an array of integers (nums) as input
 * and returns true if any value appears at least twice in the array, and false if every element is distinct.
 *
 * Problem: Given an integer array nums, return true if any value appears at least twice in the array,
 * and return false if every element is distinct.
 *
 * Examples:
 * - containsDuplicate([1,2,3,1]) → true
 * - containsDuplicate([1,2,3,4]) → false
 * - containsDuplicate([1,1,1,3,3,4,3,2,4,2]) → true
 */

const containsDuplicate = (nums) => {
  //frequency counter object created
  let freq = {};

  //iterates through each array element
  for (let num of nums) {
    //if num is found in freq then it will add the value by 1
    // if not then it will create the key with a value of 1
    freq[num] ? freq[num]++ : (freq[num] = 1);
  }

  //iterates through the freq object
  for (let key in freq) {
    //checks if there is a key that has a value greater than 1
    if (freq[key] > 1) {
      return true; //guard clause
    }
  }
  return false;
};

// Export the function for testing
module.exports = { containsDuplicate };

// Example usage (commented out to avoid interference with tests)
// console.log(containsDuplicate([1, 2, 3, 1])); // → true
// console.log(containsDuplicate([1, 2, 3, 4])); // → false
// console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // → true
