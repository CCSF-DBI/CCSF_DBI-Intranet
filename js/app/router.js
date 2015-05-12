/**
 * Defines app routes
 */
define(['backbone', 'marionette', 'app/controller'],
function (Backbone, Marionette, appController) {
    var AppRouter = Marionette.AppRouter.extend({
        appRoutes: {
			/* Home View Module */
			"": "homeView",
			"/": "homeView",
			"director": "directorsOffice",
			"bic": "bic",
			/* Permit Services Module */
			"permitservices": "permitServices",
			"cpb": "centralPermitBureau",
			"helpdesk": "helpDesk",
			"initialplanreview": "initialPlanReview",
			"mechplanreview": "mechanicalPlanReview",
			"planreview": "planReview",
			"technicalservices": "technicalServices",
			"mis": "managementInformationServices",
			/* Inspection Services Module */
			"inspectionservices": "inspectionServices",
			"bid": "buildingInspections",
			"eid": "electricalInspections",
			"pid": "plumbingInspections",
			"ces": "codeEnforcement",
			"his": "housingInspections",
			/* Support Services Module */
			"adminservices": "adminServices",
			"finance": "financeServices",
			"pp": "personnelPayroll",
			"rmd": "recordsManagement"
        }
    });
    return new AppRouter({controller: appController});
});