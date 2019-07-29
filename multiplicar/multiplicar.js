const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    if (!Number(base)) {

        reject(`El valor introducido ${base} en la base no es un número`);
        return;

    } else if (!Number(limite)) {

        reject(`El valor introducido ${limite} en el limite no es un número`);
        return;

    }

    console.log('==================='.green);
    console.log(`Tabla de ${ base } `.green);
    console.log('==================='.green);

    for (let i = 0; i < limite; i++) {

        console.log(`${base} * ${i+1} = ${base*(i+1)}`);

    }
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {

            reject(`El valor introducido ${base} en la base no es un número`);
            return;

        } else if (!Number(limite)) {

            reject(`El valor introducido ${limite} en el limite no es un número`);
            return;

        }

        let data = '';

        for (let i = 0; i < limite; i++) {
            data += `${base} * ${i+1} = ${base * (i + 1)}\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`);
        });


    });
}

module.exports = {
    crearArchivo,
    listarTabla
}