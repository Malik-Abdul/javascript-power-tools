var PayPal = /** @class */ (function () {
    function PayPal() {
    }
    // Third-Party Library (Adaptee)
    // This is the PayPal library, which has a different method signature.
    PayPal.prototype.makePayment = function (paypalAmount) {
        console.log("Paid $".concat(paypalAmount, " using PayPal."));
    };
    return PayPal;
}());
var PayPalAdapter = /** @class */ (function () {
    function PayPalAdapter(paypal) {
        this.paypal = paypal;
    }
    PayPalAdapter.prototype.pay = function (amount) {
        this.paypal.makePayment(amount);
    };
    return PayPalAdapter;
}());
// Client code
var paypal = new PayPal();
var paymentProcessor = new PayPalAdapter(paypal);
paymentProcessor.pay(100); // Output: Paid $100 using PayPal.
