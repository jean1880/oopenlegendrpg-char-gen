(function () {
    'use strict';

    angular.module('olcg')
        .controller('olcgCharacterGeneratorController', olcgCharacterGeneratorController)

    function olcgCharacterGeneratorController($log, EXPREQ, ATTRIBUTES) {
        var vm = this;
        // Public functions //
        vm.setExpByLev = _setExpByLev;
        vm.setLevByExp = _setLevByExp;
        vm.buyAttribute = _calculateTotalAttributePoints;

        vm.attributes = angular.copy(ATTRIBUTES);

        vm.character = {
            name: '',
            level: 1,
            experience: 0,
            attributePoints: 40,
            attributes: {}
        }

        function _setExpByLev() {
            vm.character.experience = (vm.character.level - 1) * EXPREQ;
            _calculateTotalAttributePoints();
        }

        function _setLevByExp() {
            vm.character.level = Math.floor(vm.character.experience / EXPREQ) + 1;
            _calculateTotalAttributePoints();
        }

        function _setFeedback(attr) {
            var maximumValue = _maximumAttribute(vm.character.level);
            attr.warn = '';
            if (attr.value === maximumValue) {
                attr.warn = ' Max'
            }
        }

        function _maximumAttribute(level) {
            if (level <= 5) {
                return 5;
            }
            return level;
        }

        function _calculateTotalAttributePoints() {
            var totalPointsUsed = 0,
                maximumValue = _maximumAttribute(vm.character.level);
            vm.character.attributePoints = 40 + ((vm.character.level - 1) * 3);

            angular.forEach(vm.character.attributes, function (attr) {
                attr.value = attr.value > maximumValue ? maximumValue : attr.value;
                attr.pointValue = attr.value / 2 * (attr.value + 1);
                totalPointsUsed += attr.pointValue || 0;
                _setFeedback(attr);
            });

            vm.character.attributePoints -= totalPointsUsed;
        }
    }
})();
