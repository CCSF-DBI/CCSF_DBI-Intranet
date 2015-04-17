/**
 * Manages regions that hold home view text and images
 */
define([
    'jquery', 'marionette', 'handlebars', 'app/events',
    'text!templates/modules/supportServices/supportServicesLayout.htm',
	'modules/supportServices/adminServices',
	'modules/supportServices/financeServices',
	'modules/supportServices/personnelPayroll',
	'modules/supportServices/recordsManagement'
],
function ($, Marionette, Handlebars, appEvents, templateHTML, AdminServicesPage, FinanceServicesPage, PersonnelPayrollPage, RecordsManagementPage) {
    return Marionette.View.extend({
        template: Handlebars.compile(templateHTML),
		tagName: "div",
		id: "supportServicesLayout",
        regions: {
            // TODO: add sub view regions
			layoutRegion: '#supportServicesLayoutRegion'
        },
        initialize: function () {
            var layout = this;
            layout.module = layout.options.module;
            if (!layout.module) {
                console.error("supportServicesLayout requires a module instance.");
            }
			//appEvents.on("app:bicMod:started", layout.render);
        },
		render: function () {
			var view = this;
			var html = view.template();
			view.$el.html(html);
			return view;
		},
       onRender: function () {
            var layout = this;
            layout.delegateEvents();
        },
        events: {
            // TODO: add events here
        },
		/**
		 * Custom Methods
		 */
		showPage: function (html){
			var layout =  this;
			$("#supportServicesLayoutRegion", layout.$el).fadeOut(250, function() {
				console.warn('inside fade out');
				$("#supportServicesLayoutRegion", layout.$el).html(html).fadeIn(250);
			});
		},
		showAdminServicesPage: function () {
			console.info("showAdminServicesPage");
			var layout =  this;
			var landingPage = new AdminServicesPage({});
			layout.showPage(landingPage.$el);
		},
		
		showFinanceServicesPage: function () {
			console.info("showFinanceServicesPage");
			var layout =  this;
			var landingPage = new FinanceServicesPage({});
			layout.showPage(landingPage.$el);
		},
		
		showPersonnelPayrollPage: function () {
			console.info("showPersonnelPayrollPage");
			var layout =  this;
			var landingPage = new PersonnelPayrollPage({});
			layout.showPage(landingPage.$el);
		},
		
		showRecordsManagementPage: function () {
			console.info("showRecordsManagementPage");
			var layout =  this;
			var landingPage = new RecordsManagementPage({});
			layout.showPage(landingPage.$el);
		}
    });
});