/**
 * Created by mzimmerman on 7/20/15.
 */


/**
 * Table directive
 *
 * Dependencies: underscore.js
 *
 * Take scope data array in attribute "labappdata"
 *      Must be array of objects
 *
 * Click to select, and selected object is stored on the
 *      scope with name "[dataobject]-selected"
 *
 * Ex. <labapp-table labappdata="books" exclude="$$hashKey path"></div>
 */
(function(angular) {

    angular.module('Table', [])
        .directive('labappTable', function() {
            return {
                restrict: 'E',
                scope: {
                    dataArray: "=labappdata"
                },
                templateUrl: 'table.html',
                link: function(scope, ele, attr, ctrl) {
                    scope.props = [];
                    scope.excludes = attr.excludefields && attr.excludefields.split(' ');
                    scope.$watch('dataArray', function(newval,oldval,$scope) {
                        scope.props = newval && _.keys(scope.dataArray[0]);
                        scope.props = scope.props && _.difference(scope.props, scope.excludes);
                    })

                    scope.selected;
                    scope.select = function(obj) {
                        scope.selected = obj;
                    };
                }
            }
        })

})(angular || {});