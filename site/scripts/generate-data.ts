import fs from 'fs';
import path from 'path';

function kebabToPascal(kebabCase: string): string {
    const words = kebabCase.split('-');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const pascalCase = capitalizedWords.join('');
    return pascalCase.replaceAll(' ', '');
}


(async () => {
    try {
        const directoryPath = path.join(process.cwd(), '../icons');
        const files = await fs.promises.readdir(directoryPath);

        const fileList = files
            .filter((file) => file.endsWith('.svg'))
            .map((file) => {
                const fileName = file.replace('.svg', '');
                const camelCaseName = kebabToPascal(fileName.toLowerCase());
                const filePath = path.join(directoryPath, file);
                const fileContent = fs.readFileSync(filePath, 'utf-8').replace(`width=\"24\"`, `width=\"50\"`)
                    .replace(`height=\"24\"`, `height=\"50\"`);

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
