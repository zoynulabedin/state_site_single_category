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

const cityNames = [
	"New York",
	"Los Angeles",
	"Chicago",
	"Houston",
	"Phoenix",
	"Philadelphia",
	"San Antonio",
	"San Diego",
	"Dallas",
	"San Jose",
	"Austin",
	"Jacksonville",
	"San Francisco",
	"Indianapolis",
	"Columbus",
	"Fort Worth",
	"Charlotte",
	"Seattle",
	"Denver",
	"El Paso",
	"Detroit",
	"Washington",
	"Boston",
	"Memphis",
	"Nashville",
	"Portland",
	"Oklahoma City",
	"Las Vegas",
	"Baltimore",
	"Louisville",
	"Milwaukee",
	"Albuquerque",
	"Tucson",
	"Fresno",
	"Sacramento",
	"Mesa",
	"Kansas City",
	"Atlanta",
	"Long Beach",
	"Colorado Springs",
	"Raleigh",
	"Miami",
	"Virginia Beach",
	"Omaha",
	"Oakland",
	"Minneapolis",
	"Tulsa",
	"Arlington",
	"New Orleans",
	"Wichita",
	"Cleveland",
	"Tampa",
	"Bakersfield",
	"Aurora",
	"Anaheim",
	"Honolulu",
	"Santa Ana",
	"Riverside",
	"Corpus Christi",
	"Lexington",
	"Stockton",
	"St. Louis",
	"Saint Paul",
	"Henderson",
	"Pittsburgh",
	"Cincinnati",
	"Anchorage",
	"Greensboro",
	"Plano",
	"Newark",
	"Lincoln",
	"Orlando",
	"Irvine",
	"Toledo",
	"Jersey City",
	"Chula Vista",
	"Durham",
	"Fort Wayne",
	"St. Petersburg",
	"Laredo",
	"Buffalo",
	"Madison",
	"Lubbock",
	"Chandler",
	"Scottsdale",
	"Reno",
	"Glendale",
	"Norfolk",
	"Winston-Salem",
	"North Las Vegas",
	"Irving",
	"Chesapeake",
	"Gilbert",
	"Hialeah",
	"Garland",
	"Fremont",
	"Richmond",
	"Boise",
	"San Bernardino",
	"Spokane",
	"Baton Rouge",
	"Des Moines",
	"Modesto",
	"Birmingham",
];
