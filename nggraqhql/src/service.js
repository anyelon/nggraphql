(function () {
    'use strict';

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

})();

