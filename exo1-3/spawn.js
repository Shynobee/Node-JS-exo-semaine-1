const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');
/*fs.open('ressources/lorem.txt', (err, fd) => {
    
});*/

//fs.createReadStream('./ressources/lorem.txt').pipe(fs.createWriteStream('lorem.txt'));

const mkdirSync = function (dirPath) {
    try {
        childProcess.exec(`mkdir -p ${dirPath}`);
        console.log('Done !!');
    } catch (err) {
        if(err.code !== 'EEXIST') throw err
    }
};

mkdirSync(path.resolve('./ressources/wassup'));

const pathOrigin = './ressources/lorem.txt';
const pathNew = './ressources/wassup/lorem.txt';

childProcess.exec(`mv ${pathOrigin} ${pathNew}`, (err) => {
    if (err) throw err;
    console.log('Done');
  });

var filePath = 'lorem.txt'; 
childProcess.exec(`rm ${filePath}`);

var filePath2 = './ressources/wassup/lorem.txt';
/*fs.readFile(filePath2, 'utf8', (err, data) => {
    if (err) {
        return console.log(err);
    } 
    console.log(data);
    console.log('Done !!');
})*/

childProcess.exec(`cat ${filePath2}`, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      console.log('error');
      return;
    }
    console.log(stdout);
  });