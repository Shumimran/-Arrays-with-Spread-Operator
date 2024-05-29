"use strict";
// Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops.
//  Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the 
//  result.
let priceSet1 = [35000, 40000, 45000];
let priceSet2 = [38000, 45000, 55000];
let combinePrices = [...priceSet1, ...priceSet2].sort((a, b) => a - b);
console.log(combinePrices);
