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
      '<ul class="item-card">' +
        '<li class="item-card list-item">' +
        '<div class="item-cardFront">' +
          '<a href="{{project.link}}" target="_blank"><img class="user-avatar" src="{{project.image}}"/></a>' +
          '<h1 class="title"><a href="{{project.link}}" target="_blank">{{project.name}}</a></h1>' +
          '<p class="tags">' +
          '<a class="tag" ng-repeat="tag in project.tags" href="#projects/{{tag}}">{{tag}}</a>' +
          '</p>' +
          '<p class="description">{{project.description}}</p>' +
          '<p class="link" ><i class="fa fa-external-link"></i> <a href="{{project.link}}" target="_blank">Learn how to make it yourself</a></p>' +
      '</div>' +
      '</li>' +
      '</ul>',
    scope: { lyProjectId: '@' }
  };

  definition.link = function(scope, element, attrs) {

    console.log("ENTERING");

    // active view
    scope.view = { path: '/loading' }

    // watches the project ID to gets the project representation
    scope.$watch('lyProjectId', function(id) {
      console.log("PROJECT", id);

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

