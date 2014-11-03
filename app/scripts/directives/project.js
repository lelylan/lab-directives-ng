'use strict';

angular.module('lelylan-lab.directives.project.directive', [])

angular.module('lelylan-lab.directives.project.directive').directive('lyProject', [
  '$rootScope',
  '$timeout',
  '$http',
  'Project',

  function(
    $rootScope,
    $timeout,
    $http,
    Project
  ) {

  var definition = {
    restrict: 'EA',
    replace: true,
    template: '' +
      '<div class="ly-project ly-project-item-card">' +
        '<div class="ly-project-item-card ly-project-list-item">' +
          '<a href="{{project.link}}" target="_blank"><img class="ly-project-user-avatar" src="{{project.image}}"/></a>' +
          '<h1 class="ly-project-title"><a href="{{project.link}}" target="_blank">{{project.name}}</a></h1>' +
          '<p class="ly-project-tags">' +
          '<a class="ly-project-tag" ng-repeat="tag in project.tags" href="http://localhost:9000#projects/{{tag}}" target="_blank">{{tag}}</a>' +
          '</p>' +
          '<p class="ly-project-description">{{project.description}}</p>' +
          '<p class="ly-project-link"><a href="{{project.link}}" target="_blank">Learn more about this project &rarr;</a></p>' +
          '<p class="ly-project-link ly-project-footer" ng-click="embed=true" ng-show="!embed"><a class="ly-project-embed"><span>&rarrlp;</span> embed</a> <a href="http://lelylan.com" target="_blank">With &hearts; lelylan.com</a></p>' +
          '<p class="ly-project-embed-input ly-project-link ly-project-footer" ng-show="embed"><input type="text" value="<div ng-app="project-app"><ly-project ly-project-id="5457a05d386166000e010000"></ly-project><link rel="stylesheet" href="http://lelylan.github.io/lab-directives-ng/styles/main.css"><script src="http://lelylan.github.io/lab-directives-ng/scripts/vendor.js"></script><script src="http://lelylan.github.io/lab-directives-ng/scripts/scripts.js"></script><script>angular.module(\'project-app\', [\'lelylan-lab.directives.project\']);</script></div>"></input></p>' +
        '</div>' +
      '</div>',
    scope: { lyProjectId: '@' }
  };

  definition.link = function(scope, element, attrs) {

    // active view
    scope.view = { path: '/loading' }

    // watches the project ID to gets the project representation
    scope.$watch('lyProjectId', function(id) {

      if (id) {
        Project.find(id).
          success(function(response) {
            scope.project = response;
            scope.view.path = '/default';
          }).
          error(function(data, status) {
            scope.view.path = '/message';
            scope.message = { title: 'Project not found', description: 'Most probably the project you are lloking at was deleted. Find more at lelylan.com' }
          });
      }
    });
  }

  return definition
}]);

