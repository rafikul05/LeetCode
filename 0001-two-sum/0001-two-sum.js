/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Create an array of tuples with original indices
    const indexedNums = nums.map((num, index) => [num, index]);
    // Sort the array based on the numbers
    indexedNums.sort((a, b) => a[0] - b[0]);

    let left = 0; // Start pointer
    let right = indexedNums.length - 1; // End pointer

    while (left < right) {
        const sum = indexedNums[left][0] + indexedNums[right][0]; // Calculate the sum

        if (sum < target) {
            left++; // Move the left pointer to the right
        } else if (sum > target) {
            right--; // Move the right pointer to the left
        } else {
            // Return the original indices of the two numbers
            return [indexedNums[left][1], indexedNums[right][1]];
        }
    }

    return []; // Return an empty array if no pair is found
};