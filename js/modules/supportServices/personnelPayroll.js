/**
 * Manages regions that hold side navigation text and images
 */
define([
    'jquery', 'marionette','app/events', 'handlebars', 'jquerycookie',
    'text!templates/modules/supportServices/personnelPayroll.htm'
], function ($, Marionette, appEvents, Handlebars, Cookie, templateHTML) {
    return Marionette.View.extend({
		tagName: 'div',
		id: "personnelPayrollPage",
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
			console.warn($("#staffpanel", view.$el));
			$("#staffpanel", view.$el).append(html);
		},
		
		staffmembers: [{
			firstname: "Emily",
			lastname: "Morrison",
			title: "Manager",
			phone: "415-558-6675",
		},{
			firstname: "Patrick",
			lastname: "Cheung",
			phone: "415-575-6840"
		},{
			firstname: "Niger",
			lastname: "Edwards",
			phone: "415-865-5741"
		},{
			firstname: "Mia Vanessa",
			lastname: "Oro",
			phone: "415-558-6184",
			email: "Mia.Oro@sfgov.org"
		},{
			firstname: "Josephine",
			lastname: "Racelis",
			phone: "415-558-6698"
		}]
	});
});
