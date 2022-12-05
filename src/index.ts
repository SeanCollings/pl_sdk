import { build } from '@/app';
import codegenMercurius from 'mercurius-codegen';

const GENERATED_TARGET_PATH = './src/graphql/generated.ts';

const PORT = process.env.PORT || '3000';

const start = async () => {
  const app = build();

  if (process.env.NODE_ENV === 'development') {
    codegenMercurius(app, {
      targetPath: GENERATED_TARGET_PATH,
    }).catch(console.error);
  }

  try {
    await app.listen({ port: +PORT, host: '0.0.0.0' });
    app.log.debug('Server started successfully');
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
