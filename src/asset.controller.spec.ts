import { Test, TestingModule } from '@nestjs/testing';
import { AssetController } from './assets/assets.controller';
import { AssetService } from './assets/assets.service';

describe('AppController', () => {
  let assetController: AssetController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AssetController],
      providers: [AssetService],
    }).compile();

    assetController = app.get<AssetController>(AssetController);
  });


});
