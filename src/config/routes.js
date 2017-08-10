RouterConfig.$inject = ['$routeProvider'];

function RouterConfig($routeProvider)  {
    $routeProvider
        .when('/', {
           template: '<main-page></main-page>' 
        })
        .when('/test', {
           template: 'testing another page' 
        })
        .otherwise({
            redirectTo: '/'
        });
};

module.exports = RouterConfig;