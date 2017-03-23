(function($){

	console.log(true);

	var apiUrl = 'http://www.cevt.se/positions/'
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
	});

})(jQuery);