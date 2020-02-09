import { Injectable, NotFoundException } from '@nestjs/common';
import { Asset } from './asset.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AssetService {
  private assets: Asset[] = [];

  constructor(
    @InjectModel('Asset') private readonly assetModel: Model<Asset>,
  ) {}

  async addAsset(title: string, type: string, fileName: string) {
    const newAsset = new this.assetModel({
      title,
      fileName,
      assetType: type,
      createdBy: 'Pradeep Samuel',
      createdOn: new Date(),
    });
    const retAsset = await newAsset.save();
    return retAsset.id;
  }

  async getAssets() {
    const result = await this.assetModel.find().exec();
    return result;
  }

  async findSingleAsset(id: string) {
    const retAsset = await this.findAsset(id);
    return retAsset;
  }

  async findAsset(id: string): Promise<Asset> {
    let asset;
    try {
      asset = await this.assetModel.findById(id);
      if (!asset) {
        throw new NotFoundException('Asset Not Found');
      }
    } catch (e) {}

    return asset;
  }

  async updateAsset(id: string, title: string, assetType: string, fileName: string) {
    const updateAsset = await this.findAsset(id);

    if (title) {
        updateAsset.title = title;
    }
    if (assetType) {
        updateAsset.assetType = assetType;
    }
    if (fileName) {
        updateAsset.fileName = fileName;
    }

    updateAsset.save();
  }

  async deleteAsset(assetId: string) {
    const result = await this.assetModel.deleteOne({_id: assetId});
    if(result.n === 0){
        throw new NotFoundException('Asset not found ...')
    }
    
  }

  private getId() {
    return Math.floor(Math.random() * Math.floor(100));
  }
}
