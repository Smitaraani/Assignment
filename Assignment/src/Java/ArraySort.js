let array = [5, 2, 9, 1, 5, 6];

// Sort the array in descending order
array.sort(function(a, b) {
    return b - a;
});

console.log(array); // This will print [9, 6, 5, 5, 2, 1] in descending order
