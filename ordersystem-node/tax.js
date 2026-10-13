function calculateTax(amount, rate) {
    return amount * rate / 100;
}

function calculateDiscount(amount, percentage) {
    return amount * percentage / 100;
}

function calculateFinalAmount(amount, discount, taxRate) {
    const discountAmount = calculateDiscount(amount, discount);
    const discountedAmount = amount - discountAmount;
    const tax = calculateTax(discountedAmount, taxRate);

    return discountedAmount + tax;
}

module.exports = {
    calculateTax,
    calculateDiscount,
    calculateFinalAmount
};
