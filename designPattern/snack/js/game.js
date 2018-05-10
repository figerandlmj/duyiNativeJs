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

var oApp = document.getElementById('app');

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
// var Food = jsUtil.extends(Square);

var Game = jsUtil.single();//游戏
var Ground = jsUtil.single();//广场
var Snack = jsUtil.single();//蛇
var Food = jsUtil.single(jsUtil.extends(Square));//食物

// 触及方法的枚举
var TouchEventEnum = {
	Move:'Move',
	Eat:'Eat',
	Dead:'Dead'
}

// 初始化游戏
var game = new Game();
// 游戏分数
game.score = 0;
// 设置时间
game.timer = null;
// 广场
game.ground = null;
// 蛇
game.snack = null;
// 食物
game.food = null;
game.init = function(){
	// 初始广场
	var gameGround = new Ground();
	gameGround.init();
	this.ground = gameGround;
	// 初始化蛇
	var gameSnack = new Snack();
	gameSnack.init(gameGround);
	this.snack = gameSnack;
	// 初始化食物
	var food = new Food();
	food.init(gameGround, game);
	this.food = food;
}
// 游戏运行
game.run = function(){
	this.timer = setInterval(function(){
		var result = game.snack.move(game);
	},SPEED);

	// 上38下40左37右39
	document.onkeydown = function(e){
		var keyNum = window.event ? e.keyCode : e.which;
		if(keyNum === 38 && game.snack.direction !== DirectionEnum.Down){
			game.snack.direction = DirectionEnum.Up;
		}else if(keyNum === 40 && game.snack.direction !== DirectionEnum.Up){
			game.snack.direction = DirectionEnum.Down;
		}else if(keyNum === 37 && game.snack.direction !== DirectionEnum.Right){
			game.snack.direction = DirectionEnum.Left;
		}else if(keyNum === 39 && game.snack.direction !== DirectionEnum.Left){
			game.snack.direction = DirectionEnum.Right;
		}
	}
}
// 游戏结束
game.over = function(){
	var res = confirm('你当前的得分是' + this.score + '，再来一局？');
	if(res){
		location.reload();
	}else{
		clearInterval(this.timer);
	}
}


// 初始化广场
var ground = new Ground();
ground.squareTable = new Array(Y_LEN);
ground.xLen = X_LEN;
ground.yLen = Y_LEN;
ground.basePointX = BASE_X;
ground.basePointY = BASE_Y;
ground.view = null;
ground.init = function(){
	var viewGround = document.createElement('div');
	viewGround.style.position = 'relative';
	viewGround.style.height = this.xLen * SQUARE_WIDTH + 'PX';
	viewGround.style.width = this.yLen * SQUARE_WIDTH + 'px';
	viewGround.style.margin = '20px auto';
	viewGround.style.background = 'green';
	oApp.appendChild(viewGround);
	// x = 0  || y = 0 || x = max || y = max  墙
	for(var i = 0; i < this.yLen; i ++) {
		for(var j = 0; j < this.xLen; j ++) {
			var square;
			if(j === 0){
				this.squareTable[i] = new Array(this.xLen);
			}
			if(i === 0  || j === 0 || i === (this.yLen - 1) || j === (this.xLen - 1)){
				square = SquareFactory.create('Wall', j, i);//墙
			}else{
				square = SquareFactory.create('Floor', j, i);//地面
			}
			this.squareTable[i][j] = square;
			viewGround.appendChild(square.view);
		}
	}
	ground.view = viewGround;
}
// 拆格子方法
ground.remove =function(x, y){
	// view
	this.view.removeChild(this.squareTable[y][x].view);
	// 数据
	this.squareTable[y][x] = null;
}
// 添加格子方法
ground.append = function(x, y, square){
	this.squareTable[y][x] = square;
	this.view.appendChild(this.squareTable[y][x].view);
}



