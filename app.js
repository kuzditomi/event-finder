(function(){
    let app = angular.module('eventfinder', ['ui.router']);

    app.controller('eventSearch', [
        '$scope',
        function(scope){
            scope.hello = 'szia';
        }
    ]);

    app.config([
        '$stateProvider', '$urlRouterProvider',
        function(stateProvider, urlRouterProvider){
            urlRouterProvider.otherwise('/home');

            stateProvider            
            .state('home', {
                url: '/home',
                templateUrl: 'home.html'
            })
            .state('home.list', {
                url: '/list',
                templateUrl: 'event-list.html',
                controller: function($scope) {
                    $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
                }
            })
            .state('home.add', {
                url: '/add',
                templateUrl: 'add.html',
                controller: function($scope){
                    
                }
            });
        }
    ]);
})();