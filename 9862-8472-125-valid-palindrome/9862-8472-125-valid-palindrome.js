/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let start = 0;
    let end = s.length - 1; // Use length - 1 to get the last index

    // Helper function to check if a character is alphanumeric
    function isAlphanumeric(char) {
        return (char >= '0' && char <= '9') || (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z');
    }

    while (start < end) {
        // Move start pointer to the next valid character
        while (start < end && !isAlphanumeric(s[start])) {
            start++;
        }
        // Move end pointer to the previous valid character
        while (start < end && !isAlphanumeric(s[end])) {
            end--;
        }

        // Compare characters
        if (s[start].toLowerCase() !== s[end].toLowerCase()) {
            return false; // Not a palindrome
        }

        // Move both pointers
        start++;
        end--;
    }

    return true; // If we complete the loop, it's a palindrome
};