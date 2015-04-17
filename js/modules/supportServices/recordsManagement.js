/**
 * Manages regions that hold side navigation text and images
 */
define([
    'jquery', 'marionette','app/events', 'handlebars', 'jquerycookie',
    'text!templates/modules/supportServices/recordsManagement.htm'
], function ($, Marionette, appEvents, Handlebars, Cookie, templateHTML) {
    return Marionette.View.extend({
		tagName: 'div',
		id: "recordsManagementPage",
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
			firstname: "Patty",
			lastname: "Herrera",
			title: "Manager",
			phone: "415-558-6130",
		},{
			firstname: "Paul",
			lastname: "Bautista",
			phone: "415-558-6818"
		},{
			firstname: "Alexander",
			lastname: "Catigan",
			phone: "415-558-6340"
		},{
			firstname: "Saphonia",
			lastname: "Collins",
			phone: "415-558-6689"
		},{
			firstname: "Dwayne",
			lastname: "Farrell",
			phone: "415-558-6488"
		},{
			firstname: "Rochelle",
			lastname: "Garrett",
			phone: "415-558-6278"
		},{
			firstname: "Benedicto",
			lastname: "Guinto",
			phone: "415-558-6113"
		},{
			firstname: "Nancy",
			lastname: "Gutierrez",
			phone: "415-558-6017"
		},{
			firstname: "Heidi",
			lastname: "Lee",
			phone: "415-558-6484"
		},{
			firstname: "Noreen",
			lastname: "Murphy",
			phone: "415-558-6536"
		},{
			firstname: "Garland",
			lastname: "Simpson",
			phone: "415-558-6503"
		},{
			firstname: "Tuti",
			lastname: "Suardana",
			phone: "415-558-6281"
		},{
			firstname: "Carmela",
			lastname: "Villasica",
			phone: "415-558-6217"
		},{
			firstname: "Christina",
			lastname: "Wang",
			phone: "415-558-6338"
		},{
			firstname: "Darren",
			lastname: "Wu",
			phone: "415-558-6015"
		},{
			firstname: "May",
			lastname: "Yu",
			phone: "415-558-6385"
		}]
	});
});
