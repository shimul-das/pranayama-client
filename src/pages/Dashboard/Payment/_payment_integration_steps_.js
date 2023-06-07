/***
 * 1. install stripe and react stripe js
 * 2. create a checkout form with card element(card elements contains: card number, expiration date , cvs, zip code)
 * 3.create account stripe and get published key.
 * 4) Get card information
 * 5) use test card to use test payment
 * 6) use test card to test payment
 * 7) On the server side : install stripe:
 * *npm install --save stripe
 * * 8) create payment intent api with payment method: ['card s]
 * make sure you provide amout in cents(multiply price with 100)
 * call payment intent api to get client secret and store it in a state.
 * use confirmcardpayment api with client secret card
 * display confirm card error
 * display confirm card success.
 * do things after payment=>
 */