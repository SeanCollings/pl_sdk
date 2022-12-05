import { productLookupClient } from 'dist-sdk/sdk';
import { FastifyInstance, FastifyPluginOptions } from 'fastify';

const plClient = productLookupClient('http://localhost:4000/graphql');

export const healthRoutes = (
  app: FastifyInstance,
  _: FastifyPluginOptions,
  done: () => void,
) => {
  app.get('/ping', async () => {
    return 'pong';
  });

  app.get('/', async () => {
    return 'PL_SDK API';
  });

  app.get('/test', async () => {
    console.log('plClient', plClient);
    // const result = await plClient.getProducts(
    //   { skus: ['mock_sku_1'] },
    //   { sku: true, gender: true, name: true },
    // );

    // return result.products;
  });

  done();
};
