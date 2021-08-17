// const  greet = require('./dir/file1');
//
// greet.greeting();
//
// console.log(__dirname);
// console.log(__filename);

const  fs = require('fs');
const  path = require('path');
const  util = require('util');

const newPath = path.join( __dirname, 'newdir', 'newFile.txt');
//const filePath = path.join(dirToRead, item);

// Promisifi
// const  appendPromise = util.promisify(fs.appendFile);
// appendPromise(newPath, 'SOME NEW TEXT \n').catch(reason => {
//     console.log(reason);
// })

//STREAM

// const  readStream = fs.createReadStream()







//console.log(newPath);
//
// fs.writeFile(newPath, 'data mast be here', err => console.log(err) );
//
// fs.appendFile(newPath, '\n new data\n', err => console.log(err));
//
// const mkDirPath = path.join(__dirname, 'dir1', 'dir2', 'dir3', 'dir55')
//
// fs.mkdir (mkDirPath, {recursive: true},err => console.log(err));


// fs.readFile(newPath, ((err, data) => {
    // if (err) {
    //     console.log(err);
    //     return
    // }
    // console.log(data.toString());

    // err? console.log(err)  : console.log(data.toString());
//
// }))
//
//
//
// fs.readdir(dirToRead,((err, files) => {
//     if(err) {
//         console.log(err);
//         return
//     }
//     //console.log(files);
//
//     files.forEach(item => {
//
//         fs.stat(filePath, ((err1, stats) => {
//             console.log(stats.isFile());
//             console.log(stats.isDirectory());
//             console.log(stats.size);
//             console.log('___________________');
//         }))
//     })
//
// }))
