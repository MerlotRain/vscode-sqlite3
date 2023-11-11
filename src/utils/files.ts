import { exists, existsSync, lstatSync } from "fs";

export function isDirectorySync(filePath: string): boolean {
  try {
    let stat = lstatSync(filePath);
    return stat.isDirectory();
  } catch (e) {
    return false;
  }
}

export function isFileSync(filePath: string): boolean {
  try {
    let stat = lstatSync(filePath);
    return stat.isFile();
  } catch (e) {
    return false;
  }
}

export function fileExistSync(filePath: string): boolean {
  return existsSync(filePath);
}

export function fileExist(filePath: string): Promise<boolean> {
  return new Promise((resolve, project) => {
    exists(filePath, (exists) => {
      resolve(exists);
    });
  });
}
