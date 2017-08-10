RouterConfig.$inject = ['$routeProvider'];

function RouterConfig($routeProvider)  {
    $routeProvider
        .when('/', {
           template: '<main-page></main-page>' 
        })
        .when('/plan', {
           template: '<planning-page></planning-page>'
        })
        .otherwise({
            redirectTo: '/'
        });
};

module.exports = RouterConfig;