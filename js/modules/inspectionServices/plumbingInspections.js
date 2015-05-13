/**
 * Manages regions that hold side navigation text and images
 */
define([
    'jquery', 'marionette','app/events', 'handlebars', 'jquerycookie',
    'text!templates/modules/inspectionServices/plumbingInspections.htm'
], function ($, Marionette, appEvents, Handlebars, Cookie, templateHTML) {
    return Marionette.View.extend({
		tagName: 'div',
		id: "plumbingInspectionsPage",
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
			firstname: "Steven",
			lastname: "Panelli",
			title: "Chief Plumbing Inspector",
			phone: "415-558-6058"
		},{
			firstname: "Alex",
			lastname: "Kwan",
			title: "Senior Plumbing Inspector",
			phone: "415-558-6052"
		},{
			firstname: "Robert",
			lastname: "Farrow",
			title: "Senior Plumbing Inspector",
			phone: "415-558-6043"
		},{
			firstname: "Michael",
			lastname: "Mitchell",
			title: "Senior Plumbing Inspector",
			phone: "415-558-6044"
		}],
		
		staffmembers: [{
			firstname: "Anthony",
			lastname: "Amable",
			phone: "415-575-6807"
		},{
			firstname: "Jason",
			lastname: "Buckley",
			phone: "415-558-6050"
		},{
			firstname: "Robert",
			lastname: "Christman",
			phone: "415-558-6055",
			email: "Bob.Chri"
		},{
			firstname: "Roland",
			lastname: "Davantes",
			phone: "415-558-6049"
		},{
			firstname: "David",
			lastname: "Gotelli",
			phone: "415-558-6283"
		},{
			firstname: "Greg",
			lastname: "Hill",
			phone: "415-558-6051"
		},{
			firstname: "Michael",
			lastname: "Jurado",
			phone: "415-558-6029"
		},{
			firstname: "David",
			lastname: "Ledda",
			phone: "415-558-6047"
		},{
			firstname: "James",
			lastname: "O'Sullivan",
			phone: "415-558-6441"
		},{
			firstname: "Dan",
			lastname: "Ortega",
			phone: "415-558-6463",
			email: "Daniel.Ortega"
		},{
			firstname: "Andrew",
			lastname: "Palmigiano",
			phone: "415-575-6922"
		},{
			firstname: "Daniel",
			lastname: "Shea III",
			phone: "415-558-6053",
			email: "Daniel.SheaIII"
		},{
			firstname: "Richard",
			lastname: "Strabel",
			phone: "415-558-6046"
		},{
			firstname: "John",
			lastname: "Watson",
			phone: "415-558-6573"
		},{
			firstname: "Wayne",
			lastname: "Wong",
			phone: "415-558-6092"
		},{
			firstname: "Kenneth",
			lastname: "Young",
			phone: "415-558-6057"
		}]
	});
});
