import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { AssetService } from './assets.service';

@Controller('assets')
export class AssetController {
  constructor(private readonly assetService: AssetService) {}

  @Post()
  async addAsset(
    @Body('title') title,
    @Body('type') type,
    @Body('fileName') fileName,
  ) {
    const id = await this.assetService.addAsset(title, type, fileName);
    return { id: id };
  }

  @Get()
  async getAssets() {
    return await this.assetService.getAssets();
  }

  @Get(':id')
  async findAsset(@Param('id') id: string) {
    return await this.assetService.findAsset(id);
  }

  @Patch(':id')
  async awaitupdateAsset(
    @Param('id') id,
    @Body('title') title,
    @Body('type') type,
    @Body('fileName') fileName,
  ) {
        await this.assetService.updateAsset(id,title,type,fileName);
        return null;
  }

  @Delete(':id')
  async deleteAsset(@Param('id') id){
    await this.assetService.deleteAsset(id);
  }
}
