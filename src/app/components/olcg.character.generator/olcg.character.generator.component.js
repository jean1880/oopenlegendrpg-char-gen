(function () {
    'use strict';
    var olcgCharacterGenerator = {
        templateUrl: 'app/components/olcg.character.generator/olcg.character.generator.html',
        controller: 'olcgCharacterGeneratorController',
        controllerAs: 'charGen'
    }
    angular.module('olcg')
        .component('olcgCharacterGenerator', olcgCharacterGenerator)
})();
