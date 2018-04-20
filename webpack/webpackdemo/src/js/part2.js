require('../less/part2.less');
var part2 = {
	init: function() {
		this.bindEvent();
	},
	bindEvent: function() {
		document.getElementsByClassName('part2')[0].onclick = this.changeWidth;
	},
	changeWidth: function() {
		this.style.width = '200px';
	}
}

module.exports = part2;