(function() {
    'use strict';

    angular
        .module('storeApp')
        .controller('ArticleController', ArticleController);

    ArticleController.$inject = ['$scope', '$state', 'DataUtils', 'Article'];

    function ArticleController ($scope, $state, DataUtils, Article) {
        var vm = this;
        
        vm.articles = [];
        vm.openFile = DataUtils.openFile;
        vm.byteSize = DataUtils.byteSize;

        loadAll();

        function loadAll() {
            Article.query(function(result) {
                vm.articles = result;
            });
        }
    }
})();
