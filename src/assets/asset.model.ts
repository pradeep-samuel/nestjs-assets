export class Asset {
  constructor(
    public id: number,
    public title: string,
    public fileName: string,
    public assetType: string,
    public createdBy : string,
    public createdOn : Date
  ) {}
}
