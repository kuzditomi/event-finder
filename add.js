app.controller('eventAdd', [
    '$scope', 'eventService', '$state',
    function (scope, eventService, state) {
        var now = new Date();
        now.setSeconds(0);
        now.setMilliseconds(0);

        scope.event = {
            time: now
        };
        scope.eventtime = now;

        scope.onAdd = function () {
            var event = {
                name: scope.event.name,
                time: scope.event.time
            }

            eventService.add(event);

            state.go('home.list');
        };
    }
]);