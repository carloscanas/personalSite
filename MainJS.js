$(document).ready(function (){
    
    //Making nav stick to top when scrolling down
    var navOffset = jQuery("nav").offset().top;
    jQuery(window).scroll(function() {
    	var scrollPos = jQuery(window).scrollTop();

    	if (scrollPos >= navOffset) {
    		jQuery("nav").addClass("fixed");
    	} else {
    		jQuery("nav").removeClass("fixed");
    	}
    });

    //Auto Scroll
    function goToByScroll(id){
      // Remove "link" from the ID
    id = id.replace("link", "");
      // Scroll
    $('html,body').animate({
        scrollTop: $("#"+id).offset().top},
        'slow');
    };

    $("nav > a").click(function(e) { 
      // Prevent a page reload when a link is pressed
    e.preventDefault(); 
      // Call the scroll function
    goToByScroll($(this).attr("id")); 
    });

});


function autoScrollTo(el) {
  var element = $('#'+el);
  $('html,body').animate({scrollTop: $(element).offset().top});
}


