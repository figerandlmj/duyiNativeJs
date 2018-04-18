require('../css/entry.css');

var tool = require('./tool.js');
console.log(tool.hello('hello world'));

var oImg = new Image();
oImg.src = require('../img/1.jpg');
document.body.appendChild(oImg);