// 工厂模式
function SquareFactory(){}
SquareFactory.create = function(type, x, y){
	if(typeof SquareFactory[type] !== 'function') {
		throw 'Error';
	}
	var result = SquareFactory[type](x, y);
	return result;
}
// 造对应小格子
SquareFactory.commonInit = function(obj, x1, y1, color, touchEvent){
	obj.x = x1;
	obj.y = y1;
	obj.color = color;
	obj.view = document.createElement('div');
	obj.view.style.position = 'absolute';
	obj.view.style.display = 'inline-block';
	obj.view.style.width = SQUARE_WIDTH + 'px';
	obj.view.style.height = SQUARE_WIDTH + 'px';
	obj.view.style.background = color;
	obj.view.style.left = obj.x * SQUARE_WIDTH + 'px';
	obj.view.style.top = obj.y * SQUARE_WIDTH + 'px';
	obj.touch = function(){
		return touchEvent;
	}
}
// 可以造地面、障碍物、墙、食物、蛇身、蛇头
SquareFactory.Floor = function(x1, y1){
	var floor = new Floor();
	// 造地面小格子
	this.commonInit(floor, x1, y1, 'orange', TouchEventEnum.Move);
	return floor;
}
SquareFactory.Food = function(x1, y1){
	var food = new Food();
	// 造食物小格子
	this.commonInit(food, x1, y1, 'green', TouchEventEnum.Eat);
	return food;
}
SquareFactory.Wall = function(x1, y1){
	var wall = new Wall();
	// 造墙小格子
	this.commonInit(wall, x1, y1, 'black', TouchEventEnum.Dead);
	return wall;
}
SquareFactory.SnackHead = function(x1, y1){
	var snackHead = new SnackHead();
	// 造蛇头小格子
	this.commonInit(snackHead, x1, y1, 'red', TouchEventEnum.Dead);
	return snackHead;
}
SquareFactory.SnackBody = function(x1, y1){
	var snackBody = new SnackBody();
	// 造蛇身小格子
	this.commonInit(snackBody, x1, y1, 'blue', TouchEventEnum.Dead);
	return snackBody;
}

// 蛇初始化
var snack = new Snack();
snack.head = null;//蛇头
snack.tail = null;//蛇尾
snack.direction = 0;
var DirectionEnum = {
	Up:{x: 0, y: -1},
	Down:{x: 0, y: 1},
	Left:{x: -1, y: 0},
	Right:{x: 1, y: 0}
};
snack.init = function(gameGround) {
	var tempHead = SquareFactory.create('SnackHead', 3, 1);//蛇头
	var tempBody1 = SquareFactory.create('SnackBody', 2, 1);//蛇身1
	var tempBody2 = SquareFactory.create('SnackBody', 1, 1);//蛇身2
	// 拆格子 添加方法
	gameGround.remove(3, 1);
	gameGround.append(3, 1, tempHead);
	gameGround.remove(2, 1);
	gameGround.append(2, 1, tempBody1);
	gameGround.remove(1, 1);
	gameGround.append(1, 1, tempBody2);
	// 把蛇链接起来
	tempHead.last = null;
	tempHead.next = tempBody1;
	tempBody1.last = tempHead;
	tempBody1.next = tempBody2;
	tempBody2.last = tempBody1;
	tempBody2.next = null;
	this.head = tempHead;
	this.tail = tempBody2;
	this.direction = DirectionEnum.Right;
}
snack.move = function(game){
	// 蛇头移动
	var square = game.ground.squareTable[this.head.y + this.direction.y][this.head.x + this.direction.x];
	// 蛇移动策略
	if(typeof this.strategy[square.touch()] === 'function'){
		this.strategy[square.touch()](game, snack, square, false);
	}
}
snack.strategy = {
	Move:function(game, snack, square, fromEat){
		// 原蛇身1
		var tempBody1 = snack.head.next;
		// 新建蛇身1
		var newBody1 = SquareFactory.create('SnackBody', snack.head.x, snack.head.y);
		newBody1.next = tempBody1;
		tempBody1.last = newBody1;
		// tempBody1.next = null;
		// 拆蛇头方格变为新建蛇身1
		game.ground.remove(snack.head.x, snack.head.y);
		game.ground.append(snack.head.x, snack.head.y, newBody1);
		// 长出新的蛇头
		var newHead = SquareFactory.create('SnackHead', square.x, square.y);
		newHead.last = null;
		newHead.next = newBody1;
		newBody1.last = newHead;
		// 拆地面方格变为新建蛇头
		game.ground.remove(square.x, square.y);
		game.ground.append(square.x, square.y, newHead);
		// 更新蛇头
		snack.head = newHead;
		// 删除蛇尾
		if(!fromEat){
			var floor = SquareFactory.create('Floor', snack.tail.x, snack.tail.y);
			// 拆蛇身2方格变为新建地面
			game.ground.remove(snack.tail.x, snack.tail.y);
			game.ground.append(snack.tail.x, snack.tail.y, floor);
			// 更新蛇尾
			var newTail = snack.tail.last;
			newTail.next = null;
			snack.tail = newTail;
		}
	},
	Eat:function(game, snack, square){
		game.score ++;
		this.Move(game, snack, square, true);
		var food = new Food();
		food.init(game.ground, game);
	},
	Dead:function(game){
		game.over();
	}
}

// 初始化食物
var food = new Food();
food.init = function(ground, game){
	// 获取食物位置
	var x = jsUtil.random(1, X_LEN - 2);
	var y = jsUtil.random(1, Y_LEN - 2);
	if(ground.squareTable[y][x].color === 'orange'){
		var food = SquareFactory.create('Food', x, y);
		// 拆格子 添加方法
		ground.remove(x, y);
		ground.append(x, y, food);
	}else{
		var food = new Food();
		food.init(game.ground, game);
	}
}






