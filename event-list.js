app.controller('eventSearch', [
    '$scope',
    function(scope){
        scope.events = [
            {
                id: 1,
                name: 'Manchester United - Chelsea FC',
                time: new Date(2018,1,8,20,30,0)
            },
            {
                id: 2,
                name: 'Ferencvárosi TC - Újpest FC',
                time: new Date(2018,2,1,15,0,0)
            }
        ];
    }
]);