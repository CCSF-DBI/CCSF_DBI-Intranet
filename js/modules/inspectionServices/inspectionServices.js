/**
 * Manages regions that hold side navigation text and images
 */
define([
    'jquery', 'marionette','app/events', 'handlebars', 'jquerycookie',
    'text!templates/modules/inspectionServices/inspectionServices.htm'
], function ($, Marionette, appEvents, Handlebars, Cookie, templateHTML) {
    return Marionette.View.extend({
		tagName: 'div',
		id: "inspectionServicesPage",
		className: 'landing-page',
        initialize: function (options, moduleName, app) {
            var view = this;
            view.App = app;
            view.template = Handlebars.compile(templateHTML);
			view.render();
			view.getStaffMembers();
			//appEvents.on('app:homeViewMod:started', view.render);
        },
        render: function () {
            var view = this;
            var html = view.template();
            view.$el.html(html);
			return view;
        },
		close: function () {
			var view = this;
			view.remove();
			view.unbind();
			view.stopListening();
			appEvents.off(null, null, view);
		},
        events: {
        },
        /**
         * Custom methods
         */
		getStaffMembers: function () {
			console.info("getStaffMembers");
			var view = this;
			var html = window.App.renderStaffMembers(view.staffmembers);
			//console.warn(cview);
			$("#staffpanel", view.$el).append(html);
		},
		
		staffmembers: [{
			firstname: "Daniel",
			lastname: "Lowrey",
			title: "Deputy Director",
			phone: "415-558-6127",
		},{
			firstname: "Anthony",
			lastname: "Grieco",
			title: "Manager",
			phone: "415-558-6009"
		},{
			firstname: "Maria",
			lastname: "Asuncion",
			phone: "415-558-6442"
		},{
			firstname: "Sharae",
			lastname: "Brown",
			phone: "415-558-6347"
		},{
			firstname: "Alma",
			lastname: "Canindin",
			phone: "415-558-6056"
		},{
			firstname: "Adora",
			lastname: "Canotal",
			phone: "415-558-6316"
		},{
			firstname: "Samuel",
			lastname: "Gregory",
			phone: "415-558-6334"
		},{
			firstname: "Carmen",
			lastname: "Hasbun",
			phone: "415-558-6108"
		},{
			firstname: "Alvina",
			lastname: "Lei",
			phone: "415-558-6416"
		},{
			firstname: "Jing Jing",
			lastname: "Lu",
			phone: "415-558-6271"
		},{
			firstname: "Ben",
			lastname: "Man",
			phone: "415-558-6575"
		},{
			firstname: "Carrie",
			lastname: "Pei",
			phone: "415-558-6572"
		},{
			firstname: "Gregory",
			lastname: "Slocum",
			phone: "415-558-6104"
		},{
			firstname: "Mehret",
			lastname: "Tesfaye",
			phone: "415-558-6142"
		},{
			firstname: "Czarina",
			lastname: "Ysip-Blackshear",
			phone: "415-558-6657"
		}]
	});
});
