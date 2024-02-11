import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // for swagger
  const config = new DocumentBuilder()
    .setTitle('Genises IT Lab Test')
    .setDescription('Online Test backend')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  //For all all cors
  app.enableCors({
    origin: '*',
    credentials: true,
  });
  // for class validator and class transform
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
  }))
  await app.listen(3000);
}
bootstrap();
