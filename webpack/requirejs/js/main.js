require.config({
	paths:{
		jquery: 'http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min',
		math: './tool/math'
	}
})

require(['jquery', 'math'], function($, math) {
	console.log($);
	console.log(math.add(1,2));
})