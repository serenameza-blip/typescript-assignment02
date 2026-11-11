// Problem 5

// Function that counts occurrences of a specific item in an array using generics

function countOccurrences<T>(arr: T[], item: T): number {
    // TODO: Implement logic to count occurrences of item in arr
    return arr.filter(i => i === item).length; // Placeholder return statement
}

export default countOccurrences;