// require('../css/entry2.css');

var tool = require('./tool.js');
console.log(tool.hello('hello'));

var oImg = new Image();
oImg.src = require('../img/1.jpg');
document.body.appendChild(oImg);

