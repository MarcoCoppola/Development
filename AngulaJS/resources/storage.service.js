(function()
{
    'use strict';

    angular
        .module('calendario-corsi')
        .factory('storageService', storageService);

    storageService.$inject = ['$log', '$window'];

    /* @ngInject */
    function storageService($log, $window)
    {
        var isUndefined = angular.isUndefined,
            toJson = angular.toJson;

        return {
            set: set,
            //get: getFromLocalStorage,
            //keys: getKeysForLocalStorage,
            //remove: removeFromLocalStorage,
            //clearAll: clearAllFromLocalStorage,
        };


        //----------------------------------------------------------
        // PUBLIC METHODS
        //----------------------------------------------------------
        /**
         * Adds a value to local storage.
         *
         * @param key
         * @param value
         * @returns {boolean}
         */
        function set(key, value)
        {
            try
            {
                // Let's convert undefined values to null to get the value consistent
                if (isUndefined(value))
                {
                    value = null;
                }
                else
                {
                    value = toJson(value);
                }

                $window.localStorage.setItem(key, value);
            }
            catch (e)
            {
                $log.error('Can not save:', key, value, '\n', e);
                return false
            }

            return true;
        }

        //----------------------------------------------------------
        // PRIVATE METHODS
        //----------------------------------------------------------
    }

})();

