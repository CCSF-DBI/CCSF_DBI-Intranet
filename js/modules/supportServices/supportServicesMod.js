/**
 * Support Services Module:
 * =======================
 * This module contains all the logic required
 * for Support Services pages.
 */
define([
    'jquery', 'marionette', 'handlebars',
    'app/events',
    'modules/supportServices/supportServicesLayout'
],
function ($, Marionette, Handlebars, appEvents, supportServicesLayout) {
    return Marionette.Module.extend({
        initialize: function (options, moduleName, app) {
            var mod = this;
            mod.App = app;
            mod.startWithParent = false;
			mod.moduleStarted = false;
            mod.layout = new supportServicesLayout({module: mod});
        },
        onStart: function (options) {
            console.info("supportServicesMod: starting module...");
            var mod = this;
			//mod.layout.layoutRegion.show(new LandingPage({}));
			mod.moduleStarted = true;
            appEvents.trigger("app:supportServicesMod:started");
            console.info("supportServicesMod: started.");
        },
        onStop: function (options) {
            console.info("supportServicesMod: stopping module...");
            var mod = this;
			mod.moduleStarted = false;
            appEvents.trigger("app:supportServicesMod:stopped");
            console.info("supportServicesMod: stopped.");
        }
    });
});