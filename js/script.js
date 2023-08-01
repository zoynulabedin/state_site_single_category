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

const citiesPerPage = 20; // Number of cities to add per click
let currentCityIndex = 21; // Keeps track of the current index for adding cities

function addCities() {
	const cityListElement = document.getElementById("city_list_ul");

	// Loop through the cityNames array and add cities based on the current index
	for (
		let i = currentCityIndex;
		i < currentCityIndex + citiesPerPage && i < cityNames.length;
		i++
	) {
		const cityNumber = i + 1;
		const city = cityNames[i];

		const listItem = document.createElement("li");
		const spanElement = document.createElement("span");
		spanElement.textContent = cityNumber + ".";

		const anchorElement = document.createElement("a");
		anchorElement.href = "";
		anchorElement.textContent = city;

		listItem.appendChild(spanElement);
		listItem.appendChild(anchorElement);
		cityListElement.appendChild(listItem);
	}

	// Update the currentCityIndex for the next set of cities to be added
	currentCityIndex += citiesPerPage;

	// Hide the "See More" button if all cities have been added
	if (currentCityIndex >= cityNames.length) {
		const seeMoreButton = document.getElementById("add_more_city");
		seeMoreButton.style.display = "none";
	}
}

// Add an event listener to the "See More" button
document
	.getElementById("add_more_city")
	.addEventListener("click", function (event) {
		event.preventDefault();
		addCities();
	});

// Initially add the first set of cities when the page loads
addCities();

// Get all the list items and content divs

const listItems = document.querySelectorAll(".intro-list li");
const contentDivs = document.querySelectorAll(".tab-content-item ");

// Add click event listeners to the list items
listItems.forEach((item, index) => {
	item.addEventListener("click", () => {
		// Hide all content divs
		
		contentDivs.forEach((contentDiv) => contentDiv.classList.remove("active"));
		// Show the selected content div
		contentDivs[index].classList.add("active");

		// Remove .active-bg class from all list items
		listItems.forEach((li) => li.classList.remove("active-bg"));
		// Add .active-bg class to the clicked list item
		item.classList.add("active-bg");
	});
});
