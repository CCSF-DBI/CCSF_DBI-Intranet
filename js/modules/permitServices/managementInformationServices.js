/**
 * Manages regions that hold side navigation text and images
 */
define([
    'jquery', 'marionette','app/events', 'handlebars', 'jquerycookie',
    'text!templates/modules/permitServices/managementInformationServices.htm'
], function ($, Marionette, appEvents, Handlebars, Cookie, templateHTML) {
    return Marionette.View.extend({
		tagName: 'div',
		id: "managementInformationServicesPage",
		className: 'landing-page',
        initialize: function (options, moduleName, app) {
            var view = this;
            view.App = app;
            view.template = Handlebars.compile(templateHTML);
			view.render();
			view.getStaffMembers(view.staffmembers);
			view.addHorizontalRule();
			view.getStaffMembers(view.dtstaff);
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
		getStaffMembers: function (staffmembers) {
			console.info("getStaffMembers");
			var view = this;
			var html = window.App.renderStaffMembers(staffmembers);
			//console.warn(cview);
			$("#staffpanel", view.$el).append(html);
		},
		addHorizontalRule: function () {
			var view = this;
			$("#staffpanel", view.$el).append("<hr />");
		},
		dtstaff: [{
			firstname: "Daniel Joel",
			lastname: "Cusi",
			title: "Principal IS Engineer",
			phone: "415-575-6846"
		},{
			firstname: "Kevin",
			lastname: "Ip",
			title: "Senior IS Engineer",
			phone: "415-575-6838"
		},{
			firstname: "Alan",
			lastname: "Lee",
			title: "IS Engineer",
			phone: "415-575-6838"
		},{
			firstname: "Harold",
			lastname: "Steger",
			title: "IS Principal Engineer",
			phone: "415-558-6166"
		},{
			firstname: "Andy",
			lastname: "Yu",
			title: "Senior IS Administrator",
			phone: "415-558-6229"
		}],
		
		staffmembers: [{
			firstname: "Wilson",
			lastname: "Lo",
			title: "(Acting) Manager",
			phone: "415-558-6674",
			mobile: "415-930-3666"
		},{
			firstname: "Hemalatha",
			lastname: "Nekkanti",
			title: "Manager",
			phone: "415-558-6215"
		},{
			firstname: "Catherine",
			lastname: "Cruz",
			phone: "415-575-6902"
		},{
			firstname: "Kevin",
			lastname: "Edwards",
			phone: "415-558-6412"
		},{
			firstname: "Pamela",
			lastname: "Fong",
			phone: "415-558-6685"
		},{
			firstname: "Kelvin",
			lastname: "Nguyen",
			phone: "415-575-6876"
		},{
			firstname: "Cirila",
			lastname: "Santiago",
			phone: "415-558-6305"
		},{
			firstname: "Mike",
			lastname: "Taylor",
			phone: "415-558-6146"
		},{
			firstname: "Sim",
			lastname: "Yeung",
			title: "Sr. Clerk Typist",
			phone: "415-558-6404"
		}]
	});
});
