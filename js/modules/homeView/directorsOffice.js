/**
 * Manages regions that hold side navigation text and images
 */
define([
    'jquery', 'marionette','app/events', 'handlebars', 'jquerycookie',
    'text!templates/modules/homeView/directorsOffice.htm'
], function ($, Marionette, appEvents, Handlebars, Cookie, templateHTML) {
    return Marionette.View.extend({
		tagName: 'div',
		id: "directorsOfficePage",
		className: 'directors-office',
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
			console.warn($("#staffpanel", view.$el));
			$("#staffpanel", view.$el).append(html);
		},
		
		staffmembers: [{
			firstname: "Tom C.",
			lastname: "Hui, S.E., C.B.O.",
			title: "Director",
			phone: "415-558-6131",
			email: "Tom.Hui",
			photoClass: "tom-hui"
		},{
			firstname: "Carolyn",
			lastname: "Jayin",
			title: "Executive Secretary",
			phone: "415-558-6131"
		},{
			firstname: "Lily",
			lastname: "Madjus Wu",
			title: "Communications Director",
			phone: "*415-555-1212",
			email: "Lily.Madjus"
		},{
			firstname: "Leanna",
			lastname: "Chan",
			title: "Communications Assistant",
			phone: "*415-555-1212"
		},{
			firstname: "Adriana",
			lastname: "Ortiz",
			title: "Senior Clerk",
			phone: "415-558-6690"
		},{
			firstname: "William",
			lastname: "Strawn",
			title: "Manager, Legslative/Public Affairs",
			phone: "415-558-6250"
		}]
    });
});