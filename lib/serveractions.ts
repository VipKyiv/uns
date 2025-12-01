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
    if (fileType === 'mixed') {
      const imageFiles = files.filter(name => /\.(jpe?g|png|gif|svg)$/i.test(name));
      const videoFiles = files.filter(name => /\.(mp4|mov)$/i.test(name));
      let returnFileList:{filePath: string, fileType: string}[] = [];
      imageFiles.map(item => returnFileList.push({filePath: `/${fileType}/${srcPath}/${item}`, fileType: 'image'}));
      videoFiles.map(item => returnFileList.push({filePath: `/${fileType}/${srcPath}/${item}`, fileType: 'video'}));
      return {returnStatus: true, payload : JSON.stringify(returnFileList)};
      
    } else {
      const returnFileList = files.map(item => `/${fileType}/${srcPath}/${item}`);
      return {returnStatus: true, payload : JSON.stringify(returnFileList)};

    } 
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
