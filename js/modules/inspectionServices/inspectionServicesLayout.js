/**
 * inspectionServicesLayout.js
 * -----------------------
 * Manages regions that hold components used for Inspection Services Department
 */
define([
    'jquery', 'marionette', 'handlebars', 'app/events',
    'text!templates/modules/inspectionServices/inspectionServicesLayout.htm',
	'modules/inspectionServices/inspectionServices',
	'modules/inspectionServices/buildingInspections',
	'modules/inspectionServices/electricalInspections',
	'modules/inspectionServices/plumbingInspections',
	'modules/inspectionServices/codeEnforcement',
	'modules/inspectionServices/housingInspections'
],
function ($, Marionette, Handlebars, appEvents, templateHTML, InspectionServicesPage, BuildingInspectionsPage, ElectricalInspectionsPage,
		  PlumbingInspectionsPage, CodeEnforcementPage, HousingInspectionsPage) {
	return Marionette.View.extend({
		template: Handlebars.compile(templateHTML),
		tagName: "div",
		id: "inspectionServicesLayout",
		regions: {
			layoutRegion: "#inspectionServicesRegion"
		},
		initialize: function () {
			var layout = this;
			layout.module = layout.options.module;
			if (!layout.module) {
				console.error("inspectionServicesLayout requires a module instance.");
			}
			appEvents.on("app:inspectionServicesMod:stopping", function () {
				//layout.removeContent();
			});
		},
		render: function () {
			var layout = this;
			var html = layout.template();
			layout.$el.html(html);
			return layout;
		},
		onRender: function () {
			var layout = this;
			console.info("rendering...");
			layout.delegateEvents();
		},

		events: {
			// TODO: add events here
		},
		/**
		 * Custom Methods
		 */
		showPage: function (html){
			var layout =  this;
			$("#inspectionServicesRegion", layout.$el).fadeOut(250, function() {
				console.warn('inside fade out');
				$("#inspectionServicesRegion", layout.$el).html(html).fadeIn(250);
			});
		},
		showInspectionServicesPage: function () {
			console.info("showInspectionServicesPage");
			var layout =  this;
			var landingPage = new InspectionServicesPage({});
			layout.showPage(landingPage.$el);
		},
		showBuildingInspectionsPage: function () {
			console.info("showBuildingInspectionsPage");
			var layout =  this;
			var landingPage = new BuildingInspectionsPage({});
			layout.showPage(landingPage.$el);
		},
		showElectricalInspectionsPage: function () {
			console.info("showElectricalInspectionsPage");
			var layout =  this;
			var landingPage = new ElectricalInspectionsPage({});
			layout.showPage(landingPage.$el);
		},
		showPlumbingInspectionsPage: function () {
			console.info("showElectricalInspectionsPage");
			var layout =  this;
			var landingPage = new PlumbingInspectionsPage({});
			layout.showPage(landingPage.$el);
		},
		showCodeEnforcementPage: function () {
			console.info("showCodeEnforcementPage");
			var layout =  this;
			var landingPage = new CodeEnforcementPage({});
			layout.showPage(landingPage.$el);
		},
		showHousingInspectionsPage: function () {
			console.info("showHousingInspectionsPage");
			var layout =  this;
			var landingPage = new HousingInspectionsPage({});
			layout.showPage(landingPage.$el);
		}
	});
});