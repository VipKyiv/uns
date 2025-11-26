"use server";
import * as fs from 'fs';
import * as path from 'path'; 

export const getFilesListAction = async (fileType:string, srcPath : string):
  Promise<{ returnStatus : boolean, payload: string}> =>

{
  const publicDir = path.join(process.cwd(), 'public');
  let imagesDir = path.join(publicDir, fileType);
  imagesDir = path.join(imagesDir, srcPath);
  try {
    const files = fs.readdirSync(imagesDir);
    console.log('Files in folder:', files);
    const fullPathList = files.map(item => `/${fileType}/${srcPath}/${item}`);
    console.log('fullPathList = ', fullPathList );
    return {returnStatus: true, payload : JSON.stringify(fullPathList)};
  } catch (error) {
    console.error('Error reading folder:', error);
    return {returnStatus:false, payload:`Error reading folder: ${error}`};
  }    
}

function convertPathToServerFormat(inputPath: string): string {
    let outputPath = '';
    const pathArray = inputPath.split('/');
    if (pathArray.length > 0) {
      for(let i = 1; i < pathArray.length; i++) {
        outputPath += `\\${pathArray[i]}`;
      }
    }
    return outputPath;
}
