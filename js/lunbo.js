var list=document.getElementById('list');
var prev=document.getElementById('prev');
var next=document.getElementById('next');



function animate(offset){
	var newLeft=parseInt(list.style.left)+offset;
	list.style.left=newLeft+'px';
	if(newLeft<-7588){
		list.style.left=-1897+'px';
	}
	if(newLeft>-1897){
		list.style.left=-7588+'px';
	}
}

prev.onclick=function(){
	animate(1897);
}
next.onclick=function(){
	animate(-1897);
}


var timer;
function play(){
	timer=setInterval(function(){
		next.onclick();
	},2000)
}
play();


var content=document.getElementById('content');
function stop(){
	clearInterval(timer);
}
content.onmouseover=stop;
content.onmouseout=play;



var buttons=document.getElementById('buttons').getElementsByTagName('span');
var index=1;

function buttonsShow(){
	for(var i=0;i<buttons.length;i++){
		if(buttons[i].className=='on'){
			buttons[i].className='';
		}
	}

	buttons[index-1].className='on';
}

prev.onclick=function(){
	index-=1;
	if(index<1){
		index=4;
	}
	buttonsShow();
	animate(1897);
}

next.onclick=function(){
	index+=1;
	if(index>4){
		index=1;
	}
	buttonsShow();
	animate(-1897);
}

for(var i=0;i<buttons.length;i++){
	(function(i){
		buttons[i].onclick=function(){
			var clickIndex=parseInt(this.getAttribute('index'));
			var offset=1897*(index-clickIndex);
			animate(offset);
			index=clickIndex;
			buttonsShow();
		}
	})(i)
}