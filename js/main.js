$(document).ready(function () {
	$('.response-list').slick({
		prevArrow: "<button class='slick-prev slick-arrow' type='button' style=''></button>",
      	nextArrow: "<button class='slick-next slick-arrow' type='button' style=''></button>", 
		dots: true,
  		infinite: true,
		slidesToShow: 1,
		responsive: [
	    	{
				breakpoint: 557,
		      	settings: {
	       			prevArrow: false,
      				nextArrow: false
		      	}
		    }
		]
	});

	$('.faq-header a').on('click', function () {
		$(this).toggleClass('response-row').toggleClass('close-response')
	});

	let accordion = $('#accordion');

	accordion.on('shown.bs.collapse', function () {
		accordion.find('.collapse.in').parent().addClass('red-bg');
	});

	accordion.on('hidden.bs.collapse', function () {
		accordion.find('.collapse').parent().removeClass('red-bg');
	});

	accordion.on('show.bs.collapse',  function () {
		item = accordion.find('.collapse.in');
		item.collapse('hide');
		item.siblings('.faq-header').find('h4 > a').toggleClass('response-row').toggleClass('close-response'); 
	});

	let toTop = $('#to-top');
	let elementOffset = Math.ceil($('footer').offset().top);

	function getVisible() {    
	    var $el = $('footer'),
	        scrollTop = $(this).scrollTop(),
	        scrollBot = scrollTop + $(this).height(),
	        elTop = $el.offset().top,
	        elBottom = elTop + $el.outerHeight(),
	        visibleTop = elTop < scrollTop ? scrollTop : elTop,
	        visibleBottom = elBottom > scrollBot ? scrollBot : elBottom;
	    return visibleBottom - visibleTop;
	}

    $(window).scroll(function(){
        toTop['fade'+ ($(this).scrollTop() > 400 ? 'In': 'Out')](500);
        if($(this).scrollTop() > 400) {
        	let viewableOffset = $("footer").offset().top - $(this).scrollTop();
        	if (getVisible() >= 0) {
	        	toTop.parent().hide(500);
	        } else {
	        	toTop.parent().show(500);
	        }
        }
    });

 	toTop.click(function () {
    	let elementClick = $(this).attr("href")
    	let destination = $(elementClick).offset().top;
    	$('html:not(:animated),body:not(:animated)').animate({
      		scrollTop: destination
    	}, 1000);
    	return false;
  	});
});