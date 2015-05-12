/**
 * Manages regions that hold side navigation text and images
 */
define([
    'jquery', 'marionette','app/events', 'handlebars', 'jquerycookie',
    'text!templates/modules/permitServices/permitServices.htm'
], function ($, Marionette, appEvents, Handlebars, Cookie, templateHTML) {
    return Marionette.View.extend({
		tagName: 'div',
		id: "permitServicesPage",
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
			firstname: "Edward",
			lastname: "Sweeney",
			title: "Deputy Director",
			phone: "415-558-6272",
		},{
			firstname: "David",
			lastname: "Leung",
			title: "Manager",
			phone: "415-558-6033"
		},{
			firstname: "Sylvia",
			lastname: "Thai",
			title: "Executive Secretary",
			phone: "415-558-6139"
		}]
	});
});
