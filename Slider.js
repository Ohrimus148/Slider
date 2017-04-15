
function slider () {
	var slides=["<img src='img/example-slide-1.jpg'></img>","<img src='img/example-slide-2.jpg'></img>","<img src='img/example-slide-3.jpg'></img>"];
	var frame=0; // текущий кадр для отбражения - индекс картинки из массива
	var numberSlides=slides.length-1;
	var _self=this;
	var prevSliderNode=document.getElementById("scr");
		prevSliderNode.innerHTML = slides[frame];
		this.prev=function() {
		frame++;
		if(frame>=numberSlides+1){
		frame=0;
	};
	prevSliderNode.innerHTML = slides[frame];
	};
	this.next=function() {
		frame--;
		if(frame<0){
		frame=numberSlides;
	};
	prevSliderNode.innerHTML = slides[frame];		
	};
	right.onclick=function() {
	_self.prev();
	};
	left.onclick=function() {
		_self.next();
		
	};
}
window.onload=function(){
slider();}


