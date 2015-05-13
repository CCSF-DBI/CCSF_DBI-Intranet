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
		
		managers: [
			{
				firstname: "Thomas",
				lastname: "Le",
				title: "Supervisor - Plan Review Team 1",
				phone: "415-558-6140"
			},{
				firstname: "Rodolfo",
				lastname: "Pada",
				title: "Supervisor - Plan Review Team 2",
				phone: "415-558-6456"
			},{
				firstname: "Ron",
				lastname: "Tom",
				title: "Supervisor - Plan Review Team 3",
				phone: "415-558-6013"
			},{
				firstname: "Vivian",
				lastname: "Huang",
				title: "Supervisor - Plan Review Team 4",
				phone: "415-558-6673"
			},{
				firstname: "Vacant",
				lastname: "",
				title: "Supervisor - Plan Review Team 5",
				phone: "",
				email: " "
			},{
				firstname: "Robert",
				lastname: "Chun",
				title: "Supervisor - Plan Review Team 6",
				phone: "415-558-6491"
			},{
				firstname: "Gary",
				lastname: "Ho",
				title: "Supervisor - Plan Review Team 7",
				phone: "415-558-6083"
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
			}
		],
		
		
		staffmembers: [
			{
				firstname: "Joseph",
				lastname: "Chan",
				phone: "415-558-6071",
			},{
				firstname: "Min",
				lastname: "Chen",
				phone: "415-558-6655"
			},{
				firstname: "Derek",
				lastname: "Cheung",
				phone: "415-558-6699"
			},{
				firstname: "Jimmy",
				lastname: "Cheung",
				phone: "415-558-6201"
			},{
				firstname: "Jonathan",
				lastname: "Chiu",
				phone: "415-558-6491"
			},{
				firstname: "Dennis",
				lastname: "Dang",
				phone: "415-558-6136"
			},{
				firstname: "Eric",
				lastname: "Gee",
				phone: "415-558-6004"
			},{
				firstname: "Anne (Qi)",
				lastname: "Hu",
				phone: "415-558-6144",
				email: "Qi.Hu",
				photoClass: "qi-hu"
			},{
				firstname: "Stephen",
				lastname: "Kwok",
				phone: "415-558-6254"
			},{
				firstname: "Jeff",
				lastname: "Lai",
				phone: "415-558-6219"
			},{
				firstname: "Nelson",
				lastname: "Lau",
				phone: "415-558-6125"
			},{
				firstname: "Mabel",
				lastname: "Li",
				phone: "415-558-6291"
			},{
				firstname: "Emily",
				lastname: "Lin",
				phone: "415-558-6244"
			},{
				firstname: "Chu",
				lastname: "Liu",
				phone: "415-558-6118"
			},{
				firstname: "Betty",
				lastname: "Lee",
				phone: "415-558-6117"
			},{
				firstname: "Jeffrey",
				lastname: "Ma",
				phone: "415-558-6150"
			},{
				firstname: "Joseph",
				lastname: "Ospital",
				phone: "415-558-6255"
			},{
				firstname: "David",
				lastname: "Pang",
				phone: "415-558-6137"
			},{
				firstname: "Matthew",
				lastname: "Ralls",
				phone: "415-558-6145"
			},{
				firstname: "John",
				lastname: "Romaidis",
				phone: "415-558-6042"
			},{
				firstname: "Xiang Susie",
				lastname: "Song",
				phone: "415-558-6542",
				email: "Xiang.Song"
			},{
				firstname: "Richard",
				lastname: "Tam",
				phone: "415-558-6824"
			},{
				firstname: "Hanson",
				lastname: "Tom",
				phone: "415-558-6157",
			},{
				firstname: "Mark",
				lastname: "Walls",
				phone: "415-558-6918"
			},{
				firstname: "Irene",
				lastname: "Wong",
				phone: "415-558-6138"
			},{
				firstname: "Willy",
				lastname: "Yau",
				phone: "415-558-6134"
			},{
				firstname: "Diane",
				lastname: "Yin",
				phone: "415-558-6011"
			},{
				firstname: "Cyril",
				lastname: "Yu",
				phone: "415-558-6360"
			},{
				firstname: "Michelle",
				lastname: "Yu",
				phone: "415-558-6059"
			},{
				firstname: "Howard",
				lastname: "Zee",
				phone: "415-558-6919"
			}
		]
    });
});
