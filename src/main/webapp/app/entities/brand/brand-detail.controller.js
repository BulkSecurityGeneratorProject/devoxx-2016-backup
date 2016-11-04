(function() {
    'use strict';

    angular
        .module('storeApp')
        .controller('BrandDetailController', BrandDetailController);

    BrandDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Brand', 'Product'];

    function BrandDetailController($scope, $rootScope, $stateParams, previousState, entity, Brand, Product) {
        var vm = this;

        vm.brand = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('storeApp:brandUpdate', function(event, result) {
            vm.brand = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
