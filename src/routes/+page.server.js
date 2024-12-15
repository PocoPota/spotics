import { writeFile } from 'fs/promises';
import path from 'path';
import { Buffer } from 'buffer';
import crc from 'crc';

export const actions = {
  default: async ({ request }) => {
    try{
      const formData = await request.formData();
      const file = formData.get('file');
      const fileId = crc.crc32(`${file.name}${Math.random()}`).toString(16);
      const fileName = `${fileId}_${Date.now()}${path.extname(file.name)}`;
      const filePath = `./static/uploads/${fileName}`;
      await writeFile(filePath, Buffer.from(await file.arrayBuffer()));
      
      return { success: true, fileName: fileName };
    } catch (e){
      // エラー時の処理を記述
      return{ success: false }
    }
  }
};