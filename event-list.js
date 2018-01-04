app.controller('eventSearch', [
    '$scope', 'eventService',
    function(scope, eventService){
        scope.events = eventService.getEvents()
    }
]);