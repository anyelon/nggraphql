(function() {
    'use strict';
    angular
        .module('ngGraphqlConfig', [])
        .value('ngGraphqlConfig',{
            url:'',
            asJSON:true,
            headers:{}
        });

    angular
        .module('ngGraphql', ['ngGraphqlConfig']);

    // Common.js package manager support (e.g. ComponentJS, WebPack)
    if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports === exports) {
        module.exports = 'ngGraphql';
    }
})();
