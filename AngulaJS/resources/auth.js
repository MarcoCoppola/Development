(function()
{
    'use strict';

    angular
        .module('')
        .factory('auth', auth);

    auth.$inject = ['$log'];

    /* @ngInject */
    function auth($log)
    {
        return {
            login: login,
            logout: logout,
            user: user
        };


        //----------------------------------------------------------
        // PUBLIC METHODS
        //----------------------------------------------------------
        /**
         * Log a user into the application.
         *
         * @param {string} username
         * @param {string} password
         * @returns {HttpPromise}
         */
        function login(username, password)
        {

        }

        /**
         * Log the user out of the application.
         */
        function logout()
        {

        }

        /**
         * Get the currently authenticated user.
         */
        function user()
        {

        }

        //----------------------------------------------------------
        // PRIVATE METHODS
        //----------------------------------------------------------
    }

})();

