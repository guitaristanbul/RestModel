sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"at/clouddna/axiostest/model/models",
	"at/clouddna/axiostest/libs/CloudDNAModel"
], function (UIComponent, Device, models, CloudDNAModel) {
	"use strict";

	return UIComponent.extend("at.clouddna.axiostest.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");

			//setUp Master-Detail-Model
			let oModel = new CloudDNAModel(
				"https://webidetesting7978545-ed926da1b.dispatcher.eu2.hana.ondemand.com/api", {
					keysForEntitySet: {
						"comments": "id"
					}
				});

			this.setModel(oModel);

			/*sap.ui.require(["https://cdn.jsdelivr.net/npm/axios/dist/axios.min"], function (axios) {

			});*/
		}
	});
});