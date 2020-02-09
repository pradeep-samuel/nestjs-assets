import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { AssetService } from './assets.service';

@Controller('assets')
export class AssetController {
  constructor(private readonly assetService: AssetService) {}

  @Post()
  addAsset(
    @Body('title') title,
    @Body('type') type,
    @Body('fileName') fileName,
  ) {
    const id = this.assetService.addAsset(title, type, fileName);
    return { id: id };
  }

  @Get()
  getAssets() {
    return this.assetService.getAssets();
  }

  @Get(':id')
  findAsset(@Param('id') id: number) {
    return this.assetService.findAsset(id);
  }

  @Patch(':id')
  updateAsset(
    @Param('id') id,
    @Body('title') title,
    @Body('type') type,
    @Body('fileName') fileName,
  ) {
        return this.assetService.updateAsset(id,title,type,fileName);
  }

  @Delete(':id')
  deleteAsset(@Param('id') id){
    this.assetService.deleteAsset(id);
  }
}
