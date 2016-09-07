/**
 *@params flakeChar:图标
 *@params flakeChar:最少数量
 *@params flakeChar:最多数量
 *@params flakeChar:新图标出现的频率
 *@params flakeChar:颜色
*/

;(function(w,d,u,$){//防止无意中修改顶级变量
	$.fn.showPic=function(options){
		var defaults={
			flakeChar:"&#10048;",
			minSize:10,
			maxSize:200,
			newOw:100,
			flakeColor:['#f00','blue','green']
		};
		$.extend(defaults,options);
		
		//生成一个节点，用于存这个图标
		var $flake=$("<div></div>").css({"position":"absolute","top":"-50px"} );
		
		//设置出现的位置
		//1.页面多大
		var documentHeight=$(d).height();
		var documentWidth=$(d).width();
		
		$flake.html(defaults.flakeChar);
		
		//定时器操作
		//启动定时器
		setInterval(function(){
			
			//计算起始的位置
			var startPositionLeft=Math.random()*documentWidth-100;  //div的x的坐标
			var stareOpacity=Math.random()+0.5;  //透明度
			
			var sizeFlake=defaults.minSize+Math.random()*defaults.maxSize;//雪花的大小
			var endPositionLeft=startPositionLeft-150+Math.random()*200;
			var endPositionTop=documentHeight-defaults.maxSize;
			var durationFall=documentHeight*5+Math.random()*5000;
			//克隆div
			$flake.clone()
			      .appendTo("body")
				  .css({
					  left:startPositionLeft,
					  opacity:stareOpacity,
					  'font-size':sizeFlake,
					  color:defaults.flakeColor
				  })
			
			//通过animate设置  flake的动画 （坐标，透明度，大小）
			       .animate({
					   top:endPositionTop,
					   left:endPositionLeft,
					   opacity:0.1
				   },durationFall,'linear',function(){
					   $(this).remove();
				   })
		},200);
	};
})(window,document,undefined,$)