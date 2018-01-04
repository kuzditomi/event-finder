app.controller('eventAdd', [
    '$scope',
    function (scope) {
        var now = new Date();
        now.setSeconds(0);
        now.setMilliseconds(0);

        scope.event = {
            date: now,
            time: now
        };

        scope.onAdd = function () {
            console.log(scope.event)
        };
    }
]);