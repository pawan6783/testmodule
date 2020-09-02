const functions = require("./index");

//Test Cases for Sorting

test("giving null value as input", () => {

    const arr = null;

    expect(functions.bubblesort(arr)).toBeNull();
});


test("giving an empty array as input", () => {

    const arr = [];

    expect(functions.bubblesort(arr)).toBe("Empty list");
});


test("sort all natural number", () => {

    const arr = [5, 4, 8, 1, 9];

    expect(functions.bubblesort(arr)).toEqual([1, 4, 5, 8, 9]);
});

test("sort positive and negative numbers", () => {

    const arr = [5, -4, 8, 1, -9];

    expect(functions.bubblesort(arr)).toEqual([-9,-4, 1, 5, 8]);
});

test("sort floating point numbers and natural numbers", () => {

    const arr = [5.2, 4, 8.8, 1.2, 9];

    expect(functions.bubblesort(arr)).toEqual([1.2, 4, 5.2, 8.8, 9]);
});


//Test Cases for reversing the string