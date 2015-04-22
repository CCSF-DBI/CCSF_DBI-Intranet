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
			view.getStaffMembers(view.managers);
			view.addHorizontalRule();
			view.getStaffMembers(view.staffmembers);
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
		getStaffMembers: function (collection) {
			console.info("getStaffMembers");
			var view = this;
			var html = window.App.renderStaffMembers(collection);
			//console.warn(cview);
			$("#staffpanel", view.$el).append(html);
		},
		
		addHorizontalRule: function () {
			var view = this;
			$("#staffpanel", view.$el).append("<hr />");
		},
		
		managers: [{
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
			firstname: "Carrie",
			lastname: "Pei",
			title: "Principal Clerk",
			phone: "415-558-6572",
			email: "Ying.Pei"
		},{
			firstname: "Adora",
			lastname: "Canotal",
			title: "Principal Clerk",
			phone: "415-558-6316"
		},{
			firstname: "Ben",
			lastname: "Man",
			title: "Principal Clerk",
			phone: "415-558-6575"
		},{
			firstname: "Maria",
			lastname: "Asuncion",
			title: "(Acting) Principal Clerk",
			phone: "415-558-6442"
		}],
		
		staffmembers: [{
			firstname: "Sharae",
			lastname: "Brown",
			phone: "415-558-6347"
		},{
			firstname: "Alma",
			lastname: "Canindin",
			phone: "415-558-6056"
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
			phone: "415-558-6271",
			email: "JingJing.Lu"
		},{
			firstname: "Mehret",
			lastname: "Tesfaye",
			phone: "415-558-6142"
		},{
			firstname: "Czarina",
			lastname: "Blackshear",
			phone: "415-558-6657"
		}]
	});
});