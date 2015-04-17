/**
 * Manages regions that hold side navigation text and images
 */
define([
    'jquery', 'marionette','app/events', 'handlebars', 'jquerycookie',
    'text!templates/modules/permitServices/initialPlanReview.htm'
], function ($, Marionette, appEvents, Handlebars, Cookie, templateHTML) {
    return Marionette.View.extend({
		tagName: 'div',
		id: "initialPlanReviewPage",
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
			firstname: "Susan",
			lastname: "Bufka",
			title: "(Acting) Manager",
			phone: "415-865-5714"
		},{
			firstname: "Tara",
			lastname: "Bazile",
			phone: "415-865-5709"
		},{
			firstname: "Jance",
			lastname: "Chung",
			phone: "415-865-5710"
		},{
			firstname: "Fidel",
			lastname: "Del Rosario",
			phone: "415-865-5703",
			email: "Fidel.DelRosario"
		},{
			firstname: "Delia",
			lastname: "Galiza",
			phone: "415-865-5705"
		},{
			firstname: "Emilie",
			lastname: "Green",
			phone: "415-865-5707"
		},{
			firstname: "Evelyn",
			lastname: "Karcs",
			phone: "415-558-6530"
		},{
			firstname: "Yolanda",
			lastname: "Laurente",
			phone: "415-865-5712"
		},{
			firstname: "Mira",
			lastname: "Lee",
			phone: "415-558-6003",
		},{
			firstname: "Marianne",
			lastname: "Pangelinan",
			phone: "415-865-5701"
		},{
			firstname: "May",
			lastname: "Pasion",
			phone: "415-865-5743"
		},{
			firstname: "Hareggewain",
			lastname: "Shawl",
			phone: "415-865-5711"
		},{
			firstname: "Christopher",
			lastname: "Victorio",
			phone: "415-865-5702"
		},{
			firstname: "Janet",
			lastname: "Yip",
			phone: "415-865-5708"
		},{
			firstname: "Ren Yu",
			lastname: "Zhang",
			phone: "415-865-5704",
			email: "Ren.Y.Zhang"
		}]
	});
});
