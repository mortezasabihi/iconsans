import type { NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

type Data = {
    name: string;
    svg: string;
}[];

export default function handler(_, res: NextApiResponse<Data | { message: string }>) {
    try {
        const dataPath = path.join(process.cwd(), 'public/icons.json');
        const jsonData = fs.readFileSync(dataPath, 'utf-8');
        let data: Data = JSON.parse(jsonData);
        data = data.map((item) => ({ ...item, name: item.name.charAt(0).toUpperCase() + item.name.slice(1), svg: item.svg.replace(`width=\"24\"`, `width=\"50\"`).replace(`height=\"24\"`, `height=\"50\"`) }))
        res.status(200).json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}
