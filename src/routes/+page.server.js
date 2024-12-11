import { writeFile } from 'fs/promises';
import path from 'path';
import crc from 'crc';

// /** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const file = formData.get('file');
    const fileId = crc.crc32(file.name).toString(16);
    const fileName = `${fileId}_${Date.now()}${path.extname(file.name)}`;
    const filePath = `./static/uploads/${fileName}`;
    await writeFile(filePath, Buffer.from(await file.arrayBuffer()));

    return { success: true };
  }
};