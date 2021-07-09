	// -----------------------------------------------------
	// -----------   TESTIMONIAL HOVER    ------------------
	// -----------------------------------------------------

	function waxon_tm_testimonials_effect(){

		var list	= jQuery('.waxon_tm_testimonials .testi_inner .right .image_list ul li');

		list.on('mouseenter',function(){
			var element = jQuery(this);
			var elIndex = element.index()+1;
			list.removeClass('active');
			element.addClass('active');
			element.closest('.waxon_tm_testimonials').find('.quote_list ul li').removeClass('active');
			element.closest('.waxon_tm_testimonials').find('.quote_list ul li:nth-child('+elIndex+')').addClass('active');
		});
	}
	waxon_tm_testimonials_effect();