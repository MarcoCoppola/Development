(function()
{
    'use strict';

    angular
        .module('atlante')
        .factory('httpInterceptor', httpInterceptor);

    httpInterceptor.$inject = ['$log', '$q'];

    /* @ngInject */
    function httpInterceptor($log, $q)
    {
        return {
            request: request,
            response: response,
            requestError: requestError,
            responseError: responseError
        };


        //----------------------------------------------------------
        // PUBLIC METHODS
        //----------------------------------------------------------
        function request(config)
        {
            // Set timeout
            config.timeout = 1000;

            return config;
        }

        function requestError(rejection)
        {

            return $q.reject(rejection);
        }

        function response(response)
        {
            return response;
        }


        function responseError(rejection)
        {
            return $q.reject(rejection);
        }

        //----------------------------------------------------------
        // PRIVATE METHODS
        //----------------------------------------------------------
    }

})();

