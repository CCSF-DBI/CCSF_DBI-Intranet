/**
 * permitServicesLayout.js
 * -----------------------
 * Manages regions that hold components used for Permit Services Department
 */
define([
    'jquery', 'marionette', 'handlebars', 'app/events',
    'text!templates/modules/permitServices/permitServicesLayout.htm',
	'modules/permitServices/permitServices',
	'modules/permitServices/centralPermitBureau',
	'modules/permitServices/helpDesk',
	'modules/permitServices/initialPlanReview',
	'modules/permitServices/mechanicalPlanReview',
	'modules/permitServices/planReview',
	'modules/permitServices/technicalServices',
	'modules/permitServices/managementInformationServices'
],
function ($, Marionette, Handlebars, appEvents, templateHTML, 
		   PermitServicesPage, CentralPermitBureauPage, HelpDeskPage, InitialPlanReviewPage, MechanicalPlanReviewPage, 
		   PlanReviewPage, TechnicalServicesPage, ManagementInformationServicesPage) {
	return Marionette.View.extend({
		template: Handlebars.compile(templateHTML),
		tagName: "div",
		id: "permitServicesLayout",
		regions: {
			layoutRegion: "#permitServicesRegion"
		},
		initialize: function () {
			var layout = this;
			layout.module = layout.options.module;
			if (!layout.module) {
				console.error("permitServicesLayout requires a module instance.");
			}
			appEvents.on("app:permitServiceMod:stopping", function () {
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
			$("#permitServicesRegion", layout.$el).fadeOut(250, function() {
				console.warn('inside fade out');
				$("#permitServicesRegion", layout.$el).html(html).fadeIn(250);
			});
		},
		showPermitServicesPage: function () {
			console.info("showPermitServicesPage");
			var layout =  this;
			var landingPage = new PermitServicesPage({});
			layout.showPage(landingPage.$el);
		},
		showCentralPermitBureauPage: function () {
			console.info("showCentralPermitBureauPage");
			var layout =  this;
			var landingPage = new CentralPermitBureauPage({});
			layout.showPage(landingPage.$el);
		},
		showHelpDeskPage: function () {
			console.info("showHelpDeskPage");
			var layout =  this;
			var landingPage = new HelpDeskPage({});
			layout.showPage(landingPage.$el);
		},
		showInitialPlanReviewPage: function () {
			console.info("showInitialPlanReviewPage");
			var layout =  this;
			var landingPage = new InitialPlanReviewPage({});
			layout.showPage(landingPage.$el);
		},
		showMechanicalPlanReviewPage: function () {
			console.info("showInitialPlanReviewPage");
			var layout =  this;
			var landingPage = new MechanicalPlanReviewPage({});
			layout.showPage(landingPage.$el);
		},
		showPlanReviewPage: function () {
			console.info("showPlanReviewPage");
			var layout =  this;
			var landingPage = new PlanReviewPage({});
			layout.showPage(landingPage.$el);
		},
		showTechnicalServicesPage: function () {
			console.info("showTechnicalServicesPage");
			var layout =  this;
			var landingPage = new TechnicalServicesPage({});
			layout.showPage(landingPage.$el);
		},
		showMISPage: function () {
			console.info("showMISPage");
			var layout =  this;
			var landingPage = new ManagementInformationServicesPage({});
			layout.showPage(landingPage.$el);
		},
	});
});