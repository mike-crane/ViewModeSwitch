// <!-- <header app-view="view"></header>
// <section ng-include="view"></section> -->

$scope.changeView = function(person){
    var earl = '/editperson/' + person.id;
    $location.path(earl);
}
