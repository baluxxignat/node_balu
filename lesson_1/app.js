const  fs = require('fs');
const  path = require('path');
const  util = require('util');

//const newPath = path.join( __dirname, 'newdir', 'newFile.txt');


const users = [
    {name: "Olya", gender: "female", age: 21},
    {name: "Valya", gender: "female", age: 22},
    {name: "Natasha", gender: "female", age: 23},
    {name: "Lena", gender: "female", age: 14},
    {name: "Ulya", gender: "female", age: 15},
    {name: "Vasya", gender: "male", age: 21},
    {name: "Petya", gender: "male", age: 22},
    {name: "Sasha", gender: "male", age: 23},
    {name: "Seryu", gender: "male", age: 14},
    {name: "Vitalik", gender: "male", age: 15}
]

//console.log(__dirname);

const  mkDirPath = path.join(__dirname, 'dir', 'manOlder20')
const  mkDirPath2 = path.join(__dirname, 'dir', 'manYounger20')
const  mkDirPath3 = path.join(__dirname, 'dir', 'womanOlder20')
const  mkDirPath4 = path.join(__dirname, 'dir', 'womanYounger20')

fs.mkdir(mkDirPath, {recursive: true}, err => {
    err && console.log(err);

    fs.mkdir(mkDirPath2, {recursive: true}, err => {
        console.log(err);

        fs.mkdir(mkDirPath3, {recursive: true}, err => {
            console.log(err);
            fs.mkdir(mkDirPath4, {recursive: true}, err => console.log(err));
        });
    });

});







users.forEach(file => {
    const { age, name, gender } = file;

    if (age < 20 && gender === 'male' ) {
        fs.writeFile (path.join(mkDirPath2, `${name}.txt`), JSON.stringify(file), err => err && console.log(err));
        return;
    }
    if (age > 20 && gender === 'male') {
        fs.writeFile (path.join(mkDirPath, `${file.name}.txt`), JSON.stringify(file), err => {
            err && console.log(err);
            return;
        });
    }
    if (age > 20 && gender === 'female') {
        fs.writeFile (path.join(mkDirPath3, `${file.name}.txt`), JSON.stringify(file), err => {
            err && console.log(err);
            return;
        });
    }
    fs.writeFile (path.join(mkDirPath4, `${file.name}.txt`), JSON.stringify(file), err => {
        err && console.log(err);
        return;
    });

})




// ], вам потрібно написати метод який створює файлики - де назва файлику - це імя вашого юзера (наприклад - Olya.txt),
// вміст це сам ваш юзер - { name: 'olya', gender: 'female', age: 20 }
// перед тим створити 4 папки - наприклад - manOlder20, manYounger20, womanOlder20, womanYounger20
// і розподілити ваших юзерів саме по відповідних папках
