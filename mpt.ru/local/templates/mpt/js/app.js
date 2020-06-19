jQuery(document).ready(function($) {

	$('#rd-mailform-from').on('submit', function(event) {
		event.preventDefault();
		console.log('test');
		var self = $(this);
		var formData = self.serialize();

		$.ajax({
			url: '/local/ajax/contact-form.php',
			type: 'POST',
			dataType: 'json',
			data: formData,
		})
		.done(function(res) {
			if (res.success === true) {
				$.fancybox.open('<h4>Ваше сообщение успешно отправленно</h4>');
				self[0].reset();
			} 
		})
		.fail(function(err) {
			console.log("error", err);
		});
	});

	
});

 