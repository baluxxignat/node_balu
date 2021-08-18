const path = require('path');
const fs = require('fs');
// path to folders creating
const pathTo1800 = path.join(__dirname, '1800');
const pathTo2000 = path.join(__dirname, '2000');
//console.log(pathTo1800, pathTo2000);


                                        ////////       MALE   ///////////////////

// trying to read folders content
fs.readdir(pathTo1800, ((err, files) => {
    if (err) {
        console.log(err);
        return;
    }
    files.forEach(item => {
        const itemPath = path.join(pathTo1800, item);        // all items full path inside folder 1800
        const newPath = path.join(pathTo2000, item);
        //console.log(itemPath);                  

        // check tip of included files
        fs.stat(itemPath, ((err1, stats) => {
            if (err) {
                console.log(err);
                return;
            }
            if (stats.isFile()) {
                fs.readFile(itemPath, ((err2, data) => {
                    let itemToJson = JSON.parse(data);
                    //console.log(itemToJson);                                    //checking what i got: keys and values
                    if (itemToJson.gender === 'male') {
                        fs.rename(itemPath, newPath, err3 => {             //moving items
                            console.log(err3);
                        })
                    }
                }))
            }
        }))
    })
}))


                                                /////////////FEMALE//////////////////

fs.readdir(pathTo2000, ((err, files) => {
    if (err) {
        console.log(err);
        return;
    }
    files.forEach(item2 => {
        const itemPath2 = path.join(pathTo2000, item2);        // all items full path inside folder 1800
        const newPath2 = path.join(pathTo1800, item2);
        //console.log(itemPath);

        // check tip of included files
        fs.stat(itemPath2, ((err1, stats) => {
            if (err) {
                console.log(err);
                return;
            }
            if (stats.isFile()) {
                fs.readFile(itemPath2, ((err2, data) => {
                    let itemToJson = JSON.parse(data);
                    //console.log(itemToJson);                                    //checking what i got: keys and values
                    if (itemToJson.gender === 'female') {
                        fs.rename(itemPath2, newPath2, err3 => {             //moving items
                            console.log(err3);
                        })
                    }
                }))
            }
        }))
    })
}))