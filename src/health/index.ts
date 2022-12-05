import { FastifyInstance, FastifyPluginOptions } from 'fastify';

export const healthRoutes = (
  app: FastifyInstance,
  _: FastifyPluginOptions,
  done: () => void,
) => {
  app.get('/ping', async () => {
    return 'pong';
  });

  app.get('/', async () => {
    return 'pl_sdk API';
  });

  done();
};
