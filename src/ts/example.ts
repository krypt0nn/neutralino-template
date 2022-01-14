import { fs, dir, path } from '@empathize/framework';

export function listFiles(): Promise<string[]>
{
    return new Promise((resolve) => {
        fs.files(dir.app).then((files) => {
            let output = [];

            for (const file of files)
                output.push(`[${file.type}] ${path.join(dir.app, file.name)}`);

            resolve(output);
        });
    });
}
