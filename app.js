app.config([
    '$stateProvider', '$urlRouterProvider',
    function(stateProvider, urlRouterProvider){
        urlRouterProvider.otherwise('/home/list');

        stateProvider            
        .state('home', {
            url: '/home',
            templateUrl: 'home.html'
        })
        .state('home.list', {
            url: '/list',
            templateUrl: 'event-list.html',
            controller: 'eventSearch'
        })
        .state('home.add', {
            url: '/add',
            templateUrl: 'add.html',
            controller: 'eventAdd'
        });
    }
]);
