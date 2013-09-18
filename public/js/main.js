;(function () {
    require.config({
        //urlArgs : "bust=" + Marketplace.getBuildNumber(),   
        paths: {
        	"jquery"				: "../js/vendor/jquery-1.9.1.min",
            "backbone"              : "../js/vendor/backbone",
            "underscore"            : "../js/vendor/underscore"
        },  
        shim: {
            underscore: {
                exports: '_'
            },
            backbone: {
                deps: ["underscore", "jquery"],
                exports: "Backbone"
            },
            pnotify: {
                deps: ["jquery"]
            }
        }
    });


    require ([
        'jquery',
        'underscore',
        'backbone',
    ], function($, _, Backbone){

        
    	alert("backbone wired up");
         
    });

})();