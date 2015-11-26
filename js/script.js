fl=0;
$(document).ready(function() {
	////// sound control	
	$("#jquery_jplayer").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				mp3:"music.mp3"
			});
			//$(this).jPlayer("play");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler				
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});			
		},
		swfPath: "js",
		cssSelectorAncestor: "#jp_container",
		supplied: "mp3",
		wmode: "window"
	});	
		
	/// follow us
	$('.follow').find('img').css({opacity:0.3})
	
	$('.follow img').hover(function(){
		$(this).stop().animate({opacity:1},400)							 
	}, function(){
		$(this).stop().animate({opacity:0.3},400)	
	})
	
	//////  menu
	$('#menu > li').find('> a > span').css({top:47})
	
	$('#menu > li').hover(function(){
		$(this).find('> a > span').stop().animate({top:0},400,'easeOutQuint');	

	}, function(){		
		$(this).find('> a  > span').stop().animate({top:-47},400,'swing', function(){$(this).css({top:47})}   );
		
	})

	////// submenu
	$('ul#menu').superfish({
      delay:       600,
      animation:   {opacity:'show'},
      speed:       600,
      autoArrows:  false,
      dropShadows: false
    });
	
	//// sub menu
	$('.submenu > ul > li').find('> a > span').css({opacity:0})
	
	$('.submenu > ul > li').hover(function(){
		$(this).find('> a > span').stop().animate({opacity:1},400)							 
	}, function(){		
		$(this).find('> a > span').stop().animate({opacity:0},400)		
	})
	
	///////  thumbvr
	$('.thumbvr')
		.thumbvr({
			duration:1200,
			easing:'easeOutBack'
	 })
		
	///////// thumbvr hover
	
	$('.photo1').find('span').css({opacity:0})
	
	$('.photo1 > a').hover(function(){
		$(this).find('span').stop().animate({opacity:0.5},400)								
	}, function(){
		$(this).find('span').stop().animate({opacity:0},400)								
	})
	
		//////// read more
	$('.button1 span').css({opacity:'0'})
	
	$('.button1').hover(function(){
		$(this).find('span').stop().animate({opacity:'1'})							 
	}, function(){
		$(this).find('span').stop().animate({opacity:'0'})							 
	})
	
	// video 
	$('.video1').find('span').css({opacity:0})
	
	$('.video1 > a').hover(function(){
		$(this).find('span').stop().animate({opacity:0.5},400)	
		$(this).find('.img_act').stop().animate({opacity:0},400)
	}, function(){
		$(this).find('span').stop().animate({opacity:0},400)
		$(this).find('.img_act').stop().animate({opacity:1},400)
		
	})
	
	///////// gallery
	
	$('.photo2').find('span').css({opacity:0})
	
	$('.photo2 > a').hover(function(){
		$(this).find('span').stop().animate({opacity:0.5},400)								
	}, function(){
		$(this).find('span').stop().animate({opacity:0},400)								
	})
	
	///////// video gallery
	
	$('.video2').find('span').css({opacity:0})
	
	$('.video2 > a').hover(function(){
		$(this).find('span').stop().animate({opacity:0.5},400)								
	}, function(){
		$(this).find('span').stop().animate({opacity:0},400)								
	})


	
	
	
	
	
	// for lightbox
	 $("a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'dark_square',social_tools:false,allow_resize: true,default_width: 500,default_height: 344});
		
 });  ////////




$(window).load(function() {	
						
						
	
	
	
	// scroll
	$('.scroll').cScroll({
		duration:700,
		step:100,
		trackCl:'track',
		shuttleCl:'shuttle',
		upButtonCl:'_up-butt',
		downButtonCl:'_down-butt'
	})	
	
	
	
	//content switch
	var content=$('#content'),
		nav=$('.menu'),
		footer_nav=$('.footer_menu');
	nav.navs({
		useHash:true,
		hoverIn:function(li){
						
		},
		hoverOut:function(li){
			
		},
		hover:false
	})		
	footer_nav.navs({
		useHash:true,
		hover:true
	});
	nav.navs(function(n, _){
		content.cont_sw(n);
		footer_nav.navs(n);
	})
	content.cont_sw({
		showFu:function(){
			var _=this		
			
			$('.thumbvr').stop().animate({opacity:'0'},400, function(){$(this).css({display:'none'})})
			$('.logo1').stop().animate({left:-500},400, function(){$(this).css({display:'none'})})
			$('.main5').css({display:'block'});

			

			
			$.when(_.li).then(function(){
				_.next.css({display:'block'}).stop().animate({left:0},1000,'easeOutBack');
				
				
			});
		},
		hideFu:function(){
			var _=this
			_.li.stop().animate({left:-1000},600,'easeInCirc', function(){
				_.li.css({display:'none',left:-1000});
				
				//$('.main3').css({display:'none'});
				
				
			})
			
			
			//$('.menu').css({display:'block'}).stop().animate({opacity:'1'},800);
			
			//$('.slide').css({display:'block'}).stop().animate({opacity:'1'},800,'easeInQuint');
			
			//$('.slide').css({display:'block'}).stop().animate({opacity:'0'},800,function(){  $('.slide').stop().animate({opacity:'1'},800); });
			
			//setTimeout(function () { $('.slide').css({display:'block'}).stop().animate({opacity:'1'},800); }, 800);
			
			//$('.slide').stop().animate({opacity:'0'},800, function(){ $('.slide').css({display:'block'}).stop().animate({opacity:'1'},800); });
			
			
			
			
	
						
		},
		preFu:function(){
			var _=this
			_.li.css({position:'absolute', display:'none'});
			$('.main5').css({display:'none'});
		}
	})
	
	//nav.navs(0);
	
	//////////////////////////
	
	var h_cont=690;
	function centre() {
		var h=$(document).height();
		if (h>h_cont) {
			m_top=~~(h-h_cont)/2;
		} else {
			m_top=0;
		}
		$('.main1').stop().animate({paddingTop:m_top})
	}
	centre();
	$(window).resize(centre);	
	
	
}) /// load