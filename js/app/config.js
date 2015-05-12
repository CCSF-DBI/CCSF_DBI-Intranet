/**
 * Stores all common configuration for the application.
 * External libraries, dependency related ordering, etc.
 */
require.config({
    urlArgs: "0.0.1",
    baseUrl: "/js",
    paths: {
        //"jquery": "lib/jquery-1.11.1.min",
        "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min",
        //"jqueryui": "https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.0/jquery-ui.min",
        //"jquerymobile": "https://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.3/jquery.mobile.min",
        //"jqueryform": "lib/jquery.form.min",
        "jquerysuccinct": "lib/jquery.succinct.min",
        "jquerycookie": "lib/jquery.cookie",
        "underscore": "lib/underscore-v1.7.0.min",
        "backbone": "lib/backbone-v1.1.2.min",
		//"backbonerelational": "lib/backbone-relational-v0.8.8",
        "marionette": "lib/marionette-v2.0.3.min",
        "handlebars": "lib/handlebars-v1.3.0",
        //"modernizr": "lib/modernizr-2.6.2.min",
		"bootstrap": "//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min",
		"gldatepicker": "lib/glDatePicker.min",
        //"webfont": "https://ajax.googleapis.com/ajax/libs/webfont/1.5.3/webfont",
        "jsonlite": "lib/jsonlite",
        "async": "lib/require/plugins/require.async-v0.0.1",
        "text": "lib/require/plugins/require.text-v2.0.12",
        "i18n": "lib/require/plugins/require.i18n-v2.0.4",
        "templates": "../templates",
        //"lib": "lib",
        //"modules": "modules",
        //"utils": "app/utils",
        //"objects": "objects"
        //"models": "/objects/models",
        //"collections": "objects/collections",
        //"views": "objects/views"
    },
    'shim': {
/*         'jqueryui': {
            'deps': ['jquery']
        }, */
/*         'jquerymobile': {
            'deps': ['jquery']
        }, */
/*         'jqueryform': {
            'deps': ['jquery']
        }, */
        'jquerysuccint': {
            'deps': ['jquery']
        },
        'jquerycookie': {
            'deps': ['jquery']
        }, 
 		'bootstrap': {
			'deps': ['jquery']	
		},
        'underscore': {
            'exports': '_'
        },
        'backbone': {
            'deps': ['jquery', 'underscore'],
            'exports': 'Backbone'
        },
		'handlebars': {
            'exports': 'Handlebars'
        } 
    }
});