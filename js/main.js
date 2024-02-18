/**************/
$(document).ready(function(){ $('.bxslider').bxSlider({auto: true,mode: 'horizontal'}); 
  }); 
/**************/
 $(function(){
	var ul = $(".lxfscroll ul");
	var li = $(".lxfscroll li");
	var tli = $(".lxfscroll-title li");	
	var ul2 = $(".lxfscroll2 ul");
	var li2 = $(".lxfscroll2 li");
	var tli2 = $(".lxfscroll-title2 li");	
	var speed = 350;
	var autospeed = 12000;	
	var i=1,j=1;
	var index = 0, index2=0;
	var n = 0;
    /* 标题按钮事件 */
	function lxfscroll() {
				var index = tli.index($(this));					
				tli.removeClass("cur");
				$(this).addClass("cur");
				
				ul.css({"left":"0px"});	
				li.css({"left":"0px"}); 
				li.eq(index).css({"z-index":i});	
				li.eq(index).css({"left":"460px"});	
				ul.animate({left:"-460px"},speed); 	
				i++;	
			
    };
	function lxfscroll2() {
				var index2 = tli2.index($(this));					
				tli2.removeClass("cur");
				$(this).addClass("cur");
				
				ul2.css({"left":"0px"});	
				li2.css({"left":"0px"}); 
				li2.eq(index2).css({"z-index":j});	
				li2.eq(index2).css({"left":"460px"});	
				ul2.animate({left:"-460px"},speed); 	
				j++;	
			
    };
	tli.mouseenter(lxfscroll);
	tli2.mouseenter(lxfscroll2);
});