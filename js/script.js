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
	"Paterson",
	"Passaic",
	"Newark",
	"Elizabeth",
	"Jersey City",
	"Hackensack",
	"Teaneck",
	"Fort Lee",
	"Garfield",
	"Paramus",
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
	if (document.getElementById("add_more_city")) {
		if (currentCityIndex >= cityNames.length) {
			const seeMoreButton = document.getElementById("add_more_city");
			seeMoreButton.style.display = "none";
		}
	}
}

// Add an event listener to the "See More" button

if (document.getElementById("add_more_city")) {
	document
		.getElementById("add_more_city")
		.addEventListener("click", function (event) {
			event.preventDefault();
			addCities();
		});
}

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

// JavaScript code
// Get all buttons with the class "tab-button"
const tabButtons = document.querySelectorAll(".tab-btn");

// Add a click event listener to each button
tabButtons.forEach((button) => {
	button.addEventListener("click", function () {
		// Set the new URL to navigate to the corresponding section
		window.location.href = "#tab-section";
	});
});

$(".listing").on("click", function () {
	// Remove the .active class from .btn-city-list
	$(".btn-city-list").removeClass("active");

	// Add multiple classes to .btn-city-list
	$(".btn-city-list").addClass("active");
});

$(".city-info").on("click", function () {
	// Remove the .active class from .btn-city-list
	$(".btn-city-info").removeClass("active");

	// Add multiple classes to .btn-city-list
	$(".btn-city-info").addClass("active");
});

$(".city").on("click", function () {
	// Remove the .active class from .btn-city-list
	$(".btn-city").removeClass("active");

	// Add multiple classes to .btn-city-list
	$(".btn-city").addClass("active");
});

$(".faq").on("click", function () {
	// Remove the .active class from .btn-city-list
	$(".btn-city-faq").removeClass("active");

	// Add multiple classes to .btn-city-list
	$(".btn-city-faq").addClass("active");
});

$(".guides").on("click", function () {
	// Remove the .active class from .btn-city-list
	$(".btn-city-guides").removeClass("active");

	// Add multiple classes to .btn-city-list
	$(".btn-city-guides").addClass("active");
});

document.addEventListener("DOMContentLoaded", () => {
	const statePaths = document.querySelectorAll("#us-map path");
	const tooltip = document.createElement("div");
	tooltip.classList.add("state-tooltip");
	document.body.appendChild(tooltip);

	statePaths.forEach((statePath) => {
		const stateName = statePath.getAttribute("data-name");

		statePath.addEventListener("mouseenter", (event) => {
			event.target.style.fill = "orange"; // Change the fill color on hover
			tooltip.style.opacity = 1;
			const { left, top } = event.target.getBoundingClientRect();
			tooltip.style.left = `${left + 10}px`;
			tooltip.style.top = `${top + 10}px`;
			tooltip.textContent = stateName;
		});

		statePath.addEventListener("mouseleave", (event) => {
			if (!event.target.classList.contains("clicked")) {
				event.target.style.fill = ""; // Reset the fill color on mouseleave if not clicked
			}
			tooltip.style.opacity = 0;
		});

		statePath.addEventListener("click", (event) => {
			statePaths.forEach((path) => {
				path.classList.remove("clicked");
				path.style.fill = ""; // Reset the fill color of all states
			});

			event.target.classList.add("clicked");
			event.target.style.fill = "green"; // Change the fill color on click
		});
	});
});
