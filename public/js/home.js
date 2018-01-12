app.controller('HomeController', [ '$http', '$route', '$scope', '$location', '$mdDialog', function($http, $route, $scope, $location, $mdDialog) {
  let CtrlUrl = $location.url();
  console.log('MainController:', CtrlUrl);
  this.test = "hello"

  $http({
      method: 'GET',
      url: 'http://localhost:3000/languages'
    }).then(response => {
      console.log('allLangs:',response.data);
      this.langs = response.data;
    }, error => {
      console.error(error.message);
  }).catch(err => console.error('Catch', err));

  this.select = (id) => {
    $scope.$parent.ctrl.lang = id
  }
}]);