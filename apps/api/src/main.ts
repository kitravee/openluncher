/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import helmet from 'helmet';
import fastifyMultipart from '@fastify/multipart';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    {}
  );
  // const globalPrefix = 'api';
  const port = process.env.PORT || 3333;
  const isProduction = process.env.NODE_ENV === 'production';
  app.register(fastifyMultipart);
  app.useGlobalPipes(
    new ValidationPipe({
      skipMissingProperties: true,
      //whitelist: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    })
  );

  const developmentContentSecurityPolicy = {
    directives: {
      scriptSrc: [
        "'self'",
        "'unsafe-inline'",
        "'unsafe-eval'",
        'https://unpkg.com/',
      ],
    },
  };

  app.use(
    helmet({
      contentSecurityPolicy: isProduction
        ? undefined
        : developmentContentSecurityPolicy,
    })
  );

  app.enableCors({ origin: true });

  // app.setGlobalPrefix(globalPrefix);

  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}`);
}

bootstrap();
