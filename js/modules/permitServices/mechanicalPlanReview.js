/**
 * Manages regions that hold side navigation text and images
 */
define([
    'jquery', 'marionette','app/events', 'handlebars', 'jquerycookie',
    'text!templates/modules/permitServices/mechanicalPlanReview.htm'
], function ($, Marionette, appEvents, Handlebars, Cookie, templateHTML) {
    return Marionette.View.extend({
		tagName: 'div',
		id: "mechanicalPlanReviewPage",
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
			firstname: "James",
			lastname: "Zhan",
			title: "Supervisor",
			phone: "415-558-6152"
		},{
			firstname: "Rosita",
			lastname: "Cheung",
			phone: "415-558-6086",
			email: "Rosita.H.Cheung@sfgov.org"
		},{
			firstname: "Jeff",
			lastname: "Lai",
			phone: "415-558-6219"
		},{
			firstname: "Danny",
			lastname: "Lau",
			phone: "415-558-6647"
		},{
			firstname: "Timothy",
			lastname: "Nagata",
			phone: "415-558-6062"
		},{
			firstname: "Reynaldo",
			lastname: "Ortega",
			phone: "415-558-6159"
		},{
			firstname: "Mohsin",
			lastname: "Shaikh",
			phone: "415-558-6447"
		}]
	});
});
