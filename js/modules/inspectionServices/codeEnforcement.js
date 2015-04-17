/**
 * Manages regions that hold side navigation text and images
 */
define([
    'jquery', 'marionette','app/events', 'handlebars', 'jquerycookie',
    'text!templates/modules/inspectionServices/codeEnforcement.htm'
], function ($, Marionette, appEvents, Handlebars, Cookie, templateHTML) {
    return Marionette.View.extend({
		tagName: 'div',
		id: "codeEnforcementPage",
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
			firstname: "John",
			lastname: "Hinchion",
			title: "Senior Building Inspector",
			phone: "415-558-6012"
		},{
			firstname: "Catherine",
			lastname: "Byrd",
			title: "Principal Clerk",
			phone: "415-558-6634"
		},{
			firstname: "Serena",
			lastname: "Fung",
			phone: "415-558-6196",
		},{
			firstname: "Michael",
			lastname: "Gunnell",
			phone: "415-558-6007"
		},{
			firstname: "Norman",
			lastname: "Gutierrez",
			phone: "415-558-6171"
		},{
			firstname: "Danielle",
			lastname: "Hendricks",
			phone: "415-558-6352"
		},{
			firstname: "Alan",
			lastname: "Lei",
			phone: "415-575-6834",
			email: "YinSheng.Lei"
		},{
			firstname: "James",
			lastname: "Li",
			phone: "415-558-6521"
		},{
			firstname: "Keith",
			lastname: "Mather",
			phone: "415-558-6449"
		},{
			firstname: "Gloria",
			lastname: "San Buenaventura",
			phone: "415-558-6519",
			email: "Gloria.SanBuenaventura"
		},{
			firstname: "Teresita",
			lastname: "Sulit",
			phone: "415-558-6267"
		},{
			firstname: "Thomas",
			lastname: "Theriault",
			phone: "415-558-6116"
		}]
	});
});
