var app = angular.module('hosted-app', ['ui.router']);

app.config(['$stateProvider', ($stateProvider) => {
    var mainState = {
        name: 'main',
        url: '/main',
        template: '<hosted-main-component></hosted-main-component>'
    }
    var lungsState = {
        name: 'lungs',
        url: '/lungs',
        template: '<lungs-checkup></lungs-checkup>'
    }
    var skinState = {
        name: 'skin',
        url: '/skin',
        template: '<skin-checkup></skin-checkup>'
    }
    var hartState = {
        name: 'hart',
        url: '/hart',
        template: '<hart-checkup></hart-checkup>'
    }
    $stateProvider
        .state(mainState)
        .state(lungsState)
        .state(hartState)
        .state(skinState);
}]);