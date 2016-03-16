(function()
{
    'use strict';

    angular
        .module('')
        .factory('endpointService', endpointService);

    endpointService.$inject = [];

    /* @ngInject */
    function endpointService()
    {
        return {
            service: service
        };


        //----------------------------------------------------------
        // PUBLIC METHODS
        //----------------------------------------------------------
        function service()
        {
            var resource = '/service',
               param = {
                        foo: foo,
                        bar: bar
                    };

            return getEndpoint(resource, params);
        }


        //----------------------------------------------------------
        // PRIVATE METHODS
        //----------------------------------------------------------
        /**
         * Generate the endpoint. 
         *
         * @param resource
         * @param {object} [params = {}]
         * @returns {string}
         */
        function getEndpoint(resource,params)
        {
            var endpoints = '';
            params = params || {};

            // Add resource
            endpoints += resource;

            // Add parameters
            if (Object.keys(params).length)
            {
                endpoints += '?';
                
                Object.keys(params).forEach(function(key)
                {
                    var value = params[key];

                    if (value != null)
                    {
                        endpoints += key + '=' + value + '&';
                    }
                });
            }

            return endpoints;
        }
    }
})();

