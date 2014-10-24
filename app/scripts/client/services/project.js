'use strict';

var client = angular.module('lelylan-lab.client.project', []);

client.factory('Project', [
  '$http',
  'lelylanLabClientConfig',
  'LelylanLabClientUtils',

  function($http, config, Utils) {

  var service = {};
  var base = config.endpoint + '/projects';

  service.find = function(id, _options) {
    var options = {};
    return $http.get(base + '/' + id, Utils.merge(options, _options));
  }

  service.public = function(params, _options) {
    var options = { params: params };
    return $http.get(base + '/public', Utils.merge(options, _options));
  }

  return service;
}]);
