/**
 * Manages regions that hold side navigation text and images
 */
define([
    'jquery', 'backbone', 'marionette','app/events', 'handlebars', 'jquerycookie',
    'text!templates/modules/permitServices/planReview.htm',
	'modules/dbi/staffCollectionView'
], function ($, Backbone, Marionette, appEvents, Handlebars, Cookie, templateHTML, StaffCollection) {
    return Marionette.View.extend({
		tagName: 'div',
		id: "planReviewPage",
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
		
		managers: [{
			firstname: "Hanson",
			lastname: "Tom",
			title: "Manager",
			phone: "415-558-6157",
		},{
			firstname: "Sylvia",
			lastname: "Thai",
			title: "Group Supervisor",
			phone: "415-558-6139"
		},{
			firstname: "Irene",
			lastname: "Bartholomew",
			title: "Office Staff",
			phone: "415-558-6065"
		},{
			firstname: "Mandy",
			lastname: "Lei",
			title: "Office Staff",
			phone: "415-558-6072"
		}],
		
		staffmembers: [{
			firstname: "Joseph",
			lastname: "Chan",
			title: "",
			phone: "415-558-6071",
		},{
			firstname: "Min",
			lastname: "Chen",
			title: "",
			phone: "415-558-6655"
		},{
			firstname: "Derek",
			lastname: "Cheung",
			title: "",
			phone: "415-558-6699"
		},{
			firstname: "Jimmy",
			lastname: "Cheung",
			title: "",
			phone: "415-558-6201"
		},{
			firstname: "Jonathan",
			lastname: "Chiu",
			title: "",
			phone: "415-558-6491"
		},{
			firstname: "Robert",
			lastname: "Chun",
			title: "",
			phone: "415-558-6491"
		},{
			firstname: "Dennis",
			lastname: "Dang",
			title: "",
			phone: "415-558-6136"
		},{
			firstname: "Eric",
			lastname: "Gee",
			title: "",
			phone: "415-558-6004"
		},{
			firstname: "Spencer",
			lastname: "Gosch",
			title: "",
			phone: "415-558-6086"
		},{
			firstname: "Gary",
			lastname: "Ho",
			title: "",
			phone: "415-558-6083"
		},{
			firstname: "Anne (Qi)",
			lastname: "Hu",
			title: "",
			phone: "415-558-6144",
			email: "Qi.Hu",
			photoClass: "qi-hu"
		},{
			firstname: "Vivian",
			lastname: "Huang",
			title: "",
			phone: "415-558-6673"
		},{
			firstname: "Stephen",
			lastname: "Kwok",
			title: "",
			phone: "415-558-6254"
		},{
			firstname: "Thomas",
			lastname: "Le",
			title: "",
			phone: "415-558-6140"
		},{
			firstname: "Mabel",
			lastname: "Li",
			title: "",
			phone: "415-558-6291"
		},{
			firstname: "Emily",
			lastname: "Lin",
			title: "",
			phone: "415-558-6244"
		},{
			firstname: "Chu",
			lastname: "Liu",
			title: "",
			phone: "415-558-6118"
		},{
			firstname: "Jeffrey",
			lastname: "Ma",
			title: "",
			phone: "415-558-6150"
		},{
			firstname: "Reynaldo",
			lastname: "Ortega",
			title: "",
			phone: "415-558-6159"
		},{
			firstname: "Joseph",
			lastname: "Ospital",
			title: "",
			phone: "415-558-6255"
		},{
			firstname: "Rodolfo",
			lastname: "Pada",
			title: "",
			phone: "415-558-6456"
		},{
			firstname: "David",
			lastname: "Pang",
			title: "",
			phone: "415-558-6137"
		},{
			firstname: "Matthew",
			lastname: "Ralls",
			title: "",
			phone: "415-558-6145"
		},{
			firstname: "Giles",
			lastname: "Samarasinghe",
			title: "",
			phone: "415-558-6677"
		},{
			firstname: "Alan",
			lastname: "Smith",
			title: "",
			phone: "415-558-6143"
		},{
			firstname: "Xiang Susie",
			lastname: "Song",
			title: "",
			phone: "415-558-6542",
			email: "Xiang.Song"
		},{
			firstname: "Richard",
			lastname: "Tam",
			title: "",
			phone: "415-558-6824"
		},{
			firstname: "Simon",
			lastname: "Tam",
			title: "",
			phone: "415-558-6019"
		},{
			firstname: "Ron",
			lastname: "Tom",
			title: "",
			phone: "415-558-6013"
		},{
			firstname: "Mark",
			lastname: "Walls",
			title: "",
			phone: "415-558-6918"
		},{
			firstname: "Irene",
			lastname: "Wong",
			title: "",
			phone: "415-558-6138"
		},{
			firstname: "Willy",
			lastname: "Yau",
			title: "",
			phone: "415-558-6134"
		},{
			firstname: "Diane",
			lastname: "Yin",
			title: "",
			phone: "415-558-6011"
		},{
			firstname: "Cyril",
			lastname: "Yu",
			title: "",
			phone: "415-558-6360"
		},{
			firstname: "Howard",
			lastname: "Zee",
			title: "",
			phone: "415-558-6919"
		}]
    });
});
