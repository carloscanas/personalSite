$(document).ready(function (){



    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top'
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });
  
    
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

    //Nav Auto Scroll
    var offset = -100; 

    $("#profileLink").click(function() {
      $('html, body').animate({
        scrollTop: $("#profilePage").offset().top + offset
      }, 750);
    });
    $("#experienceLink").click(function() {
      $('html, body').animate({
        scrollTop: $("#experiencePage").offset().top + offset
      }, 750);
    });
    $("#abilitiesLink").click(function() {
      $('html, body').animate({
        scrollTop: $("#abilitiesPage").offset().top + offset
      }, 750);
    });
    /*$("#projectsLink").click(function() {
      $('html, body').animate({
        scrollTop: $("#projectsPage").offset().top + offset
      }, 750);
    });*/
    $("#contactLink").click(function() {
      $('html, body').animate({
        scrollTop: $("#contactPage").offset().top + offset
      }, 750);
    });

    
  

});
