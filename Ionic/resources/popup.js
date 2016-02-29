(function()
{
    'use strict';

    angular
        .module('calendario-corsi')
        .factory('popup', popup);

    popup.$inject = ['$ionicPopup'];

    /* @ngInject */
    function popup($ionicPopup)
    {
        return {
            loginError: loginError
        };


        //----------------------------------------------------------
        // PUBLIC METHODS
        //----------------------------------------------------------
        function loginError()
        {
            showAlert('loginError');
        }

        
        //----------------------------------------------------------
        // PRIVATE METHODS
        //----------------------------------------------------------
        function showAlert(name)
        {
            var path = 'popup.alert.' + name + '.';

            $ionicPopup.alert({
                title: translate(path + 'title'),
                template: translate(path + 'template')
            });
        }
    }

})();

