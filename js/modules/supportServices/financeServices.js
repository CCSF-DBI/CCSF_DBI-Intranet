/**
 * Manages regions that hold side navigation text and images
 */
define([
    'jquery', 'marionette','app/events', 'handlebars', 'jquerycookie',
    'text!templates/modules/supportServices/financeServices.htm'
], function ($, Marionette, appEvents, Handlebars, Cookie, templateHTML) {
    return Marionette.View.extend({
		tagName: 'div',
		id: "financeServicesPage",
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
			firstname: "Gayle",
			lastname: "Revels",
			title: "(Acting) Chief Financial Officer",
			phone: "415-558-6213",
		},{
			firstname: "John",
			lastname: "Blackshear",
			phone: "415-575-6801"
		},{
			firstname: "Cynthia",
			lastname: "D'Amato",
			phone: "415-585-6067"
		},{
			firstname: "Aldeliza",
			lastname: "Herrera",
			phone: "415-575-6909"
		},{
			firstname: "Stephen",
			lastname: "Lee",
			phone: "415-558-6230"
		},{
			firstname: "Sarah",
			lastname: "Luu",
			phone: "415-558-6324"
		},{
			firstname: "Jane",
			lastname: "Sun",
			phone: "415-558-6342"
		},{
			firstname: "Jonathan",
			lastname: "Tso",
			phone: "415-558-6621"
		},{
			firstname: "Lola",
			lastname: "Young",
			phone: "415-558-6659"
		}]
	});
});
