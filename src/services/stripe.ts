import Stripe from 'stripe';

//pegando a versão do nosso app direto do package.json
import * as packageInfo from '../../package.json';

export const stripe = new Stripe(
  process.env.STRIPE_API_KEY!,
  {
    apiVersion: '2020-08-27',
    appInfo: {
      name: 'Ignews',
      version: packageInfo.version,
    },
  }
);