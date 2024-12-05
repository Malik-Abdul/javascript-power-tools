// ------------------
// ------------------
interface PaymentProcessor {
  // Standardized Payment Interface (Target Interface)
  pay(amount: number): void;
}

class PayPal {
  // Third-Party Library (Adaptee)
  // This is the PayPal library, which has a different method signature.
  makePayment(paypalAmount: number) {
    console.log(`Paid $${paypalAmount} using PayPal.`);
  }
}

class PayPalAdapter implements PaymentProcessor {
  // Adapter (Bridge between your app and PayPal)
  // The adapter implements the PaymentProcessor interface and translates the calls into PayPal's API.
  private paypal: PayPal;

  constructor(paypal: PayPal) {
    this.paypal = paypal;
  }

  pay(amount: number): void {
    this.paypal.makePayment(amount);
  }
}

// Client code
const paypal = new PayPal();
const paymentProcessor: PaymentProcessor = new PayPalAdapter(paypal);

paymentProcessor.pay(100); // Output: Paid $100 using PayPal.
