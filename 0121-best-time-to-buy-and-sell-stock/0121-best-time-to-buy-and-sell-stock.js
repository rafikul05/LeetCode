/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxProfit = 0;
    let minPrice = Infinity

    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price
        }
        else {
            maxProfit = Math.max(maxProfit, price - minPrice)
        }
    }
    return maxProfit
};