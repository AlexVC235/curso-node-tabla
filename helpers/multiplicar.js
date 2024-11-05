// Primera forma
const fs = require('fs');

const colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {

    try {

        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${ base } x ${ i } = ${ base * i }\n`;
            consola += `${ base } ${ 'x'.red } ${ i } ${'='.red} ${ base * i }\n`;
        }

        if ( listar) {
            console.log('==============================='.green);
            console.log('          Tabla del'.green, colors.blue(base)         );
            console.log('==============================='.green);
            console.log(consola);
        }
        
        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);
        
        return `tabla-${ base }.txt`;

    } catch ( err) {
        throw err
    }

}

module.exports = {
    crearArchivo: crearArchivo
}




// Segunda forma

// const fs = require('fs');

// const crearArchivo = ( base = 5 ) => {

//     return new Promise((resolve, reject) => {
//         console.log('===============================');
//         console.log('          Tabla del', base         );
//         console.log('===============================');

//         let salida = '';

//         for (let i = 1; i <= 10; i++) {
//             salida += `${ base } x ${ i } = ${ base * i }\n`;
//         }
        
//         console.log(salida);
        
//         fs.writeFileSync(`tabla-${ base }.txt`, salida);
        
//         resolve(`Archivo tabla-${ base }.txt`);
//     })

// }

// module.exports = {
//     crearArchivo: crearArchivo
// }

// const [ , , arg3 = 'base=5'] = process.argv;
// const [ , base = 5] = arg3.split('=');

// const base = 7;

// crearArchivo( base )
//     .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
//     .catch( err => console.log(err) );

// fs.writeFile(`tabla-${ base }.txt`, salida, (err) => {
//     if (err) throw err;
//     console.log(`Archivo tabla-${ base }.txt creado`);
// })