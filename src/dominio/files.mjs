//funcion que retoran arhivos .gif del folder que le pasemos como parametro
import * as path from 'path';

import * as fs from 'fs';

export default function files(dir){
    const files = [];
    const folders = fs.readdirSync(dir);
    for (let folder of folders){
        let nombre = path.join(dir,folder);
        let res = fs.readdirSync(nombre, { withFileTypes: true });
        for (let i of res){
            if (!i.isDirectory()){
                let fileName = i.name;
                if (fileName.endsWith('.gif')){
                    files.push(path.join(nombre,i.name));
                }
                
            }
        }

    }
    for (let i of files){
        console.log('"'+i+'"');
    }
    return files;
}
files('../interfaz/imagenes/Cards/');