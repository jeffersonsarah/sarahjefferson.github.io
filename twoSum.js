function twoSum(nums, target) {
    // Creating an object to store the numbers
    let num = {};

    // Looping through the array of numbers stored
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        
        // Check if the same number already exists
        if (num.hasOwnProperty(complement)) {
            // Return if the numbers are the same and the current number
            return [num[complement], i];
        }
        
        // Store the current number in the object
        num[nums[i]] = i;
    }
    
    // If the same number isn't found, return an empty array
    return [];
}

// Testing the function with this exaample
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1] (2 + 7 = 9)

// These are other examples to test with
console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2] (2 + 4 = 6)
console.log(twoSum([3, 3], 6)); // Output: [0, 1] (3 + 3 = 6)
