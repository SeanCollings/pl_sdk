import fastify from 'fastify';
import mercurius from 'mercurius';
import pino from 'pino';
import { healthRoutes } from '@/health';
import { productSchema } from '@/schemas/product';
import { productResolvers } from '@/schemas/product/product.resolvers';

export const build = () => {
  const nodeEnv = process.env.NODE_ENV;

  const app = fastify({
    logger:
      nodeEnv !== 'test' && pino<{ level: pino.Level }>({ level: 'error' }),
  });

  app.register(healthRoutes);

  app.register(mercurius, {
    schema: productSchema,
    resolvers: productResolvers,
    graphiql: true,
  });

  return app;
};
