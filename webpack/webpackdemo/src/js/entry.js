// require('../css/entry.css');
require('../less/entry.less');

var tool = require('./tool.js');
console.log(tool.hello('hello world'));

var oImg = new Image();
oImg.src = require('../img/1.jpg');
document.body.appendChild(oImg);

require('jquery');
console.log($('img'));

var part1 = require('./part1.js');
part1.init();

var part2 = require('./part2.js');
part2.init();

