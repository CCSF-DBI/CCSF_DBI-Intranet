/**
 * Permit Services Module:
 * =======================
 * This module contains all the logic required
 * for permit services.
 */
define([
    'jquery', 'marionette',
    'app/events',
    'modules/permitServices/permitServicesLayout'
],
function ($, Marionette, appEvents, PermitServicesLayout) {
    return Marionette.Module.extend({
        initialize: function (options, moduleName, app) {
            var mod = this;
            mod.App = app;
            mod.startWithParent = false;
			mod.moduleStarted = false;
            mod.layout = new PermitServicesLayout({module: mod});
        },
        onStart: function (options) {
            console.info("permitServicesMod: starting module...");
            var mod = this;
			mod.moduleStarted = true;
            appEvents.trigger("app:permitServicesMod:started");
            console.info("permitServicesMod: started.");
        },
        onStop: function (options) {
            console.info("permitServicesMod: stopping module...");
            var mod = this;
            // stop any sub modules here
			mod.moduleStarted = false;
            appEvents.trigger("app:permitServicesMod:stopped");
            console.info("permitServicesMod: stopped.");
        }
    });
});