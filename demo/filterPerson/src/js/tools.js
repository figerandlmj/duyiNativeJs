// 渲染li
function renderPageByArr(personArr){
	var htmlArrStr = "";
	personArr.forEach(function(ele, index){
		htmlArrStr += '<li>name:'+ ele.name +',age:'+ ele.age +',sex:'+ ele.sex +'</li>';
	});
	oUl.innerHTML = htmlArrStr;
}

// 筛选name值的数组
function filterName(allPersonArr, val){
	return allPersonArr.filter(function(ele, index){
		// if(val && ele.name.indexof(val) != -1){
		// 	return true;
		// }
		return val && ele.name.indexOf(val) != -1;
	})
}

// 筛选出的数组年龄加1
function addAge(filterArr){
	return filterArr.map(function(ele, index){
		ele.age ++;
		return ele;
	})
}

// 筛选出来的数组再筛选性别
function filterSex(filterArr, sex){
	return filterArr.filter(function(ele, index){
		// if(sex == "all"){
		// 	return true;
		// }else if(ele.sex == sex){
		// 	return true;
		// }
		return sex == "all" ? true : ele.sex == sex;
	})
}