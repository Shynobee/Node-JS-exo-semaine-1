const fs = require('fs');
const path = require('path');
/*fs.open('ressources/lorem.txt', (err, fd) => {
    
});*/

fs.createReadStream('./ressources/lorem.txt').pipe(fs.createWriteStream('lorem.txt'));

const mkdirSync = function (dirPath) {
    try {
        fs.mkdirSync(dirPath)
    } catch (err) {
        if(err.code !== 'EEXIST') throw err
    }
};

mkdirSync(path.resolve('./ressources/wassup'));

fs.rename('./ressources/lorem.txt', './ressources/wassup/lorem.txt', (err) => {
    if (err) throw err;
    console.log('Done');
  });

var filePath = 'lorem.txt'; 
fs.unlinkSync(filePath);


var filePath2 = './ressources/wassup/lorem.txt';
fs.readFile(filePath2, 'utf8', (err, data) => {
    if (err) {
        return console.log(err);
    } 
    console.log(data);
})
