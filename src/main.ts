import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  //Swagger configurations 
  const options = new DocumentBuilder()
    .setTitle('Asset Services')
    .setDescription('Playground for exploring assets using the  NestJS framework... ')
    .setVersion('1.0')
    .addTag('assets')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/assets/api', app, document);


  await app.listen(3000);
}
bootstrap();
