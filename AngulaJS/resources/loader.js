angular
    .module('')

    .factory('loader', ['$ionicLoading', '$filter', '$log',
        function($ionicLoading, $filter, $log)
        {
            return {
                showLoading: function(text)
                {
                    $log.debug("showLoading");

                    var translate = $filter('translate');
                    text = text || translate('loading');
                    $ionicLoading.show({
                        template: text
                    });
                },

                hideLoading: function()
                {
                    $ionicLoading.hide();
                    $log.debug("hideLoading");
                }
            };
        }
    ])


    // l'interceptor intercetta le richieste prima e dopo essere processate
    // ciò è utile per l'autenticazione, la gestione errore globali ed ecc.
    .factory('loadingInterceptor', function($q, loadingProgress, $log)
    {
        function onRequest(request)
        {
            loadingProgress.queue(request);
            // Shows on console url request
            var url = request.url.substring(0, 4);
            if (url === 'http')
            {
                $log.debug('Pending request: ' + request.url);
            }

            return request;
        }

        function onResponse(response)
        {
            loadingProgress.dequeue(response.config);

            // Shows on console url request
            var url = response.config.url.substring(0, 4);
            if (url === 'http')
            {
                $log.debug('Completed request: ' + response.config.url);
            }

            return response;
        }

        function onError(response)
        {
            loadingProgress.dequeue(response.config);

            console.log('Failed request: ' + response.config.url);

            return $q.reject(response);
        }

        return {
            request: onRequest,
            response: onResponse,
            requestError: onError,
            responseError: onError
        };
    })


    .factory('loadingProgress', function($rootScope, $timeout)
    {
        return {
            init: function()
            {
                this.pendingRequests = [];
            },

            reset: function()
            {
                this.pendingRequests.length = 0;
                this.loaded = false;
            },

            queue: function(request)
            {
                // Add to queue if it is a GET request
                if (request.method === 'GET' || request.method === 'POST')
                {
                    this.pendingRequests.push(request.url);
                    this.loaded = false;
                }
            },

            dequeue: function(request)
            {
                var index = this.pendingRequests.indexOf(request.url);

                // Remove from queue
                if (index !== -1)
                {
                    this.pendingRequests.splice(index, 1);
                }

                // Wait for the next digest cycle
                $timeout(function()
                {
                    // If there are no pending requests, notify child scopes
                    if (this.pendingRequests.length === 0 && !this.loaded)
                    {
                        this.notify('pageReady');
                        this.loaded = true;
                    }
                }.bind(this));
            },

            notify: function()
            {
                $rootScope.$broadcast.apply($rootScope, arguments);
            }
        };
    });
