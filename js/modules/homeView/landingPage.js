/**
 * Manages regions that hold side navigation text and images
 */
define([
    'jquery', 'marionette','app/events', 'handlebars', 'jquerycookie', 'gldatepicker', 'slick',
    'text!templates/modules/homeView/landingPage.htm'
], function ($, Marionette, appEvents, Handlebars, Cookie, DatePicker, Slick, templateHTML) {
    return Marionette.View.extend({
		tagName: 'div',
		id: "homeViewLandingPage",
		className: 'landing-page',
        initialize: function (options, moduleName, app) {
            var view = this;
            view.App = app;
            view.template = Handlebars.compile(templateHTML);
			view.render();
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
    });
});
