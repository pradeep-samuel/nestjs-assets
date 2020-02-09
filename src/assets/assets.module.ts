import { Module } from '@nestjs/common';
import { AssetService } from './assets.service';
import { AssetController } from './assets.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AssetSchema } from './asset.model';

@Module({
  imports: [MongooseModule.forFeature([
    {name: 'Asset', schema: AssetSchema }
  ])],
  controllers: [AssetController],
  providers: [AssetService],
})

export class AssetsModule {}