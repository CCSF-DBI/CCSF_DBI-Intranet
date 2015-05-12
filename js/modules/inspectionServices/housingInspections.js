/**
 * Manages regions that hold side navigation text and images
 */
define([
    'jquery', 'marionette','app/events', 'handlebars', 'jquerycookie',
    'text!templates/modules/inspectionServices/housingInspections.htm'
], function ($, Marionette, appEvents, Handlebars, Cookie, templateHTML) {
    return Marionette.View.extend({
		tagName: 'div',
		id: "housingInspectionsPage",
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
			firstname: "Rosemary",
			lastname: "Bosque",
			title: "Chief Housing Inspector",
			phone: "415-558-6202"
		},{
			firstname: "Luis",
			lastname: "Barahona",
			phone: "415-558-6204"
		},{
			firstname: "Duke",
			lastname: "Bragg",
			phone: "415-558-6191"
		},{
			firstname: "Mackenzie",
			lastname: "Calloway",
			phone: "415-558-6532",
		},{
			firstname: "Johanna",
			lastname: "Coble",
			phone: "415-558-6190"
		},{
			firstname: "Alan",
			lastname: "Davison",
			phone: "415-558-6479"
		},{
			firstname: "Harry",
			lastname: "DerVartanian",
			phone: "415-575-6990"
		},{
			firstname: "Ronald",
			lastname: "Dicks",
			phone: "415-558-6632"
		},{
			firstname: "James",
			lastname: "Galvis",
			phone: "415-558-6513"
		},{
			firstname: "Christopher",
			lastname: "Grady",
			phone: "415-558-6533"
		},{
			firstname: "David",
			lastname: "Herring",
			phone: "415-558-6212"
		},{
			firstname: "Andrew",
			lastname: "Karcs",
			phone: "415-558-6465"
		},{
			firstname: "Marisa",
			lastname: "Lee Chan",
			phone: "415-558-6116",
			email: "Marisa.Chan"
		},{
			firstname: "Albert",
			lastname: "Leong",
			phone: "415-575-6991"
		},{
			firstname: "Anthony",
			lastname: "Lepe",
			phone: "415-575-6912"
		},{
			firstname: "Barbara",
			lastname: "Lopez",
			phone: "415-558-6317"
		},{
			firstname: "Jose",
			lastname: "Lopez",
			phone: "415-558-6470"
		},{
			firstname: "Matthew",
			lastname: "Luton",
			phone: "415-558-6321"
		},{
			firstname: "Danny",
			lastname: "Mak",
			phone: "415-558-6209"
		},{
			firstname: "Hatem",
			lastname: "Mansur",
			phone: "415-558-6514"
		},{
			firstname: "Liam",
			lastname: "McCarthy",
			phone: "415-558-6206"
		},{
			firstname: "Patrick",
			lastname: "McKenzie",
			phone: "415-558-6195"
		},{
			firstname: "Patrick",
			lastname: "McManus",
			phone: "415-575-6913"
		},{
			firstname: "Stephen",
			lastname: "Mungovan",
			phone: "415-558-6496"
		},{
			firstname: "Isabel",
			lastname: "Olivares",
			phone: "415-558-6490"
		},{
			firstname: "Bernedette",
			lastname: "Perez",
			phone: "415-558-6165"
		},{
			firstname: "Nicole",
			lastname: "Rossini",
			phone: "415-558-6516"
		},{
			firstname: "Sergio",
			lastname: "Salvetti",
			phone: "415-558-6246"
		},{
			firstname: "James",
			lastname: "Sanbonmatsu",
			phone: "415-558-6186"
		},{
			firstname: "Daniel",
			lastname: "Shiu",
			phone: "415-558-6199"
		},{
			firstname: "Marisa",
			lastname: "Lee Chan",
			phone: "415-558-6116"
		}]
	});
});
