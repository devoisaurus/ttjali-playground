﻿var app = angular.module("JobLoveApp", ["ngRoute"]);

angular.module("JobLoveApp")
    .config([
        "$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
            $routeProvider
                .when("/add",
                    {
                        templateUrl: "app/partials/add.html",
                        controller: "addController"
                    })
                .when("/list",
                    {
                        templateUrl: "app/partials/list.html",
                        controller: "listController"
                    })
                .when("/detail",
                    {
                        templateUrl: "app/partials/details.html",
                        controller: "addController"
                    })
            .when("/login",
                    {
                        templateUrl: "app/partials/login.html",
                        controller: "loginController"
                    });
        }
    ]);
