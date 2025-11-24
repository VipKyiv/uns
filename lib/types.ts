export enum SourceType {
   video,
   text,
   image,
   imageFolder,
   paymentData    
}

export type SourceDataType = {
  data: string,
  type: SourceType,
}
