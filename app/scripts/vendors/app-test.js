var app = angular.module('app', ['lelylan-lab.directives.project', 'ngMockE2E']);

app.run(function($httpBackend, $timeout) {

  // fixtures setup
  jasmine.getFixtures().fixturesPath = 'spec/fixtures';

  // load the project json
  project = JSON.parse(readFixtures('project.json'));

  // let all requests to the templates pass
  $httpBackend.when('GET', /\/templates\//).passThrough();

  // mock the request to the project
  $httpBackend.whenGET('http://localhost:3010/projects/1').respond(project);
});
