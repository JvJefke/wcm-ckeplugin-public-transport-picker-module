"use strict";

angular.module("ckeplugin-public-transport-picker_0.0.2")
	.config([

		"ckeditorPluginsPublicTransportPickerProvider",
		"ckeditorProvider",

		function(ckeditorPluginsPublicTransportPickerProvider) {
			ckeditorPluginsPublicTransportPickerProvider.controls.registerAll();
		},
	]);
