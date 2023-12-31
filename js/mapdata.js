var simplemaps_usmap_mapdata = {
	main_settings: {
		//General settings
		width: "responsive", //or 'responsive'
		background_color: "#F3F4F7",
		background_transparent: "no",
		border_color: "#F3F4F7",
		popups: "on_hover",

		//State defaults
		state_description: "",
		state_color: "#AAABAD",
		state_hover_color: "#5199FF",
		state_url: "",
		border_size: 1.5,
		all_states_inactive: "no",
		all_states_zoomable: "no",

		//Location defaults
		location_description: "Store closest to you!",
		location_color: "#AAABAD",
		location_opacity: 0.8,
		location_hover_opacity: 1,
		location_url: "",
		location_size: 25,
		location_type: "square",
		location_image_source: "frog.png",
		location_border_color: "#FFFFFF",
		location_border: 0,
		location_hover_border: 0,
		all_locations_inactive: "no",
		all_locations_hidden: "no",

		//Label defaults
		label_color: "#d5ddec",
		label_hover_color: "#d5ddec",
		label_size: 22,
		label_font: "Arial",
		hide_labels: "no",

		//Zoom settings
		manual_zoom: "no",
		back_image: "no",
		arrow_color: "#cecece",
		arrow_color_border: "#808080",
		initial_back: "no",
		initial_zoom: -1,
		initial_zoom_solo: "no",
		region_opacity: 1,
		region_hover_opacity: 0.6,
		zoom_out_incrementally: "yes",
		zoom_percentage: 0.99,
		zoom_time: 0.5,

		//Popup settings
		popup_color: "white",
		popup_opacity: 0.9,
		popup_shadow: 1,
		popup_corners: 5,
		popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
		popup_nocss: "no",

		//Advanced settings
		div: "map",
		auto_load: "yes",
		url_new_tab: "no",
		images_directory: "default",
		fade_time: 0.1,
		link_text: "View Website",
	},
	state_specific: {
		HI: {
			name: "<div class='state-box'> Hawaii</div>",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "",
		},
		AK: {
			name: "<div class='state-box'> Alaska</div>",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
		},
		FL: {
			name: "<div class='state-box'> Florida</div>",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
			inactive: "no",
		},
		NH: {
			name: "<div class='state-box'> New Hampshire</div> ",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
		},
		VT: {
			name: "<div class='state-box'> Vermont</div> ",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
		},
		ME: {
			name: "<div class='state-box'> Maine</div>",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
		},
		RI: {
			name: "<div class='state-box'> Rhode Island</div>",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
		},
		NY: {
			name: "<div class='state-box'> New York</div>",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
		},
		PA: {
			name: "<div class='state-box'> Pennsylvania</div>",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
		},
		NJ: {
			name: "<div class='state-box'> New Jersey</div> ",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
		},
		DE: {
			name: "<div class='state-box'> Delaware</div> ",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
		},
		MD: {
			name: "<div class='state-box'> Maryland</div> ",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
		},
		VA: {
			name: "<div class='state-box'> Virginia</div>",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
		},
		WV: {
			name: "<div class='state-box'> West Virginia</div>",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
		},
		OH: {
			name: "<div class='state-box'> Ohio</div>",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
		},
		IN: {
			name: "<div class='state-box'> Indiana</div>",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
		},
		IL: {
			name: "<div class='state-box'> Illinois</div>",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
		},
		CT: {
			name: "<div class='state-box'> Connecticut</div>",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
		},
		WI: {
			name: "<div class='state-box'> Wisconsin</div>",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
		},
		NC: {
			name: "<div class='state-box'> North Carolina</div>",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
		},
		DC: {
			name: "<div class='state-box'> District of Columbia</div>",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
		},
		MA: {
			name: "<div class='state-box'> Massachusetts</div>",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
		},
		TN: {
			name: "<div class='state-box'> Tennessee</div>",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
		},
		AR: {
			name: "<div class='state-box'> Arkansas</div>",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
		},
		MO: {
			name: "<div class='state-box'> Missouri</div>",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
		},
		GA: {
			name: "<div class='state-box'> Georgia</div>",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
		},
		SC: {
			name: "<div class='state-box'> South Carolina</div>",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
		},
		KY: {
			name: "<div class='state-box'> Kentucky</div>",
			description: "default",
			color: "default",
			zoomable: "no",
			hover_color: "default",
			url: "default",
		},
		AL: {
			name: "<div class='state-box'> Alabama</div>",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
		},
		LA: {
			name: "<div class='state-box'> Louisiana</div>",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
		},
		MS: {
			name: "<div class='state-box'> Mississippi</div>",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
		},
		IA: {
			name: "<div class='state-box'> Iowa</div>",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
		},
		MN: {
			name: "<div class='state-box'> Minnesota</div>",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
		},
		OK: {
			name: "<div class='state-box'> Oklahoma</div>",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
		},
		TX: {
			name: "<div class='state-box'> Texas</div>",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
		},
		NM: {
			name: "<div class='state-box'> New Mexico</div>",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
		},
		KS: {
			name: "<div class='state-box'> Kansas</div>",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
		},
		NE: {
			name: "<div class='state-box'> Nebraska</div>",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
		},
		SD: {
			name: "<div class='state-box'> South Dakota</div>",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
		},
		ND: {
			name: "<div class='state-box'> North Dakota</div>",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
		},
		WY: {
			name: "<div class='state-box'> Wyoming</div>",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
		},
		MT: {
			name: "<div class='state-box'> Montana</div>",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
		},
		CO: {
			name: "<div class='state-box'> Colorado</div> ",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
		},
		UT: {
			name: "<div class='state-box'> Utah</div> ",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
		},
		AZ: {
			name: "<div class='state-box'> Arizona</div> ",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
		},
		NV: {
			name: "<div class='state-box'> Nevada</div> ",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
		},
		OR: {
			name: "<div class='state-box'> Oregon</div> ",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
		},
		WA: {
			name: "<div class='state-box'> Washington</div> ",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
		},
		CA: {
			name: "<div class='state-box'> California</div>",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
		},
		MI: {
			name: "<div class='state-box'> Michigan</div>",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
		},
		ID: {
			name: "<div class='state-box'> Idaho</div>",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
		},
		GU: {
			name: "<div class='state-box'> Guam</div>",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
			hide: "yes",
		},
		VI: {
			name: "<div class='state-box'> Virgin Islands</div>",
			image_source: "x.png",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
			hide: "yes",
		},
		PR: {
			name: "<div class='state-box'> Puerto Rico</div>",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
			hide: "yes",
		},
		AS: {
			name: "<div class='state-box'> American Samoa</div>",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
			hide: "yes",
		},
		MP: {
			name: "<div class='state-box'> Northern Mariana Islands</div>",
			description: "default",
			color: "default",
			hover_color: "default",
			url: "default",
			hide: "yes",
		},
	},
	locations: {
		0: {
			name: "New York",
			lat: "40.71",
			lng: "-74.0059731",
			image_url: "default",
			opacity: "default",
		},
		1: {
			name: "Anchorage",
			lat: "61.2180556",
			lng: "-149.9002778",
		},
	},
	labels: {
		HI: {
			color: "default",
			hover_color: "default",
			font_family: "default",
			pill: "yes",
			width: "default",
		},
	},
};
