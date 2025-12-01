export enum SourceType {
   video,
   text,
   image,
   mixed,
   imageFolder,
   paymentData    
}

export type SourceDataType = {
  data: string,
  type: SourceType,
}
