RouterConfig.$inject = ['$routeProvider'];

function RouterConfig($routeProvider)  {
    $routeProvider
        .when('/', {
           template: '<main-page></main-page>' 
        })
        .when('/plan', {
           template: require('../planning.html')
        })
        .otherwise({
            redirectTo: '/'
        });
};

module.exports = RouterConfig;