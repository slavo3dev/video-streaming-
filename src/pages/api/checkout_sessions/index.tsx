import Stripe from 'stripe';

const createStripe =() => {
    return (
        new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2022-11-15', })
    )
};
export const stripeSecret: any = createStripe;