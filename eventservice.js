app.factory('eventService', [
    function(){
        var events = [
            {
                id: 1,
                name: 'Manchester United - Chelsea FC',
                time: new Date(2018,1,8,20,30,0)
            },
            {
                id: 2,
                name: 'Ferencvárosi TC - Újpest FC',
                time: new Date(2018,2,1,15,0,0)
            },
            {
                id: 3,
                name: 'Liverpool FC - Arsenal FC',
                time: new Date(2018,2,2,18,0,0)
            }
        ];

        var nextId = events.length+1;

        function getEvents(){
            return angular.copy(events);
        }

        function add(event) {
            event.id = nextId++;
            events.push(event);
        }

        return {
            getEvents: getEvents,
            add: add
        }
    }
])