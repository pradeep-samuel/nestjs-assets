import { Module } from '@nestjs/common';
import { AssetsModule } from './assets/assets.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


@Module({
  imports: [AssetsModule, 
    MongooseModule.forRoot(
      'mongodb://127.0.0.1:27017/assets-db'
      )
  ],
})

export class AppModule {}
