//funcion que retoran arhivos .gif del folder que le pasemos como parametro
function files(dir){
    const files = [];
    const folders = fs.readdirSync(dir);
    for (folder of folders){
        nombre = path.join(dir,folder);
        res = fs.readdirSync(nombre, { withFileTypes: true });
        for (i of res){
            if (!i.isDirectory()){
                fileName = i.name;
                if (fileName.endsWith('.gif')){
                    files.push(path.join(nombre,i.name));
                }
                
            }
        }

    }
    return files;
}

export default files;