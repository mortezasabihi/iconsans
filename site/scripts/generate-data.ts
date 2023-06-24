import fs from 'fs';
import path from 'path';

function kebabToPascal(kebabCase: string): string {
    const words = kebabCase.split('-');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const pascalCase = capitalizedWords.join('');
    return pascalCase.replaceAll(' ', '');
}

function findFiles(dir: string, fileList: string[] = []) {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            findFiles(filePath, fileList);
        } else if (path.extname(file) === '.svg') {
            fileList.push(filePath);
        }
    });

    return fileList;
}

(async () => {
    try {
        const directoryPath = path.join(process.cwd(), '../icons');
        const files = findFiles(directoryPath)

        const fileList = files
            .map((file) => {
                const filePathArr = file.split('/')
                const fileName = filePathArr.pop().replace('.svg', '');
                const camelCaseName = kebabToPascal(fileName.toLowerCase());
                const fileContent = fs.readFileSync(file, 'utf-8').replace(`width=\"24\"`, `width=\"50\"`)
                    .replace(`height=\"24\"`, `height=\"50\"`);

                return {
                    name: camelCaseName,
                    svg: fileContent,
                    style: filePathArr.slice(-1)[0].toLowerCase()
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
