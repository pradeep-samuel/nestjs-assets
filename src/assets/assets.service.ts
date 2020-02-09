import { Injectable, NotFoundException } from '@nestjs/common'
import { Asset } from './asset.model'

@Injectable()
export class AssetService {
    private assets: Asset[] = [];

    addAsset(title : string, type: string, fileName : string) {
         const asset = new Asset(this.getId(), title, fileName, type, 'Pradeep Samuel', new Date());
         this.assets.push(asset);
         return asset.id;
    }

    getAssets() {
        return [... this.assets];
    }

    findSingleAsset(id: number){
        const retAsset =  this.findAsset(id)[0];
        return {... retAsset};
    }

    findAsset(id: number) : [Asset,number]{
        const assetindex = this.assets.findIndex((asset) => asset.id == id);
        const asset = this.assets[assetindex];
        if(!asset){
            throw new NotFoundException('Asset Not Found');
        }
        return [asset, assetindex];
    }

    updateAsset(id : number, title : string, assetType: string, fileName : string){
        const [asset, index] = this.findAsset(id);
        const updatedAsset = {...asset};

        if(title){
            updatedAsset.title = title;
        }
        if(assetType){
            updatedAsset.assetType = assetType;
        }
        if(fileName){
            updatedAsset.fileName = fileName;
        }

        this.assets[index] = updatedAsset

        return this.assets[index];
    }

    deleteAsset(assetId : number){
        const index = this.findAsset(assetId)[1];
        this.assets.splice(index,1);
    }

    private getId() {
        return Math.floor(Math.random() * Math.floor(100));
      }
}
