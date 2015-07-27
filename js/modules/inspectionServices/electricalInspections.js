/**
 * Manages regions that hold side navigation text and images
 */
define([
    'jquery', 'marionette','app/events', 'handlebars', 'jquerycookie',
    'text!templates/modules/inspectionServices/electricalInspections.htm'
], function ($, Marionette, appEvents, Handlebars, Cookie, templateHTML) {
    return Marionette.View.extend({
		tagName: 'div',
		id: "electricalInspectionsPage",
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
			firstname: "Ron",
			lastname: "Allen",
			title: "Chief Electrical Inspector",
			phone: "415-558-6028"
		},{
			firstname: "Kenneth",
			lastname: "Burke",
			title: "Senior Electrical Inspector",
			phone: "415-558-6035",
		},{
			firstname: "Bryan",
			lastname: "Keil",
			title: "Senior Electrical Inspector",
			phone: "415-558-6036"
		},{
			firstname: "Paul",
			lastname: "Ortiz",
			title: "Senior Electrical Inspector",
			phone: "415-558-6460"
		}],
		
		staffmembers: [{
			firstname: "Osha",
			lastname: "Ashworth",
			phone: "415-558-6039"
		},{
			firstname: "Michael",
			lastname: "Bain",
			phone: "415-558-6020"
		},{
			firstname: "Gary",
			lastname: "Clifton",
			phone: "415-558-6617"
		},{
			firstname: "Michael",
			lastname: "Doherty",
			phone: "415-558-6669"
		},{
			firstname: "Ross",
			lastname: "Eppler",
			phone: "415-558-6040"
		},{
			firstname: "Sergey",
			lastname: "Kondrashov",
			phone: "415-558-6038"
		},{
			firstname: "Albert",
			lastname: "Leong",
			phone: "415-558-6021"
		},{
			firstname: "Chantel",
			lastname: "Lewis",
			phone: "415-558-6037"
		},{
			firstname: "Edward",
			lastname: "Masck",
			phone: "415-558-6427"
		},{
			firstname: "Cheryl",
			lastname: "Rose",
			phone: "415-558-6022"
		},{
			firstname: "Nicholas",
			lastname: "Russell",
			phone: "415-558-6296"
		},{
			firstname: "Matthew",
			lastname: "Schlecht",
			phone: "415-558-6483"
		},{
			firstname: "Robert",
			lastname: "Vankoll",
			phone: "415-558-6034"
		},{
			firstname: "Collin",
			lastname: "Wing",
			phone: "415-558-6024"
		},{
			firstname: "Benjamin",
			lastname: "Yee",
			phone: "415-558-6032"
		}]
	});
});
