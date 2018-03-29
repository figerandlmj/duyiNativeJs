// C
var allPersonArr = [
	{name:'老邓',age:50,sex:'male'},
	{name:'老刘',age:48,sex:'female'},
	{name:'老王',age:40,sex:'male'},
	{name:'老刘',age:35,sex:'female'},
	{name:'小刘',age:16,sex:'male'},
	{name:'小王',age:18,sex:'female'},
	{name:'小邓',age:20,sex:'male'}
];

var oUl = document.getElementById("ul");

var filterArr = allPersonArr;
var lastSex = "all";

bindEventActions(actions);

function bindEventActions(actions){
	actions.forEach(function(ele, index){
		switch(ele.type){
			case "filterName":
				ele.doc.oninput = function(){
					renderPageByArr(filterArr = filterName(allPersonArr, this.value));
					lastSex = "all";
				}
				break;
			case "addAge":
				ele.doc.onclick = function(){
					renderPageByArr(addAge(filterSex(filterArr, lastSex)));
				}
				break;
			case "filterSex":
				ele.doc.onclick = function(){
					renderPageByArr(filterSex(filterArr, lastSex = ele.prame));
				}
				break;
		}
	});
}