import * as mongoose from 'mongoose';

export const AssetSchema = new mongoose.Schema({
  title: {type: String, required: true},
  fileName: {type: String, required: true},
  assetType: {type: String, required: true},
  createdBy: {type: String, required: true},
  createdOn: {type: Date, required: true}
  })

export interface Asset extends mongoose.Document{
  id: string,
  title: string,
  fileName: string,
  assetType: string,
  createdBy : string,
  createdOn : Date
}


// export class Asset {
//   constructor(
//     public id: number,
//     public title: string,
//     public fileName: string,
//     public assetType: string,
//     public createdBy : string,
//     public createdOn : Date
//   ) {}
// }

