(function()
{
    'use strict';

    angular
        .module('')
        .factory('storageService', storageService);

    storageService.$inject = ['$log', '$window'];

    /* @ngInject */
    function storageService($log, $window)
    {
        var isUndefined = angular.isUndefined,
            toJson = angular.toJson;

        return {
            set: set,
            get: get,
            remove: remove,
            clearAll: clearAll
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


        /**
         * Retrives a value from local storage.
         *
         * @param key
         * @returns {null}
         */
        function get(key)
        {

            var item = $window.localStorage.getItem(key);

            if (!item || item === 'null')
            {
                return null;
            }

            try
            {
                return JSON.parse(item);
            } catch (e)
            {
                $log.warn('Can not get:', key, '\n', e);
                return null;
            }
        }


        /**
         * Removes an item from local storage.
         *
         * @param key
         * @returns {boolean}
         */
        function remove(key)
        {
            try
            {
                $window.localStorage.removeItem(key);
            }
            catch (e)
            {
                $log.error('Can not remove:', key, '\n', e);
                return false
            }

            return true;
        }


        /**
         * Removes all data from local storage.
         */
        function clearAll()
        {
            try
            {
                $window.localStorage.clear();
            }
            catch (e)
            {
                $log.error('Can not clear local storage:', '\n', e);
            }
        }

        //----------------------------------------------------------
        // PRIVATE METHODS
        //----------------------------------------------------------
    }

})();

