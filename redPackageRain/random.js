setInterval(function() {
    var oDiv = $('<div class="redBox"></div>');
    oDiv.css({
        'top': getRandom(-80, -40),
        'left': getRandom(30, 240),
        // 'z-index': 10,
        'transform': 'rotate(' + getRandom(-20, 20) + 'deg)'
    }).appendTo($('.wrapper'));
    down(oDiv);
}, getRandom(400, 600));



// 生成(min,max)之间的随机数
function getRandom(min, max) {
    return parseInt(Math.random() * (max - min)) + min
}

// 控制红包的下落
function down(div) {
    div.animate({
        'top': '450px'
    }, 4000, function() {
        if(parseInt(div.css('top')) >= 400) {
            $(this).remove();
        }
    })
}



