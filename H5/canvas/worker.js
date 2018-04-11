onmessage = function(e) {
	console.log(e.data);
	postMessage(deal(e.data));
	close();//断开
}

function deal(data) {
	return data * data;
}