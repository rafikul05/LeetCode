/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let ans=0;
    let frequency=0
    
    for(let i=0; i<nums.length; i++){
        if(frequency==0){
        ans=nums[i]
        }
        if(ans==nums[i]){
            frequency++
        }
        else{
            frequency--
        }
    }
    return ans
};