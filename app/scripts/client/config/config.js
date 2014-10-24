'use strict';

angular.module('lelylan-lab.directives.project').provider('lelylanLabClientConfig', function() {
  var config;

  config = { endpoint: 'http://localhost:3010' };

  return {
    configure: function(params) {
      return angular.extend(config, params);
    },

    $get: function() {
      return config;
    }
  }
});
