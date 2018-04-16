(function(exports) {
    var keyBoard = function(oKeyboard, input, pointNum) {
        oKeyboard.onclick = addEvent;
        input.oninput = addEvent;
        function addEvent(e) {
        	var ev = e || window.event;
        	var clickEl = ev.element || ev.target;
            // var value = clickEl.textContent || clickEl.innerText;
        	var value = clickEl.getAttribute('val');
            // console.log(value)
        	// if (clickEl.tagName.toLocaleLowerCase() !== 'th') {
        		if (value === "<-") {
        			var num = input.value;
        			if(num) {
        				input.value = num.substr(0, num.length - 1);
        			}
        		}else if (value === "c") {
                    input.value = '';
                }else {
        			if (value === "." && pointNum <= 0) {
        				input.value = input.value;
        			}else {
        				input.value += value;
        				clearNoNum(input);
        			}
        		}
        	// }
        }

        //控制输入框中的格式
        function clearNoNum(obj) {
        	obj.value = obj.value.replace(/[^\d.]/g, ""); //清除“数字”和“.”以外的字符
        	obj.value = obj.value.replace(/^\./g, ""); //验证第一个字符是数字而不是.
        	obj.value = obj.value.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的.
        	obj.value = obj.value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
        	if(obj.value.indexOf(".") < 0 && obj.value !=""){//以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
            	obj.value= parseFloat(obj.value); 
        	}
        	if(obj.value.indexOf(".") >= 0){//判断是否有小数点
        		if(obj.value.split(".")[1].length > pointNum){//控制只能输入小数点后2位
        			obj.value = obj.value.split(".")[0] + '.' + obj.value.split(".")[1].substr(0, 2);
        		}
        	}
        }
    };

    exports.keyBoard = keyBoard;

}(window));

