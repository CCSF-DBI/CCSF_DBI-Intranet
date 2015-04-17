/**
 * Inspection Services Module:
 * =======================
 * This module contains all the logic required
 * for inspection services.
 */
define([
    'jquery', 'marionette',
    'app/events',
    'modules/inspectionServices/inspectionServicesLayout'
],
function ($, Marionette, appEvents, InspectionServicesLayout) {
    return Marionette.Module.extend({
        initialize: function (options, moduleName, app) {
            var mod = this;
            mod.App = app;
            mod.startWithParent = false;
			mod.moduleStarted = false;
            mod.layout = new InspectionServicesLayout({module: mod});
        },
        onStart: function (options) {
            console.info("inspectionServicesMod: starting module...");
            var mod = this;
			mod.moduleStarted = true;
            appEvents.trigger("app:inspectionServicesMod:started");
            console.info("inspectionServicesMod: started.");
        },
        onStop: function (options) {
            console.info("inspectionServicesMod: stopping module...");
            var mod = this;
            // stop any sub modules here
			mod.moduleStarted = false;
            appEvents.trigger("app:inspectionServicesMod:stopped");
            console.info("inspectionServicesMod: stopped.");
        }
    });
});