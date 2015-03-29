$(document).ready(function (){
    

    var navOffset = jQuery("nav").offset().top;

    

    jQuery(window).scroll(function() {
    	var scrollPos = jQuery(window).scrollTop();

    	if (scrollPos >= navOffset) {
    		jQuery("nav").addClass("fixed");
    	} else {
    		jQuery("nav").removeClass("fixed");
    	}

    });

    

});





$("#click").click(function (){
        //$(this).animate(function(){
            $('html, body').animate({
                scrollTop: $("#div1").offset().top
            }, 2000);
        //});
});



"display", "none"