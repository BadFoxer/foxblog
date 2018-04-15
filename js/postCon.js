var app = angular.module('Forum', []);
app.controller('forumCtrl', function($scope, $http) {
  $scope.names = ["Food", "Music", "Games"];
  
  $scope.showPosts=function(){
  $http.get("cont/get.php")
  .then(function(response) {
      $scope.res = response.data;

  });
}
   $scope.insertPosts=function(){
  $http.post("cont/post.php",{'id':$scope.id,'title':$scope.title,'post':$scope.post,'user':$scope.user,'tag':$scope.tags})
  .then(function(data) {

      $scope.showPosts();
      document.getElementById('myText').value = '';
      document.getElementById('inputText').value = '';
       document.getElementById('nameText').value = '';
        document.getElementById('tagis').value = '';
      alert("post success");


  });
}

   $scope.deletePosts=function(id){
  $http.post("cont/delete.php",{'id':id})
  .then(function(data) {
    $scope.showPosts();
      alert("delete success");

  });
}


 
});