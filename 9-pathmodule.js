const path = require('path')

console.log(path.sep)

const filePath = path.join('/content,', 'subfoler','test.txt')
console.log(filePath)

const base = path.basename(filePath);
console.log(base);
