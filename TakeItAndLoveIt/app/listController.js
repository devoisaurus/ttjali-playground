﻿app.controller("listController",
    function listController($scope, $http) {

        $scope.list = [];

        $http.get("/api/companies")
            .then(function (res) {
                $scope.list = res.data;
            });

        $scope.whoDis = function(company) {
            console.log("click", company.companyId);
        }

    });