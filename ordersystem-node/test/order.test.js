const test = require("node:test");
const assert = require("node:assert");

const {
    calculateTax,
    calculateDiscount,
    calculateFinalAmount
} = require("../tax");

test("tax calculation", () => {
    assert.strictEqual(calculateTax(1000, 18), 180);
});

test("discount calculation", () => {
    assert.strictEqual(calculateDiscount(1000, 10), 100);
});

test("final amount calculation", () => {
    assert.strictEqual(
        calculateFinalAmount(1000, 10, 18),
        1062
    );
});

test("zero discount", () => {
    assert.strictEqual(
        calculateFinalAmount(1000, 0, 18),
        1180
    );
});

test("zero tax", () => {
    assert.strictEqual(
        calculateFinalAmount(1000, 10, 0),
        900
    );
});
