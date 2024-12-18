/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let n = height.length
    let left = 0
    let right = n - 1
    let maxArea = 0

    while (left < right) {
        let width = right - left
        let heiight = Math.min(height[left], height[right]) // we cannot use height as it the name of array
        let area = width * heiight
        maxArea = Math.max(area, maxArea)
        height[left] < height[right] ? left++ : right--


    }
    return maxArea
};