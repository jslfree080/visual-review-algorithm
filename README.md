# Memoizer for Recursive Functions

This code example demonstrates how to create a memoizer utility function in JavaScript and apply it to optimize recursive functions like Fibonacci calculations.

```javascript
// Define the memoizer function
function memoizer(recursiveFunc) {
    const memo = {};

    return function (...args) {
        const key = JSON.stringify(args);

        if (memo[key] !== undefined) {
            return memo[key];
        }

        const result = recursiveFunc(...args);
        memo[key] = result;
        return result;
    };
}

// Define the Fibonacci function
function fibonacci(n) {
    if (n <= 2) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Create a memoized version of the Fibonacci function
const memoizedFibonacci = memoizer(fibonacci);

// Example usage:
const result = memoizedFibonacci(40); // Calculate Fibonacci(40) with memoization
console.log(result); // Output: 102334155