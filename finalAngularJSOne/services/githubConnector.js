(function(){
    function githubConnector($http, $log)
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

        function getRepo(username, reponame) {
            const getRepoUrl = "https://api.github.com/repos/"+username+"/"+reponame;
            $log.info("getRepoUrl "+getRepoUrl);
            return $http.get(getRepoUrl)
                .then(function(httpResponse) {
                    return httpResponse.data;
                });
        }

        return {
            getUser: getUser,
            getReposForUser: getReposForUser,
            getRepo: getRepo
        }
    }

    const angularJSOne = angular.module("angularJSOne");
    angularJSOne.factory("githubConnector", githubConnector);

}());