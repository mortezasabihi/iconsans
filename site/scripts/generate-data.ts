import fs from 'fs';
import path from 'path';

function kebabToCamelCase(str: string) {
    return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase()).replaceAll('-', '');
}

(async () => {
    try {
        const directoryPath = path.join(process.cwd(), '../icons');
        const files = await fs.promises.readdir(directoryPath);

        const fileList = files
            .filter((file) => file.endsWith('.svg'))
            .map((file) => {
                const fileName = file.replace('.svg', '');
                const camelCaseName = kebabToCamelCase(fileName.toLowerCase());
                const filePath = path.join(directoryPath, file);
                const fileContent = fs.readFileSync(filePath, 'utf-8');

                return {
                    name: camelCaseName,
                    svg: fileContent,
                };
            });

        fs.writeFileSync("./public/icons.json", JSON.stringify(fileList), {
            encoding: 'utf-8',
            flag: 'w'
        })
    } catch (error) {
        throw error;
    }
})()
