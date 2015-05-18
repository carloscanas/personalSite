$(document).ready(function (){


    //Converting button to side nav
    /*$(window).scroll(function() {
    if ($(this).scrollTop() < 200) {
      $('#titleButton').css({'display': 'block'});
      $('.sideNav').css({'display': 'none'});
    }
    else {
      $('#titleButton').css({'display': 'none'});
      $('.sideNav').css({'display': 'block'});
    }
    });*/


  

    
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
    $("#profileLink").click(function() {
      $('html, body').animate({
        scrollTop: $("#profilePage").offset().top
      }, 750);
    });
    $("#experienceLink").click(function() {
      $('html, body').animate({
        scrollTop: $("#experiencePage").offset().top
      }, 750);
    });
    $("#abilitiesLink").click(function() {
      $('html, body').animate({
        scrollTop: $("#abilitiesPage").offset().top
      }, 750);
    });
    /*$("#projectsLink").click(function() {
      $('html, body').animate({
        scrollTop: $("#projectsPage").offset().top
      }, 750);
    });*/
    $("#contactLink").click(function() {
      $('html, body').animate({
        scrollTop: $("#contactsPage").offset().top
      }, 750);
    });

    
  

});



/*function goToByScroll(id){
      // Remove "link" from the ID
    id = id.replace("link", "");
      // Scroll
    $('html,body').animate({
        scrollTop: $("#"+id).offset().top},
        'slow');
    }

    $("nav > a").click(function(e) { 
      // Prevent a page reload when a link is pressed
    e.preventDefault(); 
      // Call the scroll function
    goToByScroll($(this).attr("id")); 
    });*/