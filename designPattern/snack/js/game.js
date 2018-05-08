// 广场
var X_LEN = 30;
var Y_LEN = 30;
// 小格子
var SQUARE_WIDTH = 20;
// 广场坐标
var BASE_X = 100;
var BASE_Y = 100;
// 蛇的速度
var SPEED = 500;
// 方格基本对象
function Square(x1, y1){
	this.x = x1;
	this.y = y1;
	this.view = null;
	this.width = SQUARE_WIDTH;
	this.height = SQUARE_WIDTH;
}
Square.prototype.touch = function(){}
// 地面继承方格
var Floor = jsUtil.extends(Square);
// 障碍物继承方格
var Stone = jsUtil.extends(Square);
// 墙继承障碍物
var Wall = jsUtil.extends(Stone);
// 蛇身继承方格
var SnackBody = jsUtil.extends(Square);
// 蛇头继承方格
var SnackHead = jsUtil.extends(Square);
// 食物继承方格
var Food = jsUtil.extends(Square);