/**
 * Manages regions that hold side navigation text and images
 */
define([
    'jquery', 'marionette','app/events', 'handlebars', 'jquerycookie',
    'text!templates/modules/permitServices/centralPermitBureau.htm'
], function ($, Marionette, appEvents, Handlebars, Cookie, templateHTML) {
    return Marionette.View.extend({
		tagName: 'div',
		id: "centralPermitBureauPage",
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
			console.warn(html);
			$("#staffpanel", view.$el).append(html);
		},
		
		staffmembers: [{
			firstname: "Wai-Fong",
			lastname: "Cheung",
			title: "Supervisor",
			phone: "415-558-6149",
		},{
			firstname: "Amaris",
			lastname: "Chan",
			phone: "415-575-6906"
		},{
			firstname: "Anita",
			lastname: "Lee",
			phone: "415-558-6073"
		},{
			firstname: "Ana",
			lastname: "Mayorga",
			phone: "415-558-6208"
		},{
			firstname: "Grace",
			lastname: "Secondez",
			phone: "415-558-6494"
		},{
			firstname: "Kathy",
			lastname: "Shek",
			phone: "415-558-6567"
		},{
			firstname: "Anne",
			lastname: "Yu",
			phone: "415-558-6644"
		}]
	});
});
