(function(){
    function githubConnector($http)
    {
        function getUser(username) {
            return $http.get("https://api.github.com/users/"+username)
                .then(function(httpResponse) {
                    return httpResponse.data;
                });
        }

        function getReposForUser(user) {
            return $http.get(user.repos_url)
                .then(function(httpResponse) {
                    return httpResponse.data;
                });
        }

        return {
            getUser: getUser,
            getReposForUser: getReposForUser
        }
    }

    const appDirectives = angular.module("appDirectives");
    appDirectives.factory("githubConnector", githubConnector);

}());