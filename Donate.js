document.addEventListener('DOMContentLoaded', function() {
  var stripe = Stripe('your_publishable_key');
  var form = document.getElementById('donation-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    var amount = document.getElementById('amount').value;
    var donationType = document.getElementById('donation-type').value;
    var reason = document.getElementById('reason').value;
    var prayerPoint = document.getElementById('prayer-point').value;

    stripe.redirectToCheckout({
      lineItems: [
        {price: 'your_price_id', quantity: 1},
      ],
      mode: 'payment',
      successUrl: 'success.html',
      cancelUrl: 'cancel.html',
    })
    .then(function(result) {
      if (result.error) {
        var paymentResult = document.getElementById('payment-result');
        paymentResult.textContent = 'Error processing payment: ' + result.error.message;
      }
    });
  });
});
