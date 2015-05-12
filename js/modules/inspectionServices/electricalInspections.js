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
			firstname: "Ron",
			lastname: "Allen",
			title: "Chief Electrical Inspector",
			phone: "415-558-6028"
		},{
			firstname: "Osha",
			lastname: "Ashworth",
			phone: "415-558-6039"
		},{
			firstname: "Michael",
			lastname: "Bain",
			phone: "415-558-6020"
		},{
			firstname: "Kenneth",
			lastname: "Burke",
			phone: "415-558-6035",
		},{
			firstname: "Gary",
			lastname: "Clifton",
			phone: "415-558-6617"
		},{
			firstname: "Michael",
			lastname: "Doherty",
			phone: "415-558-6669"
		},{
			firstname: "Daniel",
			lastname: "Fross",
			phone: "415-575-6026"
		},{
			firstname: "Henry",
			lastname: "Hinds",
			phone: "415-558-6531"
		},{
			firstname: "Dennis",
			lastname: "Holl",
			phone: "415-558-6023"
		},{
			firstname: "Bryan",
			lastname: "Keil",
			phone: "415-558-6036"
		},{
			firstname: "Sergey",
			lastname: "Kondrashov",
			phone: "415-558-6038"
		},{
			firstname: "Chantel",
			lastname: "Lewis",
			phone: "415-558-6037"
		},{
			firstname: "Roger",
			lastname: "Mascio",
			phone: "415-575-6445"
		},{
			firstname: "Paul",
			lastname: "Ortiz",
			phone: "415-558-6460"
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
			firstname: "Vernon",
			lastname: "Takasuka",
			phone: "415-575-6121"
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
