'use strict';

var client = angular.module('lelylan-lab.client.utils', []);

client.factory('LelylanLabClientUtils', [function() {

  var service = {};

  service.headers = function() {
    return {}
  }

  service.merge = function(object1, object2) {
    for (var attrname in object2) { object1[attrname] = object2[attrname]; }
    return object1
  }

  return service;
}]);
