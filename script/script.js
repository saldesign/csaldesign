if (Modernizr.svg) {
  // supported
} else {
  // not-supported
  $(".logo").addClass(".no-svg");
}


$(document).ready(function() {
  $('body').addClass('js');
  var $menulink = $('.menu'),
  		$mainnav = $('.main-nav');

  $menulink.click(function() {
   $(this).toggleClass('active');
   $mainnav.toggleClass('active');
   if($(this).hasClass('active')){
    	$(this).removeClass('icon-menu').addClass('icon-cancel');
	  }else{
	    $(this).removeClass('icon-cancel').addClass('icon-menu');			
	  }
	  return false;
	});//End menulink.click

});//End document.ready 
