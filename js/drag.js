
(function (){
	document.addEventListener('touchstart',function(ev){
		ev = ev||event;
		  ev.preventDefault();
	})
})();

(function(w){
	w.trans = Object.create(null);
	
	w.trans.css = function (node,type,val){
		if(typeof node['transforms'] === 'undefined'){
			node['transforms'] = {};
		}
		if(arguments.length >= 3){
			var text = '';
			node['transforms'][type] = val;
			for(item in node['transforms']){
				if(node['transforms'].hasOwnProperty(item)){
					switch (item){
						case 'translateX':
						case 'translateY':
						case 'translateZ':
							text += item+'('+node['transforms'][item]+'px)';
							break;
						case 'scale':
							text += item+'('+node['transforms'][item]+')';
							break;
						case 'rotate':
							text += item+'('+node['transforms'][item]+'deg)';
							break;
					}
				}
			}
			node.style.transform = node.style.webkitTransform = text;
		}else if(arguments.length == 2){
			val = node['transforms'][type];
			if(typeof val==="undefined"){
				if(type==="translateX"||type==="translateY"||type==="translateZ"||type==="rotate"){
					val = 0;
				}else if(type==="scale"){
					val = 1;
				}
			}
			return val;
		}
		
	}
	
	
	/*w.trans.scroll = function(wrap,callback){
		var inner = wrap.children[1];
		
		var startPoint = {};
		var elePoint = {};
		
		var isY = true;
		var isFirst = true;
		//初始化渲染时图片未加载出来，获取的高度不准确
		var maxY = wrap.clientHeight - inner.offsetHeight;
		
		
		var startTime=0;
		var	timeVal=1;
		var	startP=0;
		var	pointVal=0;
//		inner.timer = null;
//		t,  当前运动是哪一次
//		b, 初始位置
//		c,  初始位置与目标位置之间的差值（ 目标位置 - 初始位置）
//		d,  总次数
//		s,  回弹距离
		var tween = {
			Linear: function(t,b,c,d){ return c*t/d + b; },
			Back: function(t,b,c,d,s){
	            if (s == undefined) s = 1.70158;
	            return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	        }
		}
		
		wrap.addEventListener('touchstart',function(ev){
			if(trans.css(inner,'translateY')<=0&&trans.css(inner,'translateY')>=maxY){
				clearInterval(wrap.timer);
			}
			ev = ev||event;
			var touchC = ev.changedTouches[0];
			startPoint = {x:touchC.clientX,y:touchC.clientY};
			elePoint = {x:trans.css(inner,'translateX'),y:trans.css(inner,'translateY')};
			
			isY = true;
			isFirst = true;
			
			startTime = new Date().getTime();
			startP = touchC.clientY;
			
			pointVal=0;
			inner.isElasticed = false;
			inner.style.transition = 'none';
			//touchstart时再次获取，重新赋值
			maxY = wrap.clientHeight - inner.offsetHeight;
			if(callback&&typeof callback["start"]=== 'function'){
				callback["start"].call(this);
			}
		})
		
		wrap.addEventListener('touchmove',function(ev){
			if(!isY){
				return;
			}
			ev = ev||event;
			var touchC = ev.changedTouches[0];
			var nowPoint = {x:touchC.clientX,y:touchC.clientY};
			var disPoint = {x:nowPoint.x-startPoint.x,y:nowPoint.y-startPoint.y};
			
			var endTime = new Date().getTime();
			var endPoint = touchC.clientY;
			timeVal = endTime - startTime ;
			pointVal = endPoint - startP;
			startTime = endTime ;
			startP = touchC.clientY;
			
			var translateY = elePoint.y+disPoint.y;
			
			if(isFirst){
				isFirst = false;
				if(Math.abs(disPoint.x)>Math.abs(disPoint.y)){
					isY = false;
					return;
				}
			}
			
			if(translateY>0){
				var scale = document.documentElement.clientHeight/(document.documentElement.clientHeight+translateY)/2;
				translateY = trans.css(inner,'translateY') + pointVal*scale;
				inner.isElasticed = true;
			}else if(translateY<maxY){
				var over = maxY - translateY;
				var scale = document.documentElement.clientHeight/(document.documentElement.clientHeight+over)/2;
				translateY = trans.css(inner,'translateY') + pointVal*scale;
				inner.isElasticed = true;
			}
			
			trans.css(inner,'translateY',translateY);
			
			if(callback&&typeof callback["move"]=== 'function'){
				callback["move"].call(this);
			}
			
		})
		
		wrap.addEventListener('touchend',function(){
			
			speed = pointVal/timeVal ;
			speed = Math.abs(speed)>1?speed:0;
			time = Math.abs(speed)*0.2;
			time = time>1?1:time;
			
			var translateY = trans.css(inner,'translateY') + speed*200;
			var bsr = '';
//			var type = 'Linear';
			
			if(translateY>0){
				translateY=0;
				bsr = "cubic-bezier(.15,1.6,.72,1.65)";
//				type = 'Back';
				if(inner.isElasticed){
					time='.5';
					bsr = '';
//					type = 'Linear';
				}
			}else if(translateY<maxY){
				translateY = maxY;
				bsr = "cubic-bezier(.15,1.6,.72,1.65)";
//				type = 'Back';
				if(inner.isElasticed){
					time='.5';
					bsr = '';
//					type = 'Linear';
				}
			}
			inner.style.transition = time + 's ' + bsr ;
			trans.css(inner,'translateY',translateY) ;
//			move(inner,type,translateY,time)
			
			if(callback&&typeof callback["end"]=== 'function'){
				callback["end"].call(this);
			}
		})
		
		function move(node,type,target,time){
//			clearInterval(node.timer);
			//		t,  当前运动是哪一次
			//		b, 初始位置
			//		c,  初始位置与目标位置之间的差值（ 目标位置 - 初始位置）
			//		d,  总次数
			//		s,  回弹距离
			var t = 0;
			var b = trans.css(node,'translateY');
			var c = target - b ;
			var d = time/0.02;
			var s = 5;
			if(!wrap.timer||node.isElasticed||(b<=0&&b>=maxY)){
				clearInterval(wrap.timer);
				wrap.timer = setInterval(function(){
					t++;
					if(t>d){
						clearInterval(wrap.timer);
						if(callback&&typeof callback["over"]=== 'function'){
							callback["over"].call(this);
						}
						return;
					}
					var translateY = tween[type](t,b,c,d,s);
					trans.css(node,'translateY',translateY);
					if(callback&&typeof callback["move"]=== 'function'){
						callback["move"].call(this);
					}
				},1000/60)
			}

		}
	}*/
	
	
})(window)


