require('../less/part1.less');
var part1 = {
	init: function() {
		this.bindEvent();
	},
	bindEvent: function() {
		document.getElementsByClassName('part1')[0].onclick = this.changeColor;
	},
	changeColor: function() {
		this.style.background = 'orange';
	}
}

module.exports = part1;