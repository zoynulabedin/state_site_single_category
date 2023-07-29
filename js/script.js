(function ($) {
	"use strict";
	$(document).ready(function () {
		// Show the first tab by default
		$(".tab-content:first").show();

		// Handle tab button click
		$(".tab-btn").click(function () {
			// Remove active class from all tab buttons
			$(".tab-btn").removeClass("active");

			// Hide all tab contents
			$(".tab-content").hide();

			// Show the selected tab content
			var tabId = $(this).data("tab");
			$("#" + tabId).show();

			// Add active class to the clicked tab button
			$(this).addClass("active");

			$(".accordion-title").on("click", function () {
				// Toggle the visibility of the accordion content when clicked
				$(this).next(".accordion-content").slideToggle();
				// Toggle the plus and minus icons
				$(this).find("i").toggleClass("fa-plus fa-minus");
			});
		});
	});
})(jQuery);
