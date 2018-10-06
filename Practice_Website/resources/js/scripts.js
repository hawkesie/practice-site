
$(document).ready(function() {

	$('.js--section-features').waypoint(function(direction) {
		if (direction == "down") {
			$('nav').addClass('sticky');
		} else{
			$('nav').removeClass('sticky');
		}
	},{
		offset:'60px;'
	});

	$('.js--scroll-to-plan').click(function(){
		$('html,body').animate({scrollTop: $('.js--section-plans').offset().top},1000);	
	});

	$('.js--scroll-to-start').click(function(){
		$('html,body').animate({scrollTop: $('.js--section-features').offset().top},1000);	
	});

    //Smooth scrolling funtion
	$("a").on('click', function(event) {
	    if (this.hash !== "") {
	      // Prevent default anchor click behavior
	      event.preventDefault();

	      // Store hash
	      var hash = this.hash;

	      // Using jQuery's animate() method to add smooth page scroll
	      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	      $('html, body').animate({
	        scrollTop: $(hash).offset().top
	      }, 800, function(){
	   
	        // Add hash (#) to URL when done scrolling (default click behavior)
	        window.location.hash = hash;
	      });
	    } // End if
  	});

	//Animations on scroll
	$('.js--wp-1').waypoint(function(direction){
		$('.js--wp-1').addClass('animated fadeIn');
	},
	{
		offset:'50%'
	});

	$('.js--wp-2').waypoint(function(direction){
		$('.js--wp-2').addClass('animated fadeIn');
	},
	{
		offset:'50%'
	});

	$('.js--wp-3').waypoint(function(direction){
		$('.js--wp-3').addClass('animated fadeIn');
	},
	{
		offset:'50%'
	});

	$('.js--wp-4').waypoint(function(direction){
		$('.js--wp-4').addClass('animated fadeIn');
	},
	{
		offset:'50%'
	});

	$('.js--wp-5').waypoint(function(direction){
		$('.js--wp-5').addClass('animated fadeIn');
	},
	{
		offset:'50%'
	});

    /*Mobile*/
    $('.js--nav-icon').click(function(){
    	var nav = $('.js--main-nav');

    	nav.slideToggle(200);
    });


});

