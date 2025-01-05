/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let ans = s.trim().split(/\s+/).reverse().join(' ')
    return ans
};