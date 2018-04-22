require('../css/goodsInfo.less');
require('./goodsCover.js');
require('jquery');

function getId() {
	var searchList = window.location.search.slice(1).split('&'),
		len = searchList.length;
		id;
	for(var i = 0; i < len; i ++) {
		if(searchList[i].split('=')[0] == 'id') {
			id = searchList[i].split('=')[1];
			break;
		}
	}
	return id;
}

var id = getId();

getGoodsList();

function getGoodsList() {
	$.ajax({
		type: 'GET',
		url: 'http://localhost:8080/api/goodsList.json',
		dataType: 'json',
		success: function(data) {
			// console.log(data);
			createInfo(data);
		},
		error: function() {
			alert('商品列表获取不成功');
		}
	})
}

function createInfo(data){
	var list =data.list,
		len = list.length;
	for(var i = 0; i < len; i ++) {
		if(list[i].id == id){
			var ele = list[i],
				imgurl = ele.imgurl,
				imgLen = imgurl.length,
				imgStr = '';
			for(var j = 0; j < imgLen; j ++){
				imgStr += '<img src="' + imgurl[j] + '" alt="">';
			}
			var spectList = ele.spectList;
			compare(spectList, 'price');
			var guigeStr = '',
				spectListLen = spectList.length;
			for(var k = 0; k < spectListLen; k ++) {
				if(k == 0) {
					guigeStr += '<span class="active" data-price="' + spectList[k].price + '">' + spectList[k].spect + '</span>';
				}else{
					guigeStr += '<span data-price="' + spectList[k].price + '">' + spectList[k].spect + '</span>';
				}
			}

			$('.info_one img').attr('src', ele.imgurl[0]);
			$('.info_one h2').text(ele.name);
			if(spectListLen > 1){
				$('.info_one p').text('￥' + spectList[0].price + '-' + spectList[spectListLen - 1].price);
			}else{
				$('.info_one p').text('￥' + spectList[0].price);
			}
			
			$('.info_th p').text(ele.name);
			$('.info_th').append(imgStr);
			$('.buy_wrap .price').text('￥' + spectList[0].price);
			$('.buy_wrap .guige').append(guigeStr);

			// str += '<div class="goods_info_wrap">\
			// 			<div class="info_wrap info_one">\
			// 				<img src="' + ele.imgurl[0] + '" alt="">\
			// 				<h2>' + ele.name + '</h2>\
			// 				<p>￥' + ele.spectList[0].price + '</p>\
			// 			</div>\
			// 			<div class="info_wrap info_two">\
			// 				<p class="fl">选择 商品规格</p>\
			// 				<p class="fr">&gt;</p>\
			// 			</div>\
			// 			<div class="info_wrap info_th">\
			// 				<h2>商品详情</h2>\
			// 				<p>' + ele.name + '</p>' + 
			// 				imgStr + 
			// 			'</div>\
			// 		</div>\
			// 		<div class="buy_wrap">\
			// 			<div class="con">\
			// 				<p>单价<span class="price">￥' + ele.spectList[0].price + '</span></p>\
			// 				<p class="guige">规格 <span>' + ele.spectList[0].spect + '</span></p>\
			// 				<p class="number"><i>数量</i><span class="add">﹢</span><label class="num">1</label><span class="reduce">﹣</span></p>\
			// 				<input type="button" value="确认">\
			// 			</div>\
			// 		</div>';
			// $('.tab_header').after(str);
			break;
		}
	}
}

// 数据排序
function compare(data, name){
	data.sort(function(a, b){
		// 升序
		return a[name] - b[name];
	});
}

function bindEvent() {
	$('.info_two, .info_fo').on('click', function() {
		$('.buy_wrap').show();
		$('html').add($('body')).css({
			height: '100%',
			overflow: 'hidden'
		})
	})
	$('.buy_wrap input').on('click', function() {
		$('.buy_wrap').hide();
		$('html').add($('body')).css({
			height: 'auto',
			overflow: 'visible'
		})
	})
}

bindEvent();

$('.guige').on('click', function(e) {
	var ev = e || window.event,
		target = ev.element || ev.target;
	if(target.tagName.toLocaleLowerCase() == 'span'){
		price = $(target).attr('data-price');
		$(target).addClass('active').siblings('span').removeClass('active');
		$('.buy_wrap .price').text('￥' + price);
	}	
})

var number = 1;
$('.add').on('click', function() {
	number ++;
	$('.num').text(number);
})
$('.reduce').on('click', function() {
	if(number > 1) {
		number --;
		$('.num').text(number);
	}
})



