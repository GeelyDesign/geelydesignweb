/*setTimeout(function(){
  $('.odometer').each(function(){
    var number = $(this).data('number');
    $(this).html(number);
  });
});*/

(function($){

	//===================
	//  Masonry
	//===================

	$(window).load(function(){

		var $grid = $('.masonry').masonry({
			columnWidth: '.grid-sizer',
			gutter: '.gutter-sizer',
			itemSelector: '.item'
		});

		$grid.masonry('on', 'layoutComplete', function(){
			$(window).scroll(function(){
				var _window = $(this),
					_window_top = _window.scrollTop();

				//play_pause(_window_top);
			});
		});

		$grid.masonry();

	});

	//===================
	//  Get job positions
	//===================

	/*var apiUrl = 'http://www.cevt.se/positions/'
		proxy = 'https://cors-anywhere.herokuapp.com/',
		primary = $('#features-row')
		loading = $('#loading');

	$.ajax({
		type: 'GET',
		url: proxy + apiUrl,
		dataDate: 'json',
		success: function(data){
			var i = 0;

			loading.fadeOut(400, function(){
				console.log('done');

				data.positions.forEach(function(position, index){
					i++;

					var clearfix,
						delay = i;

					if(i == 3){
						clearfix = '<div class="clearfix"></div>';
					}
					else {
						clearfix = '';
					}

					delay = delay.toString() + '00ms';

					var excerpt = position.description.replace('<p>','')
						excerpt = excerpt.replace('</p>',''),
						excerpt = excerpt.slice(0,200);

					var html = '<div class="col-md-4 text-center wow fadeInUp" data-wow-delay="'+delay+'">';
					html += '<span class="typcn typcn-pencil x3"></span>';
					html += '<h4>'+position.title+'</h4>';
					html += '<p>'+excerpt+'...</p>';
					html += '</div>'+clearfix;

					if(i == 3){
						i = 0;
					}

					primary.append(html);

				});
			});
		}
	});*/

	//===================
	//  Sticky header
	//===================

	/*var _after_header = $('header#home').next(),
		_after_header_top = _after_header.offset().top,
		_header = $('#fixed-header');

	$(window).scroll(function(){
		var _window = $(this),
			_window_top = _window.scrollTop();

		if ( _window_top >= _after_header_top ) {
			_header.fadeIn(400);
		}
		else {
			_header.fadeOut(400);
		}
	});*/

	//===================
	//  Video
	//===================

	/*function play_pause(window_top){
		var _video = $('#video > video'),
			_section = $('#video'),
			_top = _section.offset().top,
			_height = _section.height() / 2,
			_new_top = _top - _height;

		if ( window_top >= _new_top ) {
			_video[0].play();
		}
		else {
			_video[0].pause();
		}
	};*/

	//===================
	//  Magnific Popup
	//===================

	/*$(document).ready(function(){
		$('.image-gallery').magnificPopup({
			delegate: '.item a',
			type: 'image'
		});

		new WOW().init();
	});*/

	//===================
	//  Scroller
	//===================

	/*$('nav.pushy a[href*=#]').click(function(){

		if ( location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname ) {

			var $target = $(this.hash);

			$target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');

			if ( $target.length ) {

				var targetOffset = $target.offset().top - 0;

				$('html,body').animate({
					scrollTop: targetOffset
				}, 800);

				return false;

			}

		}

	});*/

})(jQuery);