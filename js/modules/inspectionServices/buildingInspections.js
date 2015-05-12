/**
 * Manages regions that hold side navigation text and images
 */
define([
    'jquery', 'marionette','app/events', 'handlebars', 'jquerycookie',
    'text!templates/modules/inspectionServices/buildingInspections.htm'
], function ($, Marionette, appEvents, Handlebars, Cookie, templateHTML) {
    return Marionette.View.extend({
		tagName: 'div',
		id: "buildingInspectionsPage",
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
			firstname: "Patrick",
			lastname: "O'Riordan",
			title: "Chief Building Inspector",
			phone: "415-558-6105",
		},{
			firstname: "Raymond",
			lastname: "Berrios",
			phone: "415-558-6124"
		},{
			firstname: "Sean",
			lastname: "Birmingham",
			phone: "415-575-6935"
		},{
			firstname: "Dennis",
			lastname: "Carlin Jr.",
			phone: "415-558-6115",
			photoClass: "dennis-carlin"
		},{
			firstname: "Chester",
			lastname: "Chiu",
			phone: "415-558-6252"
		},{
			firstname: "Yuang-Tam",
			lastname: "Chiu",
			phone: "415-558-6111"
		},{
			firstname: "Fergal",
			lastname: "Clancy",
			phone: "415-575-6920"
		},{
			firstname: "Colette",
			lastname: "Cummins",
			phone: "415-575-6934"
		},{
			firstname: "Bernard",
			lastname: "Curran",
			phone: "415-558-6094"
		},{
			firstname: "Nancy",
			lastname: "Curvino",
			phone: "415-558-6095"
		},{
			firstname: "Edward",
			lastname: "Donnelly",
			phone: "415-558-6010"
		},{
			firstname: "Joseph",
			lastname: "Duffy",
			phone: "415-558-6656"
		},{
			firstname: "Thomas",
			lastname: "Fessler",
			phone: "415-575-6923"
		},{
			firstname: "Edward",
			lastname: "Greene",
			phone: "415-558-6123"
		},{
			firstname: "Matthew",
			lastname: "Greene",
			phone: "415-558-6534"
		},{
			firstname: "Steve",
			lastname: "Hajnal",
			phone: "415-558-6102"
		},{
			firstname: "Darlene",
			lastname: "Hartley",
			phone: "415-558-6119"
		},{
			firstname: "Mauricio",
			lastname: "Hernandez",
			phone: "415-575-6831"
		},{
			firstname: "Brett",
			lastname: "Howard",
			phone: "415-558-6921"
		},{
			firstname: "Thomas",
			lastname: "Keane",
			phone: "415-558-6349"
		},{
			firstname: "Nelson",
			lastname: "Lau",
			phone: "415-558-6125"
		},{
			firstname: "Kevin",
			lastname: "McHugh",
			phone: "415-575-6830"
		},{
			firstname: "Robert",
			lastname: "Power",
			phone: "415-558-6008"
		},{
			firstname: "Michael",
			lastname: "Quinlan",
			phone: "415-558-6197"
		},{
			firstname: "Leopoldo",
			lastname: "Rafael",
			phone: "415-558-6005"
		},{
			firstname: "Chris",
			lastname: "Schroeder",
			phone: "415-558-6103"
		},{
			firstname: "Donald",
			lastname: "Simas",
			phone: "415-558-6210"
		},{
			firstname: "John",
			lastname: "Yam",
			phone: "415-558-6624"
		},{
			firstname: "Joseph",
			lastname: "Yu",
			phone: "415-558-6495"
		}]
	});
});
