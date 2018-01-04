app.controller('eventAdd', [
    '$scope', 'eventService',
    function (scope, eventService) {
        var now = new Date();
        now.setSeconds(0);
        now.setMilliseconds(0);

        scope.event = {
            time: now
        };

        scope.onAdd = function () {
            var event = {
                name: scope.event.name,
                time: scope.event.time
            }
            eventService.add(event);
        };
    }
]);