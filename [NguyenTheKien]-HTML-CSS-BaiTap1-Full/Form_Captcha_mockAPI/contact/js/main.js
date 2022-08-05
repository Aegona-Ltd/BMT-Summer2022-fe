(function($) {

	"use strict";


  // Form
	var contactForm = function() {
		if ($('#contactForm').length > 0 ) {
			$( "#contactForm" ).validate( {
				rules: {
					name: "required",
					subject: "required",
					email: {
						required: true,
						email: true
					},
					message: {
						required: true,
						minlength: 5
					}
				},
				messages: {
					name: "Please enter your name",
					subject: "Please enter your subject",
					email: "Please enter a valid email address",
					message: "Please enter a message"
				},
				/* submit via ajax */
				
				submitHandler: function() {	
					var frm = $('#contactForm');	
					frm.submit(function (e) {

						e.preventDefault();
			
						$.ajax({
							type: frm.attr('method'),
							url: frm.attr('action'),
							data: frm.serialize(),
							success: function (data) {
								console.log(data);
							},
							error: function (data) {
								console.log(data);
							},
						});
					});
		  		} // end submitHandler

			});
		}
	};
	contactForm();

})(jQuery);
