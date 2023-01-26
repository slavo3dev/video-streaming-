import { stripeSecret } from "src/pages/api/checkout_sessions";
const stripe = require('stripe')(stripeSecret);

stripe.products.create({
  name: 'Starter Subscription',
  description: '$14/Month subscription',
}).then(product => {
  stripe.prices.create({
    unit_amount: 1200,
    currency: 'usd',
    recurring: {
      interval: 'month',
    },
    product: product.id,
  }).then(price => {
    console.log('Success! Here is your starter subscription product id: ' + product.id);
    console.log('Success! Here is your premium subscription price id: ' + price.id);
  });
});

//Here is your starter subscription product id: prod_NEKC7DCPvRocOi
//Here is your premium subscription price id: price_1MTrXxA5ge5GYHOLnIiqjRn2