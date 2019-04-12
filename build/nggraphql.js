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

    angular
        .module('ngGraphql')
        .factory('ngGraphqlService', ngGraphqlService);

        /* @ngInject */
        function ngGraphqlService($rootScope,ngGraphqlConfig){
            var graphQLConnetion = graphql(ngGraphqlConfig.url, {
                asJSON: ngGraphqlConfig.asJSON,
                headers: ngGraphqlConfig.headers
            });

            return {
                executeQuery: executeQuery
            }

            function executeQuery(query,params){
                var client = graphQLConnetion(query);
                $rootScope.$broadcast('ngGraphql:executing');
                return client(params)
                .then(function (response) {
                    $rootScope.$broadcast('ngGraphql:finished');
                    return response;
                  });
            }
        }

    // Common.js package manager support (e.g. ComponentJS, WebPack)
    if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports === exports) {
        module.exports = 'ngGraphql';
    }
})();
